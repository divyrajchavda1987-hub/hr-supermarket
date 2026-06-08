import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { adminEmails, firebaseConfig, storeConfig } from "./firebase-config.js";

const page = document.body.dataset.page || "home";
const modal = document.querySelector("[data-modal]");
const authToggleButton = document.querySelector("[data-auth-toggle]");
const authForm = document.querySelector("[data-auth-form]");
const googleButton = document.querySelector("[data-google-signin]");
const saveButton = document.querySelector("[data-save-store]");
const toast = document.querySelector("[data-toast]");
const ratingAverage = document.querySelector("[data-rating-average]");
const ratingCount = document.querySelector("[data-rating-count]");
const storeStatus = document.querySelector("[data-store-status]");
const statusDot = document.querySelector("[data-status-dot]");
const statusBadge = document.querySelector("[data-status-badge]");

const STORAGE_KEYS = {
  cart: "hr-supermarket-cart",
  reorderHistory: "hr-supermarket-reorder-history",
  saved: "hr-supermarket-saved",
};

const SESSION_VISIT_KEY = "hr-supermarket-visit-logged";
const ORDER_STATUSES = [
  "Order placed",
  "Accepted",
  "Packing",
  "Out for delivery",
  "Ready for pickup",
  "Delivered",
  "Cancelled",
];

const weeklyHours = {
  0: null,
  1: { open: 8, close: 21 },
  2: { open: 8, close: 21 },
  3: { open: 8, close: 21 },
  4: { open: 8, close: 21 },
  5: { open: 8, close: 21 },
  6: { open: 8, close: 21 },
};

const fallbackPhotos = [
  {
    id: "photo-1",
    title: "Storefront",
    imageUrl:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 450'%3E%3Crect width='600' height='450' fill='%23ddd3c2'/%3E%3Crect x='90' y='140' width='420' height='210' rx='18' fill='%23f7f2e8'/%3E%3Crect x='120' y='165' width='360' height='74' rx='12' fill='%231d6b47'/%3E%3Crect x='154' y='255' width='110' height='70' fill='%23a4c84c'/%3E%3Crect x='290' y='255' width='150' height='70' fill='%23ffffff'/%3E%3C/svg%3E",
  },
  {
    id: "photo-2",
    title: "Shelves",
    imageUrl:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 450'%3E%3Crect width='600' height='450' fill='%23ece2d0'/%3E%3Crect x='80' y='90' width='120' height='260' fill='%23d4c9b9'/%3E%3Crect x='240' y='90' width='120' height='260' fill='%23d4c9b9'/%3E%3Crect x='400' y='90' width='120' height='260' fill='%23d4c9b9'/%3E%3Crect x='102' y='114' width='76' height='28' fill='%239ac54c'/%3E%3Crect x='102' y='160' width='76' height='28' fill='%23ffffff'/%3E%3Crect x='262' y='114' width='76' height='28' fill='%231d6b47'/%3E%3C/svg%3E",
  },
  {
    id: "photo-3",
    title: "Local stop",
    imageUrl:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 450'%3E%3Crect width='600' height='450' fill='%23eae2d4'/%3E%3Cpath d='M0 315h600v135H0z' fill='%23ccbba1'/%3E%3Crect x='130' y='170' width='340' height='116' rx='18' fill='%23f5efe6'/%3E%3Crect x='165' y='138' width='270' height='50' rx='12' fill='%231d6b47'/%3E%3C/svg%3E",
  },
];

const fallbackProducts = [
  { id: "prod-1", title: "Aashirvaad Atta", category: "Staples", variant: "5kg", price: "Rs 285", description: "Whole wheat flour for daily rotis.", offerText: "Staple deal", pickupMinutes: 10, estimatedDelivery: "20-25 min", stockStatus: "in-stock", orderCountToday: 29, substituteLabel: "Try local chakki atta", imageUrl: fallbackPhotos[0].imageUrl },
  { id: "prod-2", title: "Fortune Rice", category: "Staples", variant: "5kg", price: "Rs 349", description: "Everyday rice for home meals.", offerText: "", pickupMinutes: 12, estimatedDelivery: "22-28 min", stockStatus: "in-stock", orderCountToday: 18, substituteLabel: "Sona masuri available", imageUrl: fallbackPhotos[1].imageUrl },
  { id: "prod-3", title: "Toor Dal", category: "Staples", variant: "1kg", price: "Rs 158", description: "Fresh arhar dal for daily cooking.", offerText: "Kitchen value", pickupMinutes: 10, estimatedDelivery: "18-22 min", stockStatus: "in-stock", orderCountToday: 21, substituteLabel: "Moong dal available", imageUrl: fallbackPhotos[2].imageUrl },
  { id: "prod-4", title: "Tata Salt", category: "Staples", variant: "1kg", price: "Rs 28", description: "Iodized salt for regular use.", offerText: "", pickupMinutes: 8, estimatedDelivery: "18-20 min", stockStatus: "in-stock", orderCountToday: 31, substituteLabel: "Vacuum salt available", imageUrl: fallbackPhotos[0].imageUrl },
  { id: "prod-5", title: "Amul Gold Milk", category: "Dairy", variant: "1L", price: "Rs 68", description: "Fresh milk for tea and family use.", offerText: "Daily fresh", pickupMinutes: 8, estimatedDelivery: "16-20 min", stockStatus: "low", orderCountToday: 34, substituteLabel: "Toned milk available", imageUrl: fallbackPhotos[1].imageUrl },
  { id: "prod-6", title: "Amul Butter", category: "Dairy", variant: "500g", price: "Rs 285", description: "Creamy butter for breakfast and cooking.", offerText: "", pickupMinutes: 10, estimatedDelivery: "18-22 min", stockStatus: "in-stock", orderCountToday: 9, substituteLabel: "Cheese spread available", imageUrl: fallbackPhotos[2].imageUrl },
  { id: "prod-7", title: "Curd Cup", category: "Dairy", variant: "400g", price: "Rs 42", description: "Chilled curd ready for meals.", offerText: "", pickupMinutes: 8, estimatedDelivery: "16-20 min", stockStatus: "in-stock", orderCountToday: 12, substituteLabel: "Homestyle dahi available", imageUrl: fallbackPhotos[0].imageUrl },
  { id: "prod-8", title: "Lay's Family Pack", category: "Snacks", variant: "Pack", price: "Rs 45", description: "Crunchy chips for tea-time snacking.", offerText: "Popular", pickupMinutes: 8, estimatedDelivery: "18-22 min", stockStatus: "low", orderCountToday: 24, substituteLabel: "Wafers available", imageUrl: fallbackPhotos[1].imageUrl },
  { id: "prod-9", title: "Parle-G Biscuits", category: "Snacks", variant: "Pack", price: "Rs 10", description: "Classic biscuits for all ages.", offerText: "", pickupMinutes: 8, estimatedDelivery: "18-22 min", stockStatus: "in-stock", orderCountToday: 26, substituteLabel: "Marie available", imageUrl: fallbackPhotos[2].imageUrl },
  { id: "prod-10", title: "Maggi Noodles", category: "Snacks", variant: "4 pack", price: "Rs 56", description: "Quick noodles for instant meals.", offerText: "Quick buy", pickupMinutes: 9, estimatedDelivery: "18-22 min", stockStatus: "in-stock", orderCountToday: 17, substituteLabel: "Yippee available", imageUrl: fallbackPhotos[0].imageUrl },
  { id: "prod-11", title: "Coca-Cola", category: "Beverages", variant: "2L", price: "Rs 95", description: "Cold drink for family sharing.", offerText: "", pickupMinutes: 10, estimatedDelivery: "20-24 min", stockStatus: "in-stock", orderCountToday: 14, substituteLabel: "Pepsi available", imageUrl: fallbackPhotos[1].imageUrl },
  { id: "prod-12", title: "Mango Juice", category: "Beverages", variant: "1L", price: "Rs 110", description: "Fruit drink for summer refreshment.", offerText: "Summer special", pickupMinutes: 10, estimatedDelivery: "20-24 min", stockStatus: "in-stock", orderCountToday: 20, substituteLabel: "Mixed fruit juice available", imageUrl: fallbackPhotos[2].imageUrl },
  { id: "prod-13", title: "Bananas", category: "Fruits", variant: "1 dozen", price: "Rs 60", description: "Fresh bananas for home and kids.", offerText: "", pickupMinutes: 8, estimatedDelivery: "16-20 min", stockStatus: "in-stock", orderCountToday: 16, substituteLabel: "Seasonal fruit mix available", imageUrl: fallbackPhotos[0].imageUrl },
  { id: "prod-14", title: "Apples", category: "Fruits", variant: "1kg", price: "Rs 145", description: "Fresh apples for everyday snacking.", offerText: "", pickupMinutes: 8, estimatedDelivery: "16-20 min", stockStatus: "in-stock", orderCountToday: 13, substituteLabel: "Pears available", imageUrl: fallbackPhotos[1].imageUrl },
  { id: "prod-15", title: "Potato", category: "Vegetables", variant: "1kg", price: "Rs 30", description: "Kitchen staple for every meal.", offerText: "Fresh stock", pickupMinutes: 8, estimatedDelivery: "16-20 min", stockStatus: "in-stock", orderCountToday: 28, substituteLabel: "New potato stock available", imageUrl: fallbackPhotos[2].imageUrl },
  { id: "prod-16", title: "Onion", category: "Vegetables", variant: "1kg", price: "Rs 38", description: "Daily-use onion for cooking.", offerText: "", pickupMinutes: 8, estimatedDelivery: "16-20 min", stockStatus: "low", orderCountToday: 23, substituteLabel: "Small onion stock available", imageUrl: fallbackPhotos[0].imageUrl },
  { id: "prod-17", title: "Tomato", category: "Vegetables", variant: "1kg", price: "Rs 32", description: "Fresh tomatoes for cooking and salads.", offerText: "", pickupMinutes: 8, estimatedDelivery: "16-20 min", stockStatus: "in-stock", orderCountToday: 19, substituteLabel: "Hybrid tomato available", imageUrl: fallbackPhotos[1].imageUrl },
  { id: "prod-18", title: "Surf Excel", category: "Home Care", variant: "1kg", price: "Rs 225", description: "Detergent powder for laundry cleaning.", offerText: "", pickupMinutes: 10, estimatedDelivery: "20-25 min", stockStatus: "in-stock", orderCountToday: 7, substituteLabel: "Rin available", imageUrl: fallbackPhotos[2].imageUrl },
  { id: "prod-19", title: "Dishwash Bar", category: "Home Care", variant: "3 pack", price: "Rs 55", description: "Strong grease-cutting dish bars.", offerText: "", pickupMinutes: 10, estimatedDelivery: "20-25 min", stockStatus: "in-stock", orderCountToday: 6, substituteLabel: "Liquid dishwash available", imageUrl: fallbackPhotos[0].imageUrl },
  { id: "prod-20", title: "Bath Soap", category: "Personal Care", variant: "Value pack", price: "Rs 120", description: "Daily bath soap family pack.", offerText: "Value pack", pickupMinutes: 10, estimatedDelivery: "20-25 min", stockStatus: "in-stock", orderCountToday: 8, substituteLabel: "Body wash available", imageUrl: fallbackPhotos[1].imageUrl },
  { id: "prod-21", title: "Toothpaste", category: "Personal Care", variant: "Family pack", price: "Rs 135", description: "Family dental care essential.", offerText: "", pickupMinutes: 10, estimatedDelivery: "20-25 min", stockStatus: "in-stock", orderCountToday: 5, substituteLabel: "Herbal toothpaste available", imageUrl: fallbackPhotos[2].imageUrl },
  { id: "prod-22", title: "Groundnut Oil", category: "Cooking Oil", variant: "1L", price: "Rs 190", description: "Cooking oil for regular home use.", offerText: "", pickupMinutes: 10, estimatedDelivery: "20-25 min", stockStatus: "in-stock", orderCountToday: 12, substituteLabel: "Sunflower oil available", imageUrl: fallbackPhotos[0].imageUrl },
  { id: "prod-23", title: "Tea Powder", category: "Tea & Coffee", variant: "500g", price: "Rs 165", description: "Strong tea powder for daily cups.", offerText: "Tea time", pickupMinutes: 10, estimatedDelivery: "20-25 min", stockStatus: "in-stock", orderCountToday: 11, substituteLabel: "Masala tea available", imageUrl: fallbackPhotos[1].imageUrl },
  { id: "prod-24", title: "Instant Coffee", category: "Tea & Coffee", variant: "100g", price: "Rs 155", description: "Quick coffee for home and office.", offerText: "", pickupMinutes: 10, estimatedDelivery: "20-25 min", stockStatus: "in-stock", orderCountToday: 4, substituteLabel: "Filter coffee available", imageUrl: fallbackPhotos[2].imageUrl },
];

function defaultStoreSettings() {
  return {
    freeRadiusKm: 2,
    paidRadiusKm: 5,
    maxRadiusKm: 7,
    deliveryCharge: 20,
    minimumOrder: 150,
    freeDeliveryAbove: 500,
    platformFee: 5,
    packingFee: 10,
    deliveryEnabled: true,
    pickupEnabled: true,
    pickupSlotLabel: "Pickup in 20-30 min",
    upiId: "",
    storeLat: 22.7271,
    storeLng: 71.6486,
  };
}

function getSavedCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.cart) || "[]");
  } catch {
    return [];
  }
}

const state = {
  app: null,
  auth: null,
  authMode: "signin",
  cart: getSavedCart(),
  categoryFilter: "All",
  db: null,
  firebaseReady: Object.values(firebaseConfig).every((value) => String(value).trim()),
  offers: [],
  offersOnly: new URLSearchParams(window.location.search).get("offers") === "1",
  checkoutMode: "delivery",
  orderUnsubscribe: null,
  orders: [],
  pageViews: [],
  photos: fallbackPhotos,
  products: [...fallbackProducts],
  reviews: [
    { id: "review-1", authorName: "Krishhh Chavda", rating: 5, message: "Best near ganpati.", createdLabel: "Edited 6 months ago" },
    { id: "review-2", authorName: "Sahill Makwana", rating: 5, message: "Nice.", createdLabel: "6 months ago" },
  ],
  searchTerm: "",
  settings: defaultStoreSettings(),
  user: null,
  userLocation: null,
};

function saveCart() {
  localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(state.cart));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function showToast(message) {
  if (!toast) {
    return;
  }
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    toast.hidden = true;
  }, 2600);
}

function explainFirebaseError(error, action) {
  const code = String(error?.code || "");
  if (code.includes("permission-denied")) {
    return `${action} blocked. Check Firestore rules and sign in with the correct account.`;
  }
  if (code.includes("unauthenticated")) {
    return `Please sign in again to ${action.toLowerCase()}.`;
  }
  if (code.includes("failed-precondition")) {
    return `${action} failed because Firestore may not be created yet.`;
  }
  if (code.includes("unauthorized-domain")) {
    return "This website domain is not yet approved in Firebase Authentication.";
  }
  return `${action} failed. Please recheck Firebase setup and Firestore rules.`;
}

function parsePrice(price) {
  const value = Number(String(price || "0").replace(/[^\d.]/g, ""));
  return Number.isFinite(value) ? value : 0;
}

function formatCurrency(amount) {
  return `Rs ${Math.round(Number(amount || 0))}`;
}

function formatHour(hour) {
  const period = hour >= 12 ? "PM" : "AM";
  const normalized = hour % 12 || 12;
  return `${normalized}:00 ${period}`;
}

function formatRelative(input) {
  if (!input) {
    return "Just now";
  }
  const date = input instanceof Date ? input : new Date(input);
  const hours = Math.floor((Date.now() - date.getTime()) / 3600000);
  if (hours < 1) {
    return "Just now";
  }
  if (hours < 24) {
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  }
  const days = Math.floor(hours / 24);
  if (days < 30) {
    return `${days} day${days === 1 ? "" : "s"} ago`;
  }
  const months = Math.floor(days / 30);
  return `${months} month${months === 1 ? "" : "s"} ago`;
}

function formatCountdown(input) {
  if (!input) {
    return "Offer live";
  }
  const diff = new Date(input).getTime() - Date.now();
  if (diff <= 0) {
    return "Offer ended";
  }
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(hours / 24);
  return days >= 1
    ? `Ends in ${days} day${days === 1 ? "" : "s"}`
    : `Ends in ${Math.max(1, hours)} hour${hours === 1 ? "" : "s"}`;
}

function getDefaultProductImage(title = "Product", category = "Store item") {
  const safeTitle = encodeURIComponent(title.slice(0, 14));
  const safeCategory = encodeURIComponent(category.slice(0, 14));
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Crect width='600' height='600' fill='%23efe6d9'/%3E%3Crect x='90' y='90' width='420' height='420' rx='42' fill='%23ffffff'/%3E%3Crect x='150' y='138' width='300' height='186' rx='30' fill='%231d6b47'/%3E%3Crect x='150' y='362' width='220' height='34' rx='17' fill='%23dfead6'/%3E%3Crect x='150' y='416' width='160' height='24' rx='12' fill='%23ece7df'/%3E%3Ctext x='300' y='230' font-size='46' text-anchor='middle' fill='white' font-family='Arial' font-weight='700'%3E${safeTitle}%3C/text%3E%3Ctext x='300' y='285' font-size='24' text-anchor='middle' fill='%23dff0e5' font-family='Arial'%3E${safeCategory}%3C/text%3E%3C/svg%3E`;
}

function getDateParts(date = new Date()) {
  const year = date.getFullYear();
  const month = `${year}-${String(date.getMonth() + 1).padStart(2, "0")}`;
  const day = `${month}-${String(date.getDate()).padStart(2, "0")}`;
  return { year: String(year), month, day };
}

function isAdmin() {
  return Boolean(state.user?.email && adminEmails.includes(state.user.email));
}

function normalizeSettings(data = {}) {
  const defaults = defaultStoreSettings();
  return {
    ...defaults,
    ...data,
    freeRadiusKm: Number(data.freeRadiusKm ?? defaults.freeRadiusKm),
    paidRadiusKm: Number(data.paidRadiusKm ?? defaults.paidRadiusKm),
    maxRadiusKm: Number(data.maxRadiusKm ?? defaults.maxRadiusKm),
    deliveryCharge: Number(data.deliveryCharge ?? defaults.deliveryCharge),
    minimumOrder: Number(data.minimumOrder ?? defaults.minimumOrder),
    freeDeliveryAbove: Number(data.freeDeliveryAbove ?? defaults.freeDeliveryAbove),
    platformFee: Number(data.platformFee ?? defaults.platformFee),
    packingFee: Number(data.packingFee ?? defaults.packingFee),
    deliveryEnabled: String(data.deliveryEnabled ?? defaults.deliveryEnabled) !== "false",
    pickupEnabled: String(data.pickupEnabled ?? defaults.pickupEnabled) !== "false",
    storeLat: Number(data.storeLat ?? defaults.storeLat),
    storeLng: Number(data.storeLng ?? defaults.storeLng),
  };
}

function setModalOpen(isOpen) {
  if (!modal) {
    return;
  }
  modal.hidden = !isOpen;
  document.body.style.overflow = isOpen ? "hidden" : "";
}

function setAuthMode(mode) {
  state.authMode = mode;
  document.querySelectorAll("[data-auth-mode]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.authMode === mode);
  });
  const signupOnly = document.querySelector("[data-signup-only]");
  const submit = document.querySelector("[data-auth-submit]");
  if (signupOnly) {
    signupOnly.closest("label").hidden = mode !== "signup";
    signupOnly.required = mode === "signup";
  }
  if (submit) {
    submit.textContent = mode === "signup" ? "Create account" : "Sign in";
  }
}

function updateStoreStatus() {
  if (!storeStatus) {
    return;
  }
  const now = new Date();
  const schedule = weeklyHours[now.getDay()];
  let isOpen = false;
  let text = "Closed today";
  if (schedule) {
    if (now.getHours() >= schedule.open && now.getHours() < schedule.close) {
      isOpen = true;
      text = `Open now until ${formatHour(schedule.close)}`;
    } else if (now.getHours() < schedule.open) {
      text = `Closed now, opens at ${formatHour(schedule.open)}`;
    } else {
      text = "Closed now";
    }
  }
  storeStatus.textContent = text;
  statusDot?.classList.toggle("is-closed", !isOpen);
  statusBadge?.classList.toggle("is-closed", !isOpen);
}

function getSavedStore() {
  return localStorage.getItem(STORAGE_KEYS.saved) === "true";
}

function renderSaveButton() {
  if (!saveButton) {
    return;
  }
  const saved = getSavedStore();
  saveButton.textContent = saved ? "Saved store" : "Save store";
  saveButton.classList.toggle("is-active", saved);
}

function renderAuthButton() {
  if (authToggleButton) {
    authToggleButton.textContent = state.user ? "Sign out" : "Sign in";
  }
  document.querySelectorAll("[data-open-auth='true']").forEach((button) => {
    button.textContent = state.user ? "Continue signed in" : "Sign in";
  });
  document.querySelectorAll("[data-admin-link]").forEach((link) => {
    link.hidden = !isAdmin();
  });
}

function getFestivalTheme() {
  const month = new Date().getMonth();
  if (month >= 9 && month <= 10) {
    return {
      kicker: "Festival theme",
      title: "Diwali savings and festive essentials",
      description: "Dry fruits, gifting packs, snacks, and festive home picks.",
    };
  }
  if (month >= 3 && month <= 5) {
    return {
      kicker: "Summer picks",
      title: "Cooling drinks, quick snacks, and daily summer needs",
      description: "Refreshment-ready products for hot days and family shopping.",
    };
  }
  return {
    kicker: "Seasonal picks",
    title: "Everyday value with timely store highlights",
    description: "Fresh offers, regular essentials, and quick local shopping.",
  };
}

function haversineKm(lat1, lon1, lat2, lon2) {
  const toRad = (value) => (value * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function getDistanceKm() {
  if (!state.userLocation) {
    return null;
  }
  return haversineKm(
    state.settings.storeLat,
    state.settings.storeLng,
    state.userLocation.latitude,
    state.userLocation.longitude
  );
}

function getCartItems() {
  return state.cart
    .map((entry) => {
      const product = state.products.find((item) => item.id === entry.productId);
      return product ? { ...product, quantity: Number(entry.quantity || 1) } : null;
    })
    .filter(Boolean);
}

function getCartSubtotal() {
  return getCartItems().reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0);
}

function getDeliveryAssessment(mode = "delivery") {
  const distanceKm = getDistanceKm();
  const subtotal = getCartSubtotal();
  const settings = state.settings;

  if (mode === "pickup") {
    return {
      deliveryCharge: 0,
      distanceKm,
      eligible: settings.pickupEnabled,
      message: settings.pickupEnabled ? settings.pickupSlotLabel : "Pickup is disabled right now.",
    };
  }

  if (!settings.deliveryEnabled) {
    return {
      deliveryCharge: 0,
      distanceKm,
      eligible: false,
      message: "Home delivery is currently disabled.",
    };
  }

  if (subtotal < settings.minimumOrder) {
    return {
      deliveryCharge: settings.deliveryCharge,
      distanceKm,
      eligible: false,
      message: `Add ${formatCurrency(settings.minimumOrder - subtotal)} more for delivery.`,
    };
  }

  if (distanceKm != null && distanceKm > settings.maxRadiusKm) {
    return {
      deliveryCharge: 0,
      distanceKm,
      eligible: false,
      message: `Delivery is available up to ${settings.maxRadiusKm} km from the store.`,
    };
  }

  if (subtotal >= settings.freeDeliveryAbove || (distanceKm != null && distanceKm <= settings.freeRadiusKm)) {
    return {
      deliveryCharge: 0,
      distanceKm,
      eligible: true,
      message: "Free delivery available for this order.",
    };
  }

  if (distanceKm == null) {
    return {
      deliveryCharge: settings.deliveryCharge,
      distanceKm,
      eligible: true,
      message: "Detect location for exact delivery eligibility. Standard delivery charge is applied for now.",
    };
  }

  if (distanceKm <= settings.paidRadiusKm || distanceKm <= settings.maxRadiusKm) {
    return {
      deliveryCharge: settings.deliveryCharge,
      distanceKm,
      eligible: true,
      message: `${formatCurrency(settings.deliveryCharge)} delivery charge applies for this area.`,
    };
  }

  return {
    deliveryCharge: 0,
    distanceKm,
    eligible: false,
    message: "Delivery is unavailable for this location.",
  };
}

function getCheckoutSummary(mode = "delivery") {
  const subtotal = getCartSubtotal();
  const assessment = getDeliveryAssessment(mode);
  const platformFee = state.settings.platformFee;
  const packingFee = state.settings.packingFee;
  const total = subtotal + platformFee + packingFee + assessment.deliveryCharge;
  return {
    subtotal,
    platformFee,
    packingFee,
    deliveryCharge: assessment.deliveryCharge,
    total,
    assessment,
  };
}

function getProductQuantity(productId) {
  return state.cart.find((entry) => entry.productId === productId)?.quantity || 0;
}

function saveReorderItem(productId) {
  const existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.reorderHistory) || "[]").filter(
    (entry) => entry !== productId
  );
  existing.unshift(productId);
  localStorage.setItem(STORAGE_KEYS.reorderHistory, JSON.stringify(existing.slice(0, 8)));
}

function getReorderHistory() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.reorderHistory) || "[]");
  } catch {
    return [];
  }
}

function setCartQuantity(productId, quantity) {
  if (quantity <= 0) {
    state.cart = state.cart.filter((entry) => entry.productId !== productId);
  } else {
    const existing = state.cart.find((entry) => entry.productId === productId);
    if (existing) {
      existing.quantity = quantity;
    } else {
      state.cart.push({ productId, quantity });
    }
  }
  saveCart();
  renderAll();
}

function addToCart(productId, quantity = 1) {
  const current = getProductQuantity(productId);
  setCartQuantity(productId, current + quantity);
}

function productCardMarkup(product) {
  const offer = product.offerText ? `<span class="product-badge">${escapeHtml(product.offerText)}</span>` : "";
  const lowStock =
    product.stockStatus === "low"
      ? `<span class="product-badge is-low-stock">Low stock</span>`
      : product.stockStatus === "out-of-stock"
        ? `<span class="product-badge is-low-stock">Out of stock</span>`
        : "";
  const timer = product.offerEndsAt ? `<div class="product-meta">${escapeHtml(formatCountdown(product.offerEndsAt))}</div>` : "";
  const deliveryChip = product.estimatedDelivery
    ? `<span class="product-meta-chip">Delivery ${escapeHtml(product.estimatedDelivery)}</span>`
    : "";
  const pickupChip = product.pickupMinutes
    ? `<span class="product-meta-chip">Pickup in ${escapeHtml(String(product.pickupMinutes))} min</span>`
    : "";
  const substituteChip = product.substituteLabel
    ? `<span class="product-meta-chip">${escapeHtml(product.substituteLabel)}</span>`
    : "";
  const variant = product.variant ? `<div class="product-meta">${escapeHtml(product.variant)}</div>` : "";
  const quantity = getProductQuantity(product.id);
  return `
    <article class="product-card">
      <div class="product-card-image" style="background-image:url('${product.imageUrl || getDefaultProductImage(product.title, product.category)}')"></div>
      <div class="product-badge-row">
        <span class="product-badge">${escapeHtml(product.category || "General")}</span>
        ${offer}
        ${lowStock}
      </div>
      <h3>${escapeHtml(product.title)}</h3>
      ${variant}
      <p class="muted">${escapeHtml(product.description || "")}</p>
      ${timer}
      <div class="product-meta-row">
        ${deliveryChip}
        ${pickupChip}
        ${substituteChip}
      </div>
      <p class="product-price">${escapeHtml(product.price || "Price on request")}</p>
      <div class="product-actions">
        <button class="button button-primary" type="button" data-add-cart="${escapeHtml(product.id)}">
          ${quantity ? `Add more (${quantity})` : "Add to cart"}
        </button>
        <button class="button button-secondary" type="button" data-reorder-product="${escapeHtml(product.id)}">
          Order again
        </button>
      </div>
    </article>
  `;
}

function renderReviews() {
  const list = document.querySelector("[data-reviews-list]");
  const helper = document.querySelector("[data-review-helper]");
  if (!list) {
    return;
  }
  if (helper) {
    helper.textContent = state.user
      ? `Signed in as ${state.user.displayName || state.user.email}. Your review will be visible to everyone.`
      : "Sign in to leave a review and rate the store.";
  }
  const ratings = state.reviews.map((review) => Number(review.rating || 0)).filter(Boolean);
  if (ratingAverage && ratingCount) {
    const average = ratings.length
      ? ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length
      : 4.4;
    ratingAverage.textContent = `${average.toFixed(1)}/5`;
    ratingCount.textContent = `${state.reviews.length} reviews`;
  }
  list.innerHTML = state.reviews.length
    ? state.reviews
        .map(
          (review) => `
            <article class="review-card">
              <div class="review-meta">
                <h3>${escapeHtml(review.authorName || "Customer")}</h3>
                <span>${Number(review.rating || 5).toFixed(1)} stars</span>
              </div>
              <p>"${escapeHtml(review.message || "")}"</p>
              <small>${escapeHtml(review.createdLabel || formatRelative(review.createdAt))}</small>
            </article>
          `
        )
        .join("")
    : `<div class="empty-state"><h3>No reviews yet</h3><p class="muted">Be the first to review the store.</p></div>`;
}

function renderOfferBanner() {
  const banner = document.querySelector("[data-offer-banner]");
  if (!banner) {
    return;
  }
  const active = state.offers.find((offer) => !offer.expiresAt || new Date(offer.expiresAt) > new Date());
  if (!active) {
    banner.hidden = true;
    return;
  }
  banner.hidden = false;
  banner.querySelector("[data-offer-kicker]").textContent =
    active.displayType === "special" ? "Special offer" : "Store banner";
  banner.querySelector("[data-offer-title]").textContent = active.title;
  banner.querySelector("[data-offer-description]").textContent = active.description;
  banner.querySelector("[data-offer-countdown]").textContent = formatCountdown(active.expiresAt);
}

function renderFestivalTheme() {
  const panel = document.querySelector("[data-festival-theme-banner]");
  if (!panel) {
    return;
  }
  const theme = getFestivalTheme();
  panel.hidden = false;
  panel.querySelector("[data-festival-theme-kicker]").textContent = theme.kicker;
  panel.querySelector("[data-festival-theme-title]").textContent = theme.title;
  panel.querySelector("[data-festival-theme-description]").textContent = theme.description;
}

function renderPhotoStack() {
  const stack = document.querySelector("[data-photo-stack]");
  if (!stack) {
    return;
  }
  const cards = stack.querySelectorAll(".stack-card");
  cards.forEach((card, index) => {
    const photo = state.photos[index] || fallbackPhotos[index % fallbackPhotos.length];
    card.style.backgroundImage = `url('${photo.imageUrl}')`;
    if (card.querySelector("span")) {
      card.querySelector("span").textContent = photo.title;
    }
  });
}

function renderHomeProducts() {
  const chipBox = document.querySelector("[data-category-chips]");
  const grid = document.querySelector("[data-featured-products]");
  const countChip = document.querySelector("[data-product-count-chip]");
  if (countChip) {
    countChip.textContent = `${state.products.length} live items`;
  }
  if (chipBox) {
    chipBox.innerHTML = [...new Set(state.products.map((product) => product.category))]
      .filter(Boolean)
      .slice(0, 8)
      .map((category) => `<span class="category-chip">${escapeHtml(category)}</span>`)
      .join("");
  }
  if (grid) {
    grid.innerHTML = state.products.slice(0, 6).map(productCardMarkup).join("");
  }
}

function renderSpecialOfferProducts() {
  const section = document.querySelector("[data-special-offers-section]");
  const grid = document.querySelector("[data-special-offer-products]");
  if (!section || !grid) {
    return;
  }
  const offered = state.products.filter((product) => {
    if (!product.offerText) {
      return false;
    }
    if (!product.offerEndsAt) {
      return true;
    }
    return new Date(product.offerEndsAt) > new Date();
  });
  section.hidden = offered.length === 0;
  grid.innerHTML = offered.slice(0, 6).map(productCardMarkup).join("");
}

function renderMostOrderedProducts() {
  const section = document.querySelector("[data-most-ordered-section]");
  const grid = document.querySelector("[data-most-ordered-products]");
  if (!section || !grid) {
    return;
  }
  const mostOrdered = [...state.products]
    .filter((product) => Number(product.orderCountToday || 0) > 0)
    .sort((a, b) => Number(b.orderCountToday || 0) - Number(a.orderCountToday || 0))
    .slice(0, 4);
  section.hidden = mostOrdered.length === 0;
  grid.innerHTML = mostOrdered.map(productCardMarkup).join("");
}

function renderVisitorCounts() {
  const publicCount = document.querySelector("[data-public-visitor-count]");
  if (publicCount) {
    const visibleTotal = Math.max(500, state.pageViews.length || 0);
    publicCount.textContent = `${visibleTotal} visitors viewed this store`;
  }

  const totalNode = document.querySelector("[data-admin-visits-total]");
  const todayNode = document.querySelector("[data-admin-visits-today]");
  const yesterdayNode = document.querySelector("[data-admin-visits-yesterday]");
  const monthNode = document.querySelector("[data-admin-visits-month]");
  const yearNode = document.querySelector("[data-admin-visits-year]");

  if (!totalNode) {
    return;
  }

  const now = new Date();
  const today = getDateParts(now);
  const yesterdayDate = new Date(now);
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const yesterday = getDateParts(yesterdayDate);

  totalNode.textContent = String(state.pageViews.length);
  todayNode.textContent = String(state.pageViews.filter((item) => item.dayKey === today.day).length);
  yesterdayNode.textContent = String(state.pageViews.filter((item) => item.dayKey === yesterday.day).length);
  monthNode.textContent = String(state.pageViews.filter((item) => item.monthKey === today.month).length);
  yearNode.textContent = String(state.pageViews.filter((item) => item.yearKey === today.year).length);
}

function renderDeliverySummary() {
  const deliveryTitle = document.querySelector("[data-delivery-summary-title]");
  const deliveryCopy = document.querySelector("[data-delivery-summary-copy]");
  const pickupTitle = document.querySelector("[data-pickup-summary-title]");
  const pickupCopy = document.querySelector("[data-pickup-summary-copy]");
  if (!deliveryTitle || !deliveryCopy || !pickupTitle || !pickupCopy) {
    return;
  }
  const settings = state.settings;
  deliveryTitle.textContent = settings.deliveryEnabled
    ? `Free delivery up to ${settings.freeRadiusKm} km`
    : "Home delivery paused";
  deliveryCopy.textContent = settings.deliveryEnabled
    ? `${formatCurrency(settings.deliveryCharge)} charge after free area. Delivery available up to ${settings.maxRadiusKm} km.`
    : "Customers can still place pickup orders.";
  pickupTitle.textContent = settings.pickupEnabled ? "Store pickup available" : "Pickup paused";
  pickupCopy.textContent = settings.pickupEnabled
    ? settings.pickupSlotLabel || "Pickup is available from the store."
    : "Pickup is currently disabled.";
}

function renderProductsPage() {
  const grid = document.querySelector("[data-all-products]");
  const empty = document.querySelector("[data-products-empty]");
  const filters = document.querySelector("[data-product-category-filters]");
  const offersBanner = document.querySelector("[data-products-offer-banner]");
  const suggestions = document.querySelector("[data-search-suggestions]");
  const reorderGrid = document.querySelector("[data-reorder-products]");
  if (!grid) {
    return;
  }
  if (offersBanner) {
    offersBanner.hidden = !state.offersOnly;
  }
  const categories = ["All", ...new Set(state.products.map((product) => product.category).filter(Boolean))];
  if (filters) {
    filters.innerHTML = categories
      .map((category) => `<button class="category-chip ${state.categoryFilter === category ? "is-active" : ""}" type="button" data-category-filter="${escapeHtml(category)}">${escapeHtml(category)}</button>`)
      .join("");
  }

  const search = state.searchTerm.trim().toLowerCase();
  const filtered = state.products.filter((product) => {
    const matchCategory = state.categoryFilter === "All" || product.category === state.categoryFilter;
    const matchOffer =
      !state.offersOnly ||
      (product.offerText && (!product.offerEndsAt || new Date(product.offerEndsAt) > new Date()));
    const matchSearch =
      !search ||
      [product.title, product.description, product.category, product.variant]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(search));
    return matchCategory && matchSearch && matchOffer;
  });

  grid.innerHTML = filtered.map(productCardMarkup).join("");
  empty.hidden = filtered.length !== 0;

  if (suggestions) {
    const suggestionItems = search
      ? state.products
          .filter((product) =>
            [product.title, product.category, product.variant]
              .filter(Boolean)
              .some((value) => value.toLowerCase().includes(search))
          )
          .slice(0, 5)
      : [];
    suggestions.hidden = suggestionItems.length === 0;
    suggestions.innerHTML = suggestionItems
      .map(
        (product) =>
          `<button class="search-suggestion" type="button" data-search-pick="${escapeHtml(product.title)}">${escapeHtml(product.title)} - ${escapeHtml(product.category)}</button>`
      )
      .join("");
  }

  if (reorderGrid) {
    const reorderItems = getReorderHistory()
      .map((id) => state.products.find((product) => product.id === id))
      .filter(Boolean);
    reorderGrid.innerHTML = reorderItems.length ? reorderItems.map(productCardMarkup).join("") : "";
  }
}

function renderCart() {
  const countNodes = document.querySelectorAll("[data-cart-count], [data-cart-count-inline]");
  const totalNode = document.querySelector("[data-cart-total]");
  const list = document.querySelector("[data-cart-items]");
  const empty = document.querySelector("[data-cart-empty]");
  const items = getCartItems();
  countNodes.forEach((node) => {
    node.textContent = String(items.reduce((sum, item) => sum + item.quantity, 0));
  });
  if (totalNode) {
    totalNode.textContent = formatCurrency(getCartSubtotal());
  }
  if (!list || !empty) {
    return;
  }
  empty.hidden = items.length !== 0;
  list.innerHTML = items
    .map(
      (item) => `
        <article class="cart-item">
          <div class="cart-item-top">
            <div>
              <strong>${escapeHtml(item.title)}</strong>
              <div class="product-meta">${escapeHtml(item.variant || item.category)}</div>
            </div>
            <strong>${escapeHtml(item.price)}</strong>
          </div>
          <div class="cart-item-bottom">
            <div class="qty-stepper">
              <button type="button" data-cart-step="${item.id}" data-cart-direction="-1">-</button>
              <span>${item.quantity}</span>
              <button type="button" data-cart-step="${item.id}" data-cart-direction="1">+</button>
            </div>
            <button class="button button-secondary" type="button" data-cart-remove="${item.id}">Remove</button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderCheckout() {
  const form = document.querySelector("[data-checkout-form]");
  if (!form) {
    return;
  }

  const summary = form.querySelector("[data-checkout-summary]");
  const note = form.querySelector("[data-signin-required-note]");
  const locationStatus = form.querySelector("[data-location-status]");
  const addressField = form.querySelector("[data-delivery-address-field]");
  const summaryData = getCheckoutSummary(state.checkoutMode || "delivery");

  form.querySelectorAll("[data-checkout-mode]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.checkoutMode === (state.checkoutMode || "delivery"));
  });

  if (addressField) {
    addressField.hidden = (state.checkoutMode || "delivery") === "pickup";
  }

  if (note) {
    note.textContent = state.user
      ? `Signed in as ${state.user.displayName || state.user.email}`
      : "Sign in before placing an order.";
  }

  if (locationStatus) {
    const distanceKm = summaryData.assessment.distanceKm;
    const distanceText = distanceKm != null ? ` Distance from store: ${distanceKm.toFixed(1)} km.` : "";
    locationStatus.textContent = `${summaryData.assessment.message}${distanceText}`;
  }

  if (summary) {
    summary.innerHTML = `
      <div class="checkout-pricing-row"><span>Items subtotal</span><strong>${formatCurrency(summaryData.subtotal)}</strong></div>
      <div class="checkout-pricing-row"><span>Platform fee</span><strong>${formatCurrency(summaryData.platformFee)}</strong></div>
      <div class="checkout-pricing-row"><span>Packing fee</span><strong>${formatCurrency(summaryData.packingFee)}</strong></div>
      <div class="checkout-pricing-row"><span>${state.checkoutMode === "pickup" ? "Pickup" : "Delivery charge"}</span><strong>${formatCurrency(summaryData.deliveryCharge)}</strong></div>
      <div class="checkout-pricing-row"><span>Total payable</span><strong>${formatCurrency(summaryData.total)}</strong></div>
    `;
  }
}

function orderMarkup(order, adminView = false) {
  const itemsText = (order.items || [])
    .map((item) => `${item.title} x${item.quantity}`)
    .join(", ");
  const distanceText =
    typeof order.distanceKm === "number" ? `${order.distanceKm.toFixed(1)} km from store` : "Location pending";
  const statusOptions = ORDER_STATUSES.map(
    (status) => `<option value="${escapeHtml(status)}" ${order.status === status ? "selected" : ""}>${escapeHtml(status)}</option>`
  ).join("");
  return `
    <article class="order-card">
      <div class="order-card-top">
        <div>
          <strong>${escapeHtml(order.customerName || "Customer")}</strong>
          <div class="product-meta">${escapeHtml(order.mode === "pickup" ? "Pickup" : "Delivery")} order</div>
        </div>
        <span class="order-status-chip">${escapeHtml(order.status || "Order placed")}</span>
      </div>
      <div class="order-card-items">${escapeHtml(itemsText || "No items")}</div>
      <div class="product-meta">${escapeHtml(order.phone || "")}</div>
      <div class="product-meta">${escapeHtml(order.address || storeConfig.address || distanceText)}</div>
      <div class="order-card-bottom">
        <strong>${formatCurrency(order.total || 0)}</strong>
        <span class="product-meta">${escapeHtml(formatRelative(order.createdAt))}</span>
      </div>
      ${
        adminView
          ? `
            <div class="order-actions">
              <select class="toolbar-input order-status-select" data-order-status="${order.id}">
                ${statusOptions}
              </select>
              <button class="button button-primary" type="button" data-save-order-status="${order.id}">Update</button>
            </div>
          `
          : ""
      }
    </article>
  `;
}

function renderCustomerOrders() {
  const wrapper = document.querySelector("[data-customer-orders]");
  if (!wrapper) {
    return;
  }
  if (!state.user) {
    wrapper.innerHTML = `<div class="empty-state"><h3>Sign in to see orders</h3><p class="muted">Your order status will appear here after checkout.</p></div>`;
    return;
  }
  wrapper.innerHTML = state.orders.length
    ? state.orders.map((order) => orderMarkup(order, false)).join("")
    : `<div class="empty-state"><h3>No orders yet</h3><p class="muted">Place your first order to start tracking it here.</p></div>`;
}

function renderAccountPanel() {
  const wrapper = document.querySelector("[data-account-panel]");
  if (!wrapper) {
    return;
  }
  if (!state.user) {
    wrapper.innerHTML = `
      <article class="order-card">
        <div class="order-card-top">
          <div>
            <strong>Guest account</strong>
            <div class="product-meta">Sign in to place orders and track deliveries</div>
          </div>
          <span class="settings-chip">Not signed in</span>
        </div>
        <div class="order-actions">
          <button class="button button-primary" type="button" data-open-auth="true">Sign in</button>
        </div>
      </article>
    `;
    return;
  }

  const lastOrder = state.orders[0];
  wrapper.innerHTML = `
    <article class="order-card">
      <div class="order-card-top">
        <div>
          <strong>${escapeHtml(state.user.displayName || "Customer account")}</strong>
          <div class="product-meta">${escapeHtml(state.user.email || "")}</div>
        </div>
        <span class="settings-chip">${isAdmin() ? "Admin access" : "Customer account"}</span>
      </div>
      <div class="order-card-items">Saved store: ${getSavedStore() ? "Yes" : "No"} | Cart items: ${state.cart.reduce((sum, item) => sum + item.quantity, 0)}</div>
      <div class="product-meta">Last order: ${lastOrder ? escapeHtml(lastOrder.status || "Order placed") : "No orders yet"}</div>
      <div class="order-actions">
        <button class="button button-secondary" type="button" data-service-tab-jump="orders">My orders</button>
        <button class="button button-secondary" type="button" data-service-tab-jump="delivery">Delivery & pickup</button>
      </div>
    </article>
  `;
}

function renderAdminPage() {
  const status = document.querySelector("[data-admin-status]");
  const feed = document.querySelector("[data-admin-feed]");
  const ordersNode = document.querySelector("[data-admin-orders]");
  const adminGate = document.querySelector("[data-admin-gate]");
  const adminGateMessage = document.querySelector("[data-admin-gate-message]");
  const adminContent = document.querySelector("[data-admin-content]");
  if (!status) {
    return;
  }

  const canAccess = isAdmin();
  if (adminGate) {
    adminGate.hidden = canAccess;
  }
  if (adminContent) {
    adminContent.hidden = !canAccess;
  }
  if (adminGateMessage) {
    adminGateMessage.textContent = state.user
      ? "This signed-in account is not allowed to open the admin dashboard."
      : "Sign in with the admin account to open this dashboard.";
  }

  if (!state.firebaseReady) {
    status.textContent = "Firebase config is missing. Fill js/firebase-config.js first.";
  } else if (!state.user) {
    status.textContent = "Sign in with your admin email to access publishing tools.";
  } else if (!isAdmin()) {
    status.textContent = `Signed in as ${state.user.email}, but this account is not allowed yet.`;
  } else {
    status.textContent = `Admin active for ${state.user.email}. You can manage products, delivery, and orders.`;
  }

  const productOfferSelect = document.querySelector("[data-product-offer-select]");
  if (productOfferSelect) {
    productOfferSelect.innerHTML = state.products.length
      ? state.products
          .map(
            (product) => `<option value="${product.id}">${escapeHtml(product.title)} - ${escapeHtml(product.category)}</option>`
          )
          .join("")
      : `<option value="">No products available</option>`;
  }

  const settingsForm = document.querySelector("[data-delivery-settings-form]");
  if (settingsForm && !settingsForm.dataset.synced) {
    settingsForm.freeRadiusKm.value = state.settings.freeRadiusKm;
    settingsForm.paidRadiusKm.value = state.settings.paidRadiusKm;
    settingsForm.maxRadiusKm.value = state.settings.maxRadiusKm;
    settingsForm.deliveryCharge.value = state.settings.deliveryCharge;
    settingsForm.minimumOrder.value = state.settings.minimumOrder;
    settingsForm.freeDeliveryAbove.value = state.settings.freeDeliveryAbove;
    settingsForm.platformFee.value = state.settings.platformFee;
    settingsForm.packingFee.value = state.settings.packingFee;
    settingsForm.deliveryEnabled.value = String(state.settings.deliveryEnabled);
    settingsForm.pickupEnabled.value = String(state.settings.pickupEnabled);
    settingsForm.upiId.value = state.settings.upiId || "";
    settingsForm.pickupSlotLabel.value = state.settings.pickupSlotLabel || "";
    settingsForm.dataset.synced = "true";
  }

  if (feed) {
    feed.innerHTML = [
      ...state.offers.slice(0, 2).map(
        (offer) => `
          <article class="review-card">
            <h3>${escapeHtml(offer.title)}</h3>
            <p class="muted">${escapeHtml(offer.description)}</p>
            <small>${escapeHtml(formatCountdown(offer.expiresAt))}</small>
            <div class="admin-feed-actions">
              <button class="button button-danger" type="button" data-delete-offer="${offer.id}">Remove offer</button>
            </div>
          </article>
        `
      ),
      ...state.products.slice(0, 6).map(
        (product) => `
          <article class="review-card">
            <h3>${escapeHtml(product.title)}</h3>
            <p class="muted">${escapeHtml(product.category)} | ${escapeHtml(product.price)}</p>
            <small>${escapeHtml(product.offerText || "No active product offer")}</small>
            <div class="admin-feed-actions">
              <button class="button button-danger" type="button" data-delete-product="${product.id}">Remove product</button>
            </div>
          </article>
        `
      ),
    ].join("");
  }

  if (ordersNode) {
    ordersNode.innerHTML = state.orders.length
      ? state.orders.map((order) => orderMarkup(order, true)).join("")
      : `<div class="empty-state"><h3>No orders yet</h3><p class="muted">New customer orders will appear here.</p></div>`;
  }
}

function renderAll() {
  renderAuthButton();
  renderSaveButton();
  renderOfferBanner();
  renderFestivalTheme();
  renderPhotoStack();
  renderHomeProducts();
  renderSpecialOfferProducts();
  renderMostOrderedProducts();
  renderVisitorCounts();
  renderReviews();
  renderDeliverySummary();
  renderProductsPage();
  renderCart();
  renderCheckout();
  renderCustomerOrders();
  renderAccountPanel();
  renderAdminPage();
}

function bindStaticEvents() {
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = new URL(link.href, window.location.href);
    if (href.pathname === window.location.pathname) {
      link.setAttribute("aria-current", "page");
    }
  });

  setAuthMode("signin");
  updateStoreStatus();
  setInterval(updateStoreStatus, 60000);
  renderSaveButton();

  saveButton?.addEventListener("click", () => {
    const nextValue = !getSavedStore();
    localStorage.setItem(STORAGE_KEYS.saved, String(nextValue));
    renderSaveButton();
    showToast(nextValue ? "Store saved" : "Store removed");
  });

  document.querySelectorAll("[data-share-store]").forEach((button) => {
    button.addEventListener("click", async () => {
      const shareData = {
        title: "H.R Super Market",
        text: "Check out H.R Super Market in Surendranagar.",
        url: window.location.href,
      };
      if (navigator.share) {
        try {
          await navigator.share(shareData);
          showToast("Store shared");
          return;
        } catch {
          showToast("Share canceled");
          return;
        }
      }
      try {
        await navigator.clipboard.writeText(window.location.href);
        showToast("Link copied");
      } catch {
        showToast("Share is not available on this device right now");
      }
    });
  });

  authToggleButton?.addEventListener("click", async () => {
    if (state.user && state.auth) {
      await signOut(state.auth);
      showToast("Signed out");
      return;
    }
    setModalOpen(true);
  });

  document.querySelectorAll("[data-open-auth='true']").forEach((button) => {
    button.addEventListener("click", () => setModalOpen(true));
  });
  document.querySelectorAll("[data-close-auth='true']").forEach((button) => {
    button.addEventListener("click", () => setModalOpen(false));
  });
  modal?.addEventListener("click", (event) => {
    if (event.target === modal) {
      setModalOpen(false);
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal && !modal.hidden) {
      setModalOpen(false);
    }
  });

  document.querySelectorAll("[data-auth-mode]").forEach((button) => {
    button.addEventListener("click", () => setAuthMode(button.dataset.authMode));
  });

  document.querySelectorAll("[data-open-review]").forEach((button) => {
    button.addEventListener("click", () => {
      const section = document.querySelector("#reviews");
      const nameInput = document.querySelector("[data-review-form] input[name='name']");
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => nameInput?.focus(), 250);
    });
  });

  document.querySelector("[data-scroll-product-form]")?.addEventListener("click", () => {
    const titleInput = document.querySelector("[data-product-form] input[name='title']");
    titleInput?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => titleInput?.focus(), 250);
  });

  document.querySelector("[data-product-search]")?.addEventListener("input", (event) => {
    state.searchTerm = event.target.value;
    renderProductsPage();
  });

  document.querySelectorAll("[data-open-cart]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector("[data-cart-panel]")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.querySelectorAll("[data-request-location]").forEach((button) => {
    button.addEventListener("click", requestUserLocation);
  });

  document.querySelector("[data-fill-store-address]")?.addEventListener("click", () => {
    const address = document.querySelector("[data-checkout-form] textarea[name='address']");
    if (address) {
      address.value = storeConfig.address;
      showToast("Store address added");
    }
  });

  document.querySelectorAll("[data-checkout-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.checkoutMode = button.dataset.checkoutMode;
      renderCheckout();
    });
  });

  const jumpToService = (tab) => {
    const tabs = document.querySelectorAll("[data-service-tab]");
    tabs.forEach((button) => button.classList.toggle("is-active", button.dataset.serviceTab === tab));
    if (tab === "catalog") {
      document.querySelector("#catalog")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (tab === "delivery") {
      state.checkoutMode = "delivery";
      renderCheckout();
      document.querySelector("#delivery-pickup")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (tab === "pickup") {
      state.checkoutMode = "pickup";
      renderCheckout();
      document.querySelector("#delivery-pickup")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (tab === "offers") {
      window.location.href = "./products.html?offers=1";
      return;
    }
    if (tab === "orders") {
      document.querySelector("#my-orders")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (tab === "account") {
      document.querySelector("#account")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  document.querySelectorAll("[data-service-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      jumpToService(button.dataset.serviceTab);
    });
  });

  document.addEventListener("click", async (event) => {
    const jumpButton = event.target.closest("[data-service-tab-jump]");
    if (jumpButton) {
      jumpToService(jumpButton.dataset.serviceTabJump);
      return;
    }

    const categoryButton = event.target.closest("[data-category-filter]");
    if (categoryButton) {
      state.categoryFilter = categoryButton.dataset.categoryFilter;
      renderProductsPage();
      return;
    }

    const searchPick = event.target.closest("[data-search-pick]");
    if (searchPick) {
      const input = document.querySelector("[data-product-search]");
      if (input) {
        input.value = searchPick.dataset.searchPick;
        state.searchTerm = searchPick.dataset.searchPick;
        renderProductsPage();
      }
      return;
    }

    const addCartButton = event.target.closest("[data-add-cart]");
    if (addCartButton) {
      addToCart(addCartButton.dataset.addCart, 1);
      showToast("Added to cart");
      return;
    }

    const reorderButton = event.target.closest("[data-reorder-product]");
    if (reorderButton) {
      addToCart(reorderButton.dataset.reorderProduct, 1);
      saveReorderItem(reorderButton.dataset.reorderProduct);
      showToast("Saved for quick reorder");
      return;
    }

    const stepButton = event.target.closest("[data-cart-step]");
    if (stepButton) {
      const productId = stepButton.dataset.cartStep;
      const delta = Number(stepButton.dataset.cartDirection || 0);
      setCartQuantity(productId, getProductQuantity(productId) + delta);
      return;
    }

    const removeButton = event.target.closest("[data-cart-remove]");
    if (removeButton) {
      setCartQuantity(removeButton.dataset.cartRemove, 0);
      showToast("Removed from cart");
      return;
    }

    const offerButton = event.target.closest("[data-delete-offer]");
    if (offerButton) {
      if (!isAdmin() || !state.db) {
        showToast("Admin access required");
        return;
      }
      try {
        await deleteDoc(doc(state.db, "offers", offerButton.dataset.deleteOffer));
        showToast("Offer removed");
      } catch (error) {
        showToast(explainFirebaseError(error, "Removing offer"));
      }
      return;
    }

    const productButton = event.target.closest("[data-delete-product]");
    if (productButton) {
      if (!isAdmin() || !state.db) {
        showToast("Admin access required");
        return;
      }
      try {
        await deleteDoc(doc(state.db, "products", productButton.dataset.deleteProduct));
        showToast("Product removed");
      } catch (error) {
        showToast(explainFirebaseError(error, "Removing product"));
      }
      return;
    }

    const saveStatusButton = event.target.closest("[data-save-order-status]");
    if (saveStatusButton) {
      if (!isAdmin() || !state.db) {
        showToast("Admin access required");
        return;
      }
      const select = document.querySelector(`[data-order-status="${saveStatusButton.dataset.saveOrderStatus}"]`);
      try {
        await updateDoc(doc(state.db, "orders", saveStatusButton.dataset.saveOrderStatus), {
          status: select?.value || "Order placed",
          updatedAt: serverTimestamp(),
        });
        showToast("Order status updated");
      } catch (error) {
        showToast(explainFirebaseError(error, "Updating order status"));
      }
    }
  });
}

async function requestUserLocation() {
  if (!navigator.geolocation) {
    showToast("Location is not available on this device");
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (position) => {
      state.userLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      renderCheckout();
      showToast("Location captured");
    },
    () => {
      showToast("Location access is needed for exact delivery check");
    },
    { enableHighAccuracy: true, timeout: 10000 }
  );
}

function initFirebase() {
  if (!state.firebaseReady) {
    return;
  }
  state.app = initializeApp(firebaseConfig);
  isSupported().then((supported) => {
    if (supported) {
      getAnalytics(state.app);
    }
  });
  state.auth = getAuth(state.app);
  state.db = getFirestore(state.app);
}

function bindAuthForms() {
  googleButton?.addEventListener("click", async () => {
    if (!state.auth) {
      showToast("Sign-in is being prepared. Please finish Firebase setup first.");
      return;
    }
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      await signInWithPopup(state.auth, provider);
      setModalOpen(false);
      showToast("Signed in with Google");
    } catch (error) {
      showToast(explainFirebaseError(error, "Google sign-in"));
    }
  });

  authForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!state.auth) {
      showToast("Sign-in is being prepared. Please finish Firebase setup first.");
      return;
    }
    const formData = new FormData(authForm);
    const email = String(formData.get("email") || "").trim();
    const password = String(formData.get("password") || "").trim();
    const displayName = String(formData.get("displayName") || "").trim();
    try {
      if (state.authMode === "signup") {
        const credential = await createUserWithEmailAndPassword(state.auth, email, password);
        if (displayName) {
          await updateProfile(credential.user, { displayName });
        }
        showToast("Account created");
      } else {
        await signInWithEmailAndPassword(state.auth, email, password);
        showToast("Signed in");
      }
      authForm.reset();
      setModalOpen(false);
    } catch (error) {
      showToast(explainFirebaseError(error, "Sign-in"));
    }
  });
}

function bindDataForms() {
  document.querySelector("[data-review-form]")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!state.user) {
      setModalOpen(true);
      showToast("Sign in first to post a review");
      return;
    }
    if (!state.db) {
      showToast("Reviews are being connected. Please finish Firebase setup first.");
      return;
    }
    const formData = new FormData(event.currentTarget);
    try {
      await addDoc(collection(state.db, "reviews"), {
        authorName: String(formData.get("name") || state.user.displayName || "Customer").trim(),
        rating: Number(formData.get("rating") || 5),
        message: String(formData.get("message") || "").trim(),
        userId: state.user.uid,
        createdAt: serverTimestamp(),
      });
      event.currentTarget.reset();
      showToast("Review posted");
    } catch (error) {
      showToast(explainFirebaseError(error, "Posting review"));
    }
  });

  document.querySelector("[data-offer-form]")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!isAdmin() || !state.db) {
      showToast("Admin access required");
      return;
    }
    const formData = new FormData(event.currentTarget);
    try {
      await addDoc(collection(state.db, "offers"), {
        displayType: String(formData.get("displayType") || "banner"),
        title: String(formData.get("title") || "").trim(),
        description: String(formData.get("description") || "").trim(),
        expiresAt: formData.get("expiresAt") ? new Date(String(formData.get("expiresAt"))).toISOString() : null,
        createdAt: serverTimestamp(),
        createdBy: state.user.email,
      });
      event.currentTarget.reset();
      showToast("Offer added");
    } catch (error) {
      showToast(explainFirebaseError(error, "Publishing offer"));
    }
  });

  document.querySelector("[data-product-form]")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!isAdmin() || !state.db) {
      showToast("Admin access required");
      return;
    }
    const formData = new FormData(event.currentTarget);
    const title = String(formData.get("title") || "").trim();
    const category = String(formData.get("category") || "").trim();
    try {
      await addDoc(collection(state.db, "products"), {
        title,
        category,
        variant: String(formData.get("variant") || "").trim(),
        price: String(formData.get("price") || "").trim(),
        description: String(formData.get("description") || "").trim(),
        offerText: String(formData.get("offerText") || "").trim(),
        offerEndsAt: formData.get("offerEndsAt") ? new Date(String(formData.get("offerEndsAt"))).toISOString() : null,
        stockStatus: String(formData.get("stockStatus") || "in-stock"),
        pickupMinutes: Number(formData.get("pickupMinutes") || 20),
        estimatedDelivery: String(formData.get("estimatedDelivery") || "").trim(),
        imageUrl: getDefaultProductImage(title || "Product", category || "Store item"),
        orderCountToday: 0,
        createdAt: serverTimestamp(),
        createdBy: state.user.email,
      });
      event.currentTarget.reset();
      showToast("Product added");
    } catch (error) {
      showToast(explainFirebaseError(error, "Adding product"));
    }
  });

  document.querySelector("[data-product-offer-form]")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!isAdmin() || !state.db) {
      showToast("Admin access required");
      return;
    }
    const formData = new FormData(event.currentTarget);
    const productId = String(formData.get("productId") || "").trim();
    if (!productId) {
      showToast("Select a product first");
      return;
    }
    try {
      await updateDoc(doc(state.db, "products", productId), {
        offerText: String(formData.get("offerText") || "").trim(),
        offerEndsAt: formData.get("offerEndsAt") ? new Date(String(formData.get("offerEndsAt"))).toISOString() : null,
      });
      event.currentTarget.reset();
      showToast("Product offer saved");
    } catch (error) {
      showToast(explainFirebaseError(error, "Saving product offer"));
    }
  });

  document.querySelector("[data-delivery-settings-form]")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!isAdmin() || !state.db) {
      showToast("Admin access required");
      return;
    }
    const formData = new FormData(event.currentTarget);
    const payload = normalizeSettings({
      freeRadiusKm: formData.get("freeRadiusKm"),
      paidRadiusKm: formData.get("paidRadiusKm"),
      maxRadiusKm: formData.get("maxRadiusKm"),
      deliveryCharge: formData.get("deliveryCharge"),
      minimumOrder: formData.get("minimumOrder"),
      freeDeliveryAbove: formData.get("freeDeliveryAbove"),
      platformFee: formData.get("platformFee"),
      packingFee: formData.get("packingFee"),
      deliveryEnabled: formData.get("deliveryEnabled"),
      pickupEnabled: formData.get("pickupEnabled"),
      upiId: String(formData.get("upiId") || "").trim(),
      pickupSlotLabel: String(formData.get("pickupSlotLabel") || "").trim(),
    });
    try {
      await setDoc(doc(state.db, "settings", "storefront"), {
        ...payload,
        updatedAt: serverTimestamp(),
      });
      state.settings = payload;
      event.currentTarget.dataset.synced = "true";
      renderAll();
      showToast("Delivery settings saved");
    } catch (error) {
      showToast(explainFirebaseError(error, "Saving delivery settings"));
    }
  });

  document.querySelector("[data-checkout-form]")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!state.user) {
      setModalOpen(true);
      showToast("Sign in first to place an order");
      return;
    }
    if (!state.db) {
      showToast("Checkout is being connected. Please finish Firebase setup first.");
      return;
    }
    const items = getCartItems();
    if (!items.length) {
      showToast("Add products to cart first");
      return;
    }
    const formData = new FormData(event.currentTarget);
    const summary = getCheckoutSummary(state.checkoutMode || "delivery");
    if (!summary.assessment.eligible) {
      showToast(summary.assessment.message);
      return;
    }
    const orderPayload = {
      mode: state.checkoutMode || "delivery",
      customerName: String(formData.get("customerName") || state.user.displayName || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      address:
        (state.checkoutMode || "delivery") === "pickup"
          ? storeConfig.address
          : String(formData.get("address") || "").trim(),
      slot: String(formData.get("slot") || "asap"),
      paymentMethod: String(formData.get("paymentMethod") || "upi"),
      note: String(formData.get("note") || "").trim(),
      userId: state.user.uid,
      userEmail: state.user.email,
      status: (state.checkoutMode || "delivery") === "pickup" ? "Ready for pickup" : "Order placed",
      items: items.map((item) => ({
        productId: item.id,
        title: item.title,
        quantity: item.quantity,
        price: parsePrice(item.price),
      })),
      itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal: summary.subtotal,
      platformFee: summary.platformFee,
      packingFee: summary.packingFee,
      deliveryCharge: summary.deliveryCharge,
      total: summary.total,
      distanceKm: summary.assessment.distanceKm ?? null,
      createdAt: serverTimestamp(),
    };

    try {
      const orderRef = await addDoc(collection(state.db, "orders"), orderPayload);

      const productUpdates = items
        .map((item) => {
          const current = state.products.find((product) => product.id === item.id);
          return current && !String(current.id).startsWith("prod-")
            ? updateDoc(doc(state.db, "products", item.id), {
                orderCountToday: Number(current.orderCountToday || 0) + item.quantity,
              })
            : Promise.resolve();
        });
      await Promise.all(productUpdates);

      if (orderPayload.paymentMethod === "upi" && state.settings.upiId) {
        const upiUrl = `upi://pay?pa=${encodeURIComponent(state.settings.upiId)}&pn=${encodeURIComponent("HR Super Market")}&am=${encodeURIComponent(String(summary.total))}&cu=INR&tn=${encodeURIComponent(`Order ${orderRef.id}`)}`;
        window.location.href = upiUrl;
      }

      items.forEach((item) => saveReorderItem(item.id));
      state.cart = [];
      saveCart();
      event.currentTarget.reset();
      renderAll();
      showToast("Order placed");
    } catch (error) {
      showToast(explainFirebaseError(error, "Placing order"));
    }
  });
}

function attachStaticListeners() {
  if (!state.db) {
    renderAll();
    return;
  }

  onSnapshot(query(collection(state.db, "reviews"), orderBy("createdAt", "desc")), (snapshot) => {
    state.reviews = snapshot.docs.length
      ? snapshot.docs.map((entry) => ({
          id: entry.id,
          ...entry.data(),
          createdAt: entry.data().createdAt?.toDate?.() || entry.data().createdAt || null,
        }))
      : state.reviews;
    renderAll();
  });

  onSnapshot(query(collection(state.db, "products"), orderBy("createdAt", "desc")), (snapshot) => {
    state.products = snapshot.docs.length
      ? snapshot.docs.map((entry) => ({ id: entry.id, ...entry.data() }))
      : [...fallbackProducts];
    renderAll();
  });

  onSnapshot(query(collection(state.db, "offers"), orderBy("createdAt", "desc")), (snapshot) => {
    state.offers = snapshot.docs.map((entry) => ({ id: entry.id, ...entry.data() }));
    renderAll();
  });

  onSnapshot(query(collection(state.db, "pageViews"), orderBy("createdAt", "desc")), (snapshot) => {
    state.pageViews = snapshot.docs.map((entry) => ({ id: entry.id, ...entry.data() }));
    renderAll();
  });

  onSnapshot(doc(state.db, "settings", "storefront"), (snapshot) => {
    state.settings = snapshot.exists() ? normalizeSettings(snapshot.data()) : defaultStoreSettings();
    const settingsForm = document.querySelector("[data-delivery-settings-form]");
    if (settingsForm) {
      delete settingsForm.dataset.synced;
    }
    renderAll();
  });
}

function attachOrderListener() {
  if (state.orderUnsubscribe) {
    state.orderUnsubscribe();
    state.orderUnsubscribe = null;
  }
  state.orders = [];
  if (!state.db || !state.user) {
    renderAll();
    return;
  }
  const ordersQuery = isAdmin()
    ? query(collection(state.db, "orders"), orderBy("createdAt", "desc"))
    : query(collection(state.db, "orders"), where("userId", "==", state.user.uid));
  state.orderUnsubscribe = onSnapshot(
    ordersQuery,
    (snapshot) => {
      state.orders = snapshot.docs.map((entry) => ({
        id: entry.id,
        ...entry.data(),
        createdAt: entry.data().createdAt?.toDate?.() || entry.data().createdAt || null,
      })).sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
      renderAll();
    },
    () => {
      state.orders = [];
      renderAll();
    }
  );
}

async function recordVisit() {
  if (!state.db || sessionStorage.getItem(SESSION_VISIT_KEY)) {
    return;
  }
  const now = new Date();
  const parts = getDateParts(now);
  try {
    await addDoc(collection(state.db, "pageViews"), {
      path: window.location.pathname,
      createdAt: serverTimestamp(),
      dayKey: parts.day,
      monthKey: parts.month,
      yearKey: parts.year,
      userAgent: navigator.userAgent,
    });
    sessionStorage.setItem(SESSION_VISIT_KEY, "true");
  } catch {
    // Keep visitor tracking silent in the public UI.
  }
}

function init() {
  initFirebase();
  bindStaticEvents();
  bindAuthForms();
  bindDataForms();

  if (state.auth) {
    onAuthStateChanged(state.auth, (user) => {
      state.user = user;
      attachOrderListener();
      renderAll();
    });
  } else {
    renderAll();
  }

  attachStaticListeners();
  attachOrderListener();
  recordVisit();
}

init();
