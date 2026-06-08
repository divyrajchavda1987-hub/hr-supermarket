import React from "react";
import { formatCurrency, getInitials } from "./utils";

export const colors = {
  bg: "#f4f6f1",
  card: "#ffffff",
  text: "#10231a",
  subtext: "#5f6f65",
  line: "#dbe5dd",
  accent: "#157347",
  accentSoft: "#dff5e9",
  danger: "#d24747",
  warning: "#f2b94b",
  dark: "#0f1720",
};

export function LogoBox({ compact = false }) {
  return (
    <div
      style={{
        width: compact ? 40 : 54,
        height: compact ? 40 : 54,
        borderRadius: 16,
        background: "linear-gradient(135deg, #157347, #0f5132)",
        color: "#fff",
        display: "grid",
        placeItems: "center",
        fontWeight: 800,
        letterSpacing: "0.08em",
        boxShadow: "0 12px 24px rgba(21, 115, 71, 0.22)",
      }}
    >
      HR
    </div>
  );
}

export function TextLogo({ compact = false, tagline }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: compact ? 10 : 14 }}>
      <LogoBox compact={compact} />
      <div>
        <div style={{ fontWeight: 800, fontSize: compact ? 15 : 18 }}>HR Supermarket</div>
        <div style={{ fontSize: compact ? 11 : 13, color: colors.subtext }}>{tagline}</div>
      </div>
    </div>
  );
}

export function Surface({ children, style = {} }) {
  return (
    <div
      style={{
        background: colors.card,
        border: `1px solid ${colors.line}`,
        borderRadius: 24,
        boxShadow: "0 18px 40px rgba(16, 35, 26, 0.08)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function Button({
  children,
  onClick,
  kind = "primary",
  style = {},
  disabled = false,
  type = "button",
}) {
  const palette =
    kind === "primary"
      ? { bg: colors.accent, color: "#fff", border: "transparent" }
      : kind === "soft"
        ? { bg: colors.accentSoft, color: colors.accent, border: colors.accentSoft }
        : kind === "ghost"
          ? { bg: "transparent", color: colors.text, border: colors.line }
          : kind === "danger"
            ? { bg: "#fff4f4", color: colors.danger, border: "#ffd1d1" }
            : { bg: "#fff", color: colors.text, border: colors.line };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{
        borderRadius: 999,
        padding: "12px 18px",
        border: `1px solid ${palette.border}`,
        background: palette.bg,
        color: palette.color,
        cursor: disabled ? "not-allowed" : "pointer",
        fontWeight: 700,
        opacity: disabled ? 0.6 : 1,
        ...style,
      }}
    >
      {children}
    </button>
  );
}

export function SearchInput({ value, onChange, placeholder, style = {} }) {
  return (
    <input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      style={{
        width: "100%",
        borderRadius: 18,
        border: `1px solid ${colors.line}`,
        padding: "14px 16px",
        outline: "none",
        fontSize: 15,
        ...style,
      }}
    />
  );
}

export function Badge({ children, tone = "default", style = {} }) {
  const palette =
    tone === "green"
      ? { bg: "#e5f8ec", color: "#0d683f" }
      : tone === "orange"
        ? { bg: "#fff1de", color: "#a25b10" }
        : tone === "dark"
          ? { bg: "#10231a", color: "#fff" }
          : { bg: "#f2f4f3", color: colors.subtext };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        borderRadius: 999,
        padding: "7px 10px",
        background: palette.bg,
        color: palette.color,
        fontSize: 12,
        fontWeight: 700,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

export function Drawer({ open, children, onClose, width = 420, mobileFull = false }) {
  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: open ? "rgba(15, 23, 32, 0.45)" : "transparent",
          pointerEvents: open ? "auto" : "none",
          transition: "background 180ms ease",
          zIndex: 50,
        }}
      />
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100vh",
          width: mobileFull ? "min(100vw, 100%)" : `min(${width}px, 100vw)`,
          background: colors.card,
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 240ms ease",
          zIndex: 51,
          overflowY: "auto",
          boxShadow: "-20px 0 40px rgba(15, 23, 32, 0.18)",
        }}
      >
        {children}
      </div>
    </>
  );
}

export function Modal({ open, children, onClose }) {
  if (!open) {
    return null;
  }
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(15, 23, 32, 0.45)",
        display: "grid",
        placeItems: "center",
        padding: 20,
        zIndex: 60,
      }}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          width: "min(760px, 100%)",
          maxHeight: "85vh",
          overflowY: "auto",
          background: "#fff",
          borderRadius: 28,
          boxShadow: "0 28px 60px rgba(15, 23, 32, 0.2)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export function Toast({ message }) {
  if (!message) {
    return null;
  }
  return (
    <div
      style={{
        position: "fixed",
        right: 18,
        bottom: 18,
        zIndex: 80,
        background: "#10231a",
        color: "#fff",
        borderRadius: 18,
        padding: "14px 18px",
        boxShadow: "0 18px 30px rgba(16, 35, 26, 0.24)",
      }}
    >
      {message}
    </div>
  );
}

export function StatCard({ label, value, subtext, dark = false }) {
  return (
    <Surface
      style={{
        padding: 20,
        background: dark ? "#132231" : "#fff",
        color: dark ? "#fff" : colors.text,
      }}
    >
      <div style={{ fontSize: 13, color: dark ? "#93a4b6" : colors.subtext }}>{label}</div>
      <div style={{ fontSize: 30, fontWeight: 800, marginTop: 10 }}>{value}</div>
      {subtext ? (
        <div style={{ marginTop: 10, fontSize: 13, color: dark ? "#93a4b6" : colors.subtext }}>{subtext}</div>
      ) : null}
    </Surface>
  );
}

export function PinGate({ title, subtitle, onSubmit, pin, setPin, error, dark = false }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: dark ? "#071018" : colors.bg,
        padding: 20,
      }}
    >
      <Surface
        style={{
          width: "min(420px, 100%)",
          padding: 28,
          background: dark ? "#101b27" : "#fff",
          color: dark ? "#fff" : colors.text,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
          <LogoBox />
          <div>
            <div style={{ fontWeight: 800, fontSize: 20 }}>{title}</div>
            <div style={{ color: dark ? "#8ea3b8" : colors.subtext, fontSize: 14 }}>{subtitle}</div>
          </div>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit();
          }}
          style={{ display: "grid", gap: 14 }}
        >
          <input
            value={pin}
            onChange={(event) => setPin(event.target.value)}
            placeholder="Enter PIN"
            type="password"
            style={{
              width: "100%",
              borderRadius: 16,
              border: `1px solid ${dark ? "#233243" : colors.line}`,
              padding: "14px 16px",
              outline: "none",
              background: dark ? "#0b141d" : "#fff",
              color: dark ? "#fff" : colors.text,
            }}
          />
          {error ? <div style={{ color: "#ff7676", fontSize: 13 }}>{error}</div> : null}
          <Button type="submit" style={{ width: "100%" }}>
            Unlock
          </Button>
        </form>
      </Surface>
    </div>
  );
}

export function SectionTitle({ kicker, title, action }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: 16,
        marginBottom: 18,
        flexWrap: "wrap",
      }}
    >
      <div>
        <div style={{ fontSize: 12, textTransform: "uppercase", color: colors.accent, fontWeight: 800 }}>{kicker}</div>
        <div style={{ fontSize: 28, fontWeight: 800, marginTop: 6 }}>{title}</div>
      </div>
      {action}
    </div>
  );
}

export function BottomNav({ items, active, onChange }) {
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 45,
        background: "#fff",
        borderTop: `1px solid ${colors.line}`,
        display: "grid",
        gridTemplateColumns: `repeat(${items.length}, 1fr)`,
      }}
    >
      {items.map((item) => (
        <button
          key={item.key}
          onClick={() => onChange(item.key)}
          style={{
            border: 0,
            background: "transparent",
            padding: "10px 8px 12px",
            color: active === item.key ? colors.accent : colors.subtext,
            fontWeight: active === item.key ? 800 : 600,
          }}
        >
          <div style={{ fontSize: 20 }}>{item.icon}</div>
          <div style={{ fontSize: 11, marginTop: 4 }}>{item.label}</div>
        </button>
      ))}
    </div>
  );
}

export function OrderLine({ title, quantity }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: colors.subtext }}>
      <span>{title}</span>
      <span>x{quantity}</span>
    </div>
  );
}

export function PriceBlock({ price, mrp, discount }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
      <div style={{ fontSize: 20, fontWeight: 800 }}>{formatCurrency(price)}</div>
      <div style={{ fontSize: 14, color: colors.subtext, textDecoration: "line-through" }}>{formatCurrency(mrp)}</div>
      <div style={{ color: colors.accent, fontWeight: 800, fontSize: 14 }}>{discount}% off</div>
    </div>
  );
}

export function Avatar({ name }) {
  return (
    <div
      style={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        display: "grid",
        placeItems: "center",
        background: colors.accentSoft,
        color: colors.accent,
        fontWeight: 800,
      }}
    >
      {getInitials(name)}
    </div>
  );
}
