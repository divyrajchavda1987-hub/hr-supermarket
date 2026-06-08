import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Badge,
  Button,
  colors,
  PinGate,
  SearchInput,
  SectionTitle,
  StatCard,
  Surface,
  TextLogo,
  Toast,
} from "../shared/components";
import { CATEGORY_DEFINITIONS, PRELOADED_BANNERS, PRODUCT_CATALOG, STORE_INFO } from "../shared/data";
import {
  authApi,
  CLIENT_ADMIN_PIN,
  firestoreApi,
  isAdminEmail,
  ORDER_STATUS_OPTIONS,
  STORE_START_MONTH,
} from "../shared/firebase";
import { useBodyTheme, useLocalStorageState, useMediaQuery } from "../shared/hooks";
import { formatCurrency, formatDate, getMonthRows, storageKeys } from "../shared/utils";

function AdminApp() {
  useBodyTheme("linear-gradient(180deg, #eef5ef 0%, #e6efe7 100%)");
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState("");
  const [pinOk, setPinOk] = useLocalStorageState(storageKeys.pinAdmin, false);
  const [user, setUser] = useState(null);
  const [authForm, setAuthForm] = useState({ email: "", password: "" });
  const [products, setProducts] = useLocalStorageState(storageKeys.products, PRODUCT_CATALOG);
  const [banners, setBanners] = useLocalStorageState(storageKeys.banners, PRELOADED_BANNERS);
  const [orders, setOrders] = useState([]);
  const [fees, setFees] = useState([]);
  const [toast, setToast] = useState("");
  const [tab, setTab] = useState("Products");
  const [productForm, setProductForm] = useState({
    name: "",
    price: "",
    mrp: "",
    category: CATEGORY_DEFINITIONS[0].name,
    emoji: "🛒",
    badge: "Popular",
  });
  const [bannerForm, setBannerForm] = useState({
    title: "",
    subtitle: "",
    cta: "",
    emoji: "🛍️",
    image: "",
  });

  useEffect(() => authApi.onChange(setUser), []);
  useEffect(() => {
    const timer = window.setTimeout(() => setToast(""), 2200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    if (!pinOk) {
      return undefined;
    }
    const unsubProducts = firestoreApi.subscribeCollection("products", (items) => {
      if (items.length) {
        setProducts(items);
      }
    });
    const unsubBanners = firestoreApi.subscribeCollection("banners", (items) => {
      if (items.length) {
        setBanners(items);
      }
    });
    const unsubOrders = firestoreApi.subscribeOrders((items) => setOrders(items));
    const unsubFees = firestoreApi.subscribeCollection(
      "platform_fees",
      (items) => setFees(items),
      () => {}
    );
    return () => {
      unsubProducts?.();
      unsubBanners?.();
      unsubOrders?.();
      unsubFees?.();
    };
  }, [pinOk]);

  const adminAllowed = user && isAdminEmail(user.email);

  useEffect(() => {
    if (!adminAllowed) {
      return;
    }
    firestoreApi.seedPlatformFees(getMonthRows(STORE_START_MONTH.month, STORE_START_MONTH.year)).catch(() => {});
  }, [adminAllowed]);

  const monthRows = useMemo(() => {
    const generated = getMonthRows(STORE_START_MONTH.month, STORE_START_MONTH.year);
    return generated.map((row) => {
      const found = fees.find((fee) => fee.id === row.id);
      return {
        ...row,
        amount: found?.amount || 1500,
        status: found?.status || "Pending",
      };
    });
  }, [fees]);

  const analytics = useMemo(() => {
    const totalOrders = orders.length;
    const todayKey = new Date().toDateString();
    const revenue = orders
      .filter((order) => new Date(order.createdAt || Date.now()).toDateString() === todayKey)
      .reduce((sum, order) => sum + Number(order.total || 0), 0);
    const activeUsers = new Set(orders.map((order) => order.userEmail).filter(Boolean)).size;
    const productCount = products.length;
    const topSellingMap = {};
    orders.forEach((order) => {
      (order.items || []).forEach((item) => {
        topSellingMap[item.title] = (topSellingMap[item.title] || 0) + Number(item.quantity || 0);
      });
    });
    const topSelling = Object.entries(topSellingMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6);
    return { totalOrders, revenue, activeUsers, productCount, topSelling };
  }, [orders, products]);

  function unlock() {
    if (pin === CLIENT_ADMIN_PIN) {
      setPinOk(true);
      setPinError("");
      return;
    }
    setPinError("Wrong PIN");
  }

  async function signIn(event) {
    event.preventDefault();
    try {
      await authApi.signInWithEmail(authForm.email, authForm.password);
      setToast("Signed in");
    } catch (error) {
      setToast(error.message || "Sign in failed");
    }
  }

  if (!pinOk) {
    return (
      <PinGate
        title="HR Supermarket Admin"
        subtitle="Separate client admin panel"
        pin={pin}
        setPin={setPin}
        onSubmit={unlock}
        error={pinError}
      />
    );
  }

  if (!adminAllowed) {
    return (
      <div style={{ minHeight: "100vh", padding: 24 }}>
        <Surface style={{ width: "min(460px, 100%)", margin: "80px auto", padding: 28 }}>
          <TextLogo tagline="Your Local Cash & Carry" />
          <div style={{ fontSize: 28, fontWeight: 900, marginTop: 20 }}>Admin Sign In</div>
          <div style={{ color: colors.subtext, marginTop: 8 }}>
            Use your allowed admin email to manage products, banners, and analytics.
          </div>
          <form onSubmit={signIn} style={{ display: "grid", gap: 12, marginTop: 18 }}>
            <SearchInput value={authForm.email} onChange={(email) => setAuthForm({ ...authForm, email })} placeholder="Admin email" />
            <input
              type="password"
              value={authForm.password}
              onChange={(event) => setAuthForm({ ...authForm, password: event.target.value })}
              placeholder="Password"
              style={{ borderRadius: 16, border: `1px solid ${colors.line}`, padding: "14px 16px" }}
            />
            <Button type="submit">Sign In</Button>
          </form>
        </Surface>
        <Toast message={toast} />
      </div>
    );
  }

  async function addProduct(event) {
    event.preventDefault();
    try {
      const category = CATEGORY_DEFINITIONS.find((item) => item.name === productForm.category);
      await firestoreApi.addProduct({
        name: productForm.name,
        category: productForm.category,
        size: "Standard",
        price: Number(productForm.price),
        mrp: Number(productForm.mrp),
        rating: 4.4,
        reviews: 12,
        badge: productForm.badge,
        emoji: productForm.emoji,
        discount: Math.round(((Number(productForm.mrp) - Number(productForm.price)) / Number(productForm.mrp)) * 100),
        image: category?.image || PRODUCT_CATALOG[0].image,
        stock: "New listing",
        description: `${productForm.name} added from client admin panel.`,
      });
      setProductForm({
        name: "",
        price: "",
        mrp: "",
        category: CATEGORY_DEFINITIONS[0].name,
        emoji: "🛒",
        badge: "Popular",
      });
      setToast("Product added");
    } catch (error) {
      setToast(error.message || "Product not added");
    }
  }

  async function removeProduct(id) {
    await firestoreApi.removeProduct(id);
    setToast("Product removed");
  }

  async function addBanner(event) {
    event.preventDefault();
    try {
      await firestoreApi.addBanner({
        title: bannerForm.title,
        subtitle: bannerForm.subtitle,
        cta: bannerForm.cta,
        emoji: bannerForm.emoji,
        image: bannerForm.image || PRELOADED_BANNERS[0].image,
        gradient: "linear-gradient(135deg, #157347, #0f5132)",
      });
      setBannerForm({ title: "", subtitle: "", cta: "", emoji: "🛍️", image: "" });
      setToast("Banner added");
    } catch (error) {
      setToast(error.message || "Banner not added");
    }
  }

  async function removeBanner(id) {
    await firestoreApi.removeBanner(id);
    setToast("Banner removed");
  }

  function serviceFeeTab() {
    const outstanding = monthRows
      .filter((row) => row.status !== "Completed")
      .reduce((sum, row) => sum + Number(row.amount || 1500), 0);
    return (
      <div style={{ display: "grid", gap: 14 }}>
        <Surface style={{ padding: 22 }}>
          <div style={{ fontSize: 13, color: colors.subtext }}>Monthly retainer</div>
          <div style={{ fontSize: 34, fontWeight: 900, marginTop: 8 }}>₹1,500 due every month</div>
        </Surface>
        <Surface style={{ padding: 20 }}>
          <div style={{ display: "grid", gap: 12 }}>
            {monthRows.map((row) => (
              <div
                key={row.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1.2fr 0.8fr 0.7fr",
                  gap: 12,
                  alignItems: "center",
                  paddingBottom: 12,
                  borderBottom: `1px solid ${colors.line}`,
                }}
              >
                <strong>{row.label}</strong>
                <span>{formatCurrency(row.amount)}</span>
                <Badge tone={row.status === "Completed" ? "green" : "orange"}>{row.status}</Badge>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16, fontWeight: 800 }}>Total outstanding: {formatCurrency(outstanding)}</div>
          <div style={{ marginTop: 10, color: colors.subtext }}>
            For any queries contact your platform partner
          </div>
        </Surface>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", padding: isMobile ? 16 : 26 }}>
      <Surface style={{ padding: isMobile ? 18 : 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
          <TextLogo tagline={STORE_INFO.tagline} />
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Badge tone="green">{user.email}</Badge>
            <Button kind="ghost" onClick={() => authApi.signOut()}>
              Logout
            </Button>
          </div>
        </div>
      </Surface>

      <div style={{ width: "min(1320px, 100%)", margin: "24px auto 0" }}>
        <SectionTitle kicker="Admin" title="HR Supermarket control center" />
        <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 8, marginBottom: 18 }}>
          {["Products", "Banners", "Analytics", "Platform Service Fee"].map((item) => (
            <button
              key={item}
              onClick={() => setTab(item)}
              style={{
                borderRadius: 999,
                border: `1px solid ${tab === item ? colors.accent : colors.line}`,
                background: tab === item ? colors.accentSoft : "#fff",
                color: tab === item ? colors.accent : colors.text,
                padding: "12px 16px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              {item}
            </button>
          ))}
        </div>

        {tab === "Products" ? (
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "360px 1fr", gap: 18 }}>
            <Surface style={{ padding: 22 }}>
              <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 16 }}>Add product</div>
              <form onSubmit={addProduct} style={{ display: "grid", gap: 12 }}>
                {["name", "price", "mrp", "emoji", "badge"].map((field) => (
                  <input
                    key={field}
                    value={productForm[field]}
                    onChange={(event) => setProductForm({ ...productForm, [field]: event.target.value })}
                    placeholder={field.toUpperCase()}
                    style={{ borderRadius: 16, border: `1px solid ${colors.line}`, padding: "12px 14px" }}
                  />
                ))}
                <select
                  value={productForm.category}
                  onChange={(event) => setProductForm({ ...productForm, category: event.target.value })}
                  style={{ borderRadius: 16, border: `1px solid ${colors.line}`, padding: "12px 14px" }}
                >
                  {CATEGORY_DEFINITIONS.map((category) => (
                    <option key={category.id}>{category.name}</option>
                  ))}
                </select>
                <Button type="submit">Add Product</Button>
              </form>
            </Surface>
            <div style={{ display: "grid", gap: 12 }}>
              {products.map((product) => (
                <Surface key={product.id} style={{ padding: 16 }}>
                  <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "80px 1fr auto", gap: 14, alignItems: "center" }}>
                    <img src={product.image} alt={product.name} style={{ width: 80, height: 80, borderRadius: 18, objectFit: "cover" }} />
                    <div>
                      <div style={{ fontWeight: 800 }}>{product.emoji} {product.name}</div>
                      <div style={{ color: colors.subtext, fontSize: 13, marginTop: 6 }}>
                        {product.category} • {formatCurrency(product.price)} / {formatCurrency(product.mrp)}
                      </div>
                    </div>
                    <Button kind="danger" onClick={() => removeProduct(product.id)}>
                      Delete
                    </Button>
                  </div>
                </Surface>
              ))}
            </div>
          </div>
        ) : null}

        {tab === "Banners" ? (
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "360px 1fr", gap: 18 }}>
            <Surface style={{ padding: 22 }}>
              <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 16 }}>Add banner</div>
              <form onSubmit={addBanner} style={{ display: "grid", gap: 12 }}>
                {["title", "subtitle", "cta", "emoji", "image"].map((field) => (
                  <input
                    key={field}
                    value={bannerForm[field]}
                    onChange={(event) => setBannerForm({ ...bannerForm, [field]: event.target.value })}
                    placeholder={field === "image" ? "Image URL" : field.toUpperCase()}
                    style={{ borderRadius: 16, border: `1px solid ${colors.line}`, padding: "12px 14px" }}
                  />
                ))}
                <Button type="submit">Add Banner</Button>
              </form>
            </Surface>
            <div style={{ display: "grid", gap: 12 }}>
              {banners.map((banner) => (
                <Surface key={banner.id} style={{ padding: 16 }}>
                  <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "120px 1fr auto", gap: 14, alignItems: "center" }}>
                    <img src={banner.image} alt={banner.title} style={{ width: 120, height: 84, borderRadius: 18, objectFit: "cover" }} />
                    <div>
                      <div style={{ fontWeight: 800 }}>{banner.emoji || "🛍️"} {banner.title}</div>
                      <div style={{ color: colors.subtext, fontSize: 13, marginTop: 6 }}>{banner.subtitle}</div>
                    </div>
                    <Button kind="danger" onClick={() => removeBanner(banner.id)}>
                      Remove
                    </Button>
                  </div>
                </Surface>
              ))}
            </div>
          </div>
        ) : null}

        {tab === "Analytics" ? (
          <div style={{ display: "grid", gap: 18 }}>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)", gap: 14 }}>
              <StatCard label="Total Orders" value={analytics.totalOrders} />
              <StatCard label="Today's Revenue" value={formatCurrency(analytics.revenue)} />
              <StatCard label="Active Users" value={analytics.activeUsers} />
              <StatCard label="Products Listed" value={analytics.productCount} />
            </div>
            <Surface style={{ padding: 22 }}>
              <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 16 }}>Top selling products</div>
              <div style={{ display: "grid", gap: 12 }}>
                {analytics.topSelling.length ? analytics.topSelling.map(([name, quantity]) => (
                  <div
                    key={name}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingBottom: 12,
                      borderBottom: `1px solid ${colors.line}`,
                    }}
                  >
                    <strong>{name}</strong>
                    <Badge tone="green">{quantity} sold</Badge>
                  </div>
                )) : <div style={{ color: colors.subtext }}>Orders will populate analytics here.</div>}
              </div>
            </Surface>
          </div>
        ) : null}

        {tab === "Platform Service Fee" ? serviceFeeTab() : null}
      </div>
      <Toast message={toast} />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<AdminApp />);
