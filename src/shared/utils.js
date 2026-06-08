import { STORE_INFO } from "./data";

export const storageKeys = {
  banners: "hr-react-banners",
  cart: "hr-react-cart",
  coupons: "hr-react-coupons",
  notifications: "hr-react-notifications",
  orders: "hr-react-demo-orders",
  pinAdmin: "hr-react-admin-pin-ok",
  pinDivyraj: "hr-react-divyraj-pin-ok",
  products: "hr-react-products",
  profile: "hr-react-profile",
  recentlyViewed: "hr-react-recently-viewed",
  settings: "hr-react-settings",
  wallet: "hr-react-wallet",
  wishlist: "hr-react-wishlist",
};

export function readStorage(key, fallback) {
  try {
    if (typeof window === "undefined" || !window.localStorage) {
      return fallback;
    }
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function writeStorage(key, value) {
  try {
    if (typeof window === "undefined" || !window.localStorage) {
      return;
    }
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore storage failures in restricted browser contexts.
  }
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount || 0);
}

export function formatDate(value) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

export function createSlug(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export function getDiscount(price, mrp) {
  if (!mrp) {
    return 0;
  }
  return Math.round(((mrp - price) / mrp) * 100);
}

export function clampText(value, limit) {
  return String(value).length > limit ? `${String(value).slice(0, limit)}...` : String(value);
}

export function getDistanceKm(lat1, lng1, lat2, lng2) {
  const toRad = (value) => (value * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return 6371 * c;
}

export function getDeliveryCharge(distanceKm, hasAnyPreviousOrders) {
  if (!Number.isFinite(distanceKm)) {
    return 20;
  }
  if (!hasAnyPreviousOrders) {
    return 0;
  }
  if (distanceKm <= 2) {
    return 20;
  }
  if (distanceKm <= 4) {
    return 30;
  }
  if (distanceKm <= 6) {
    return 45;
  }
  return 60;
}

export function getStoreDistanceText(distanceKm) {
  if (!Number.isFinite(distanceKm)) {
    return "Location not detected yet";
  }
  return `${distanceKm.toFixed(1)} km from ${STORE_INFO.city}`;
}

export function getMonthRows(startMonth, startYear) {
  const rows = [];
  const now = new Date();
  let year = startYear;
  let month = startMonth;
  while (year < now.getFullYear() || (year === now.getFullYear() && month <= now.getMonth() + 1)) {
    const date = new Date(year, month - 1, 1);
    rows.push({
      id: `${year}-${String(month).padStart(2, "0")}`,
      month,
      year,
      label: date.toLocaleString("en-IN", { month: "long", year: "numeric" }),
    });
    month += 1;
    if (month === 13) {
      month = 1;
      year += 1;
    }
  }
  return rows;
}

export function getInitials(name) {
  return String(name || "HR")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");
}
