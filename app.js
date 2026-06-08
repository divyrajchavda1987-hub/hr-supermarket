const STORAGE_KEYS = {
  cart: "hr-cart",
  wishlist: "hr-wishlist",
  recentlyViewed: "hr-recently-viewed",
  profile: "hr-profile",
  orders: "hr-orders",
  products: "hr-products",
  banners: "hr-banners",
  notifications: "hr-notifications",
  wallet: "hr-wallet",
  adminProducts: "hr-admin-products",
  adminBanners: "hr-admin-banners",
  platformFees: "hr-platform-fees",
  dashboardOrders: "hr-dashboard-orders",
};

const STORE = {
  name: "HR Supermarket",
  tagline: "Your Local Cash & Carry",
  city: "Surendranagar, Gujarat",
  phone: "09054127011",
  whatsapp: "919054127011",
  address: "Shop No 1, By Pass Road, near Ganpati Fatsar, Arjun Society, Surendranagar, Gujarat 363030",
  email: "support@hrsupermarket.in",
};

const CATEGORIES = [
  { name: "All", emoji: "🏪", items: [] },
  { name: "Grains & Flours", emoji: "🌾", items: ["Aashirvaad Atta", "Fortune Basmati Rice", "Maida", "Besan", "Sooji", "Poha", "Jowar Flour", "Brown Rice", "Multigrain Flour", "Rava"] },
  { name: "Pulses & Lentils", emoji: "🫘", items: ["Toor Dal", "Moong Dal", "Masoor Dal", "Urad Dal", "Chana Dal", "Rajma", "Kabuli Chana", "Kala Chana", "Moth Beans", "Green Gram"] },
  { name: "Spices & Masalas", emoji: "🌶️", items: ["Turmeric Powder", "Red Chilli Powder", "Coriander Powder", "Cumin Seeds", "Garam Masala", "Kitchen King", "Pav Bhaji Masala", "Sambar Powder", "Mustard Seeds", "Black Pepper"] },
  { name: "Oils & Ghee", emoji: "🫒", items: ["Sunflower Oil", "Groundnut Oil", "Mustard Oil", "Olive Oil", "Cow Ghee", "Buffalo Ghee", "Rice Bran Oil", "Soyabean Oil", "Sesame Oil", "Vanaspati"] },
  { name: "Dairy & Eggs", emoji: "🥛", items: ["Amul Milk", "Curd", "Paneer", "Butter", "Cheese", "Eggs", "Buttermilk", "Cream", "Yogurt", "Flavoured Milk"] },
  { name: "Snacks & Namkeen", emoji: "🍘", items: ["Lay's", "Haldiram Bhujia", "Kurkure", "Parle-G", "Khakhra", "Sev", "Chivda", "Mathri", "Peanuts", "Bhel Mix"] },
  { name: "Beverages", emoji: "🥤", items: ["Coca-Cola", "Sprite", "Mango Juice", "Orange Juice", "Mineral Water", "Cold Coffee", "Energy Drink", "Lemon Soda", "Tender Coconut Water", "Sweet Lassi"] },
  { name: "Tea & Coffee", emoji: "☕", items: ["Tata Tea Gold", "Red Label", "Society Tea", "Green Tea", "Instant Coffee", "Filter Coffee", "Masala Tea", "Elaichi Tea", "Coffee Sachets", "Sweetener"] },
  { name: "Fresh Fruits", emoji: "🍎", items: ["Apples", "Bananas", "Oranges", "Pomegranates", "Papaya", "Mangoes", "Grapes", "Watermelon", "Guava", "Pineapple"] },
  { name: "Fresh Vegetables", emoji: "🥬", items: ["Potato", "Onion", "Tomato", "Cauliflower", "Cabbage", "Green Chilli", "Coriander", "Brinjal", "Okra", "Bottle Gourd"] },
  { name: "Packaged Foods", emoji: "🍜", items: ["Maggi", "Pasta", "Macaroni", "Ready Poha Mix", "Soup Packets", "Cornflakes", "Oats", "Peanut Butter", "Jam", "Upma Mix"] },
  { name: "Cleaning & Home", emoji: "🧼", items: ["Surf Excel", "Ariel", "Dishwash Liquid", "Floor Cleaner", "Toilet Cleaner", "Garbage Bags", "Scrub Pads", "Mop Refill", "Glass Cleaner", "Room Freshener"] },
  { name: "Personal Care", emoji: "🪥", items: ["Bath Soap", "Shampoo", "Hair Oil", "Face Wash", "Toothpaste", "Toothbrush", "Body Lotion", "Talcum Powder", "Hand Wash", "Shaving Cream"] },
  { name: "Sweets & Dry Fruits", emoji: "🥜", items: ["Kaju", "Badam", "Pista", "Raisins", "Dates", "Soan Papdi", "Besan Ladoo", "Kaju Katli", "Dry Fruit Mix", "Anjeer"] },
];

const DEFAULT_BANNERS = [
  { id: "banner-1", title: "Weekend Grocery Rush", subtitle: "Fresh staples, namkeen, and dairy picks packed for the family.", cta: "Shop now", gradient: "linear-gradient(135deg, #1e9b6d, #104f4f)", emoji: "🛒" },
  { id: "banner-2", title: "Tea Time Specials", subtitle: "Biscuits, tea, coffee, and evening snack combos with local savings.", cta: "View offers", gradient: "linear-gradient(135deg, #e8843f, #b64c36)", emoji: "☕" },
  { id: "banner-3", title: "Fresh Fruits & Veggies", subtitle: "Everyday freshness for Surendranagar households with quick pickup.", cta: "Order produce", gradient: "linear-gradient(135deg, #74a84a, #285943)", emoji: "🥬" },
  { id: "banner-4", title: "Dry Fruit Gifting Picks", subtitle: "Premium sweets, dry fruits, and festive family favorites in one cart.", cta: "See gifting range", gradient: "linear-gradient(135deg, #5e3f99, #aa5b86)", emoji: "🎁" },
];

const DEFAULT_PRODUCTS = [
  ["Aashirvaad Atta", "Grains & Flours", "5kg", 285, 320, 4.7, 148, "Bestseller", "🌾"],
  ["Fortune Basmati Rice", "Grains & Flours", "5kg", 449, 520, 4.6, 97, "Popular", "🍚"],
  ["Toor Dal", "Pulses & Lentils", "1kg", 158, 185, 4.5, 88, "Daily Saver", "🫘"],
  ["Kabuli Chana", "Pulses & Lentils", "1kg", 132, 155, 4.4, 64, "Popular", "🫘"],
  ["Turmeric Powder", "Spices & Masalas", "500g", 112, 135, 4.8, 120, "Kitchen Pick", "🌶️"],
  ["Garam Masala", "Spices & Masalas", "200g", 86, 110, 4.6, 53, "Bestseller", "🫙"],
  ["Fortune Sunflower Oil", "Oils & Ghee", "1L", 168, 189, 4.5, 140, "Popular", "🫒"],
  ["Cow Ghee", "Oils & Ghee", "1L", 615, 690, 4.7, 76, "Premium", "🧈"],
  ["Amul Gold Milk", "Dairy & Eggs", "1L", 68, 72, 4.8, 202, "Fresh", "🥛"],
  ["Farm Eggs", "Dairy & Eggs", "12 pcs", 84, 96, 4.4, 91, "Daily Fresh", "🥚"],
  ["Haldiram Bhujia", "Snacks & Namkeen", "400g", 94, 115, 4.7, 112, "Bestseller", "🍘"],
  ["Lay's Magic Masala", "Snacks & Namkeen", "Large Pack", 45, 50, 4.3, 131, "Popular", "🍟"],
  ["Coca-Cola", "Beverages", "2L", 95, 110, 4.5, 88, "Party Pack", "🥤"],
  ["Mango Juice", "Beverages", "1L", 110, 125, 4.4, 67, "Summer Pick", "🧃"],
  ["Tata Tea Gold", "Tea & Coffee", "1kg", 565, 630, 4.8, 119, "Popular", "☕"],
  ["Instant Coffee", "Tea & Coffee", "100g", 155, 180, 4.5, 58, "Hot Pick", "☕"],
  ["Apples", "Fresh Fruits", "1kg", 145, 170, 4.3, 39, "Fresh", "🍎"],
  ["Bananas", "Fresh Fruits", "12 pcs", 60, 70, 4.6, 63, "Fresh", "🍌"],
  ["Potato", "Fresh Vegetables", "1kg", 30, 36, 4.4, 77, "Fresh", "🥔"],
  ["Tomato", "Fresh Vegetables", "1kg", 32, 40, 4.2, 52, "Daily Fresh", "🍅"],
  ["Maggi Noodles", "Packaged Foods", "4 pack", 56, 68, 4.7, 156, "Bestseller", "🍜"],
  ["Cornflakes", "Packaged Foods", "750g", 185, 215, 4.3, 42, "Breakfast Pick", "🥣"],
  ["Surf Excel", "Cleaning & Home", "1kg", 225, 260, 4.6, 71, "Popular", "🧼"],
  ["Floor Cleaner", "Cleaning & Home", "2L", 188, 220, 4.4, 36, "Home Care", "🧽"],
  ["Bath Soap Value Pack", "Personal Care", "5 pcs", 120, 145, 4.5, 55, "Value Pack", "🧴"],
  ["Toothpaste Family Pack", "Personal Care", "300g", 135, 160, 4.4, 49, "Popular", "🪥"],
  ["Kaju", "Sweets & Dry Fruits", "500g", 495, 560, 4.8, 81, "Premium", "🥜"],
  ["Soan Papdi", "Sweets & Dry Fruits", "500g", 160, 190, 4.2, 29, "Festive", "🍬"],
].map(([name, category, size, price, mrp, rating, reviews, badge, emoji], index) => ({
  id: `prod-${index + 1}`,
  name,
  category,
  size,
  price,
  mrp,
  rating,
  reviews,
  badge,
  emoji,
  stock: index % 4 === 0 ? "Fresh stock" : index % 3 === 0 ? "Fast moving" : "Ready to dispatch",
}));

const DEMO_ORDERS = [
  { id: "DEMO-101", status: "Delivered", total: 845, createdAt: "2026-05-14T10:30:00.000Z", items: [{ title: "Aashirvaad Atta", quantity: 1 }, { title: "Amul Gold Milk", quantity: 2 }, { title: "Tomato", quantity: 1 }] },
  { id: "DEMO-102", status: "Out for delivery", total: 610, createdAt: "2026-05-20T17:45:00.000Z", items: [{ title: "Haldiram Bhujia", quantity: 1 }, { title: "Tata Tea Gold", quantity: 1 }, { title: "Coca-Cola", quantity: 1 }] },
  { id: "DEMO-103", status: "Ready for pickup", total: 330, createdAt: "2026-05-22T12:15:00.000Z", items: [{ title: "Potato", quantity: 2 }, { title: "Toor Dal", quantity: 1 }, { title: "Bath Soap Value Pack", quantity: 1 }] },
];

const DEMO_COUPONS = [
  { code: "HRWELCOME", title: "Welcome savings", discount: "₹50 off above ₹999" },
  { code: "SNACK25", title: "Snack combo offer", discount: "₹25 off on snacks" },
  { code: "FRESH10", title: "Fresh basket bonus", discount: "10% off on fruits & vegetables" },
];

const DEFAULT_PROFILE = {
  name: "Divyraj Customer",
  email: "customer@example.com",
  phone: "+91 98765 43210",
  address: "By Pass Road, Surendranagar, Gujarat",
};

const DEFAULT_WALLET = {
  balance: 480,
  transactions: [
    { id: "txn-1", label: "Wallet top-up", amount: 500, type: "credit" },
    { id: "txn-2", label: "Order adjustment", amount: 20, type: "debit" },
  ],
};

const DEFAULT_NOTIFICATIONS = {
  orderUpdates: true,
  offers: true,
  preorderAlerts: true,
  newArrivals: false,
  walletCredits: true,
};

function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore storage failures.
  }
}

function money(amount) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(amount || 0);
}

function prettyDate(value) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function getDiscount(price, mrp) {
  return mrp ? Math.round(((mrp - price) / mrp) * 100) : 0;
}

function initials(name) {
  return String(name || "HR")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");
}

function normalizeQuery(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function searchMatch(product, query) {
  const normalized = normalizeQuery(query);
  if (!normalized) return true;
  const haystack = normalizeQuery(
    [
      product.name,
      product.category,
      product.badge,
      product.size,
      ...(CATEGORIES.find((category) => category.name === product.category)?.items || []),
    ].join(" ")
  );
  const tokens = normalized.split(" ").filter(Boolean);
  return tokens.every((token) => haystack.includes(token));
}

function searchScore(product, query) {
  const normalized = normalizeQuery(query);
  if (!normalized) return 0;
  const haystack = normalizeQuery(
    [
      product.name,
      product.category,
      product.badge,
      product.size,
      ...(CATEGORIES.find((category) => category.name === product.category)?.items || []),
    ].join(" ")
  );
  return normalized.split(" ").filter(Boolean).reduce((score, token) => score + (haystack.includes(token) ? 1 : 0), 0);
}

function readRoute() {
  const path = location.pathname.toLowerCase();
  if (path.includes("divyraj")) return "divyraj";
  if (path.includes("admin")) return "admin";
  return "home";
}

const route = readRoute();
const root = document.getElementById("root");

const state = {
  route,
  query: "",
  category: "All",
  mode: "delivery",
  carouselIndex: 0,
  selectedProduct: null,
  cartOpen: false,
  accountOpen: false,
  accountTab: "Profile",
  checkoutOpen: false,
  authOpen: false,
  authMode: "signin",
  adminTab: "Products",
  toast: "",
  mobileNav: "home",
  adminUnlocked: false,
  adminPin: "",
  divyrajUnlocked: false,
  divyrajPin: "",
  checkout: {
    name: "",
    email: "",
    phone: "",
    address: STORE.address,
    note: "",
    deliveryMode: "delivery",
    paymentMethod: "UPI",
    schedule: "asap",
  },
  profile: readStorage(STORAGE_KEYS.profile, DEFAULT_PROFILE),
  wallet: readStorage(STORAGE_KEYS.wallet, DEFAULT_WALLET),
  notifications: readStorage(STORAGE_KEYS.notifications, DEFAULT_NOTIFICATIONS),
  wishlist: readStorage(STORAGE_KEYS.wishlist, []),
  cart: readStorage(STORAGE_KEYS.cart, []),
  recentlyViewed: readStorage(STORAGE_KEYS.recentlyViewed, []),
  products: readStorage(STORAGE_KEYS.products, DEFAULT_PRODUCTS),
  banners: readStorage(STORAGE_KEYS.banners, DEFAULT_BANNERS),
  orders: readStorage(STORAGE_KEYS.orders, DEMO_ORDERS),
  adminProducts: readStorage(STORAGE_KEYS.adminProducts, DEFAULT_PRODUCTS),
  adminBanners: readStorage(STORAGE_KEYS.adminBanners, DEFAULT_BANNERS),
  platformFees: readStorage(STORAGE_KEYS.platformFees, makePlatformFees()),
  dashboardOrders: readStorage(STORAGE_KEYS.dashboardOrders, DEMO_ORDERS),
};

function makePlatformFees() {
  const rows = [];
  const start = new Date(2026, 0, 1);
  const now = new Date();
  let year = start.getFullYear();
  let month = start.getMonth() + 1;
  while (year < now.getFullYear() || (year === now.getFullYear() && month <= now.getMonth() + 1)) {
    const label = new Date(year, month - 1, 1).toLocaleString("en-IN", { month: "long", year: "numeric" });
    rows.push({ id: `${year}-${String(month).padStart(2, "0")}`, month: label, year, amount: 1500, status: month % 2 === 0 ? "Completed" : "Pending" });
    month += 1;
    if (month === 13) {
      month = 1;
      year += 1;
    }
  }
  return rows;
}

function persist() {
  writeStorage(STORAGE_KEYS.profile, state.profile);
  writeStorage(STORAGE_KEYS.wallet, state.wallet);
  writeStorage(STORAGE_KEYS.notifications, state.notifications);
  writeStorage(STORAGE_KEYS.wishlist, state.wishlist);
  writeStorage(STORAGE_KEYS.cart, state.cart);
  writeStorage(STORAGE_KEYS.recentlyViewed, state.recentlyViewed);
  writeStorage(STORAGE_KEYS.products, state.products);
  writeStorage(STORAGE_KEYS.banners, state.banners);
  writeStorage(STORAGE_KEYS.orders, state.orders);
  writeStorage(STORAGE_KEYS.adminProducts, state.adminProducts);
  writeStorage(STORAGE_KEYS.adminBanners, state.adminBanners);
  writeStorage(STORAGE_KEYS.platformFees, state.platformFees);
  writeStorage(STORAGE_KEYS.dashboardOrders, state.dashboardOrders);
}

function showToast(message) {
  state.toast = message;
  render();
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    state.toast = "";
    render();
  }, 2200);
}

function currentProducts() {
  return state.products.length ? state.products : DEFAULT_PRODUCTS;
}

function currentBanners() {
  return state.banners.length ? state.banners : DEFAULT_BANNERS;
}

function cartItems() {
  return state.cart
    .map((entry) => {
      const product = currentProducts().find((item) => item.id === entry.productId);
      return product ? { ...product, quantity: entry.quantity } : null;
    })
    .filter(Boolean);
}

function cartCount() {
  return cartItems().reduce((sum, item) => sum + item.quantity, 0);
}

function subtotal() {
  return cartItems().reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function findProduct(id) {
  return currentProducts().find((item) => item.id === id);
}

function addToCart(productId, quantity = 1) {
  const existing = state.cart.find((item) => item.productId === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({ productId, quantity });
  }
  state.cart = state.cart.filter((item) => item.quantity > 0);
  persist();
  showToast("Added to cart");
}

function removeFromCart(productId) {
  state.cart = state.cart.filter((item) => item.productId !== productId);
  persist();
  render();
}

function updateCartQuantity(productId, delta) {
  const existing = state.cart.find((item) => item.productId === productId);
  if (!existing) return;
  existing.quantity += delta;
  if (existing.quantity <= 0) {
    state.cart = state.cart.filter((item) => item.productId !== productId);
  }
  persist();
  render();
}

function toggleWishlist(productId) {
  if (state.wishlist.includes(productId)) {
    state.wishlist = state.wishlist.filter((id) => id !== productId);
  } else {
    state.wishlist = [productId, ...state.wishlist];
  }
  persist();
  render();
}

function viewProduct(product) {
  state.selectedProduct = product;
  state.recentlyViewed = [product.id, ...state.recentlyViewed.filter((id) => id !== product.id)].slice(0, 8);
  persist();
  render();
}

function closeOverlays() {
  state.cartOpen = false;
  state.accountOpen = false;
  state.authOpen = false;
  state.checkoutOpen = false;
  state.selectedProduct = null;
  state.mode = "delivery";
  render();
}

function placeOrder() {
  const items = cartItems();
  if (!items.length) {
    showToast("Add items first");
    return;
  }
  const total = subtotal() + 20;
  const order = {
    id: `ORD-${Date.now().toString().slice(-6)}`,
    status: state.checkout.deliveryMode === "pickup" ? "Ready for pickup" : "Placed",
    total,
    createdAt: new Date().toISOString(),
    items: items.map((item) => ({ title: item.name, quantity: item.quantity })),
  };
  state.orders = [order, ...state.orders];
  state.dashboardOrders = [order, ...state.dashboardOrders];
  state.cart = [];
  persist();
  state.checkoutOpen = false;
  state.cartOpen = false;
  showToast("Order placed");
}

function reorderFrom(order) {
  const items = order.items || [];
  items.forEach((item) => {
    const product = currentProducts().find((p) => p.name === item.title);
    if (product) addToCart(product.id, item.quantity);
  });
  showToast("Added again");
}

function saveProfile(event) {
  event.preventDefault();
  persist();
  showToast("Profile saved");
}

function signupDemo() {
  state.profile = {
    name: state.profile.name || "New Customer",
    email: state.profile.email || "customer@example.com",
    phone: state.profile.phone || "+91 98765 43210",
    address: state.profile.address || STORE.address,
  };
  persist();
  showToast("Signed in");
  state.authOpen = false;
  render();
}

function render() {
  if (!root) return;
  document.body.className = route === "divyraj" ? "dark-page" : "";
  if (route === "admin") {
    root.innerHTML = renderAdmin();
  } else if (route === "divyraj") {
    root.innerHTML = renderDivyraj();
  } else {
    root.innerHTML = renderHome();
  }
  bindDynamicState();
}

function renderHome() {
  const products = currentProducts();
  const banners = currentBanners();
  const normalizedQuery = normalizeQuery(state.query);
  const filtered = products.filter((product) => {
    const matchesCategory = state.category === "All" || product.category === state.category;
    return matchesCategory && searchMatch(product, normalizedQuery);
  });
  const selectedCategory = CATEGORIES.find((item) => item.name === state.category);
  const wishlistProducts = products.filter((product) => state.wishlist.includes(product.id));
  const viewedProducts = state.recentlyViewed.map((id) => products.find((product) => product.id === id)).filter(Boolean);
  const cartList = cartItems();
  const total = subtotal() + 20;
  const currentBanner = banners[state.carouselIndex % banners.length] || banners[0];
  const searchSuggestions = state.query.trim()
    ? products
        .filter((product) => searchMatch(product, normalizedQuery))
        .sort((a, b) => searchScore(b, normalizedQuery) - searchScore(a, normalizedQuery))
        .slice(0, 6)
    : [];
  const orderHistory = state.orders.length ? state.orders : DEMO_ORDERS;

  return `
    <div class="page">
      <div class="topbar">
        <div class="shell" style="padding:16px 0;">
          <div style="display:grid;grid-template-columns:${window.innerWidth < 768 ? "1fr auto auto" : "260px minmax(320px, 1fr) auto auto"};gap:12px;align-items:center;">
            <div class="logo">
              <div class="logo-mark">HR</div>
              <div>
                <div class="logo-title">${STORE.name}</div>
                <div class="logo-subtitle">${STORE.tagline}</div>
              </div>
            </div>
            <input class="search" value="${escapeHtml(state.query)}" data-action="search" placeholder="Search staples, snacks, dairy, fruits and more" />
            <button class="btn ghost mobile-only" data-action="account-open">👤</button>
            <button class="btn ghost desktop-only" data-action="account-open">Account</button>
            <button class="btn primary" style="position:relative;min-width:${window.innerWidth < 768 ? "92px" : "110px"}" data-action="cart-open">
              ${window.innerWidth < 768 ? "🛒" : "Cart"}
              <span style="position:absolute;top:-6px;right:-6px;width:24px;height:24px;border-radius:50%;background:#f44336;color:#fff;display:grid;place-items:center;font-size:12px;font-weight:800;">${cartCount()}</span>
            </button>
          </div>
          <div class="shell" style="padding:12px 0 0;">
            <div class="pill-row">
              ${[
                ["delivery", "Delivery"],
                ["pickup", "Pickup"],
                ["orders", "My Orders"],
                ["wishlist", "Wishlist"],
                ["account", "Account"],
              ].map(([key, label]) => `<button class="pill ${state.mode === key ? "active" : ""}" data-action="mode-tab" data-value="${key}">${label}</button>`).join("")}
            </div>
            ${searchSuggestions.length ? `
              <div style="display:flex;gap:8px;overflow-x:auto;padding:6px 0 0;">
                ${searchSuggestions.map((product) => `<button class="chip" data-action="open-product" data-id="${product.id}">${product.name}</button>`).join("")}
              </div>
            ` : ""}
          </div>
        </div>
      </div>

      <div class="shell">
        ${state.accountOpen || state.mode === "account" ? `
          ${renderAccountDrawer(orderHistory)}
        ` : `
          <div class="surface section" style="margin-top:18px">
            <div class="eyebrow">Categories</div>
            <div class="section-title">Everyday Indian grocery aisles</div>
            <div class="pill-row" style="margin-top:14px">
              ${CATEGORIES.map((category) => `<button class="pill ${state.category === category.name ? "active" : ""}" data-action="category-set" data-value="${escapeHtml(category.name)}">${category.name}</button>`).join("")}
            </div>
            ${selectedCategory && selectedCategory.name !== "All" ? `
              <div style="margin-top:18px">
                <div class="chip-strip">
                  ${selectedCategory.items.map((item) => `<button class="chip" data-action="search-chip" data-value="${escapeHtml(item)}">${escapeHtml(item)}</button>`).join("")}
                </div>
              </div>
            ` : ""}
          </div>

          <div class="surface section">
            <div class="eyebrow">Products</div>
            <div class="section-title">Top grocery picks</div>
            <div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-top:8px">
              <div style="color:var(--muted)">Default mode: Delivery</div>
              <div style="display:flex;gap:8px;flex-wrap:wrap">
                <button class="pill ${state.mode === "delivery" ? "active" : ""}" data-action="mode-tab" data-value="delivery">Delivery</button>
                <button class="pill ${state.mode === "pickup" ? "active" : ""}" data-action="mode-tab" data-value="pickup">Pickup</button>
                <button class="pill ${state.mode === "wishlist" ? "active" : ""}" data-action="mode-tab" data-value="wishlist">Wishlist</button>
                <button class="pill ${state.mode === "orders" ? "active" : ""}" data-action="mode-tab" data-value="orders">My Orders</button>
              </div>
            </div>
            <div id="products-grid" class="grid products ${window.innerWidth < 768 ? "mobile" : ""}" style="margin-top:18px;">
              ${filtered.map((product) => renderProductCard(product)).join("")}
            </div>
          </div>
        `}
      </div>

      ${window.innerWidth < 768 ? `
        <div class="mobile-nav">
          ${[
            ["home", "Home", "🏠"],
            ["categories", "Categories", "🧺"],
            ["cart", "Cart", "🛒"],
            ["wishlist", "Wishlist", "❤️"],
            ["account", "Account", "👤"],
          ].map(([key, label, icon]) => `<button class="${state.mobileNav === key ? "active" : ""}" data-action="mobile-nav" data-value="${key}"><div style="font-size:20px">${icon}</div><div style="font-size:11px;margin-top:4px">${label}</div></button>`).join("")}
        </div>
      ` : ""}

      ${state.cartOpen ? renderCartDrawer(cartList, total) : ""}
      ${state.authOpen ? renderAuthModal() : ""}
      ${state.checkoutOpen ? renderCheckoutModal(cartList, total) : ""}
      ${state.selectedProduct ? renderProductModal(state.selectedProduct) : ""}
      ${state.toast ? `<div class="toast">${escapeHtml(state.toast)}</div>` : ""}
    </div>
  `;
}

function renderProductCard(product) {
  const discount = getDiscount(product.price, product.mrp);
  const wish = state.wishlist.includes(product.id);
  return `
    <div class="surface card" data-action="open-product" data-id="${product.id}">
      <div class="card-media">
        <div class="emoji-badge">${product.emoji}</div>
        <button class="wishlist-btn" data-action="toggle-wishlist" data-id="${product.id}" title="Wishlist">${wish ? "❤️" : "🤍"}</button>
      </div>
      <div class="card-body">
        <div style="display:flex;justify-content:space-between;gap:12px">
          <div>
            <div style="font-size:17px;font-weight:900">${product.name}</div>
            <div class="meta-line" style="margin-top:4px">${product.size} • ${product.category}</div>
          </div>
          <span class="badge ${badgeTone(product.badge)}">${product.badge}</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;margin-top:12px;font-size:13px;color:var(--muted)">
          <span style="color:#f2b94b">★ ${product.rating}</span>
          <span>(${product.reviews} reviews)</span>
        </div>
        <div class="price-row" style="margin-top:12px">
          <div style="font-size:20px;font-weight:900">${money(product.price)}</div>
          <div class="mrp">${money(product.mrp)}</div>
          <div class="discount">${discount}% off</div>
        </div>
        <div style="margin-top:10px;color:var(--muted);font-size:13px">${product.stock}</div>
        <button class="btn primary" style="width:100%;margin-top:16px" data-action="add-cart" data-id="${product.id}">Add to Cart</button>
      </div>
    </div>
  `;
}

function renderCartDrawer(items, total) {
  return `
    <div class="drawer">
      <div class="overlay" data-action="close-all"></div>
      <div class="drawer-panel">
        <div style="padding:24px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px">
            <div>
              <div class="eyebrow">Cart</div>
              <div class="section-title" style="font-size:30px">${items.length} items</div>
            </div>
            <button class="btn ghost" data-action="close-all">Close</button>
          </div>
          <div class="stack">
            ${items.length ? items.map((item) => `
              <div class="surface" style="padding:14px">
                <div style="display:grid;grid-template-columns:72px 1fr;gap:12px">
                  <div class="emoji-badge" style="position:static;width:72px;height:72px;font-size:32px;border-radius:18px;background:#eaf5ee">${item.emoji}</div>
                  <div>
                    <div style="font-weight:900">${item.name}</div>
                    <div class="meta-line" style="margin-top:4px">${item.size}</div>
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px;gap:8px">
                      <div style="font-weight:900">${money(item.price)}</div>
                      <div style="display:flex;align-items:center;gap:8px">
                        <button class="btn ghost" data-action="qty-decrease" data-id="${item.id}" style="padding:8px 12px">-</button>
                        <strong>${item.quantity}</strong>
                        <button class="btn ghost" data-action="qty-increase" data-id="${item.id}" style="padding:8px 12px">+</button>
                        <button class="btn danger" data-action="remove-item" data-id="${item.id}" style="padding:8px 12px">Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `).join("") : `<div class="surface" style="padding:18px;text-align:center">Your cart is empty.</div>`}
          </div>
          <div class="surface" style="padding:18px;margin-top:18px">
            <div class="stack">
              <div style="display:flex;justify-content:space-between"><span>Items Total</span><strong>${money(subtotal())}</strong></div>
              <div style="display:flex;justify-content:space-between"><span>Handling & Delivery Fee</span><strong>${money(20)}</strong></div>
              <div style="display:flex;justify-content:space-between;font-size:22px"><strong>Total</strong><strong>${money(total)}</strong></div>
            </div>
            <button class="btn primary" data-action="checkout-open" style="width:100%;margin-top:16px">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderAccountDrawer(orders) {
  const tabs = ["Profile", "Orders", "Reorder", "Preorder", "Wishlist", "Wallet", "Coupons", "Notifications", "Customer Support", "Settings"];
  let content = "";
  if (state.accountTab === "Profile") {
    content = `
      <form class="stack" data-form="profile-save">
        <div class="surface" style="padding:18px;display:flex;align-items:center;gap:12px">
          <div class="logo-mark" style="width:52px;height:52px;border-radius:50%">${initials(state.profile.name)}</div>
          <div>
            <div style="font-weight:900">${escapeHtml(state.profile.name)}</div>
            <div class="meta-line">${escapeHtml(state.profile.email)}</div>
          </div>
        </div>
        ${["name", "email", "phone", "address"].map((field) => `
          <label class="stack">
            <span class="meta-line" style="text-transform:capitalize">${field}</span>
            <input class="field" name="${field}" value="${escapeHtml(state.profile[field] || "")}" />
          </label>
        `).join("")}
        <button class="btn primary" type="submit">Save Profile</button>
      </form>
    `;
  } else if (state.accountTab === "Orders") {
    content = `<div class="stack">${orders.map((order) => `
      <div class="surface" style="padding:18px">
        <div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap">
          <div><div style="font-weight:900">${order.id}</div><div class="meta-line">${prettyDate(order.createdAt)}</div></div>
          <span class="badge green">${order.status}</span>
        </div>
        <div style="margin-top:12px;display:grid;gap:6px">${(order.items || []).map((item) => `<div style="display:flex;justify-content:space-between;color:var(--muted);font-size:13px"><span>${item.title}</span><span>x${item.quantity}</span></div>`).join("")}</div>
        <div style="display:flex;justify-content:space-between;margin-top:14px;align-items:center">
          <strong>${money(order.total)}</strong>
          <button class="btn soft" data-action="reorder" data-order="${order.id}">Reorder</button>
        </div>
      </div>
    `).join("")}</div>`;
  } else if (state.accountTab === "Reorder") {
    const latest = orders.slice(0, 6);
    content = `<div class="stack">${latest.map((order) => `
      <div class="surface" style="padding:18px;display:flex;justify-content:space-between;gap:12px;align-items:center">
        <div>
          <div style="font-weight:900">${order.id}</div>
          <div class="meta-line">${order.items?.[0]?.title || "Multiple items"}</div>
        </div>
        <button class="btn" data-action="reorder" data-order="${order.id}">Order again</button>
      </div>
    `).join("")}</div>`;
  } else if (state.accountTab === "Preorder") {
    content = `<div class="stack">${[
      { name: "Alphonso Mango Crate", eta: "Next Monday", price: 699 },
      { name: "Festival Dry Fruit Combo", eta: "3 June", price: 899 },
      { name: "Fresh Sweet Corn Basket", eta: "Tomorrow", price: 149 },
    ].map((item) => `
      <div class="surface" style="padding:18px">
        <div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap">
          <div><div style="font-weight:900">${item.name}</div><div class="meta-line">Expected: ${item.eta}</div></div>
          <strong>${money(item.price)}</strong>
        </div>
        <button class="btn soft" data-action="preorder-demo" style="margin-top:14px">Schedule preorder</button>
      </div>
    `).join("")}</div>`;
  } else if (state.accountTab === "Wishlist") {
    const items = currentProducts().filter((p) => state.wishlist.includes(p.id));
    content = items.length ? `<div class="stack">${items.map((item) => `
      <div class="surface" style="padding:18px;display:flex;justify-content:space-between;gap:12px;align-items:center">
        <div><div style="font-weight:900">${item.name}</div><div class="meta-line">${money(item.price)}</div></div>
        <button class="btn" data-action="add-cart" data-id="${item.id}">Add to cart</button>
      </div>
    `).join("")}</div>` : `<div class="surface" style="padding:18px">No wishlist items yet.</div>`;
  } else if (state.accountTab === "Wallet") {
    content = `
      <div class="stack">
        <div class="surface" style="padding:18px">
          <div class="meta-line">Wallet Balance</div>
          <div style="font-size:34px;font-weight:900;margin-top:8px">${money(state.wallet.balance)}</div>
          <button class="btn primary" data-action="wallet-topup" style="margin-top:14px">Add Money</button>
        </div>
        ${(state.wallet.transactions || []).map((txn) => `
          <div class="surface" style="padding:16px;display:flex;justify-content:space-between">
            <span>${txn.label}</span>
            <strong style="color:${txn.type === "credit" ? "var(--accent)" : "var(--text)"}">${txn.type === "credit" ? "+" : "-"}${money(txn.amount)}</strong>
          </div>
        `).join("")}
      </div>
    `;
  } else if (state.accountTab === "Coupons") {
    content = `<div class="stack">${DEMO_COUPONS.map((item) => `
      <div class="surface" style="padding:18px">
        <div style="font-weight:900">${item.code}</div>
        <div class="meta-line" style="margin-top:6px">${item.title}</div>
        <div style="margin-top:10px">${item.discount}</div>
        <button class="btn soft" data-action="coupon-save" style="margin-top:14px" data-code="${item.code}">Apply</button>
      </div>
    `).join("")}</div>`;
  } else if (state.accountTab === "Notifications") {
    content = `<div class="stack">${Object.entries(state.notifications).map(([key, value]) => `
      <div class="surface" style="padding:18px;display:flex;justify-content:space-between;align-items:center">
        <span>${key.replace(/([A-Z])/g, " $1")}</span>
        <button class="btn ${value ? "primary" : "ghost"}" data-action="toggle-notification" data-key="${key}" style="width:60px;padding:10px 0">${value ? "ON" : "OFF"}</button>
      </div>
    `).join("")}</div>`;
  } else if (state.accountTab === "Customer Support") {
    content = `
      <div class="stack">
        <button class="btn primary" data-action="support-call">Call</button>
        <button class="btn soft" data-action="support-whatsapp">WhatsApp</button>
        <button class="btn" data-action="support-email">Email</button>
      </div>
    `;
  } else if (state.accountTab === "Settings") {
    content = `
      <div class="stack">
        <div class="surface" style="padding:18px">Language, delivery instructions, and payment preferences can be updated here.</div>
        <button class="btn danger" data-action="logout">Logout</button>
      </div>
    `;
  }

  return `
    <div class="surface section" style="margin-top:18px">
      <div style="display:flex;justify-content:space-between;gap:12px;align-items:center;flex-wrap:wrap">
        <div>
          <div class="eyebrow">Account</div>
          <div class="section-title" style="font-size:28px">${state.profile.name ? "Welcome back" : "Sign in & Checkout"}</div>
        </div>
        <button class="btn ghost" data-action="account-close">Close</button>
      </div>

      <div class="surface" style="padding:18px;margin-top:18px">
        <div style="display:grid;grid-template-columns:${window.innerWidth < 768 ? "1fr" : "1fr 1fr"};gap:12px">
          <div>
            <div class="meta-line">Delivery Distance</div>
            <div style="font-weight:800;margin-top:6px">Local shop radius</div>
          </div>
          <div>
            <div class="meta-line">Order Type</div>
            <div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap">
              <button class="btn ${state.checkout.deliveryMode === "delivery" ? "primary" : "soft"}" data-action="mode" data-value="delivery">Delivery</button>
              <button class="btn ${state.checkout.deliveryMode === "pickup" ? "primary" : "soft"}" data-action="mode" data-value="pickup">Pickup</button>
            </div>
          </div>
        </div>
      </div>

      <div class="surface" style="padding:18px;margin-top:18px">
        <div style="font-weight:900;margin-bottom:12px">Checkout</div>
        <div class="stack">
          ${["name", "email", "phone", "address", "note"].map((field) => `
            <label class="stack">
              <span class="meta-line" style="text-transform:capitalize">${field}</span>
              ${field === "address" || field === "note" ? `<textarea class="field" rows="${field === "address" ? 3 : 2}" data-field="${field}">${escapeHtml(state.checkout[field])}</textarea>` : `<input class="field" data-field="${field}" value="${escapeHtml(state.checkout[field])}" />`}
            </label>
          `).join("")}
          <div style="display:grid;grid-template-columns:${window.innerWidth < 768 ? "1fr" : "1fr 1fr"};gap:12px">
            <label class="stack">
              <span class="meta-line">Schedule</span>
              <select class="field" data-field="schedule">
                <option value="asap">ASAP</option>
                <option value="morning">Morning slot</option>
                <option value="evening">Evening slot</option>
                <option value="weekend">Weekend preorder</option>
              </select>
            </label>
            <label class="stack">
              <span class="meta-line">Payment Method</span>
              <select class="field" data-field="paymentMethod">
                <option>UPI</option>
                <option>Cash on Delivery</option>
                <option>Card on Delivery</option>
                <option>Pay at Pickup</option>
              </select>
            </label>
          </div>
        </div>
      </div>

      <div class="surface" style="padding:16px;margin-top:16px;background:#f8faf7">
        <div class="stack">
          <div style="display:flex;justify-content:space-between"><span>Items Total</span><strong>${money(subtotal())}</strong></div>
          <div style="display:flex;justify-content:space-between"><span>Handling & Delivery Fee</span><strong>${money(20)}</strong></div>
          <div style="display:flex;justify-content:space-between;font-size:22px"><strong>Total payable</strong><strong>${money(subtotal() + 20)}</strong></div>
        </div>
      </div>
      <button class="btn primary" data-action="place-order" style="width:100%;margin-top:16px">Place Order</button>

      <div style="display:flex;gap:10px;overflow-x:auto;margin-top:18px;padding-bottom:8px">
        ${["Profile", "Orders", "Reorder", "Preorder", "Wishlist", "Wallet", "Coupons", "Notifications", "Customer Support", "Settings"].map((tab) => `
          <button class="pill ${state.accountTab === tab ? "active" : ""}" data-action="tab" data-value="${tab}">${tab}</button>
        `).join("")}
      </div>

      <div style="margin-top:18px">${content}</div>
    </div>
  `;
}

function renderAuthModal() {
  return `
    <div class="modal">
      <div class="overlay" data-action="close-all"></div>
      <div class="modal-panel">
        <div style="padding:28px">
          <div style="display:flex;justify-content:space-between;gap:12px;align-items:center">
            <div>
              <div class="eyebrow">Account</div>
              <div class="section-title" style="font-size:28px">Sign in</div>
            </div>
            <button class="btn ghost" data-action="close-all">Close</button>
          </div>
          <div class="stack" style="margin-top:18px">
            <button class="btn soft" data-action="demo-google">Continue with Google</button>
            <div style="display:flex;gap:8px">
              <button class="btn primary" data-action="auth-mode" data-value="signin">Sign In</button>
              <button class="btn" data-action="auth-mode" data-value="signup">Sign Up</button>
            </div>
            <form class="stack" data-form="auth">
              ${state.authMode === "signup" ? `<input class="field" name="name" placeholder="Full name" value="${escapeHtml(state.profile.name || "")}" />` : ""}
              <input class="field" name="email" placeholder="Email" value="${escapeHtml(state.profile.email || "")}" />
              <input class="field" name="password" placeholder="Password" type="password" />
              <button class="btn primary" type="submit">${state.authMode === "signin" ? "Sign In" : "Create Account"}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderCheckoutModal(cartList, total) {
  return `
    <div class="modal">
      <div class="overlay" data-action="close-all"></div>
      <div class="modal-panel">
        <div style="padding:28px">
          <div style="display:flex;justify-content:space-between;gap:12px;align-items:center">
            <div>
              <div class="eyebrow">Checkout</div>
              <div class="section-title" style="font-size:28px">Complete your order</div>
            </div>
            <button class="btn ghost" data-action="close-all">Close</button>
          </div>
          <form class="stack" data-form="checkout" style="margin-top:18px">
            ${["name", "email", "phone", "address", "note"].map((field) => `
              <label class="stack">
                <span class="meta-line" style="text-transform:capitalize">${field}</span>
                ${field === "address" || field === "note"
                  ? `<textarea class="field" name="${field}" rows="${field === "address" ? 3 : 2}">${escapeHtml(state.checkout[field])}</textarea>`
                  : `<input class="field" name="${field}" value="${escapeHtml(state.checkout[field])}" />`}
              </label>
            `).join("")}
            <div style="display:grid;grid-template-columns:${window.innerWidth < 768 ? "1fr" : "1fr 1fr"};gap:12px">
              <label class="stack">
                <span class="meta-line">Schedule</span>
                <select class="field" name="schedule">
                  <option value="asap">ASAP</option>
                  <option value="morning">Morning slot</option>
                  <option value="evening">Evening slot</option>
                  <option value="weekend">Weekend preorder</option>
                </select>
              </label>
              <label class="stack">
                <span class="meta-line">Payment Method</span>
                <select class="field" name="paymentMethod">
                  <option>UPI</option>
                  <option>Cash on Delivery</option>
                  <option>Card on Delivery</option>
                  <option>Pay at Pickup</option>
                </select>
              </label>
            </div>
            <div class="surface" style="padding:16px;background:#f8faf7">
              <div class="stack">
                <div style="display:flex;justify-content:space-between"><span>Items Total</span><strong>${money(subtotal())}</strong></div>
                <div style="display:flex;justify-content:space-between"><span>Handling & Delivery Fee</span><strong>${money(20)}</strong></div>
                <div style="display:flex;justify-content:space-between;font-size:22px"><strong>Total payable</strong><strong>${money(total)}</strong></div>
              </div>
            </div>
            <button class="btn primary" type="submit">Place Order</button>
          </form>
        </div>
      </div>
    </div>
  `;
}

function renderProductModal(product) {
  const discount = getDiscount(product.price, product.mrp);
  return `
    <div class="modal">
      <div class="overlay" data-action="close-product"></div>
      <div class="modal-panel">
        <div style="display:grid;grid-template-columns:${window.innerWidth < 768 ? "1fr" : "1fr 1fr"}">
          <div style="min-height:260px;background:linear-gradient(135deg,#eaf5ee,#dff5e9);display:grid;place-items:center;font-size:96px">${product.emoji}</div>
          <div style="padding:28px">
            <span class="badge ${badgeTone(product.badge)}">${product.badge}</span>
            <div class="section-title" style="font-size:34px">${product.name}</div>
            <div class="meta-line" style="margin-top:8px">${product.category} • ${product.size}</div>
            <div style="margin-top:16px">${renderPrice(product)}</div>
            <div style="margin-top:16px;color:var(--muted);line-height:1.7">${product.name} in ${product.size} with quick local availability for homes across Surendranagar.</div>
            <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:22px">
              <button class="btn primary" data-action="add-cart" data-id="${product.id}">Add to Cart</button>
              <button class="btn soft" data-action="toggle-wishlist" data-id="${product.id}">${state.wishlist.includes(product.id) ? "Remove Wishlist" : "Save Wishlist"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderPrice(product) {
  const discount = getDiscount(product.price, product.mrp);
  return `
    <div class="price-row">
      <div style="font-size:20px;font-weight:900">${money(product.price)}</div>
      <div class="mrp">${money(product.mrp)}</div>
      <div class="discount">${discount}% off</div>
    </div>
  `;
}

function renderAdmin() {
  if (!state.adminUnlocked) {
    return `
      <div class="page" style="display:grid;place-items:center;padding:20px">
        <div class="surface" style="width:min(420px,100%);padding:28px">
          <div style="display:flex;align-items:center;gap:14px;margin-bottom:20px">
            <div class="logo-mark">HR</div>
            <div>
              <div style="font-weight:900;font-size:20px">Admin Access</div>
              <div class="meta-line">Enter PIN to open the separate admin section</div>
            </div>
          </div>
          <form class="stack" data-form="admin-pin">
            <input class="field" type="password" placeholder="Enter PIN" value="${escapeHtml(state.adminPin)}" name="pin" />
            <button class="btn primary" type="submit">Unlock</button>
            <a href="/" style="text-align:center;color:var(--muted);text-decoration:none">Back to store</a>
          </form>
        </div>
      </div>
    `;
  }

  const productList = state.adminProducts.length ? state.adminProducts : currentProducts();
  const bannerList = state.adminBanners.length ? state.adminBanners : currentBanners();
  const totalOrders = state.dashboardOrders.length;
  const totalRevenue = state.dashboardOrders.reduce((sum, order) => sum + Number(order.total || 0), 0);
  const activeUsers = new Set(state.dashboardOrders.map((order) => order.customerName || order.customerEmail || "guest")).size;
  const topProducts = [...productList]
    .sort((a, b) => b.reviews - a.reviews)
    .slice(0, 5);

  return `
    <div class="page" style="padding:24px">
      <div class="shell">
        <div class="surface section">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap">
            <div>
              <div class="eyebrow">Admin Panel</div>
              <div class="section-title">HR Supermarket Admin</div>
            </div>
            <a class="btn ghost" href="/">Back to store</a>
          </div>

          <div class="stats-grid" style="margin-top:18px">
            <div class="surface" style="padding:20px"><div class="meta-line">Total Orders</div><div style="font-size:30px;font-weight:900;margin-top:10px">${totalOrders}</div></div>
            <div class="surface" style="padding:20px"><div class="meta-line">Today&apos;s Revenue</div><div style="font-size:30px;font-weight:900;margin-top:10px">${money(totalRevenue)}</div></div>
            <div class="surface" style="padding:20px"><div class="meta-line">Active Users</div><div style="font-size:30px;font-weight:900;margin-top:10px">${activeUsers}</div></div>
            <div class="surface" style="padding:20px"><div class="meta-line">Products Listed</div><div style="font-size:30px;font-weight:900;margin-top:10px">${productList.length}</div></div>
          </div>

          <div style="display:flex;gap:10px;overflow-x:auto;margin-top:18px;padding-bottom:8px">
            ${["Products", "Banners", "Analytics"].map((tab) => `<button class="pill ${state.adminTab === tab ? "active" : ""}" data-action="admin-tab" data-value="${tab}">${tab}</button>`).join("")}
          </div>

          <div style="margin-top:18px">
            ${renderAdminTab(productList, bannerList, topProducts)}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderAdminTab(productList, bannerList, topProducts) {
  const tab = state.adminTab || "Products";
  if (tab === "Banners") {
    return `
      <div class="stack">
        <form class="surface" style="padding:18px" data-form="banner-add">
          <div style="font-weight:900;margin-bottom:12px">Add Banner</div>
          <div class="stack">
            <input class="field" name="title" placeholder="Banner title" />
            <input class="field" name="subtitle" placeholder="Banner subtitle" />
            <input class="field" name="cta" placeholder="CTA text" />
            <input class="field" name="emoji" placeholder="Emoji" />
            <button class="btn primary" type="submit">Add Banner</button>
          </div>
        </form>
        <div class="stack">
          ${bannerList.map((banner) => `
            <div class="surface" style="padding:18px;display:flex;justify-content:space-between;gap:12px;align-items:center">
              <div>
                <div style="font-weight:900">${banner.emoji || "🖼️"} ${banner.title}</div>
                <div class="meta-line">${banner.subtitle}</div>
              </div>
              <button class="btn danger" data-action="banner-delete" data-id="${banner.id}">Remove</button>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }
  if (tab === "Analytics") {
    return `
      <div class="stack">
        <div class="surface" style="padding:18px">
          <div style="font-weight:900;margin-bottom:12px">Top Selling Products</div>
          <div class="stack">
            ${topProducts.map((product) => `
              <div style="display:flex;justify-content:space-between;gap:12px;align-items:center">
                <span>${product.name}</span>
                <strong>${product.reviews} reviews</strong>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="stack">
      <form class="surface" style="padding:18px" data-form="product-add">
        <div style="font-weight:900;margin-bottom:12px">Add Product</div>
        <div class="stack">
          <input class="field" name="name" placeholder="Product name" required />
          <input class="field" name="price" placeholder="Price" type="number" required />
          <input class="field" name="mrp" placeholder="MRP" type="number" required />
          <select class="field" name="category">
            ${CATEGORIES.filter((category) => category.name !== "All").map((category) => `<option>${category.name}</option>`).join("")}
          </select>
          <input class="field" name="emoji" placeholder="Emoji" value="🛒" />
          <input class="field" name="badge" placeholder="Badge" value="New" />
          <button class="btn primary" type="submit">Add Product</button>
        </div>
      </form>
      <div class="stack">
        ${productList.map((product) => `
          <div class="surface" style="padding:18px;display:flex;justify-content:space-between;gap:12px;align-items:center">
            <div>
              <div style="font-weight:900">${product.name}</div>
              <div class="meta-line">${product.category} • ${money(product.price)}</div>
            </div>
            <button class="btn danger" data-action="product-delete" data-id="${product.id}">Delete</button>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderDivyraj() {
  if (!state.divyrajUnlocked) {
    return `
      <div class="page dark-page" style="display:grid;place-items:center;padding:20px">
        <div class="dark-surface" style="width:min(420px,100%);padding:28px">
          <div style="display:flex;align-items:center;gap:14px;margin-bottom:20px">
            <div class="logo-mark">HR</div>
            <div>
              <div style="font-weight:900;font-size:20px">Private Dashboard</div>
              <div style="color:#8ea3b8;font-size:14px">Enter PIN to access your private earnings view</div>
            </div>
          </div>
          <form class="stack" data-form="divyraj-pin">
            <input class="field" type="password" placeholder="Enter PIN" value="${escapeHtml(state.divyrajPin)}" name="pin" style="background:#0b141d;color:#fff;border-color:#233243" />
            <button class="btn primary" type="submit">Unlock</button>
            <a href="/" style="text-align:center;color:#8ea3b8;text-decoration:none">Back to store</a>
          </form>
        </div>
      </div>
    `;
  }

  const orders = state.dashboardOrders.length ? state.dashboardOrders : DEMO_ORDERS;
  const thisMonthCollected = orders.reduce((sum, order) => sum + 15, 0);
  const allTimeCollected = orders.length * 15;
  const pending = Math.max(0, orders.length * 15 - thisMonthCollected);
  const retainerRows = state.platformFees;
  const outstanding = retainerRows.filter((row) => row.status === "Pending").reduce((sum, row) => sum + row.amount, 0);

  return `
    <div class="page">
      <div class="shell" style="padding:24px 0">
        <div class="dark-surface" style="padding:24px">
          <div style="display:flex;justify-content:space-between;gap:12px;align-items:center;flex-wrap:wrap">
            <div>
              <div class="eyebrow" style="color:#79c6a0">Private Dashboard</div>
              <div class="section-title" style="color:#fff">Divyraj Earnings</div>
            </div>
            <a class="btn ghost" href="/" style="color:#fff;border-color:#233243">Back to store</a>
          </div>

          <div class="stats-grid" style="margin-top:18px">
            <div class="dark-surface" style="padding:20px"><div style="color:#8ea3b8">This month</div><div style="font-size:30px;font-weight:900;margin-top:10px">${money(thisMonthCollected)}</div></div>
            <div class="dark-surface" style="padding:20px"><div style="color:#8ea3b8">All time</div><div style="font-size:30px;font-weight:900;margin-top:10px">${money(allTimeCollected)}</div></div>
            <div class="dark-surface" style="padding:20px"><div style="color:#8ea3b8">Pending</div><div style="font-size:30px;font-weight:900;margin-top:10px">${money(pending)}</div></div>
            <div class="dark-surface" style="padding:20px"><div style="color:#8ea3b8">Retainer status</div><div style="font-size:30px;font-weight:900;margin-top:10px">${retainerRows.some((row) => row.status === "Pending") ? "Pending" : "Completed"}</div></div>
          </div>

          <div class="surface" style="margin-top:18px;padding:18px">
            <div style="font-weight:900;margin-bottom:12px">Live Order Feed</div>
            <div class="stack">
              ${orders.map((order) => `
                <div class="surface" style="padding:16px;display:grid;grid-template-columns:${window.innerWidth < 768 ? "1fr" : "1.2fr auto auto"};gap:12px;align-items:center">
                  <div>
                    <div style="font-weight:900">${order.id}</div>
                    <div class="meta-line">${prettyDate(order.createdAt)}</div>
                  </div>
                  <div><strong>${money(order.total)}</strong></div>
                  <div><span class="badge green">${order.status}</span></div>
                </div>
              `).join("")}
            </div>
          </div>

          <div class="surface" style="margin-top:18px;padding:18px">
            <div style="font-weight:900;margin-bottom:12px">Monthly Retainer</div>
            <div class="stack">
              ${retainerRows.map((row) => `
                <div style="display:flex;justify-content:space-between;gap:12px;align-items:center">
                  <span>${row.month}</span>
                  <strong>${money(row.amount)} • ${row.status}</strong>
                </div>
              `).join("")}
              <div class="line"></div>
              <div style="display:flex;justify-content:space-between"><span>Total outstanding</span><strong>${money(outstanding)}</strong></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function badgeTone(badge) {
  const value = String(badge || "").toLowerCase();
  if (value.includes("best") || value.includes("fresh")) return "green";
  if (value.includes("premium") || value.includes("party") || value.includes("festive")) return "orange";
  if (value.includes("hot")) return "dark";
  return "";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function bindDynamicState() {
  const searchInput = root.querySelector('[data-action="search"]');
  if (searchInput) searchInput.value = state.query;
  const schedule = root.querySelector('[data-field="schedule"]');
  if (schedule) schedule.value = state.checkout.schedule;
  const payment = root.querySelector('[data-field="paymentMethod"]');
  if (payment) payment.value = state.checkout.paymentMethod;
  const delivery = root.querySelector('[data-action="mode"][data-value="' + state.checkout.deliveryMode + '"]');
  if (delivery) delivery.classList.add("primary");
}

function handleClick(event) {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;
  const value = target.dataset.value;
  const id = target.dataset.id;
  const orderId = target.dataset.order;
  const key = target.dataset.key;
  const code = target.dataset.code;

  if (action === "close-all") return closeOverlays();
  if (action === "cart-open") {
    state.cartOpen = true;
    state.accountOpen = false;
    state.checkoutOpen = false;
    render();
    return;
  }
  if (action === "account-open") {
    state.accountOpen = true;
    state.mode = "account";
    state.cartOpen = false;
    state.checkout.name = state.profile.name;
    state.checkout.email = state.profile.email;
    state.checkout.phone = state.profile.phone;
    state.checkout.address = state.profile.address;
    render();
    return;
  }
  if (action === "checkout-open") {
    state.checkoutOpen = true;
    state.cartOpen = false;
    state.checkout.name = state.profile.name;
    state.checkout.email = state.profile.email;
    state.checkout.phone = state.profile.phone;
    state.checkout.address = state.profile.address;
    render();
    return;
  }
  if (action === "close-product") {
    state.selectedProduct = null;
    render();
    return;
  }
  if (action === "account-close") {
    state.accountOpen = false;
    state.mode = "delivery";
    render();
    return;
  }
  if (action === "open-product") {
    const product = findProduct(id);
    if (product) viewProduct(product);
    return;
  }
  if (action === "add-cart") {
    addToCart(id, 1);
    return;
  }
  if (action === "remove-item") {
    removeFromCart(id);
    return;
  }
  if (action === "qty-increase") {
    updateCartQuantity(id, 1);
    return;
  }
  if (action === "qty-decrease") {
    updateCartQuantity(id, -1);
    return;
  }
  if (action === "toggle-wishlist") {
    toggleWishlist(id);
    return;
  }
  if (action === "category-set") {
    state.category = value;
    render();
    const top = document.getElementById("products-grid");
    if (top) top.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  if (action === "mode-tab") {
    state.mode = value;
    if (value === "account") {
      state.accountOpen = true;
      state.accountTab = "Profile";
    } else if (value === "wishlist") {
      state.accountOpen = true;
      state.accountTab = "Wishlist";
    } else if (value === "orders") {
      state.accountOpen = true;
      state.accountTab = "Orders";
    } else if (value === "pickup") {
      state.checkout.deliveryMode = "pickup";
      state.checkoutOpen = true;
      state.accountOpen = false;
    } else if (value === "delivery") {
      state.checkout.deliveryMode = "delivery";
      state.accountOpen = false;
    }
    render();
    return;
  }
  if (action === "search-chip") {
    state.query = value;
    render();
    return;
  }
  if (action === "banner-index") {
    state.carouselIndex = Number(value) || 0;
    render();
    return;
  }
  if (action === "scroll-products") {
    document.getElementById("products-grid")?.scrollIntoView({ behavior: "smooth" });
    return;
  }
  if (action === "scroll-top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  if (action === "mobile-nav") {
    state.mobileNav = value;
    if (value === "home") window.scrollTo({ top: 0, behavior: "smooth" });
    if (value === "categories") document.getElementById("products-grid")?.scrollIntoView({ behavior: "smooth" });
    if (value === "cart") state.cartOpen = true;
    if (value === "wishlist") {
      state.accountOpen = true;
      state.accountTab = "Wishlist";
      state.mode = "wishlist";
    }
    if (value === "account") {
      state.accountOpen = true;
      state.mode = "account";
    }
    render();
    return;
  }
  if (action === "tab") {
    state.accountTab = value;
    render();
    return;
  }
  if (action === "mode") {
    state.checkout.deliveryMode = value;
    render();
    return;
  }
  if (action === "reorder") {
    const order = state.orders.find((item) => item.id === orderId);
    if (order) reorderFrom(order);
    return;
  }
  if (action === "preorder-demo") {
    showToast("Preorder saved");
    return;
  }
  if (action === "wallet-topup") {
    state.wallet.balance += 500;
    state.wallet.transactions.unshift({ id: `txn-${Date.now()}`, label: "Wallet top-up", amount: 500, type: "credit" });
    persist();
    render();
    showToast("₹500 added");
    return;
  }
  if (action === "coupon-save") {
    showToast(`${code} saved`);
    return;
  }
  if (action === "toggle-notification") {
    state.notifications[key] = !state.notifications[key];
    persist();
    render();
    return;
  }
  if (action === "support-call") {
    location.href = `tel:${STORE.phone}`;
    return;
  }
  if (action === "support-whatsapp") {
    window.open(`https://wa.me/${STORE.whatsapp}`, "_blank");
    return;
  }
  if (action === "support-email") {
    location.href = `mailto:${STORE.email}`;
    return;
  }
  if (action === "logout") {
    state.profile = { ...DEFAULT_PROFILE };
    persist();
    state.accountTab = "Profile";
    render();
    showToast("Logged out");
    return;
  }
  if (action === "place-order") {
    placeOrder();
    return;
  }
  if (action === "demo-google") {
    signupDemo();
    return;
  }
  if (action === "auth-mode") {
    state.authMode = value;
    render();
    return;
  }
  if (action === "product-delete") {
    state.adminProducts = currentProducts().filter((product) => product.id !== id);
    state.products = currentProducts().filter((product) => product.id !== id);
    persist();
    render();
    return;
  }
  if (action === "banner-delete") {
    state.adminBanners = currentBanners().filter((banner) => banner.id !== id);
    state.banners = currentBanners().filter((banner) => banner.id !== id);
    persist();
    render();
    return;
  }
  if (action === "admin-tab") {
    state.adminTab = value;
    render();
    return;
  }
}

function handleInput(event) {
  const target = event.target;
  if (!target) return;

  if (target.matches('[data-action="search"]')) {
    state.query = target.value;
    render();
    return;
  }
  if (target.matches('[data-field]')) {
    const field = target.dataset.field;
    state.checkout[field] = target.value;
    if (field === "name" || field === "email" || field === "phone" || field === "address") {
      state.profile[field] = target.value;
      persist();
    }
    if (field === "schedule" || field === "paymentMethod" || field === "note") persist();
    return;
  }
}

function handleSubmit(event) {
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) return;
  if (form.matches('[data-form="profile-save"]')) {
    event.preventDefault();
    const data = new FormData(form);
    state.profile = {
      name: data.get("name") || "",
      email: data.get("email") || "",
      phone: data.get("phone") || "",
      address: data.get("address") || "",
    };
    persist();
    showToast("Profile saved");
    return;
  }
  if (form.matches('[data-form="auth"]')) {
    event.preventDefault();
    state.profile = {
      name: form.elements.name?.value || state.profile.name,
      email: form.elements.email?.value || state.profile.email,
      phone: state.profile.phone,
      address: state.profile.address,
    };
    persist();
    showToast(state.authMode === "signin" ? "Signed in" : "Account created");
    state.authOpen = false;
    render();
    return;
  }
  if (form.matches('[data-form="admin-pin"]')) {
    event.preventDefault();
    const pin = form.elements.pin?.value;
    if (pin === "1234") {
      state.adminUnlocked = true;
      state.adminPin = "";
      render();
    } else {
      alert("Wrong PIN");
    }
    return;
  }
  if (form.matches('[data-form="divyraj-pin"]')) {
    event.preventDefault();
    const pin = form.elements.pin?.value;
    if (pin === "9999") {
      state.divyrajUnlocked = true;
      state.divyrajPin = "";
      render();
    } else {
      alert("Wrong PIN");
    }
    return;
  }
  if (form.matches('[data-form="product-add"]')) {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    if (!name) return;
    const price = Number(data.get("price") || 0);
    const mrp = Number(data.get("mrp") || 0);
    const category = String(data.get("category") || "All");
    const emoji = String(data.get("emoji") || "🛒");
    const badge = String(data.get("badge") || "New");
    const product = {
      id: `admin-${Date.now()}`,
      name,
      category,
      size: "1 unit",
      price,
      mrp,
      rating: 4.4,
      reviews: 1,
      badge,
      emoji,
      stock: "Ready to dispatch",
    };
    state.adminProducts = [product, ...currentProducts()];
    state.products = [product, ...currentProducts()];
    persist();
    form.reset();
    render();
    showToast("Product added");
    return;
  }
  if (form.matches('[data-form="banner-add"]')) {
    event.preventDefault();
    const data = new FormData(form);
    const banner = {
      id: `banner-${Date.now()}`,
      title: String(data.get("title") || "").trim(),
      subtitle: String(data.get("subtitle") || "").trim(),
      cta: String(data.get("cta") || "Shop now").trim(),
      emoji: String(data.get("emoji") || "🖼️").trim(),
      gradient: "linear-gradient(135deg, #1e9b6d, #104f4f)",
    };
    state.adminBanners = [banner, ...currentBanners()];
    state.banners = [banner, ...currentBanners()];
    persist();
    form.reset();
    render();
    showToast("Banner added");
    return;
  }
  if (form.matches('[data-form="checkout"]')) {
    event.preventDefault();
    const data = new FormData(form);
    state.checkout = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      address: String(data.get("address") || ""),
      note: String(data.get("note") || ""),
      deliveryMode: state.checkout.deliveryMode,
      paymentMethod: String(data.get("paymentMethod") || "UPI"),
      schedule: String(data.get("schedule") || "asap"),
    };
    state.profile = {
      name: state.checkout.name,
      email: state.checkout.email,
      phone: state.checkout.phone,
      address: state.checkout.address,
    };
    persist();
    placeOrder();
    return;
  }
}

function wireGlobalListeners() {
  document.addEventListener("click", handleClick);
  document.addEventListener("input", handleInput);
  document.addEventListener("submit", handleSubmit);
  window.addEventListener("storage", () => {
    state.profile = readStorage(STORAGE_KEYS.profile, DEFAULT_PROFILE);
    state.wallet = readStorage(STORAGE_KEYS.wallet, DEFAULT_WALLET);
    state.notifications = readStorage(STORAGE_KEYS.notifications, DEFAULT_NOTIFICATIONS);
    state.wishlist = readStorage(STORAGE_KEYS.wishlist, []);
    state.cart = readStorage(STORAGE_KEYS.cart, []);
    state.recentlyViewed = readStorage(STORAGE_KEYS.recentlyViewed, []);
    state.products = readStorage(STORAGE_KEYS.products, DEFAULT_PRODUCTS);
    state.banners = readStorage(STORAGE_KEYS.banners, DEFAULT_BANNERS);
    state.orders = readStorage(STORAGE_KEYS.orders, DEMO_ORDERS);
    state.adminProducts = readStorage(STORAGE_KEYS.adminProducts, DEFAULT_PRODUCTS);
    state.adminBanners = readStorage(STORAGE_KEYS.adminBanners, DEFAULT_BANNERS);
    state.platformFees = readStorage(STORAGE_KEYS.platformFees, makePlatformFees());
    state.dashboardOrders = readStorage(STORAGE_KEYS.dashboardOrders, DEMO_ORDERS);
    render();
  });
}

wireGlobalListeners();
render();

if (route === "home") {
  window.setInterval(() => {
    state.carouselIndex = (state.carouselIndex + 1) % currentBanners().length;
    render();
  }, 3500);
}
