import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Badge,
  Button,
  PinGate,
  SearchInput,
  SectionTitle,
  StatCard,
  Surface,
  TextLogo,
  Toast,
  colors,
} from "../shared/components";
import { authApi, DIVYRAJ_PIN, firestoreApi, isAdminEmail, STORE_START_MONTH } from "../shared/firebase";
import { useBodyTheme, useLocalStorageState, useMediaQuery } from "../shared/hooks";
import { formatCurrency, formatDate, getMonthRows, storageKeys } from "../shared/utils";

function DivyrajDashboard() {
  useBodyTheme("linear-gradient(180deg, #071018 0%, #0d1823 100%)", "#f8fbff");
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [pin, setPin] = useState("");
  const [pinError, setPinError] = useState("");
  const [pinOk, setPinOk] = useLocalStorageState(storageKeys.pinDivyraj, false);
  const [user, setUser] = useState(null);
  const [authForm, setAuthForm] = useState({ email: "", password: "" });
  const [orders, setOrders] = useState([]);
  const [fees, setFees] = useState([]);
  const [toast, setToast] = useState("");

  useEffect(() => authApi.onChange(setUser), []);
  useEffect(() => {
    const timer = window.setTimeout(() => setToast(""), 2200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    if (!pinOk || !user || !isAdminEmail(user.email)) {
      return undefined;
    }
    const monthRows = getMonthRows(STORE_START_MONTH.month, STORE_START_MONTH.year);
    firestoreApi.seedPlatformFees(monthRows).catch(() => {});
    const unsubOrders = firestoreApi.subscribeOrders((items) => setOrders(items));
    const unsubFees = firestoreApi.subscribeCollection("platform_fees", (items) => setFees(items));
    return () => {
      unsubOrders?.();
      unsubFees?.();
    };
  }, [pinOk, user]);

  const monthRows = useMemo(() => {
    return getMonthRows(STORE_START_MONTH.month, STORE_START_MONTH.year).map((row) => {
      const found = fees.find((fee) => fee.id === row.id);
      return {
        ...row,
        amount: found?.amount || 1500,
        status: found?.status || "Pending",
      };
    });
  }, [fees]);

  const summary = useMemo(() => {
    const now = new Date();
    const thisMonth = orders.filter((order) => {
      const date = new Date(order.createdAt || now);
      return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
    });
    const currentMonthRow = monthRows.find(
      (row) => row.month === now.getMonth() + 1 && row.year === now.getFullYear()
    );
    const totalThisMonth = thisMonth.reduce((sum, order) => sum + Number(order.platformCut || 0), 0);
    const totalAllTime = orders.reduce((sum, order) => sum + Number(order.platformCut || 0), 0);
    const totalPending = orders
      .filter((order) => order.platformCutStatus !== "completed")
      .reduce((sum, order) => sum + Number(order.platformCut || 0), 0);
    const retainerCollected = monthRows
      .filter((row) => row.status === "Completed")
      .reduce((sum, row) => sum + Number(row.amount || 0), 0);
    const retainerDue = monthRows.reduce((sum, row) => sum + Number(row.amount || 0), 0);
    return {
      totalThisMonth,
      totalAllTime,
      totalPending,
      currentMonthStatus: currentMonthRow?.status || "Pending",
      currentMonthEarnings:
        totalThisMonth + (currentMonthRow?.status === "Completed" ? Number(currentMonthRow.amount || 0) : 0),
      allTimeCollected: totalAllTime + retainerCollected,
      allTimePending:
        totalPending +
        monthRows
          .filter((row) => row.status !== "Completed")
          .reduce((sum, row) => sum + Number(row.amount || 0), 0),
      retainerCollected,
      retainerDue,
    };
  }, [orders, monthRows]);

  function unlock() {
    if (pin === DIVYRAJ_PIN) {
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
        title="Divyraj Dashboard"
        subtitle="Private earnings dashboard"
        pin={pin}
        setPin={setPin}
        onSubmit={unlock}
        error={pinError}
        dark
      />
    );
  }

  if (!user || !isAdminEmail(user.email)) {
    return (
      <div style={{ minHeight: "100vh", padding: 24 }}>
        <Surface
          style={{
            width: "min(460px, 100%)",
            margin: "90px auto",
            padding: 28,
            background: "#101b27",
            color: "#fff",
            borderColor: "#1f2c3a",
          }}
        >
          <TextLogo tagline="Private dashboard access" />
          <div style={{ fontSize: 28, fontWeight: 900, marginTop: 18 }}>Sign In</div>
          <div style={{ color: "#8ea3b8", marginTop: 8 }}>Use your admin email to continue.</div>
          <form onSubmit={signIn} style={{ display: "grid", gap: 12, marginTop: 18 }}>
            <SearchInput
              value={authForm.email}
              onChange={(email) => setAuthForm({ ...authForm, email })}
              placeholder="Admin email"
              style={{ background: "#0b141d", color: "#fff", borderColor: "#243344" }}
            />
            <input
              type="password"
              value={authForm.password}
              onChange={(event) => setAuthForm({ ...authForm, password: event.target.value })}
              placeholder="Password"
              style={{ borderRadius: 16, border: "1px solid #243344", padding: "14px 16px", background: "#0b141d", color: "#fff" }}
            />
            <Button type="submit">Sign In</Button>
          </form>
        </Surface>
        <Toast message={toast} />
      </div>
    );
  }

  async function markCompleted(orderId) {
    try {
      await firestoreApi.updatePlatformCutStatus(orderId, "completed");
      setToast("Order fee marked completed");
    } catch (error) {
      setToast(error.message || "Could not update order");
    }
  }

  async function markRetainerPaid(row) {
    try {
      await firestoreApi.updatePlatformFeeStatus(row.id, "Completed");
      setToast("Monthly retainer marked paid");
    } catch (error) {
      setToast(error.message || "Could not update retainer");
    }
  }

  return (
    <div style={{ minHeight: "100vh", padding: isMobile ? 16 : 26, color: "#f8fbff" }}>
      <Surface style={{ padding: isMobile ? 18 : 24, background: "#101b27", color: "#fff", borderColor: "#1f2c3a" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
          <TextLogo tagline="Private earnings dashboard" />
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Badge tone="dark" style={{ background: "#1d2c3b" }}>{user.email}</Badge>
            <Button kind="ghost" style={{ color: "#fff", borderColor: "#314354" }} onClick={() => authApi.signOut()}>
              Logout
            </Button>
          </div>
        </div>
      </Surface>

      <div style={{ width: "min(1320px, 100%)", margin: "24px auto 0" }}>
        <SectionTitle kicker="Private" title="Live order fee control" />
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)", gap: 14 }}>
          <StatCard dark label="Total earned this month" value={formatCurrency(summary.totalThisMonth)} />
          <StatCard dark label="Total earned all time" value={formatCurrency(summary.totalAllTime)} />
          <StatCard dark label="Total pending" value={formatCurrency(summary.totalPending)} />
          <StatCard dark label="Monthly retainer status" value={summary.currentMonthStatus} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr", gap: 18, marginTop: 20 }}>
          <Surface style={{ padding: 22, background: "#101b27", color: "#fff", borderColor: "#1f2c3a" }}>
            <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 16 }}>Live Order Feed</div>
            <div style={{ display: "grid", gap: 12 }}>
              {orders.map((order) => (
                <Surface key={order.id} style={{ padding: 16, background: "#0b141d", color: "#fff", borderColor: "#1f2c3a" }}>
                  <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 140px 180px", gap: 12, alignItems: "center" }}>
                    <div>
                      <div style={{ fontWeight: 800 }}>{order.id}</div>
                      <div style={{ color: "#8ea3b8", fontSize: 13, marginTop: 6 }}>{formatDate(order.createdAt)}</div>
                    </div>
                    <div>
                      <div>{formatCurrency(order.total)}</div>
                      <div style={{ color: "#8ea3b8", fontSize: 13, marginTop: 6 }}>My Cut: {formatCurrency(order.platformCut || 15)}</div>
                    </div>
                    <div style={{ display: "flex", gap: 10, justifyContent: isMobile ? "flex-start" : "flex-end", alignItems: "center", flexWrap: "wrap" }}>
                      <Badge tone={order.platformCutStatus === "completed" ? "green" : "orange"}>
                        {order.platformCutStatus === "completed" ? "Completed" : "Pending"}
                      </Badge>
                      {order.platformCutStatus !== "completed" ? (
                        <Button onClick={() => markCompleted(order.id)}>Mark Completed</Button>
                      ) : null}
                    </div>
                  </div>
                </Surface>
              ))}
            </div>
          </Surface>

          <div style={{ display: "grid", gap: 18 }}>
            <Surface style={{ padding: 22, background: "#101b27", color: "#fff", borderColor: "#1f2c3a" }}>
              <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 16 }}>Earnings Summary</div>
              <div style={{ display: "grid", gap: 12 }}>
                <div style={summaryRowStyle}>
                  <span>This month</span>
                  <strong>{formatCurrency(summary.currentMonthEarnings)}</strong>
                </div>
                <div style={summaryRowStyle}>
                  <span>All time total collected</span>
                  <strong>{formatCurrency(summary.allTimeCollected)}</strong>
                </div>
                <div style={summaryRowStyle}>
                  <span>All time total still pending</span>
                  <strong>{formatCurrency(summary.allTimePending)}</strong>
                </div>
              </div>
            </Surface>

            <Surface style={{ padding: 22, background: "#101b27", color: "#fff", borderColor: "#1f2c3a" }}>
              <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 16 }}>Monthly Retainer</div>
              <div style={{ display: "grid", gap: 12 }}>
                {monthRows.map((row) => (
                  <div
                    key={row.id}
                    style={{
                      display: "grid",
                      gridTemplateColumns: isMobile ? "1fr" : "1fr 120px 140px",
                      gap: 12,
                      alignItems: "center",
                      paddingBottom: 12,
                      borderBottom: "1px solid #1f2c3a",
                    }}
                  >
                    <strong>{row.label}</strong>
                    <span>{formatCurrency(row.amount)}</span>
                    <div style={{ display: "flex", gap: 10, justifyContent: isMobile ? "flex-start" : "flex-end", alignItems: "center", flexWrap: "wrap" }}>
                      <Badge tone={row.status === "Completed" ? "green" : "orange"}>{row.status}</Badge>
                      {row.status !== "Completed" ? <Button onClick={() => markRetainerPaid(row)}>Mark Paid</Button> : null}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 16, display: "grid", gap: 8 }}>
                <div style={summaryRowStyle}>
                  <span>Total collected</span>
                  <strong>{formatCurrency(summary.retainerCollected)}</strong>
                </div>
                <div style={summaryRowStyle}>
                  <span>Total due</span>
                  <strong>{formatCurrency(summary.retainerDue)}</strong>
                </div>
              </div>
            </Surface>
          </div>
        </div>
      </div>
      <Toast message={toast} />
    </div>
  );
}

const summaryRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: 12,
  color: "#d7e0ea",
};

createRoot(document.getElementById("root")).render(<DivyrajDashboard />);
