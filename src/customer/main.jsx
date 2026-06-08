import React, { Component, useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Avatar,
  Badge,
  BottomNav,
  Button,
  colors,
  Drawer,
  Modal,
  PriceBlock,
  SearchInput,
  SectionTitle,
  Surface,
  TextLogo,
  Toast,
} from "../shared/components";
import {
  CATEGORY_DEFINITIONS,
  DEFAULT_NOTIFICATION_SETTINGS,
  DEFAULT_PROFILE,
  DEFAULT_WALLET,
  DEMO_COUPONS,
  DEMO_ORDERS,
  PRELOADED_BANNERS,
  PRODUCT_CATALOG,
  STORE_INFO,
} from "../shared/data";
import { authApi, firestoreApi } from "../shared/firebase";
import { useAutoRotate, useBodyTheme, useLocalStorageState, useMediaQuery } from "../shared/hooks";
import {
  formatCurrency,
  formatDate,
  getDeliveryCharge,
  getDistanceKm,
  getStoreDistanceText,
  storageKeys,
  writeStorage,
} from "../shared/utils";

function CustomerApp() {
  useBodyTheme("linear-gradient(180deg, #f8faf7 0%, #f0f4ed 100%)");
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [user, setUser] = useState(null);
  const [authMode, setAuthMode] = useState("signin");
  const [authForm, setAuthForm] = useState({ name: "", email: "", password: "" });
  const [authOpen, setAuthOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartOpen, setCartOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [accountTab, setAccountTab] = useState("Profile");
  const [toast, setToast] = useState("");
  const [locationState, setLocationState] = useState({ loading: false, coords: null, error: "" });
  const [checkoutMode, setCheckoutMode] = useState("delivery");
  const [checkoutForm, setCheckoutForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: STORE_INFO.address,
    schedule: "asap",
    paymentMethod: "UPI",
    note: "",
  });
  const [bannerIndex, setBannerIndex] = useAutoRotate(PRELOADED_BANNERS.length || 1, 3500);
  const [profile, setProfile] = useLocalStorageState(storageKeys.profile, DEFAULT_PROFILE);
  const [wallet, setWallet] = useLocalStorageState(storageKeys.wallet, DEFAULT_WALLET);
  const [wishlist, setWishlist] = useLocalStorageState(storageKeys.wishlist, []);
  const [cart, setCart] = useLocalStorageState(storageKeys.cart, []);
  const [recentlyViewed, setRecentlyViewed] = useLocalStorageState(storageKeys.recentlyViewed, []);
  const [notificationSettings, setNotificationSettings] = useLocalStorageState(
    storageKeys.notifications,
    DEFAULT_NOTIFICATION_SETTINGS
  );
  const [products, setProducts] = useLocalStorageState(storageKeys.products, PRODUCT_CATALOG);
  const [banners, setBanners] = useLocalStorageState(storageKeys.banners, PRELOADED_BANNERS);
  const [cachedOrders, setCachedOrders] = useLocalStorageState(storageKeys.orders, DEMO_ORDERS);
  const [settings, setSettings] = useLocalStorageState(storageKeys.settings, {
    handlingFee: 20,
    phone: STORE_INFO.phone,
    whatsapp: STORE_INFO.whatsapp,
    firstOrderDistanceFree: true,
  });

  useEffect(() => {
    const timer = window.setTimeout(() => setToast(""), 2200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  useEffect(() => authApi.onChange((nextUser) => setUser(nextUser)), []);

  useEffect(() => {
    const unsubscribeProducts = firestoreApi.subscribeCollection(
      "products",
      (items) => {
        if (items.length) {
          setProducts(items);
          writeStorage(storageKeys.products, items);
        }
      },
      () => {}
    );
    const unsubscribeBanners = firestoreApi.subscribeCollection(
      "banners",
      (items) => {
        if (items.length) {
          setBanners(items);
          writeStorage(storageKeys.banners, items);
        }
      },
      () => {}
    );
    const unsubscribeSettings = firestoreApi.subscribeDocument(
      "settings",
      "storefront",
      (doc) => {
        if (doc) {
          const nextSettings = { ...settings, ...doc, handlingFee: 20 };
          setSettings(nextSettings);
        }
      },
      () => {}
    );
    return () => {
      unsubscribeProducts?.();
      unsubscribeBanners?.();
      unsubscribeSettings?.();
    };
  }, []);

  useEffect(() => {
    if (!user) {
      setCachedOrders(DEMO_ORDERS);
      return;
    }
    return firestoreApi.subscribeOrdersForUser(
      user.uid,
      (orders) => {
        const merged = orders.length ? orders : DEMO_ORDERS;
        setCachedOrders(merged);
      },
      () => {}
    );
  }, [user]);

  useEffect(() => {
    setCheckoutForm((current) => ({
      ...current,
      name: user?.displayName || profile.name,
      email: user?.email || profile.email,
      phone: profile.phone,
      address: profile.address,
    }));
  }, [user, profile]);

  useEffect(() => {
    if (!banners.length) {
      setBannerIndex(0);
    } else if (bannerIndex >= banners.length) {
      setBannerIndex(0);
    }
  }, [banners.length, bannerIndex, setBannerIndex]);

  const categoryChips = useMemo(
    () => ["All", ...CATEGORY_DEFINITIONS.map((category) => category.name)],
    []
  );

  const activeCategory = CATEGORY_DEFINITIONS.find((item) => item.name === selectedCategory);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const value = searchTerm.trim().toLowerCase();
      const matchesSearch =
        !value ||
        [product.name, product.category, product.badge, product.size]
          .filter(Boolean)
          .some((field) => String(field).toLowerCase().includes(value));
      return matchesCategory && matchesSearch;
    });
  }, [products, searchTerm, selectedCategory]);

  const bannerList = banners.length ? banners : PRELOADED_BANNERS;
  const currentBanner = bannerList[bannerIndex % bannerList.length];

  const cartItems = cart
    .map((entry) => {
      const product = products.find((item) => item.id === entry.productId);
      return product ? { ...product, quantity: entry.quantity } : null;
    })
    .filter(Boolean);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const hasRealOrders = cachedOrders.some((order) => !String(order.id).startsWith("DEMO"));
  const distanceKm = locationState.coords
    ? getDistanceKm(STORE_INFO.lat, STORE_INFO.lng, locationState.coords.lat, locationState.coords.lng)
    : NaN;
  const distanceCharge = checkoutMode === "pickup" ? 0 : getDeliveryCharge(distanceKm, hasRealOrders);
  const handlingFee = 20;
  const total = subtotal + handlingFee + distanceCharge;
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const wishlistProducts = products.filter((product) => wishlist.includes(product.id));
  const recentlyViewedProducts = recentlyViewed
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean)
    .slice(0, 8);

  const preorderItems = [
    { id: "pre-1", name: "Alphonso Mango Crate", eta: "Next Monday", price: 699 },
    { id: "pre-2", name: "Festival Dry Fruit Combo", eta: "3 June", price: 899 },
    { id: "pre-3", name: "Fresh Sweet Corn Basket", eta: "Tomorrow", price: 149 },
  ];

  const accountTabs = [
    "Profile",
    "Orders",
    "Reorder",
    "Preorder",
    "Wishlist",
    "Wallet",
    "Coupons",
    "Notifications",
    "Customer Support",
    "Settings",
  ];

  function notify(message) {
    setToast(message);
  }

  function toggleWishlist(productId) {
    setWishlist((current) =>
      current.includes(productId) ? current.filter((item) => item !== productId) : [...current, productId]
    );
  }

  function rememberViewed(productId) {
    setRecentlyViewed((current) => [productId, ...current.filter((item) => item !== productId)].slice(0, 8));
  }

  function updateCart(productId, delta) {
    setCart((current) => {
      const existing = current.find((item) => item.productId === productId);
      if (!existing && delta > 0) {
        return [...current, { productId, quantity: delta }];
      }
      return current
        .map((item) => (item.productId === productId ? { ...item, quantity: item.quantity + delta } : item))
        .filter((item) => item.quantity > 0);
    });
  }

  function openProduct(product) {
    rememberViewed(product.id);
    setSelectedProduct(product);
  }

  function fillSearchChip(value) {
    setSearchTerm(value);
  }

  async function handleAuthSubmit(event) {
    event.preventDefault();
    try {
      if (authMode === "signin") {
        await authApi.signInWithEmail(authForm.email, authForm.password);
        notify("Signed in");
      } else {
        await authApi.signUp(authForm.name, authForm.email, authForm.password);
        notify("Account created");
      }
      setAuthOpen(false);
    } catch (error) {
      notify(error.message || "Sign in failed");
    }
  }

  async function handleGoogleSignIn() {
    try {
      await authApi.signInWithGoogle();
      notify("Signed in with Google");
      setAuthOpen(false);
    } catch (error) {
      notify(error.message || "Google sign in failed");
    }
  }

  async function detectLocation() {
    if (!navigator.geolocation) {
      setLocationState({ loading: false, coords: null, error: "Location not supported on this device." });
      return;
    }
    setLocationState({ loading: true, coords: null, error: "" });
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocationState({
          loading: false,
          coords: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
          error: "",
        });
      },
      () => {
        setLocationState({
          loading: false,
          coords: null,
          error: "Location access is needed for distance-based delivery pricing.",
        });
      }
    );
  }

  async function placeOrder() {
    if (!user) {
      setAuthOpen(true);
      notify("Sign in before checkout");
      return;
    }
    if (!cartItems.length) {
      notify("Add items to cart first");
      return;
    }
    const orderItems = cartItems.map((item) => ({
      productId: item.id,
      title: item.name,
      image: item.image,
      quantity: item.quantity,
      price: item.price,
    }));
    const payload = {
      customerName: checkoutForm.name,
      userId: user.uid,
      userEmail: user.email,
      phone: checkoutForm.phone,
      address: checkoutMode === "pickup" ? STORE_INFO.address : checkoutForm.address,
      mode: checkoutMode,
      schedule: checkoutForm.schedule,
      paymentMethod: checkoutForm.paymentMethod,
      note: checkoutForm.note,
      items: orderItems,
      itemCount: cartCount,
      subtotal,
      handlingFee,
      distanceCharge,
      total,
      status: checkoutMode === "pickup" ? "Ready for pickup" : "Placed",
      platformCut: 15,
      actualHandling: 5,
      platformCutStatus: "pending",
      distanceKm: Number.isFinite(distanceKm) ? Number(distanceKm.toFixed(2)) : null,
    };
    try {
      await firestoreApi.placeOrder(payload);
      setCart([]);
      notify("Order placed successfully");
      setCartOpen(false);
      setAccountOpen(true);
      setAccountTab("Orders");
    } catch (error) {
      notify(error.message || "Order could not be placed");
    }
  }

  function reorderOrder(order) {
    const nextCart = order.items.map((item) => {
      const matched = products.find((product) => product.name === item.title);
      return matched ? { productId: matched.id, quantity: item.quantity } : null;
    }).filter(Boolean);
    setCart(nextCart);
    setCartOpen(true);
    notify("Items added back to cart");
  }

  function addWalletMoney() {
    setWallet((current) => ({
      balance: current.balance + 500,
      transactions: [
        { id: `txn-${Date.now()}`, label: "Wallet top-up", amount: 500, type: "credit" },
        ...current.transactions,
      ],
    }));
    notify("₹500 added to wallet");
  }

  function customerHeader() {
    return (
      <Surface
        style={{
          position: "sticky",
          top: 0,
          zIndex: 30,
          borderRadius: 0,
          borderLeft: 0,
          borderRight: 0,
          padding: isMobile ? "14px 16px" : "16px 28px",
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr auto auto" : "260px minmax(320px, 1fr) auto auto",
            gap: 12,
            alignItems: "center",
          }}
        >
          <TextLogo compact={isMobile} tagline={STORE_INFO.tagline} />
          <SearchInput
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search staples, snacks, dairy, fruits and more"
            style={{ width: "100%" }}
          />
          <Button kind="ghost" onClick={() => setAccountOpen(true)} style={{ minWidth: isMobile ? 48 : 110 }}>
            {isMobile ? "👤" : "Account"}
          </Button>
          <Button kind="primary" onClick={() => setCartOpen(true)} style={{ position: "relative", minWidth: isMobile ? 48 : 92 }}>
            {isMobile ? "🛒" : "Cart"}
            <span
              style={{
                position: "absolute",
                top: -6,
                right: -6,
                width: 24,
                height: 24,
                borderRadius: "50%",
                background: "#f44336",
                color: "#fff",
                display: "grid",
                placeItems: "center",
                fontSize: 12,
                fontWeight: 800,
              }}
            >
              {cartCount}
            </span>
          </Button>
        </div>
      </Surface>
    );
  }

  function heroCarousel() {
    return (
      <Surface style={{ padding: 0, overflow: "hidden", marginTop: 20 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1.2fr 1fr",
            minHeight: isMobile ? 360 : 420,
            background: currentBanner.gradient,
            color: "#fff",
          }}
        >
          <div style={{ padding: isMobile ? 24 : 38, display: "grid", alignContent: "center", gap: 12 }}>
            <Badge tone="dark" style={{ width: "fit-content", background: "rgba(255,255,255,0.14)" }}>
              Live banner
            </Badge>
            <div style={{ fontSize: isMobile ? 34 : 58, fontWeight: 900, lineHeight: 1.02 }}>{currentBanner.title}</div>
            <div style={{ fontSize: isMobile ? 15 : 19, maxWidth: 520, color: "rgba(255,255,255,0.9)" }}>
              {currentBanner.subtitle}
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Button kind="secondary" style={{ background: "#fff", color: colors.text }} onClick={() => document.getElementById("products-grid")?.scrollIntoView({ behavior: "smooth" })}>
                {currentBanner.cta}
              </Button>
              <Button kind="ghost" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)" }} onClick={() => setSelectedCategory("Fresh Fruits")}>
                Browse picks
              </Button>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${currentBanner.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: isMobile ? 200 : "100%",
            }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 8, padding: "14px 0 18px", background: "#fff" }}>
          {bannerList.map((banner, index) => (
            <button
              key={banner.id}
              onClick={() => setBannerIndex(index)}
              style={{
                width: index === bannerIndex ? 24 : 10,
                height: 10,
                borderRadius: 999,
                border: 0,
                cursor: "pointer",
                background: index === bannerIndex ? colors.accent : "#cfd9d2",
              }}
            />
          ))}
        </div>
      </Surface>
    );
  }

  function categorySection() {
    return (
      <Surface style={{ padding: 22, marginTop: 22 }}>
        <SectionTitle kicker="Categories" title="Everyday Indian grocery aisles" />
        <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 8 }}>
          {categoryChips.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                flex: "0 0 auto",
                border: `1px solid ${selectedCategory === category ? "#157347" : colors.line}`,
                background: selectedCategory === category ? colors.accentSoft : "#fff",
                color: selectedCategory === category ? colors.accent : colors.text,
                borderRadius: 999,
                padding: "12px 16px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              {category}
            </button>
          ))}
        </div>
        {activeCategory ? (
          <div style={{ marginTop: 18 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "220px 1fr",
                gap: 18,
                alignItems: "start",
              }}
            >
              <img
                src={activeCategory.image}
                alt={activeCategory.name}
                style={{ width: "100%", height: 140, objectFit: "cover", borderRadius: 22 }}
              />
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {activeCategory.items.map((item) => (
                  <button
                    key={item}
                    onClick={() => fillSearchChip(item)}
                    style={{
                      borderRadius: 999,
                      border: `1px solid ${colors.line}`,
                      padding: "10px 14px",
                      background: "#fff",
                      cursor: "pointer",
                      fontWeight: 600,
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </Surface>
    );
  }

  function productCard(product) {
    const inWishlist = wishlist.includes(product.id);
    return (
      <Surface
        key={product.id}
        style={{
          overflow: "hidden",
          transition: "transform 180ms ease, box-shadow 180ms ease",
          cursor: "pointer",
        }}
      >
        <div onClick={() => openProduct(product)} style={{ position: "relative" }}>
          <img src={product.image} alt={product.name} style={{ width: "100%", height: 180, objectFit: "cover" }} />
          <div
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              width: 44,
              height: 44,
              borderRadius: 14,
              background: "rgba(255,255,255,0.92)",
              display: "grid",
              placeItems: "center",
              fontSize: 24,
            }}
          >
            {product.emoji}
          </div>
          <button
            onClick={(event) => {
              event.stopPropagation();
              toggleWishlist(product.id);
            }}
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              width: 38,
              height: 38,
              borderRadius: "50%",
              border: 0,
              background: "#fff",
              cursor: "pointer",
              fontSize: 18,
            }}
          >
            {inWishlist ? "❤️" : "🤍"}
          </button>
        </div>
        <div style={{ padding: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: 17 }}>{product.name}</div>
              <div style={{ color: colors.subtext, fontSize: 13, marginTop: 4 }}>
                {product.size} • {product.category}
              </div>
            </div>
            <Badge tone="green">{product.badge}</Badge>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 12, fontSize: 13, color: colors.subtext }}>
            <span style={{ color: "#f2b94b" }}>★ {product.rating}</span>
            <span>({product.reviews} reviews)</span>
          </div>
          <div style={{ marginTop: 12 }}>
            <PriceBlock price={product.price} mrp={product.mrp} discount={product.discount} />
          </div>
          <div style={{ marginTop: 10, color: colors.subtext, fontSize: 13 }}>{product.stock}</div>
          <Button
            style={{ width: "100%", marginTop: 16 }}
            onClick={() => {
              updateCart(product.id, 1);
              notify(`${product.name} added to cart`);
            }}
          >
            Add to Cart
          </Button>
        </div>
      </Surface>
    );
  }

  function productGridSection() {
    return (
      <div id="products-grid" style={{ marginTop: 24 }}>
        <SectionTitle kicker="Products" title="Top grocery picks" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, minmax(0, 1fr))" : "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 18,
          }}
        >
          {filteredProducts.map(productCard)}
        </div>
      </div>
    );
  }

  function horizontalStrip(title, items, emptyText) {
    if (!items.length) {
      return null;
    }
    return (
      <Surface style={{ padding: 22, marginTop: 24 }}>
        <SectionTitle kicker={title} title={title} />
        <div style={{ display: "flex", gap: 16, overflowX: "auto", paddingBottom: 8 }}>
          {items.map((item) => (
            <div key={item.id} style={{ minWidth: 220 }}>
              <Surface style={{ padding: 14, height: "100%" }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "100%", height: 120, objectFit: "cover", borderRadius: 18 }}
                />
                <div style={{ fontWeight: 700, marginTop: 12 }}>{item.name}</div>
                <div style={{ color: colors.subtext, fontSize: 13, marginTop: 4 }}>{item.size}</div>
                <div style={{ marginTop: 8, fontWeight: 700 }}>{formatCurrency(item.price)}</div>
              </Surface>
            </div>
          ))}
        </div>
      </Surface>
    );
  }

  function cartDrawer() {
    return (
      <Drawer open={cartOpen} onClose={() => setCartOpen(false)} mobileFull={isMobile}>
        <div style={{ padding: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
            <div>
              <div style={{ fontSize: 12, color: colors.accent, textTransform: "uppercase", fontWeight: 800 }}>Cart</div>
              <div style={{ fontSize: 30, fontWeight: 800 }}>{cartCount} items</div>
            </div>
            <Button kind="ghost" onClick={() => setCartOpen(false)}>
              Close
            </Button>
          </div>
          <div style={{ display: "grid", gap: 14 }}>
            {cartItems.length ? (
              cartItems.map((item) => (
                <Surface key={item.id} style={{ padding: 14 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "72px 1fr", gap: 12 }}>
                    <img src={item.image} alt={item.name} style={{ width: 72, height: 72, borderRadius: 18, objectFit: "cover" }} />
                    <div>
                      <div style={{ fontWeight: 700 }}>{item.name}</div>
                      <div style={{ fontSize: 13, color: colors.subtext, marginTop: 4 }}>{item.size}</div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
                        <div style={{ fontWeight: 700 }}>{formatCurrency(item.price)}</div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <Button kind="ghost" onClick={() => updateCart(item.id, -1)} style={{ padding: "8px 12px" }}>
                            -
                          </Button>
                          <strong>{item.quantity}</strong>
                          <Button kind="ghost" onClick={() => updateCart(item.id, 1)} style={{ padding: "8px 12px" }}>
                            +
                          </Button>
                          <Button kind="danger" onClick={() => updateCart(item.id, -item.quantity)} style={{ padding: "8px 12px" }}>
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Surface>
              ))
            ) : (
              <Surface style={{ padding: 18, textAlign: "center" }}>Your cart is empty.</Surface>
            )}
          </div>
          <Surface style={{ padding: 18, marginTop: 18 }}>
            <div style={{ display: "grid", gap: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Items Total</span>
                <strong>{formatCurrency(subtotal)}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Handling & Delivery Fee</span>
                <strong>{formatCurrency(handlingFee)}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Distance Area Charge</span>
                <strong>{formatCurrency(distanceCharge)}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22 }}>
                <strong>Total</strong>
                <strong>{formatCurrency(total)}</strong>
              </div>
            </div>
            <Button style={{ width: "100%", marginTop: 16 }} onClick={() => setAccountOpen(true)}>
              Checkout
            </Button>
          </Surface>
        </div>
      </Drawer>
    );
  }

  function renderAccountContent() {
    switch (accountTab) {
      case "Profile":
        return (
          <div style={{ display: "grid", gap: 16 }}>
            <Surface style={{ padding: 18 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Avatar name={profile.name} />
                <div>
                  <div style={{ fontWeight: 800 }}>{profile.name}</div>
                  <div style={{ color: colors.subtext, fontSize: 14 }}>{profile.email}</div>
                </div>
              </div>
            </Surface>
            {["name", "email", "phone", "address"].map((field) => (
              <label key={field} style={{ display: "grid", gap: 8 }}>
                <span style={{ fontSize: 13, color: colors.subtext, textTransform: "capitalize" }}>{field}</span>
                <input
                  value={profile[field]}
                  onChange={(event) => setProfile({ ...profile, [field]: event.target.value })}
                  style={{ borderRadius: 16, border: `1px solid ${colors.line}`, padding: "12px 14px" }}
                />
              </label>
            ))}
          </div>
        );
      case "Orders":
        return (
          <div style={{ display: "grid", gap: 14 }}>
            {cachedOrders.map((order) => (
              <Surface key={order.id} style={{ padding: 18 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                  <div>
                    <div style={{ fontWeight: 800 }}>{order.id}</div>
                    <div style={{ color: colors.subtext, fontSize: 13 }}>{formatDate(order.createdAt)}</div>
                  </div>
                  <Badge tone="green">{order.status}</Badge>
                </div>
                <div style={{ marginTop: 12, display: "grid", gap: 6 }}>
                  {order.items.map((item) => (
                    <div key={`${order.id}-${item.title}`} style={{ display: "flex", justifyContent: "space-between", color: colors.subtext, fontSize: 13 }}>
                      <span>{item.title}</span>
                      <span>x{item.quantity}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 14, alignItems: "center" }}>
                  <strong>{formatCurrency(order.total)}</strong>
                  <Button kind="secondary" onClick={() => reorderOrder(order)}>
                    Reorder
                  </Button>
                </div>
              </Surface>
            ))}
          </div>
        );
      case "Reorder":
        return (
          <div style={{ display: "grid", gap: 14 }}>
            {recentlyViewedProducts.map((product) => (
              <Surface key={product.id} style={{ padding: 18 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
                  <div>
                    <div style={{ fontWeight: 700 }}>{product.name}</div>
                    <div style={{ color: colors.subtext, fontSize: 13 }}>{product.size}</div>
                  </div>
                  <Button onClick={() => updateCart(product.id, 1)}>Add again</Button>
                </div>
              </Surface>
            ))}
          </div>
        );
      case "Preorder":
        return (
          <div style={{ display: "grid", gap: 14 }}>
            {preorderItems.map((item) => (
              <Surface key={item.id} style={{ padding: 18 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                  <div>
                    <div style={{ fontWeight: 700 }}>{item.name}</div>
                    <div style={{ color: colors.subtext, fontSize: 13 }}>Expected: {item.eta}</div>
                  </div>
                  <div style={{ fontWeight: 800 }}>{formatCurrency(item.price)}</div>
                </div>
                <Button kind="secondary" style={{ marginTop: 14 }} onClick={() => notify(`${item.name} scheduled for preorder`)}>
                  Schedule preorder
                </Button>
              </Surface>
            ))}
          </div>
        );
      case "Wishlist":
        return wishlistProducts.length ? (
          <div style={{ display: "grid", gap: 14 }}>
            {wishlistProducts.map((item) => (
              <Surface key={item.id} style={{ padding: 18 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
                  <div>
                    <div style={{ fontWeight: 700 }}>{item.name}</div>
                    <div style={{ color: colors.subtext, fontSize: 13 }}>{formatCurrency(item.price)}</div>
                  </div>
                  <Button onClick={() => updateCart(item.id, 1)}>Add to cart</Button>
                </div>
              </Surface>
            ))}
          </div>
        ) : (
          <Surface style={{ padding: 18 }}>No wishlist items yet.</Surface>
        );
      case "Wallet":
        return (
          <div style={{ display: "grid", gap: 14 }}>
            <Surface style={{ padding: 18 }}>
              <div style={{ color: colors.subtext, fontSize: 13 }}>Wallet Balance</div>
              <div style={{ fontSize: 34, fontWeight: 900, marginTop: 8 }}>{formatCurrency(wallet.balance)}</div>
              <Button style={{ marginTop: 14 }} onClick={addWalletMoney}>
                Add Money
              </Button>
            </Surface>
            {wallet.transactions.map((transaction) => (
              <Surface key={transaction.id} style={{ padding: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>{transaction.label}</span>
                  <strong style={{ color: transaction.type === "credit" ? colors.accent : colors.text }}>
                    {transaction.type === "credit" ? "+" : "-"}
                    {formatCurrency(transaction.amount)}
                  </strong>
                </div>
              </Surface>
            ))}
          </div>
        );
      case "Coupons":
        return (
          <div style={{ display: "grid", gap: 14 }}>
            {DEMO_COUPONS.map((coupon) => (
              <Surface key={coupon.id} style={{ padding: 18 }}>
                <div style={{ fontWeight: 800 }}>{coupon.code}</div>
                <div style={{ color: colors.subtext, fontSize: 13, marginTop: 6 }}>{coupon.title}</div>
                <div style={{ marginTop: 10 }}>{coupon.discount}</div>
                <Button kind="secondary" style={{ marginTop: 14 }} onClick={() => notify(`${coupon.code} saved`)}>
                  Apply
                </Button>
              </Surface>
            ))}
          </div>
        );
      case "Notifications":
        return (
          <div style={{ display: "grid", gap: 14 }}>
            {Object.entries(notificationSettings).map(([key, value]) => (
              <Surface key={key} style={{ padding: 18 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span>{key.replace(/([A-Z])/g, " $1")}</span>
                  <button
                    onClick={() => setNotificationSettings({ ...notificationSettings, [key]: !value })}
                    style={{
                      width: 56,
                      height: 30,
                      borderRadius: 999,
                      border: 0,
                      background: value ? colors.accent : "#cfd9d2",
                      position: "relative",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        top: 4,
                        left: value ? 30 : 4,
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: "#fff",
                      }}
                    />
                  </button>
                </div>
              </Surface>
            ))}
          </div>
        );
      case "Customer Support":
        return (
          <div style={{ display: "grid", gap: 14 }}>
            <Button onClick={() => window.open(`tel:${STORE_INFO.phone}`, "_self")}>Call</Button>
            <Button kind="secondary" onClick={() => window.open(`https://wa.me/${STORE_INFO.whatsapp}`, "_blank")}>
              WhatsApp
            </Button>
            <Button kind="ghost" onClick={() => window.open(`mailto:${STORE_INFO.email}`, "_self")}>
              Email
            </Button>
          </div>
        );
      case "Settings":
        return (
          <div style={{ display: "grid", gap: 14 }}>
            <Surface style={{ padding: 18 }}>Language, delivery instructions, and payment preferences can be updated here.</Surface>
            <Button kind="danger" onClick={() => authApi.signOut()}>
              Logout
            </Button>
          </div>
        );
      default:
        return null;
    }
  }

  function accountDrawer() {
    return (
      <Drawer open={accountOpen} onClose={() => setAccountOpen(false)} width={520} mobileFull={isMobile}>
        <div style={{ padding: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 12, color: colors.accent, textTransform: "uppercase", fontWeight: 800 }}>Account</div>
              <div style={{ fontSize: 28, fontWeight: 800 }}>{user ? "Welcome back" : "Sign in & Checkout"}</div>
            </div>
            <Button kind="ghost" onClick={() => setAccountOpen(false)}>
              Close
            </Button>
          </div>

          <Surface style={{ padding: 18, marginTop: 18 }}>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12 }}>
              <div>
                <div style={{ fontSize: 13, color: colors.subtext }}>Delivery Distance</div>
                <div style={{ fontWeight: 700, marginTop: 6 }}>
                  {locationState.coords ? getStoreDistanceText(distanceKm) : "Detect location for delivery charge"}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 13, color: colors.subtext }}>Order Type</div>
                <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                  <Button kind={checkoutMode === "delivery" ? "primary" : "secondary"} onClick={() => setCheckoutMode("delivery")}>
                    Delivery
                  </Button>
                  <Button kind={checkoutMode === "pickup" ? "primary" : "secondary"} onClick={() => setCheckoutMode("pickup")}>
                    Pickup
                  </Button>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 14 }}>
              <Button kind="ghost" onClick={detectLocation}>
                {locationState.loading ? "Detecting..." : "Use my location"}
              </Button>
              {locationState.error ? <div style={{ color: colors.danger, fontSize: 13, marginTop: 8 }}>{locationState.error}</div> : null}
            </div>
          </Surface>

          <Surface style={{ padding: 18, marginTop: 18 }}>
            <div style={{ fontWeight: 800, marginBottom: 12 }}>Checkout</div>
            <div style={{ display: "grid", gap: 12 }}>
              {["name", "email", "phone", "address", "note"].map((field) => (
                <label key={field} style={{ display: "grid", gap: 6 }}>
                  <span style={{ fontSize: 12, color: colors.subtext, textTransform: "capitalize" }}>{field}</span>
                  {field === "address" || field === "note" ? (
                    <textarea
                      value={checkoutForm[field]}
                      onChange={(event) => setCheckoutForm({ ...checkoutForm, [field]: event.target.value })}
                      rows={field === "address" ? 3 : 2}
                      style={{ borderRadius: 16, border: `1px solid ${colors.line}`, padding: "12px 14px" }}
                    />
                  ) : (
                    <input
                      value={checkoutForm[field]}
                      onChange={(event) => setCheckoutForm({ ...checkoutForm, [field]: event.target.value })}
                      style={{ borderRadius: 16, border: `1px solid ${colors.line}`, padding: "12px 14px" }}
                    />
                  )}
                </label>
              ))}
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 12 }}>
                <label style={{ display: "grid", gap: 6 }}>
                  <span style={{ fontSize: 12, color: colors.subtext }}>Schedule</span>
                  <select
                    value={checkoutForm.schedule}
                    onChange={(event) => setCheckoutForm({ ...checkoutForm, schedule: event.target.value })}
                    style={{ borderRadius: 16, border: `1px solid ${colors.line}`, padding: "12px 14px" }}
                  >
                    <option value="asap">ASAP</option>
                    <option value="morning">Morning slot</option>
                    <option value="evening">Evening slot</option>
                    <option value="weekend">Weekend preorder</option>
                  </select>
                </label>
                <label style={{ display: "grid", gap: 6 }}>
                  <span style={{ fontSize: 12, color: colors.subtext }}>Payment Method</span>
                  <select
                    value={checkoutForm.paymentMethod}
                    onChange={(event) => setCheckoutForm({ ...checkoutForm, paymentMethod: event.target.value })}
                    style={{ borderRadius: 16, border: `1px solid ${colors.line}`, padding: "12px 14px" }}
                  >
                    <option>UPI</option>
                    <option>Cash on Delivery</option>
                    <option>Card on Delivery</option>
                    <option>Pay at Pickup</option>
                  </select>
                </label>
              </div>
            </div>

            <Surface style={{ padding: 16, marginTop: 16, background: "#f8faf7" }}>
              <div style={{ display: "grid", gap: 8 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Items Total</span>
                  <strong>{formatCurrency(subtotal)}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Handling & Delivery Fee</span>
                  <strong>{formatCurrency(handlingFee)}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>{hasRealOrders ? "Distance Area Charge" : "First order distance charge"}</span>
                  <strong>{formatCurrency(distanceCharge)}</strong>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22 }}>
                  <strong>Total payable</strong>
                  <strong>{formatCurrency(total)}</strong>
                </div>
              </div>
            </Surface>

            <Button style={{ width: "100%", marginTop: 16 }} onClick={placeOrder}>
              Place Order
            </Button>
          </Surface>

          <div style={{ display: "flex", gap: 10, overflowX: "auto", marginTop: 18, paddingBottom: 8 }}>
            {accountTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setAccountTab(tab)}
                style={{
                  flex: "0 0 auto",
                  borderRadius: 999,
                  border: `1px solid ${accountTab === tab ? colors.accent : colors.line}`,
                  background: accountTab === tab ? colors.accentSoft : "#fff",
                  color: accountTab === tab ? colors.accent : colors.text,
                  padding: "10px 14px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div style={{ marginTop: 18 }}>{renderAccountContent()}</div>
        </div>
      </Drawer>
    );
  }

  function footer() {
    return (
      <Surface style={{ padding: 24, marginTop: 30, marginBottom: isMobile ? 84 : 24 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1.1fr 1fr 1fr",
            gap: 24,
          }}
        >
          <div>
            <div style={{ fontWeight: 800, fontSize: 18 }}>About</div>
            <div style={{ color: colors.subtext, marginTop: 10, lineHeight: 1.7 }}>
              HR Supermarket is a neighborhood Indian cash & carry store for families, quick replenishment, offers, and everyday essentials.
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 18 }}>Quick Links</div>
            <div style={{ display: "grid", gap: 8, marginTop: 10 }}>
              <button style={footerLinkStyle} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</button>
              <button style={footerLinkStyle} onClick={() => document.getElementById("products-grid")?.scrollIntoView({ behavior: "smooth" })}>Products</button>
              <button style={footerLinkStyle} onClick={() => setAccountOpen(true)}>My Account</button>
              <a href="/partner-admin/" style={{ ...footerLinkStyle, textDecoration: "none" }}>Admin Login</a>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 18 }}>Contact</div>
            <div style={{ color: colors.subtext, marginTop: 10, lineHeight: 1.8 }}>
              <div>{STORE_INFO.address}</div>
              <div>{STORE_INFO.phone}</div>
              <div>{STORE_INFO.email}</div>
            </div>
          </div>
        </div>
      </Surface>
    );
  }

  return (
    <div style={{ minHeight: "100vh", color: colors.text }}>
      {customerHeader()}
      <div style={{ width: "min(1320px, calc(100% - 24px))", margin: "0 auto", paddingBottom: 24 }}>
        {heroCarousel()}
        {categorySection()}
        {horizontalStrip("Recently Viewed", recentlyViewedProducts)}
        {horizontalStrip("Wishlist", wishlistProducts)}
        {productGridSection()}
        {footer()}
      </div>

      <Modal open={authOpen} onClose={() => setAuthOpen(false)}>
        <div style={{ padding: 28 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 12, color: colors.accent, textTransform: "uppercase", fontWeight: 800 }}>Account</div>
              <div style={{ fontSize: 28, fontWeight: 800 }}>{authMode === "signin" ? "Sign In" : "Create Account"}</div>
            </div>
            <Button kind="ghost" onClick={() => setAuthOpen(false)}>Close</Button>
          </div>
          <div style={{ display: "grid", gap: 12, marginTop: 18 }}>
            <Button kind="secondary" onClick={handleGoogleSignIn}>Continue with Google</Button>
            <div style={{ display: "flex", gap: 8 }}>
              <Button kind={authMode === "signin" ? "primary" : "secondary"} onClick={() => setAuthMode("signin")}>Sign In</Button>
              <Button kind={authMode === "signup" ? "primary" : "secondary"} onClick={() => setAuthMode("signup")}>Sign Up</Button>
            </div>
            <form onSubmit={handleAuthSubmit} style={{ display: "grid", gap: 12 }}>
              {authMode === "signup" ? (
                <input
                  placeholder="Full name"
                  value={authForm.name}
                  onChange={(event) => setAuthForm({ ...authForm, name: event.target.value })}
                  style={fieldStyle}
                />
              ) : null}
              <input
                placeholder="Email"
                type="email"
                value={authForm.email}
                onChange={(event) => setAuthForm({ ...authForm, email: event.target.value })}
                style={fieldStyle}
              />
              <input
                placeholder="Password"
                type="password"
                value={authForm.password}
                onChange={(event) => setAuthForm({ ...authForm, password: event.target.value })}
                style={fieldStyle}
              />
              <Button type="submit">{authMode === "signin" ? "Sign In" : "Create Account"}</Button>
            </form>
          </div>
        </div>
      </Modal>

      <Modal open={Boolean(selectedProduct)} onClose={() => setSelectedProduct(null)}>
        {selectedProduct ? (
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr" }}>
            <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: 260 }} />
            <div style={{ padding: 28 }}>
              <Badge tone="green">{selectedProduct.badge}</Badge>
              <div style={{ fontSize: 34, fontWeight: 900, marginTop: 12 }}>{selectedProduct.name}</div>
              <div style={{ color: colors.subtext, marginTop: 8 }}>
                {selectedProduct.category} • {selectedProduct.size}
              </div>
              <div style={{ marginTop: 16 }}>
                <PriceBlock price={selectedProduct.price} mrp={selectedProduct.mrp} discount={selectedProduct.discount} />
              </div>
              <div style={{ marginTop: 16, color: colors.subtext, lineHeight: 1.7 }}>{selectedProduct.description}</div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 20 }}>
                <Badge tone="orange">⭐ {selectedProduct.rating} rating</Badge>
                <Badge>{selectedProduct.reviews} reviews</Badge>
                <Badge>{selectedProduct.stock}</Badge>
              </div>
              <div style={{ display: "flex", gap: 12, marginTop: 22, flexWrap: "wrap" }}>
                <Button onClick={() => {
                  updateCart(selectedProduct.id, 1);
                  notify(`${selectedProduct.name} added to cart`);
                }}>
                  Add to Cart
                </Button>
                <Button kind="secondary" onClick={() => toggleWishlist(selectedProduct.id)}>
                  {wishlist.includes(selectedProduct.id) ? "Remove Wishlist" : "Save Wishlist"}
                </Button>
              </div>
            </div>
          </div>
        ) : null}
      </Modal>

      {cartDrawer()}
      {accountDrawer()}
      <Toast message={toast} />

      {isMobile ? (
        <BottomNav
          active="home"
          onChange={(key) => {
            if (key === "home") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
            if (key === "categories") {
              document.getElementById("products-grid")?.scrollIntoView({ behavior: "smooth" });
            }
            if (key === "cart") {
              setCartOpen(true);
            }
            if (key === "wishlist") {
              setAccountOpen(true);
              setAccountTab("Wishlist");
            }
            if (key === "account") {
              setAccountOpen(true);
            }
          }}
          items={[
            { key: "home", label: "Home", icon: "🏠" },
            { key: "categories", label: "Categories", icon: "🧺" },
            { key: "cart", label: "Cart", icon: "🛒" },
            { key: "wishlist", label: "Wishlist", icon: "❤️" },
            { key: "account", label: "Account", icon: "👤" },
          ]}
        />
      ) : null}
    </div>
  );
}

const footerLinkStyle = {
  border: 0,
  background: "transparent",
  padding: 0,
  textAlign: "left",
  color: colors.subtext,
  cursor: "pointer",
  fontSize: 14,
};

const fieldStyle = {
  borderRadius: 16,
  border: `1px solid ${colors.line}`,
  padding: "12px 14px",
};

class AppErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, message: error?.message || "Something went wrong while loading the site." };
  }

  componentDidCatch(error) {
    console.error("Customer app crashed:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
            padding: 24,
            background: "linear-gradient(180deg, #f8faf7 0%, #f0f4ed 100%)",
            color: "#10231a",
            fontFamily: "'Segoe UI', system-ui, sans-serif",
          }}
        >
          <div
            style={{
              width: "min(720px, 100%)",
              background: "#fff",
              border: "1px solid #dbe5dd",
              borderRadius: 28,
              padding: 28,
              boxShadow: "0 18px 40px rgba(16, 35, 26, 0.08)",
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 800, color: "#157347", textTransform: "uppercase" }}>
              HR Supermarket
            </div>
            <h1 style={{ margin: "10px 0 0", fontSize: 30 }}>The page hit a loading issue.</h1>
            <p style={{ color: "#5f6f65", lineHeight: 1.7, marginTop: 12 }}>
              The website is reachable, but the browser caught a problem while loading the React app.
              Please hard refresh once. If this message stays, send me the error text below.
            </p>
            <pre
              style={{
                marginTop: 18,
                padding: 16,
                background: "#f8faf7",
                borderRadius: 18,
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                color: "#10231a",
              }}
            >
              {this.state.message}
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const root = document.getElementById("root");
if (root) {
  window.addEventListener("error", (event) => {
    if (!root.dataset.hrRecovered) {
      root.innerHTML = `
        <div style="min-height:100vh;display:grid;place-items:center;padding:24px;background:linear-gradient(180deg, #f8faf7 0%, #f0f4ed 100%);color:#10231a;font-family:'Segoe UI', system-ui, sans-serif;">
          <div style="width:min(720px, 100%);background:#fff;border:1px solid #dbe5dd;border-radius:28px;padding:28px;box-shadow:0 18px 40px rgba(16, 35, 26, 0.08);">
            <div style="font-size:12px;font-weight:800;color:#157347;text-transform:uppercase;">HR Supermarket</div>
            <h1 style="margin:10px 0 0;font-size:30px;">The page hit a loading issue.</h1>
            <p style="color:#5f6f65;line-height:1.7;margin-top:12px;">The browser caught an unexpected error while loading the site.</p>
            <pre style="margin-top:18px;padding:16px;background:#f8faf7;border-radius:18px;white-space:pre-wrap;word-break:break-word;color:#10231a;">${event.error?.message || event.message || "Unknown error"}</pre>
          </div>
        </div>
      `;
    }
  });
  window.addEventListener("unhandledrejection", (event) => {
    if (!root.dataset.hrRecovered) {
      root.innerHTML = `
        <div style="min-height:100vh;display:grid;place-items:center;padding:24px;background:linear-gradient(180deg, #f8faf7 0%, #f0f4ed 100%);color:#10231a;font-family:'Segoe UI', system-ui, sans-serif;">
          <div style="width:min(720px, 100%);background:#fff;border:1px solid #dbe5dd;border-radius:28px;padding:28px;box-shadow:0 18px 40px rgba(16, 35, 26, 0.08);">
            <div style="font-size:12px;font-weight:800;color:#157347;text-transform:uppercase;">HR Supermarket</div>
            <h1 style="margin:10px 0 0;font-size:30px;">The page hit a loading issue.</h1>
            <p style="color:#5f6f65;line-height:1.7;margin-top:12px;">A promise failed while the site was starting.</p>
            <pre style="margin-top:18px;padding:16px;background:#f8faf7;border-radius:18px;white-space:pre-wrap;word-break:break-word;color:#10231a;">${event.reason?.message || String(event.reason || "Unknown error")}</pre>
          </div>
        </div>
      `;
    }
  });
  createRoot(root).render(
    <AppErrorBoundary>
      <CustomerApp />
    </AppErrorBoundary>
  );
  root.dataset.hrRecovered = "1";
}
