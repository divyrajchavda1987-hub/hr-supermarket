import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported as analyticsSupported } from "firebase/analytics";
import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  increment,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdxuFu9cs0OdurGZneu6l_v72S_u2kmvw",
  authDomain: "hr-supermarket-db.firebaseapp.com",
  projectId: "hr-supermarket-db",
  storageBucket: "hr-supermarket-db.firebasestorage.app",
  messagingSenderId: "466119121244",
  appId: "1:466119121244:web:5002c474833406b8d6c999",
  measurementId: "G-JQ42BL9WE3",
};

export const ADMIN_EMAILS = ["divyrajchavda1987@gmail.com"];
export const CLIENT_ADMIN_PIN = "1234";
export const DIVYRAJ_PIN = "9999";
export const STORE_START_MONTH = { month: 1, year: 2026 };
export const ORDER_STATUS_OPTIONS = [
  "Placed",
  "Accepted",
  "Packing",
  "Out for delivery",
  "Ready for pickup",
  "Delivered",
  "Cancelled",
];

const app = initializeApp(firebaseConfig);
analyticsSupported().then((supported) => {
  if (supported) {
    getAnalytics(app);
  }
});

export const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence).catch(() => {});
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export function isAdminEmail(email) {
  return ADMIN_EMAILS.includes(email || "");
}

export const authApi = {
  onChange(callback) {
    return onAuthStateChanged(auth, callback);
  },
  async signInWithGoogle() {
    return signInWithPopup(auth, googleProvider);
  },
  async signInWithEmail(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  },
  async signUp(name, email, password) {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    if (name) {
      await updateProfile(response.user, { displayName: name });
    }
    return response;
  },
  async signOut() {
    return signOut(auth);
  },
};

export const firestoreApi = {
  subscribeCollection(collectionName, callback, errorCallback = () => {}) {
    return onSnapshot(
      query(collection(db, collectionName), orderBy("createdAt", "desc")),
      (snapshot) => {
        callback(
          snapshot.docs.map((item) => ({
            id: item.id,
            ...item.data(),
            createdAt: item.data().createdAt?.toDate?.()?.toISOString?.() || item.data().createdAt || null,
            updatedAt: item.data().updatedAt?.toDate?.()?.toISOString?.() || item.data().updatedAt || null,
          }))
        );
      },
      errorCallback
    );
  },
  subscribeOrdersForUser(userId, callback, errorCallback = () => {}) {
    return onSnapshot(
      query(collection(db, "orders"), where("userId", "==", userId)),
      (snapshot) => {
        const items = snapshot.docs
          .map((item) => ({
            id: item.id,
            ...item.data(),
            createdAt: item.data().createdAt?.toDate?.()?.toISOString?.() || item.data().createdAt || null,
          }))
          .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
        callback(items);
      },
      errorCallback
    );
  },
  subscribeOrders(callback, errorCallback = () => {}) {
    return onSnapshot(
      query(collection(db, "orders"), orderBy("createdAt", "desc")),
      (snapshot) => {
        callback(
          snapshot.docs.map((item) => ({
            id: item.id,
            ...item.data(),
            createdAt: item.data().createdAt?.toDate?.()?.toISOString?.() || item.data().createdAt || null,
          }))
        );
      },
      errorCallback
    );
  },
  subscribeDocument(collectionName, docId, callback, errorCallback = () => {}) {
    return onSnapshot(
      doc(db, collectionName, docId),
      (snapshot) => {
        callback(snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } : null);
      },
      errorCallback
    );
  },
  async addProduct(payload) {
    return addDoc(collection(db, "products"), {
      ...payload,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  },
  async removeProduct(id) {
    return deleteDoc(doc(db, "products", id));
  },
  async addBanner(payload) {
    return addDoc(collection(db, "banners"), {
      ...payload,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  },
  async removeBanner(id) {
    return deleteDoc(doc(db, "banners", id));
  },
  async savePlatformFee(monthKey, payload) {
    return setDoc(doc(db, "platform_fees", monthKey), payload, { merge: true });
  },
  async updatePlatformFeeStatus(monthKey, status) {
    return updateDoc(doc(db, "platform_fees", monthKey), {
      status,
      updatedAt: serverTimestamp(),
    });
  },
  async updateOrderStatus(orderId, status) {
    return updateDoc(doc(db, "orders", orderId), {
      status,
      updatedAt: serverTimestamp(),
    });
  },
  async updatePlatformCutStatus(orderId, platformCutStatus) {
    return updateDoc(doc(db, "orders", orderId), {
      platformCutStatus,
      updatedAt: serverTimestamp(),
    });
  },
  async saveSettings(payload) {
    return setDoc(
      doc(db, "settings", "storefront"),
      { ...payload, updatedAt: serverTimestamp() },
      { merge: true }
    );
  },
  async getSettings() {
    const snapshot = await getDoc(doc(db, "settings", "storefront"));
    return snapshot.exists() ? snapshot.data() : null;
  },
  async placeOrder(payload) {
    const orderRef = await addDoc(collection(db, "orders"), {
      ...payload,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    await setDoc(
      doc(db, "platform_earnings", "summary"),
      {
        totalOrders: increment(1),
        totalPlatformCut: increment(payload.platformCut || 0),
        totalHandlingFee: increment(payload.handlingFee || 0),
        totalActualHandling: increment(payload.actualHandling || 0),
        lastOrderId: orderRef.id,
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );
    return orderRef;
  },
  async seedPlatformFees(monthRows) {
    const existing = await getDocs(collection(db, "platform_fees"));
    const existingIds = new Set(existing.docs.map((item) => item.id));
    await Promise.all(
      monthRows
        .filter((row) => !existingIds.has(row.id))
        .map((row) =>
          setDoc(doc(db, "platform_fees", row.id), {
            month: row.month,
            year: row.year,
            amount: 1500,
            status: "Pending",
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          })
        )
    );
  },
};
