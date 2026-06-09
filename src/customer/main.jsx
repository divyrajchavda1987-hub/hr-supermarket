// ═══════════════════════════════════════════════════════════════
//  HR SUPERMARKET — Full Production App
//  Admin PIN: 1234  |  Developer Dashboard PIN: 2012
// ═══════════════════════════════════════════════════════════════

import { useState, useEffect, useCallback, useRef } from "react";

// ─── CONSTANTS ───────────────────────────────────────────────
const SHOP_INFO = {
  name: "HR Supermarket",
  tagline: "Surendranagar's Trusted Cash & Carry",
  address: "Shop No. 1, Bypass Road, Near Ganapati Flats, Urgent Society, Rajkot, Surendranagar, Gujarat 363030",
  phone: "+91 90541 27801",
  email: "info@hrsupermarket.in",
  hours: "Mon–Sun: 7:00 AM – 10:00 PM",
  mapLink: "https://maps.google.com/?q=HR+Supermarket+Surendranagar+Gujarat",
};

const ADMIN_PIN = "1234";
const DEV_PIN = "2012";
const PLATFORM_FEE = 20;
const DEV_CUT = 15;
const MONTHLY_FEE = 1500;
const SETUP_FEE = 5000;

const DELIVERY_AREAS = [
  { id: 1, name: "Urgent Society", base: 20 },
  { id: 2, name: "Bypass Road Area", base: 20 },
  { id: 3, name: "Near Ganapati Flats", base: 20 },
  { id: 4, name: "Station Road", base: 30 },
  { id: 5, name: "Main Bazaar", base: 30 },
  { id: 6, name: "Wadhwan City", base: 40 },
  { id: 7, name: "Dudhrej Road", base: 45 },
  { id: 8, name: "New Housing Board", base: 35 },
  { id: 9, name: "Rajkot Road Area", base: 50 },
  { id: 10, name: "Add my area...", base: 0, custom: true },
];

const CATEGORIES = [
  { id: "all",       name: "All",              color: "#2c3e50", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=120&q=70" },
  { id: "grains",    name: "Grains & Flour",   color: "#e67e22", img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=120&q=70" },
  { id: "pulses",    name: "Pulses & Dal",     color: "#d35400", img: "https://images.unsplash.com/photo-1585996964048-1929ee1aadcd?w=120&q=70" },
  { id: "dairy",     name: "Dairy & Eggs",     color: "#3498db", img: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=120&q=70" },
  { id: "spices",    name: "Spices & Masala",  color: "#c0392b", img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=120&q=70" },
  { id: "oils",      name: "Oils & Ghee",      color: "#f39c12", img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=120&q=70" },
  { id: "snacks",    name: "Snacks",           color: "#8e44ad", img: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=120&q=70" },
  { id: "beverages", name: "Beverages",        color: "#16a085", img: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=120&q=70" },
  { id: "fruits",    name: "Fresh Fruits",     color: "#27ae60", img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=120&q=70" },
  { id: "veggies",   name: "Vegetables",       color: "#2ecc71", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=120&q=70" },
  { id: "personal",  name: "Personal Care",    color: "#9b59b6", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=120&q=70" },
  { id: "cleaning",  name: "Cleaning",         color: "#1abc9c", img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=120&q=70" },
];

const PRODUCTS = [
  { id:1,  name:"Aashirvaad Atta 10kg",       price:429, mrp:480, cat:"grains",    badge:"Bestseller", img:"https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=70", desc:"Premium whole wheat flour for soft rotis every day.", stock:50 },
  { id:2,  name:"India Gate Basmati Rice 5kg",price:549, mrp:620, cat:"grains",    badge:"Top Rated",  img:"https://images.unsplash.com/photo-1536304993881-ff86e0c9b784?w=400&q=70", desc:"Long grain aged basmati rice — perfect for biryani.", stock:30 },
  { id:3,  name:"Toor Dal 1kg",               price:129, mrp:149, cat:"pulses",    badge:"Fresh",      img:"https://images.unsplash.com/photo-1585996964048-1929ee1aadcd?w=400&q=70", desc:"Premium quality toor dal, freshly stocked.", stock:80 },
  { id:4,  name:"Moong Dal 500g",             price:79,  mrp:95,  cat:"pulses",    badge:"",           img:"https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400&q=70", desc:"Yellow moong dal, washed and ready to cook.", stock:60 },
  { id:5,  name:"Amul Doodh 1L",             price:68,  mrp:72,  cat:"dairy",     badge:"Fresh Daily",img:"https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=70", desc:"Full cream fresh milk delivered daily.", stock:100 },
  { id:6,  name:"Amul Ghee 1L",              price:545, mrp:610, cat:"dairy",     badge:"Premium",    img:"https://images.unsplash.com/photo-1631545806609-bfb2db97f068?w=400&q=70", desc:"Pure cow ghee, rich aroma and taste.", stock:25 },
  { id:7,  name:"Eggs Tray (30 pcs)",        price:219, mrp:250, cat:"dairy",     badge:"Fresh",      img:"https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400&q=70", desc:"Farm fresh eggs, tray of 30.", stock:40 },
  { id:8,  name:"MDH Garam Masala 100g",     price:89,  mrp:105, cat:"spices",    badge:"",           img:"https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=70", desc:"Aromatic blend of whole spices.", stock:70 },
  { id:9,  name:"Everest Red Chilli Powder", price:65,  mrp:80,  cat:"spices",    badge:"Popular",    img:"https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=400&q=70", desc:"Bright red, hot chilli powder.", stock:90 },
  { id:10, name:"Turmeric Powder 200g",      price:45,  mrp:55,  cat:"spices",    badge:"",           img:"https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&q=70", desc:"Pure haldi powder for daily cooking.", stock:80 },
  { id:11, name:"Sunflower Oil 5L",          price:749, mrp:850, cat:"oils",      badge:"Value Pack", img:"https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=70", desc:"Refined sunflower oil, light and healthy.", stock:35 },
  { id:12, name:"Mustard Oil 1L",            price:149, mrp:175, cat:"oils",      badge:"",           img:"https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&q=70", desc:"Kachi ghani mustard oil, pure and pungent.", stock:45 },
  { id:13, name:"Haldiram's Bhujia 400g",    price:115, mrp:135, cat:"snacks",    badge:"Bestseller", img:"https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&q=70", desc:"Classic Haldiram's bhujia namkeen.", stock:60 },
  { id:14, name:"Lay's Classic Chips 6pk",   price:149, mrp:180, cat:"snacks",    badge:"",           img:"https://images.unsplash.com/photo-1621447504864-d8686e12698c?w=400&q=70", desc:"Crispy salted potato chips multipack.", stock:55 },
  { id:15, name:"Maggi Noodles 12pk",        price:149, mrp:180, cat:"snacks",    badge:"Loved",      img:"https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&q=70", desc:"India's favourite 2-minute noodles.", stock:75 },
  { id:16, name:"Coca-Cola 2L",              price:99,  mrp:115, cat:"beverages", badge:"",           img:"https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&q=70", desc:"Chilled Coca-Cola, 2 litre bottle.", stock:40 },
  { id:17, name:"Frooti Mango 1L × 6",      price:210, mrp:240, cat:"beverages", badge:"Popular",    img:"https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=70", desc:"Real mango drink, pack of 6.", stock:30 },
  { id:18, name:"Tata Tea Gold 500g",        price:199, mrp:230, cat:"beverages", badge:"Top Rated",  img:"https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=400&q=70", desc:"Strong kadak chai, premium blend.", stock:50 },
  { id:19, name:"Bananas (Dozen)",           price:49,  mrp:60,  cat:"fruits",    badge:"Fresh",      img:"https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400&q=70", desc:"Ripe yellow bananas, 1 dozen.", stock:100 },
  { id:20, name:"Apples (1kg)",             price:149, mrp:180, cat:"fruits",    badge:"",           img:"https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&q=70", desc:"Fresh Shimla apples, crisp and sweet.", stock:40 },
  { id:21, name:"Tomatoes (1kg)",           price:39,  mrp:50,  cat:"veggies",   badge:"Fresh",      img:"https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&q=70", desc:"Farm fresh red tomatoes.", stock:120 },
  { id:22, name:"Onions (1kg)",             price:29,  mrp:40,  cat:"veggies",   badge:"",           img:"https://images.unsplash.com/photo-1508747703725-719777637510?w=400&q=70", desc:"Fresh onions for everyday cooking.", stock:150 },
  { id:23, name:"Potatoes (1kg)",           price:25,  mrp:35,  cat:"veggies",   badge:"",           img:"https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=70", desc:"Fresh potatoes, versatile vegetable.", stock:150 },
  { id:24, name:"Dove Soap 4pk",            price:189, mrp:220, cat:"personal",  badge:"",           img:"https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=70", desc:"Moisturising beauty bar, pack of 4.", stock:45 },
  { id:25, name:"Head & Shoulders 400ml",   price:249, mrp:299, cat:"personal",  badge:"Popular",    img:"https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=70", desc:"Anti-dandruff shampoo for healthy hair.", stock:30 },
  { id:26, name:"Surf Excel 3kg",           price:399, mrp:460, cat:"cleaning",  badge:"Value Pack", img:"https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=70", desc:"Tough stain removal detergent powder.", stock:35 },
  { id:27, name:"Vim Dishwash Bar 4pk",     price:99,  mrp:120, cat:"cleaning",  badge:"",           img:"https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=70", desc:"Lemon-fresh dishwash bar, pack of 4.", stock:60 },
];

const BANNERS_DEFAULT = [
  { id:1, title:"Fresh Arrivals Daily", sub:"Vegetables & Fruits Direct from Farm", cta:"Shop Now", img:"https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1200&q=80", overlay:"rgba(0,80,0,0.55)" },
  { id:2, title:"Diwali Special Offer", sub:"Up to 30% OFF on Dry Fruits & Sweets", cta:"Grab Deal", img:"https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80", overlay:"rgba(120,40,0,0.6)" },
  { id:3, title:"Buy More Save More", sub:"On all branded FMCG products", cta:"Explore", img:"https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=1200&q=80", overlay:"rgba(0,40,100,0.55)" },
];

const DEMO_ORDERS = [
  { id:"ORD-4821", date:"12 May 2025", total:849,  status:"Delivered", items:[{name:"Basmati Rice",qty:1,price:549},{name:"Toor Dal",qty:2,price:129},{name:"Amul Ghee",qty:1,price:545}], area:"Urgent Society", deliveryFee:20 },
  { id:"ORD-3910", date:"3 Apr 2025",  total:412,  status:"Delivered", items:[{name:"Maggi Noodles",qty:1,price:149},{name:"Haldiram's Bhujia",qty:2,price:115},{name:"Dove Soap",qty:1,price:189}], area:"Station Road", deliveryFee:30 },
];

const COUPONS = [
  { code:"HR100",   label:"₹100 OFF",  desc:"On orders above ₹599",      min:599,  type:"flat",    val:100 },
  { code:"FIRST50", label:"₹50 OFF",   desc:"First order only",           min:0,    type:"flat",    val:50 },
  { code:"SAVE15",  label:"15% OFF",   desc:"On Beverages category",      min:100,  type:"percent", val:15 },
];

// ─── UTILS ───────────────────────────────────────────────────
const useLS = (key, init) => {
  const [v, sv] = useState(() => { try { const s = localStorage.getItem(key); return s ? JSON.parse(s) : init; } catch { return init; }});
  useEffect(() => { try { localStorage.setItem(key, JSON.stringify(v)); } catch {} }, [key, v]);
  return [v, sv];
};

const disc = (p, m) => m > p ? Math.round(((m - p) / m) * 100) : 0;
const fmt = n => `₹${Number(n).toLocaleString("en-IN")}`;
const now = () => new Date().toLocaleDateString("en-IN", { day:"2-digit", month:"short", year:"numeric" });

// ─── MICRO COMPONENTS ────────────────────────────────────────
const Stars = ({ r = 4.0 }) => (
  <span style={{ color:"#f39c12", fontSize:11 }}>
    {"★".repeat(Math.floor(r))}{"☆".repeat(5 - Math.floor(r))}
    <span style={{ color:"#888", marginLeft:3, fontWeight:600 }}>{r}</span>
  </span>
);

const Badge = ({ text, color = "#e74c3c" }) => text ? (
  <span style={{ background:color, color:"#fff", fontSize:9, fontWeight:800, padding:"2px 7px", borderRadius:20, textTransform:"uppercase", letterSpacing:0.5 }}>{text}</span>
) : null;

const Toast = ({ msg, type = "success" }) => (
  <div style={{
    position:"fixed", bottom:90, left:"50%", transform:"translateX(-50%)",
    background: type === "error" ? "#e74c3c" : type === "info" ? "#3498db" : "#27ae60",
    color:"#fff", padding:"12px 28px", borderRadius:30, fontWeight:700, fontSize:13,
    zIndex:9999, boxShadow:"0 4px 24px rgba(0,0,0,0.25)",
    animation:"toastIn 0.3s ease",
    whiteSpace:"nowrap",
  }}>{msg}</div>
);

const Spinner = () => (
  <div style={{ display:"flex", alignItems:"center", justifyContent:"center", padding:40 }}>
    <div style={{ width:36, height:36, border:"3px solid #eee", borderTop:"3px solid #e74c3c", borderRadius:"50%", animation:"spin 0.8s linear infinite" }} />
  </div>
);

const PinModal = ({ title, subtitle, onSuccess, onClose, correctPin }) => {
  const [pin, setPin] = useState("");
  const [err, setErr] = useState("");
  const check = () => { if (pin === correctPin) { onSuccess(); } else { setErr("Wrong PIN. Try again."); setPin(""); }};
  return (
    <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.7)", zIndex:9000, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
      <div style={{ background:"#fff", borderRadius:20, padding:32, width:"100%", maxWidth:360, textAlign:"center", boxShadow:"0 20px 60px rgba(0,0,0,0.3)" }}>
        <div style={{ fontSize:44, marginBottom:12 }}>🔐</div>
        <div style={{ fontWeight:900, fontSize:20, marginBottom:4 }}>{title}</div>
        <div style={{ fontSize:13, color:"#888", marginBottom:24 }}>{subtitle}</div>
        <div style={{ display:"flex", justifyContent:"center", gap:12, marginBottom:20 }}>
          {[0,1,2,3].map(i => (
            <div key={i} style={{ width:14, height:14, borderRadius:"50%", background: pin.length > i ? "#2c3e50" : "#eee", border:"2px solid #ddd", transition:"background 0.2s" }} />
          ))}
        </div>
        <input type="password" maxLength={4} value={pin} onChange={e => { setErr(""); setPin(e.target.value); }} onKeyDown={e => e.key === "Enter" && check()}
          style={{ width:"100%", padding:"12px 16px", border:`2px solid ${err?"#e74c3c":"#ddd"}`, borderRadius:12, fontSize:20, textAlign:"center", letterSpacing:12, outline:"none", boxSizing:"border-box" }}
          placeholder="••••" autoFocus />
        {err && <div style={{ color:"#e74c3c", fontSize:12, marginTop:8 }}>{err}</div>}
        <div style={{ display:"flex", gap:10, marginTop:20 }}>
          <button onClick={onClose} style={{ flex:1, padding:12, background:"#f5f5f5", border:"none", borderRadius:12, cursor:"pointer", fontWeight:700, fontSize:14 }}>Cancel</button>
          <button onClick={check} style={{ flex:1, padding:12, background:"#2c3e50", color:"#fff", border:"none", borderRadius:12, cursor:"pointer", fontWeight:700, fontSize:14 }}>Enter →</button>
        </div>
      </div>
    </div>
  );
};

// ─── PRODUCT CARD ─────────────────────────────────────────────
const ProductCard = ({ p, onAdd, onWish, wished, onOpen, mobile }) => {
  const [imgErr, setImgErr] = useState(false);
  const d = disc(p.price, p.mrp);
  return (
    <div onClick={() => onOpen(p)} style={{
      background:"#fff", borderRadius:14, overflow:"hidden", cursor:"pointer",
      boxShadow:"0 2px 12px rgba(0,0,0,0.08)", border:"1px solid #f0f0f0",
      transition:"transform 0.2s, box-shadow 0.2s", position:"relative",
    }}
      onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 10px 28px rgba(0,0,0,0.14)"; }}
      onMouseLeave={e=>{ e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 2px 12px rgba(0,0,0,0.08)"; }}
    >
      {/* Wishlist */}
      <button onClick={e=>{e.stopPropagation();onWish(p.id);}} style={{
        position:"absolute", top:8, right:8, zIndex:2, background:"rgba(255,255,255,0.9)",
        border:"none", borderRadius:"50%", width:32, height:32, cursor:"pointer",
        display:"flex", alignItems:"center", justifyContent:"center", fontSize:16,
        boxShadow:"0 1px 6px rgba(0,0,0,0.12)"
      }}>{wished ? "❤️" : "🤍"}</button>
      {/* Badge */}
      {p.badge && <div style={{ position:"absolute", top:8, left:8, zIndex:2 }}><Badge text={p.badge} /></div>}
      {/* Image */}
      <div style={{ height: mobile ? 130 : 160, overflow:"hidden", background:"#f8f8f8" }}>
        <img src={imgErr ? "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=70" : p.img}
          alt={p.name} onError={() => setImgErr(true)}
          style={{ width:"100%", height:"100%", objectFit:"cover", transition:"transform 0.4s" }}
          onMouseEnter={e=>e.target.style.transform="scale(1.07)"}
          onMouseLeave={e=>e.target.style.transform="scale(1)"}
        />
      </div>
      {/* Info */}
      <div style={{ padding:"10px 12px 12px" }}>
        <div style={{ fontSize: mobile?12:13, fontWeight:700, color:"#1a1a1a", lineHeight:1.35, marginBottom:4, minHeight:34 }}>{p.name}</div>
        <Stars r={p.rating || 4.2} />
        <div style={{ display:"flex", alignItems:"baseline", gap:6, margin:"6px 0 8px", flexWrap:"wrap" }}>
          <span style={{ fontSize: mobile?15:17, fontWeight:900, color:"#1a1a1a" }}>{fmt(p.price)}</span>
          {p.mrp > p.price && <span style={{ fontSize:11, color:"#bbb", textDecoration:"line-through" }}>{fmt(p.mrp)}</span>}
          {d > 0 && <span style={{ fontSize:11, color:"#27ae60", fontWeight:800 }}>{d}% OFF</span>}
        </div>
        <button onClick={e=>{e.stopPropagation();onAdd(p);}} style={{
          width:"100%", padding:"8px 0", background: p.stock===0 ? "#ddd" : "#e74c3c",
          color:"#fff", border:"none", borderRadius:9, fontSize:12, fontWeight:800,
          cursor: p.stock===0 ? "not-allowed" : "pointer", letterSpacing:0.3, transition:"background 0.2s",
        }}
          onMouseEnter={e=>{ if(p.stock>0) e.target.style.background="#c0392b"; }}
          onMouseLeave={e=>{ if(p.stock>0) e.target.style.background="#e74c3c"; }}
          disabled={p.stock===0}
        >{p.stock===0 ? "Out of Stock" : "+ Add to Cart"}</button>
      </div>
    </div>
  );
};

// ─── BANNER CAROUSEL ─────────────────────────────────────────
const BannerCarousel = ({ banners, mobile }) => {
  const [idx, setIdx] = useState(0);
  useEffect(() => { const t = setInterval(() => setIdx(i=>(i+1)%banners.length), 4000); return ()=>clearInterval(t); }, [banners.length]);
  if (!banners.length) return null;
  const b = banners[idx];
  return (
    <div style={{ position:"relative", borderRadius:16, overflow:"hidden", marginBottom:24, height: mobile?180:360, cursor:"pointer" }}>
      <img src={b.img} alt={b.title} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
      <div style={{ position:"absolute", inset:0, background:b.overlay, display:"flex", alignItems:"center", padding: mobile?"24px 20px":"48px 60px" }}>
        <div>
          <div style={{ fontSize: mobile?22:42, fontWeight:900, color:"#fff", lineHeight:1.2, marginBottom: mobile?6:10, textShadow:"0 2px 12px rgba(0,0,0,0.4)" }}>{b.title}</div>
          <div style={{ fontSize: mobile?13:18, color:"rgba(255,255,255,0.9)", marginBottom: mobile?16:24 }}>{b.sub}</div>
          <button style={{ background:"#fff", border:"none", padding: mobile?"9px 22px":"13px 32px", borderRadius:30, fontWeight:800, fontSize: mobile?12:15, cursor:"pointer", color:"#222", boxShadow:"0 4px 16px rgba(0,0,0,0.2)" }}>{b.cta} →</button>
        </div>
      </div>
      {/* Dots */}
      <div style={{ position:"absolute", bottom:14, right:20, display:"flex", gap:6 }}>
        {banners.map((_,i)=>(
          <div key={i} onClick={()=>setIdx(i)} style={{ width:i===idx?24:8, height:8, borderRadius:4, background:i===idx?"#fff":"rgba(255,255,255,0.5)", cursor:"pointer", transition:"width 0.3s" }} />
        ))}
      </div>
      {/* Arrows */}
      {!mobile && <>
        <button onClick={()=>setIdx(i=>(i-1+banners.length)%banners.length)} style={{ position:"absolute", left:16, top:"50%", transform:"translateY(-50%)", background:"rgba(255,255,255,0.2)", border:"none", color:"#fff", width:40, height:40, borderRadius:"50%", cursor:"pointer", fontSize:18, backdropFilter:"blur(4px)" }}>‹</button>
        <button onClick={()=>setIdx(i=>(i+1)%banners.length)} style={{ position:"absolute", right:16, top:"50%", transform:"translateY(-50%)", background:"rgba(255,255,255,0.2)", border:"none", color:"#fff", width:40, height:40, borderRadius:"50%", cursor:"pointer", fontSize:18, backdropFilter:"blur(4px)" }}>›</button>
      </>}
    </div>
  );
};

// ─── CART DRAWER ─────────────────────────────────────────────
const CartDrawer = ({ cart, area, setArea, onClose, onRemove, onQty, onCheckout, coupon, setCoupon, mobile }) => {
  const [couponInput, setCouponInput] = useState("");
  const [couponMsg, setCouponMsg] = useState("");
  const subtotal = cart.reduce((s,c)=>s+c.price*c.qty, 0);
  const deliveryFee = area ? (DELIVERY_AREAS.find(a=>a.id===area)?.base || 0) + PLATFORM_FEE : PLATFORM_FEE;
  const couponDisc = coupon ? (coupon.type==="flat" ? coupon.val : Math.round(subtotal*coupon.val/100)) : 0;
  const total = subtotal + deliveryFee - couponDisc;

  const applyCoupon = () => {
    const found = COUPONS.find(c=>c.code===couponInput.toUpperCase());
    if (!found) { setCouponMsg("Invalid coupon code"); return; }
    if (subtotal < found.min) { setCouponMsg(`Min order ₹${found.min} required`); return; }
    setCoupon(found); setCouponMsg(`✓ ${found.label} applied!`);
  };

  return (
    <div style={{ position:"fixed", inset:0, zIndex:1000, display:"flex" }}>
      <div onClick={onClose} style={{ flex:1, background:"rgba(0,0,0,0.5)" }} />
      <div style={{ width: mobile?"100vw":400, background:"#fff", display:"flex", flexDirection:"column", boxShadow:"-8px 0 40px rgba(0,0,0,0.15)" }}>
        {/* Header */}
        <div style={{ padding:"18px 20px", borderBottom:"1px solid #f0f0f0", display:"flex", justifyContent:"space-between", alignItems:"center", background:"#2c3e50", color:"#fff" }}>
          <div style={{ fontWeight:900, fontSize:17 }}>🛒 My Cart ({cart.reduce((s,c)=>s+c.qty,0)} items)</div>
          <button onClick={onClose} style={{ background:"rgba(255,255,255,0.15)", border:"none", color:"#fff", borderRadius:8, padding:"5px 12px", cursor:"pointer", fontWeight:700 }}>✕</button>
        </div>
        <div style={{ flex:1, overflowY:"auto" }}>
          {/* Cart Items */}
          <div style={{ padding:"12px 16px" }}>
            {cart.length === 0 ? (
              <div style={{ textAlign:"center", padding:"60px 0", color:"#bbb" }}>
                <div style={{ fontSize:64, marginBottom:12 }}>🛒</div>
                <div style={{ fontWeight:600 }}>Your cart is empty</div>
                <div style={{ fontSize:12, marginTop:4 }}>Add items to get started</div>
              </div>
            ) : cart.map(c => (
              <div key={c.id} style={{ display:"flex", gap:10, alignItems:"center", padding:"12px 0", borderBottom:"1px solid #f8f8f8" }}>
                <img src={c.img} alt={c.name} style={{ width:54, height:54, objectFit:"cover", borderRadius:8 }} onError={e=>e.target.src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&q=70"} />
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ fontSize:12, fontWeight:700, lineHeight:1.3, marginBottom:2 }}>{c.name}</div>
                  <div style={{ fontSize:13, fontWeight:900, color:"#e74c3c" }}>{fmt(c.price)}</div>
                </div>
                <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                  <button onClick={()=>onQty(c.id,-1)} style={{ width:28, height:28, border:"1.5px solid #ddd", borderRadius:7, cursor:"pointer", background:"#f9f9f9", fontWeight:900, fontSize:14 }}>−</button>
                  <span style={{ fontWeight:800, minWidth:20, textAlign:"center", fontSize:14 }}>{c.qty}</span>
                  <button onClick={()=>onQty(c.id,1)} style={{ width:28, height:28, border:"1.5px solid #ddd", borderRadius:7, cursor:"pointer", background:"#f9f9f9", fontWeight:900, fontSize:14 }}>+</button>
                </div>
                <button onClick={()=>onRemove(c.id)} style={{ background:"none", border:"none", color:"#e74c3c", cursor:"pointer", fontSize:18, padding:"0 4px" }}>🗑</button>
              </div>
            ))}
          </div>

          {cart.length > 0 && <>
            {/* Delivery Area */}
            <div style={{ padding:"0 16px 12px" }}>
              <div style={{ fontWeight:700, fontSize:13, marginBottom:8, color:"#333" }}>📍 Select Delivery Area</div>
              <select value={area||""} onChange={e=>setArea(Number(e.target.value))} style={{ width:"100%", padding:"10px 12px", border:"1.5px solid #ddd", borderRadius:10, fontSize:13, background:"#fafafa", outline:"none" }}>
                <option value="">-- Choose your area --</option>
                {DELIVERY_AREAS.filter(a=>!a.custom).map(a=>(
                  <option key={a.id} value={a.id}>{a.name} — Delivery ₹{a.base + PLATFORM_FEE}</option>
                ))}
              </select>
            </div>

            {/* Coupon */}
            <div style={{ padding:"0 16px 12px" }}>
              <div style={{ fontWeight:700, fontSize:13, marginBottom:8, color:"#333" }}>🎟 Apply Coupon</div>
              <div style={{ display:"flex", gap:8 }}>
                <input value={couponInput} onChange={e=>setCouponInput(e.target.value)} placeholder="Enter coupon code" style={{ flex:1, padding:"9px 12px", border:"1.5px solid #ddd", borderRadius:10, fontSize:13, outline:"none" }} />
                <button onClick={applyCoupon} style={{ padding:"9px 16px", background:"#2c3e50", color:"#fff", border:"none", borderRadius:10, cursor:"pointer", fontWeight:700, fontSize:12 }}>Apply</button>
              </div>
              {couponMsg && <div style={{ fontSize:12, marginTop:6, color: couponMsg.startsWith("✓")?"#27ae60":"#e74c3c", fontWeight:600 }}>{couponMsg}</div>}
            </div>

            {/* Bill */}
            <div style={{ margin:"0 16px 12px", background:"#f8f9fa", borderRadius:12, padding:14 }}>
              <div style={{ fontWeight:700, fontSize:13, marginBottom:10, color:"#333" }}>Bill Summary</div>
              {[
                ["Subtotal", fmt(subtotal)],
                ["Handling & Delivery", fmt(deliveryFee)],
                ...(couponDisc > 0 ? [["Coupon Discount", `− ${fmt(couponDisc)}`]] : []),
              ].map(([l,v],i)=>(
                <div key={i} style={{ display:"flex", justifyContent:"space-between", fontSize:13, padding:"4px 0", color:"#555" }}>
                  <span>{l}</span><span style={{ color: l.includes("Discount")?"#27ae60":"inherit" }}>{v}</span>
                </div>
              ))}
              <div style={{ borderTop:"1.5px solid #dee2e6", marginTop:8, paddingTop:8, display:"flex", justifyContent:"space-between", fontWeight:900, fontSize:16 }}>
                <span>Total</span><span style={{ color:"#e74c3c" }}>{fmt(total)}</span>
              </div>
            </div>
          </>}
        </div>

        {/* Checkout */}
        {cart.length > 0 && (
          <div style={{ padding:"14px 16px", borderTop:"1px solid #f0f0f0" }}>
            <button onClick={()=>onCheckout({subtotal,deliveryFee,couponDisc,total,area})}
              disabled={!area}
              style={{ width:"100%", padding:14, background: area?"linear-gradient(135deg,#e74c3c,#c0392b)":"#ddd", color:"#fff", border:"none", borderRadius:12, fontWeight:900, fontSize:15, cursor: area?"pointer":"not-allowed", letterSpacing:0.5 }}>
              {area ? `Proceed to Pay ${fmt(total)} →` : "Select delivery area first"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// ─── CHECKOUT / PAYMENT MODAL ────────────────────────────────
const CheckoutModal = ({ summary, cart, user, onClose, onSuccess }) => {
  const [step, setStep] = useState("address"); // address → payment → otp → success
  const [address, setAddress] = useState({ line1:"", landmark:"", pincode:"363030" });
  const [payMode, setPayMode] = useState("razorpay");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const initiateRazorpay = () => {
    // Razorpay integration — client must add their key
    const options = {
      key: "YOUR_RAZORPAY_KEY_HERE", // Client adds this
      amount: summary.total * 100,
      currency: "INR",
      name: "HR Supermarket",
      description: "Grocery Order",
      prefill: { name: user?.name || "", contact: user?.phone || "" },
      theme: { color: "#e74c3c" },
      handler: function(response) {
        setStep("otp");
        setOtpSent(true);
      },
    };
    if (window.Razorpay) {
      const rz = new window.Razorpay(options);
      rz.open();
    } else {
      // Fallback for demo
      setStep("otp");
      setOtpSent(true);
    }
  };

  const verifyOtp = () => {
    if (otp === "1234") { // Demo OTP
      setLoading(true);
      setTimeout(() => { setLoading(false); onSuccess(); }, 1500);
    }
  };

  return (
    <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.7)", zIndex:2000, display:"flex", alignItems:"center", justifyContent:"center", padding:16 }}>
      <div style={{ background:"#fff", borderRadius:20, width:"100%", maxWidth:480, maxHeight:"90vh", overflowY:"auto", boxShadow:"0 20px 60px rgba(0,0,0,0.3)" }}>
        {/* Header */}
        <div style={{ background:"#2c3e50", padding:"18px 24px", borderRadius:"20px 20px 0 0", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <div style={{ color:"#fff", fontWeight:900, fontSize:17 }}>
            {step==="address"?"📍 Delivery Address":step==="payment"?"💳 Payment":step==="otp"?"📱 Verify OTP":"✅ Order Placed"}
          </div>
          <button onClick={onClose} style={{ background:"rgba(255,255,255,0.15)", border:"none", color:"#fff", borderRadius:8, padding:"4px 12px", cursor:"pointer", fontWeight:700 }}>✕</button>
        </div>

        <div style={{ padding:24 }}>
          {/* Step: Address */}
          {step === "address" && (
            <div>
              <div style={{ marginBottom:16 }}>
                <label style={{ fontSize:12, fontWeight:700, color:"#555", display:"block", marginBottom:6 }}>FLAT / HOUSE / STREET *</label>
                <input value={address.line1} onChange={e=>setAddress({...address,line1:e.target.value})} placeholder="e.g. House No. 42, Sector 5" style={{ width:"100%", padding:"11px 14px", border:"1.5px solid #ddd", borderRadius:10, fontSize:14, outline:"none", boxSizing:"border-box" }} />
              </div>
              <div style={{ marginBottom:16 }}>
                <label style={{ fontSize:12, fontWeight:700, color:"#555", display:"block", marginBottom:6 }}>LANDMARK</label>
                <input value={address.landmark} onChange={e=>setAddress({...address,landmark:e.target.value})} placeholder="e.g. Near Bus Stand" style={{ width:"100%", padding:"11px 14px", border:"1.5px solid #ddd", borderRadius:10, fontSize:14, outline:"none", boxSizing:"border-box" }} />
              </div>
              {/* Order Summary */}
              <div style={{ background:"#f8f9fa", borderRadius:12, padding:14, marginBottom:20 }}>
                <div style={{ fontWeight:700, marginBottom:10, fontSize:13 }}>Order Summary</div>
                {cart.map(c=>(
                  <div key={c.id} style={{ display:"flex", justifyContent:"space-between", fontSize:12, padding:"3px 0", color:"#555" }}>
                    <span>{c.name} × {c.qty}</span><span>{fmt(c.price*c.qty)}</span>
                  </div>
                ))}
                <div style={{ borderTop:"1px solid #ddd", marginTop:8, paddingTop:8 }}>
                  <div style={{ display:"flex", justifyContent:"space-between", fontSize:12, color:"#555" }}><span>Delivery</span><span>{fmt(summary.deliveryFee)}</span></div>
                  {summary.couponDisc > 0 && <div style={{ display:"flex", justifyContent:"space-between", fontSize:12, color:"#27ae60" }}><span>Coupon</span><span>− {fmt(summary.couponDisc)}</span></div>}
                  <div style={{ display:"flex", justifyContent:"space-between", fontWeight:900, fontSize:16, marginTop:6 }}><span>Total</span><span style={{ color:"#e74c3c" }}>{fmt(summary.total)}</span></div>
                </div>
              </div>
              <button onClick={()=>{ if(address.line1) setStep("payment"); }} disabled={!address.line1}
                style={{ width:"100%", padding:13, background: address.line1?"#e74c3c":"#ddd", color:"#fff", border:"none", borderRadius:12, fontWeight:900, fontSize:14, cursor: address.line1?"pointer":"not-allowed" }}>
                Continue to Payment →
              </button>
            </div>
          )}

          {/* Step: Payment */}
          {step === "payment" && (
            <div>
              <div style={{ fontWeight:700, fontSize:15, marginBottom:16, color:"#333" }}>Choose Payment Method</div>
              {[
                { id:"razorpay", label:"Pay Online", sub:"UPI / Card / Net Banking / Wallet", icon:"💳" },
                { id:"cod", label:"Cash on Delivery", sub:"Pay when order arrives", icon:"💵" },
              ].map(m=>(
                <div key={m.id} onClick={()=>setPayMode(m.id)} style={{
                  border:`2px solid ${payMode===m.id?"#e74c3c":"#eee"}`, borderRadius:14, padding:"14px 18px",
                  marginBottom:12, cursor:"pointer", display:"flex", alignItems:"center", gap:14,
                  background: payMode===m.id?"#fff5f5":"#fafafa", transition:"all 0.2s"
                }}>
                  <div style={{ fontSize:28 }}>{m.icon}</div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontWeight:700, fontSize:14 }}>{m.label}</div>
                    <div style={{ fontSize:12, color:"#888" }}>{m.sub}</div>
                  </div>
                  <div style={{ width:20, height:20, borderRadius:"50%", border:`2px solid ${payMode===m.id?"#e74c3c":"#ddd"}`, display:"flex", alignItems:"center", justifyContent:"center" }}>
                    {payMode===m.id && <div style={{ width:10, height:10, borderRadius:"50%", background:"#e74c3c" }} />}
                  </div>
                </div>
              ))}
              <div style={{ background:"#fff9e6", borderRadius:10, padding:12, marginBottom:20, fontSize:12, color:"#7d6608" }}>
                📦 Delivery OTP will be sent to your registered mobile number for secure delivery confirmation.
              </div>
              <button onClick={()=>{ payMode==="razorpay" ? initiateRazorpay() : (setStep("otp"), setOtpSent(true)); }}
                style={{ width:"100%", padding:13, background:"#e74c3c", color:"#fff", border:"none", borderRadius:12, fontWeight:900, fontSize:14, cursor:"pointer" }}>
                {payMode==="razorpay" ? `Pay ${fmt(summary.total)} →` : "Place Order →"}
              </button>
            </div>
          )}

          {/* Step: OTP */}
          {step === "otp" && (
            <div style={{ textAlign:"center" }}>
              <div style={{ fontSize:48, marginBottom:12 }}>📱</div>
              <div style={{ fontWeight:800, fontSize:18, marginBottom:6 }}>Delivery OTP Sent!</div>
              <div style={{ fontSize:13, color:"#888", marginBottom:24 }}>Enter the 4-digit OTP that will be given to you by the delivery person to confirm delivery.</div>
              <div style={{ display:"flex", justifyContent:"center", gap:10, marginBottom:24 }}>
                {[0,1,2,3].map(i=>(
                  <input key={i} maxLength={1} style={{ width:50, height:56, border:"2px solid #ddd", borderRadius:12, textAlign:"center", fontSize:22, fontWeight:900, outline:"none" }}
                    onChange={e=>{ const d=otp.split(""); d[i]=e.target.value; setOtp(d.join("")); if(e.target.value && e.target.nextSibling) e.target.nextSibling.focus(); }}
                  />
                ))}
              </div>
              <div style={{ fontSize:12, color:"#aaa", marginBottom:20 }}>Demo OTP: 1234</div>
              <button onClick={verifyOtp} disabled={otp.length<4||loading}
                style={{ width:"100%", padding:13, background: otp.length>=4?"#27ae60":"#ddd", color:"#fff", border:"none", borderRadius:12, fontWeight:900, fontSize:14, cursor: otp.length>=4?"pointer":"not-allowed" }}>
                {loading ? "Verifying..." : "Verify & Confirm Order ✓"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── ACCOUNT PANEL ────────────────────────────────────────────
const AccountPanel = ({ onClose, orders, mobile, user, setUser }) => {
  const [tab, setTab] = useState("profile");
  const tabs = [
    {id:"profile",label:"👤 Profile"},{id:"orders",label:"📦 Orders"},
    {id:"reorder",label:"🔁 Reorder"},{id:"preorder",label:"⏳ Preorder"},
    {id:"wishlist",label:"❤️ Wishlist"},{id:"wallet",label:"💳 Wallet"},
    {id:"coupons",label:"🎟 Coupons"},{id:"notif",label:"🔔 Alerts"},
    {id:"support",label:"🎧 Support"},{id:"settings",label:"⚙️ Settings"},
  ];
  const [notifs, setNotifs] = useState({ orders:true, offers:true, preorder:true, arrivals:false, wallet:true });

  return (
    <div style={{ position:"fixed", inset:0, zIndex:1000, display:"flex" }}>
      <div onClick={onClose} style={{ flex:1, background:"rgba(0,0,0,0.5)" }} />
      <div style={{ width: mobile?"100vw":520, background:"#f7f8fa", display:"flex", flexDirection:"column", boxShadow:"-8px 0 40px rgba(0,0,0,0.15)" }}>
        {/* Header + Tabs */}
        <div style={{ background:"#2c3e50", paddingTop:20 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"0 20px 14px" }}>
            <div style={{ color:"#fff", fontWeight:900, fontSize:17 }}>My Account</div>
            <button onClick={onClose} style={{ background:"rgba(255,255,255,0.15)", border:"none", color:"#fff", padding:"5px 14px", borderRadius:8, cursor:"pointer", fontWeight:700 }}>✕</button>
          </div>
          <div style={{ display:"flex", gap:0, overflowX:"auto", padding:"0 8px" }}>
            {tabs.map(t=>(
              <button key={t.id} onClick={()=>setTab(t.id)} style={{
                background: tab===t.id?"#f7f8fa":"transparent",
                color: tab===t.id?"#2c3e50":"rgba(255,255,255,0.7)",
                border:"none", padding:"10px 13px", cursor:"pointer", whiteSpace:"nowrap",
                borderRadius:"8px 8px 0 0", fontWeight:700, fontSize:11, flexShrink:0,
              }}>{t.label}</button>
            ))}
          </div>
        </div>

        <div style={{ flex:1, overflowY:"auto", padding:18 }}>

          {tab==="profile" && (
            <div>
              <div style={{ background:"#fff", borderRadius:14, padding:24, textAlign:"center", boxShadow:"0 2px 12px rgba(0,0,0,0.06)", marginBottom:14 }}>
                <div style={{ width:70, height:70, borderRadius:"50%", background:"linear-gradient(135deg,#e74c3c,#c0392b)", margin:"0 auto 12px", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:28, fontWeight:900 }}>
                  {user?.name?.[0]?.toUpperCase()||"U"}
                </div>
                <div style={{ fontWeight:800, fontSize:18 }}>{user?.name||"Guest User"}</div>
                <div style={{ color:"#888", fontSize:13 }}>{user?.phone||"Not logged in"}</div>
                <button style={{ marginTop:14, padding:"8px 24px", background:"#2c3e50", color:"#fff", border:"none", borderRadius:8, cursor:"pointer", fontWeight:700, fontSize:13 }}>Edit Profile</button>
              </div>
              <div style={{ background:"#fff", borderRadius:14, padding:16, boxShadow:"0 2px 12px rgba(0,0,0,0.06)" }}>
                <div style={{ fontWeight:700, marginBottom:10 }}>📍 Saved Addresses</div>
                <div style={{ padding:12, border:"1px solid #eee", borderRadius:10, fontSize:13, color:"#555" }}>
                  🏠 Home — {SHOP_INFO.address}
                </div>
                <button style={{ marginTop:10, fontSize:12, color:"#e74c3c", background:"none", border:"1px dashed #e74c3c", padding:"7px 18px", borderRadius:8, cursor:"pointer", fontWeight:700 }}>+ Add New Address</button>
              </div>
            </div>
          )}

          {tab==="orders" && (
            <div>
              <div style={{ fontWeight:800, fontSize:15, marginBottom:12 }}>📦 Order History</div>
              {orders.length===0 ? <div style={{ textAlign:"center", color:"#bbb", padding:40 }}>No orders yet</div>
               : orders.map(o=>(
                <div key={o.id} style={{ background:"#fff", borderRadius:14, padding:16, marginBottom:12, boxShadow:"0 2px 8px rgba(0,0,0,0.06)" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
                    <span style={{ fontWeight:800, fontSize:13, color:"#2c3e50" }}>{o.id}</span>
                    <span style={{ background:o.status==="Delivered"?"#e8f8e8":o.status==="Out for Delivery"?"#fff3cd":"#f8f9fa", color:o.status==="Delivered"?"#27ae60":o.status==="Out for Delivery"?"#856404":"#555", padding:"3px 10px", borderRadius:20, fontSize:11, fontWeight:700 }}>{o.status}</span>
                  </div>
                  <div style={{ fontSize:12, color:"#888", marginBottom:6 }}>{o.date} · {fmt(o.total)}</div>
                  <div style={{ fontSize:12, color:"#555", marginBottom:10 }}>{o.items.map(i=>i.name).join(", ")}</div>
                  <button style={{ padding:"7px 16px", background:"#f0f4f8", border:"none", borderRadius:8, cursor:"pointer", fontWeight:700, fontSize:11, color:"#2c3e50" }}>🔁 Reorder</button>
                </div>
              ))}
            </div>
          )}

          {tab==="reorder" && (
            <div>
              <div style={{ background:"#fff9e6", border:"1px solid #ffc107", borderRadius:12, padding:14, marginBottom:14, fontSize:13 }}>💡 One-tap reorder your frequently bought items!</div>
              {orders.slice(0,2).map(o=>(
                <div key={o.id} style={{ background:"#fff", borderRadius:14, padding:16, marginBottom:12, boxShadow:"0 2px 8px rgba(0,0,0,0.06)" }}>
                  <div style={{ fontSize:13, fontWeight:600, marginBottom:4 }}>{o.items.map(i=>i.name).join(", ")}</div>
                  <div style={{ fontSize:12, color:"#888", marginBottom:10 }}>Last: {o.date} · {fmt(o.total)}</div>
                  <button style={{ padding:"9px 22px", background:"#27ae60", color:"#fff", border:"none", borderRadius:9, cursor:"pointer", fontWeight:800, fontSize:12 }}>🔁 Reorder All</button>
                </div>
              ))}
            </div>
          )}

          {tab==="preorder" && (
            <div>
              <div style={{ background:"#eef2ff", border:"1px solid #818cf8", borderRadius:12, padding:14, marginBottom:14, fontSize:13 }}>📅 Schedule your grocery delivery in advance!</div>
              {[{name:"Alphonso Mangoes (1 Dozen)", avail:"June 15, 2025"},{name:"Diwali Dry Fruit Box", avail:"Oct 20, 2025"}].map((item,i)=>(
                <div key={i} style={{ background:"#fff", borderRadius:14, padding:16, marginBottom:12, boxShadow:"0 2px 8px rgba(0,0,0,0.06)" }}>
                  <div style={{ fontSize:13, fontWeight:700 }}>{item.name}</div>
                  <div style={{ fontSize:12, color:"#888", margin:"4px 0 10px" }}>Available from: {item.avail}</div>
                  <button style={{ padding:"9px 22px", background:"#6366f1", color:"#fff", border:"none", borderRadius:9, cursor:"pointer", fontWeight:800, fontSize:12 }}>⏳ Preorder Now</button>
                </div>
              ))}
            </div>
          )}

          {tab==="wallet" && (
            <div>
              <div style={{ background:"linear-gradient(135deg,#2c3e50,#34495e)", borderRadius:16, padding:28, color:"#fff", textAlign:"center", marginBottom:14 }}>
                <div style={{ fontSize:12, opacity:0.8, marginBottom:4 }}>HR Wallet Balance</div>
                <div style={{ fontSize:44, fontWeight:900 }}>₹ 250.00</div>
                <button style={{ marginTop:16, background:"#fff", color:"#2c3e50", border:"none", padding:"9px 28px", borderRadius:24, fontWeight:800, cursor:"pointer" }}>+ Add Money</button>
              </div>
              <div style={{ background:"#fff", borderRadius:14, padding:16, boxShadow:"0 2px 8px rgba(0,0,0,0.06)" }}>
                <div style={{ fontWeight:700, marginBottom:10 }}>Recent Transactions</div>
                {[{l:"Cashback on ORD-4821",a:"+₹25",c:"#27ae60"},{l:"Added via UPI",a:"+₹200",c:"#27ae60"},{l:"Used in ORD-3910",a:"-₹50",c:"#e74c3c"}].map((t,i)=>(
                  <div key={i} style={{ display:"flex", justifyContent:"space-between", padding:"10px 0", borderBottom:i<2?"1px solid #f5f5f5":"none", fontSize:13 }}>
                    <span style={{ color:"#555" }}>{t.l}</span>
                    <span style={{ fontWeight:700, color:t.c }}>{t.a}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab==="coupons" && (
            <div>
              {COUPONS.map(c=>(
                <div key={c.code} style={{ background:"#fff", borderRadius:14, padding:16, marginBottom:12, borderLeft:"4px solid #e74c3c", boxShadow:"0 2px 8px rgba(0,0,0,0.06)" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                    <div>
                      <div style={{ fontWeight:900, fontSize:16, color:"#e74c3c", letterSpacing:1 }}>{c.code}</div>
                      <div style={{ fontWeight:700, fontSize:14, color:"#2c3e50" }}>{c.label}</div>
                      <div style={{ fontSize:11, color:"#888" }}>{c.desc}</div>
                    </div>
                    <button style={{ padding:"9px 18px", background:"#e74c3c", color:"#fff", border:"none", borderRadius:9, cursor:"pointer", fontWeight:800, fontSize:12 }}>Apply</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab==="notif" && (
            <div>
              {Object.entries({ orders:"Order Updates", offers:"Offers & Deals", preorder:"Preorder Alerts", arrivals:"New Arrivals", wallet:"Wallet Credits" }).map(([k,label])=>(
                <div key={k} style={{ background:"#fff", borderRadius:12, padding:"14px 16px", marginBottom:10, display:"flex", justifyContent:"space-between", alignItems:"center", boxShadow:"0 2px 8px rgba(0,0,0,0.06)" }}>
                  <span style={{ fontWeight:600, fontSize:13 }}>{label}</span>
                  <div onClick={()=>setNotifs(n=>({...n,[k]:!n[k]}))} style={{ width:44, height:24, borderRadius:12, background:notifs[k]?"#27ae60":"#ddd", position:"relative", cursor:"pointer", transition:"background 0.3s" }}>
                    <div style={{ position:"absolute", top:3, left:notifs[k]?22:3, width:18, height:18, borderRadius:"50%", background:"#fff", transition:"left 0.3s", boxShadow:"0 1px 4px rgba(0,0,0,0.2)" }} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab==="support" && (
            <div>
              <div style={{ background:"#fff", borderRadius:14, padding:20, boxShadow:"0 2px 8px rgba(0,0,0,0.06)", marginBottom:12 }}>
                {[{icon:"📞",label:"Call Us",val:SHOP_INFO.phone,btn:"Call Now",href:`tel:${SHOP_INFO.phone}`},{icon:"💬",label:"WhatsApp",val:SHOP_INFO.phone,btn:"Chat",href:`https://wa.me/9190541278011`},{icon:"📧",label:"Email",val:SHOP_INFO.email,btn:"Email",href:`mailto:${SHOP_INFO.email}`}].map((c,i)=>(
                  <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 0", borderBottom:i<2?"1px solid #f5f5f5":"none" }}>
                    <div style={{ fontSize:13 }}><span style={{ marginRight:8 }}>{c.icon}</span><strong>{c.label}</strong><br/><span style={{ color:"#888", fontSize:11 }}>{c.val}</span></div>
                    <a href={c.href} style={{ padding:"7px 16px", background:"#2c3e50", color:"#fff", textDecoration:"none", borderRadius:8, fontWeight:700, fontSize:11 }}>{c.btn}</a>
                  </div>
                ))}
              </div>
              <div style={{ background:"#fff3cd", borderRadius:12, padding:14, fontSize:12, color:"#856404" }}>⏰ {SHOP_INFO.hours}</div>
            </div>
          )}

          {tab==="settings" && (
            <div>
              {["Change Password","Manage Saved Cards","Privacy Settings","Language: English / ગુજરાતી","About HR Supermarket","Terms & Conditions","Privacy Policy"].map((s,i)=>(
                <div key={i} style={{ background:"#fff", borderRadius:11, padding:"14px 16px", marginBottom:8, display:"flex", justifyContent:"space-between", alignItems:"center", cursor:"pointer", boxShadow:"0 1px 6px rgba(0,0,0,0.05)" }}>
                  <span style={{ fontSize:13, color:"#333" }}>{s}</span><span style={{ color:"#bbb" }}>›</span>
                </div>
              ))}
              <button style={{ width:"100%", marginTop:8, padding:13, background:"#e74c3c", color:"#fff", border:"none", borderRadius:12, fontWeight:900, cursor:"pointer", fontSize:14 }}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── ADMIN PANEL ─────────────────────────────────────────────
const AdminPanel = ({ products, setProducts, banners, setBanners, orders, onClose, mobile }) => {
  const [tab, setTab] = useState("orders");
  const emptyForm = { name:"", price:"", mrp:"", cat:"grains", badge:"", img:"", stock:50 };
  const [form, setForm] = useState(emptyForm);
  const [bForm, setBForm] = useState({ title:"", sub:"", cta:"Shop Now", img:"", overlay:"rgba(0,0,0,0.5)" });

  const addProduct = () => {
    if (!form.name||!form.price) return;
    setProducts(p=>[...p,{...form, id:Date.now(), price:+form.price, mrp:+(form.mrp||form.price), rating:4.0}]);
    setForm(emptyForm);
  };

  return (
    <div style={{ position:"fixed", inset:0, zIndex:2000, background:"rgba(0,0,0,0.7)", display:"flex", alignItems:"center", justifyContent:"center" }}>
      <div style={{ background:"#f7f8fa", width: mobile?"100vw":700, maxHeight: mobile?"100vh":"92vh", borderRadius: mobile?0:18, overflow:"hidden", display:"flex", flexDirection:"column", boxShadow:"0 24px 80px rgba(0,0,0,0.4)" }}>
        <div style={{ background:"#2c3e50", padding:"18px 24px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <div style={{ color:"#fff", fontWeight:900, fontSize:17 }}>🔐 HR Supermarket — Admin Panel</div>
          <button onClick={onClose} style={{ background:"rgba(255,255,255,0.15)", border:"none", color:"#fff", padding:"5px 14px", borderRadius:8, cursor:"pointer", fontWeight:700 }}>✕ Close</button>
        </div>
        <div style={{ display:"flex", background:"#34495e", overflowX:"auto" }}>
          {["orders","products","banners","delivery","analytics"].map(t=>(
            <button key={t} onClick={()=>setTab(t)} style={{ padding:"11px 20px", background:tab===t?"#f7f8fa":"transparent", color:tab===t?"#2c3e50":"rgba(255,255,255,0.7)", border:"none", borderRadius:"8px 8px 0 0", cursor:"pointer", fontWeight:700, fontSize:12, whiteSpace:"nowrap", textTransform:"capitalize", flexShrink:0 }}>{t}</button>
          ))}
        </div>

        <div style={{ flex:1, overflowY:"auto", padding:20 }}>

          {tab==="orders" && (
            <div>
              <div style={{ fontWeight:800, fontSize:15, marginBottom:12 }}>📦 All Orders</div>
              {orders.map(o=>(
                <div key={o.id} style={{ background:"#fff", borderRadius:12, padding:16, marginBottom:12, boxShadow:"0 2px 8px rgba(0,0,0,0.06)" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
                    <span style={{ fontWeight:800 }}>{o.id}</span>
                    <select defaultValue={o.status} style={{ border:"1px solid #ddd", borderRadius:8, padding:"3px 8px", fontSize:12, cursor:"pointer" }}>
                      {["Placed","Processing","Out for Delivery","Delivered","Cancelled"].map(s=><option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div style={{ fontSize:12, color:"#888" }}>{o.date} · {fmt(o.total)} · {o.area}</div>
                  <div style={{ fontSize:12, color:"#555", marginTop:4 }}>{o.items.map(i=>i.name).join(", ")}</div>
                </div>
              ))}
            </div>
          )}

          {tab==="products" && (
            <div>
              <div style={{ background:"#fff", borderRadius:14, padding:18, marginBottom:16, boxShadow:"0 2px 8px rgba(0,0,0,0.06)" }}>
                <div style={{ fontWeight:700, marginBottom:12 }}>➕ Add New Product</div>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
                  <input placeholder="Product Name *" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} style={{ padding:"9px 12px", border:"1.5px solid #ddd", borderRadius:9, fontSize:13, gridColumn:"span 2" }} />
                  <input placeholder="Selling Price ₹ *" type="number" value={form.price} onChange={e=>setForm({...form,price:e.target.value})} style={{ padding:"9px 12px", border:"1.5px solid #ddd", borderRadius:9, fontSize:13 }} />
                  <input placeholder="MRP ₹" type="number" value={form.mrp} onChange={e=>setForm({...form,mrp:e.target.value})} style={{ padding:"9px 12px", border:"1.5px solid #ddd", borderRadius:9, fontSize:13 }} />
                  <select value={form.cat} onChange={e=>setForm({...form,cat:e.target.value})} style={{ padding:"9px 12px", border:"1.5px solid #ddd", borderRadius:9, fontSize:13 }}>
                    {CATEGORIES.filter(c=>c.id!=="all").map(c=><option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                  <input placeholder="Badge (Bestseller, Fresh...)" value={form.badge} onChange={e=>setForm({...form,badge:e.target.value})} style={{ padding:"9px 12px", border:"1.5px solid #ddd", borderRadius:9, fontSize:13 }} />
                  <input placeholder="Image URL (Unsplash)" value={form.img} onChange={e=>setForm({...form,img:e.target.value})} style={{ padding:"9px 12px", border:"1.5px solid #ddd", borderRadius:9, fontSize:13, gridColumn:"span 2" }} />
                  <input placeholder="Stock quantity" type="number" value={form.stock} onChange={e=>setForm({...form,stock:+e.target.value})} style={{ padding:"9px 12px", border:"1.5px solid #ddd", borderRadius:9, fontSize:13 }} />
                </div>
                <button onClick={addProduct} style={{ marginTop:12, padding:"10px 28px", background:"#27ae60", color:"#fff", border:"none", borderRadius:9, cursor:"pointer", fontWeight:800, fontSize:13 }}>Add Product</button>
              </div>
              <div style={{ fontWeight:700, marginBottom:10 }}>All Products ({products.length})</div>
              {products.map(p=>(
                <div key={p.id} style={{ background:"#fff", borderRadius:11, padding:"12px 16px", marginBottom:8, display:"flex", gap:12, alignItems:"center", boxShadow:"0 1px 6px rgba(0,0,0,0.05)" }}>
                  <img src={p.img} alt={p.name} style={{ width:44, height:44, objectFit:"cover", borderRadius:8 }} onError={e=>e.target.src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&q=70"} />
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:13, fontWeight:700 }}>{p.name}</div>
                    <div style={{ fontSize:11, color:"#888" }}>{fmt(p.price)} · Stock: {p.stock}</div>
                  </div>
                  <button onClick={()=>setProducts(prev=>prev.filter(x=>x.id!==p.id))} style={{ background:"none", border:"1px solid #e74c3c", color:"#e74c3c", padding:"5px 12px", borderRadius:8, cursor:"pointer", fontWeight:700, fontSize:11 }}>Delete</button>
                </div>
              ))}
            </div>
          )}

          {tab==="banners" && (
            <div>
              <div style={{ background:"#fff", borderRadius:14, padding:18, marginBottom:16, boxShadow:"0 2px 8px rgba(0,0,0,0.06)" }}>
                <div style={{ fontWeight:700, marginBottom:12 }}>➕ Add New Banner</div>
                <div style={{ display:"grid", gap:10 }}>
                  <input placeholder="Title *" value={bForm.title} onChange={e=>setBForm({...bForm,title:e.target.value})} style={{ padding:"9px 12px", border:"1.5px solid #ddd", borderRadius:9, fontSize:13 }} />
                  <input placeholder="Subtitle" value={bForm.sub} onChange={e=>setBForm({...bForm,sub:e.target.value})} style={{ padding:"9px 12px", border:"1.5px solid #ddd", borderRadius:9, fontSize:13 }} />
                  <input placeholder="Image URL (from Unsplash)" value={bForm.img} onChange={e=>setBForm({...bForm,img:e.target.value})} style={{ padding:"9px 12px", border:"1.5px solid #ddd", borderRadius:9, fontSize:13 }} />
                  <input placeholder='CTA Button Text e.g. "Shop Now"' value={bForm.cta} onChange={e=>setBForm({...bForm,cta:e.target.value})} style={{ padding:"9px 12px", border:"1.5px solid #ddd", borderRadius:9, fontSize:13 }} />
                </div>
                <button onClick={()=>{ if(bForm.title&&bForm.img){ setBanners(b=>[...b,{...bForm,id:Date.now()}]); setBForm({title:"",sub:"",cta:"Shop Now",img:"",overlay:"rgba(0,0,0,0.5)"}); }}} style={{ marginTop:12, padding:"10px 28px", background:"#3498db", color:"#fff", border:"none", borderRadius:9, cursor:"pointer", fontWeight:800, fontSize:13 }}>Add Banner</button>
              </div>
              {banners.map(b=>(
                <div key={b.id} style={{ borderRadius:12, overflow:"hidden", marginBottom:12, position:"relative", height:100 }}>
                  <img src={b.img} alt={b.title} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                  <div style={{ position:"absolute", inset:0, background:b.overlay, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 16px" }}>
                    <div style={{ color:"#fff" }}><div style={{ fontWeight:800 }}>{b.title}</div><div style={{ fontSize:12, opacity:0.85 }}>{b.sub}</div></div>
                    <button onClick={()=>setBanners(prev=>prev.filter(x=>x.id!==b.id))} style={{ background:"rgba(255,255,255,0.2)", border:"1px solid rgba(255,255,255,0.4)", color:"#fff", padding:"5px 14px", borderRadius:8, cursor:"pointer", fontWeight:700, fontSize:11 }}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab==="delivery" && (
            <div>
              <div style={{ fontWeight:800, fontSize:15, marginBottom:12 }}>🚚 Delivery Areas & Pricing</div>
              <div style={{ background:"#fff9e6", borderRadius:10, padding:12, marginBottom:14, fontSize:12, color:"#856404" }}>
                ₹{PLATFORM_FEE} Handling fee is automatically added to every order (₹{DEV_CUT} goes to platform, ₹{PLATFORM_FEE-DEV_CUT} is handling).
              </div>
              {DELIVERY_AREAS.filter(a=>!a.custom).map(a=>(
                <div key={a.id} style={{ background:"#fff", borderRadius:10, padding:"12px 16px", marginBottom:8, display:"flex", justifyContent:"space-between", alignItems:"center", boxShadow:"0 1px 6px rgba(0,0,0,0.05)" }}>
                  <span style={{ fontSize:13, fontWeight:600 }}>{a.name}</span>
                  <span style={{ fontWeight:800, color:"#e74c3c" }}>₹{a.base + PLATFORM_FEE} delivery</span>
                </div>
              ))}
            </div>
          )}

          {tab==="analytics" && (
            <div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:16 }}>
                {[
                  {label:"Total Orders",val:"1,284",icon:"📦",c:"#3498db"},
                  {label:"Today's Revenue",val:"₹28,450",icon:"💰",c:"#27ae60"},
                  {label:"Active Users",val:"342",icon:"👤",c:"#9b59b6"},
                  {label:"Products Listed",val:products.length,icon:"🛒",c:"#e74c3c"},
                ].map((m,i)=>(
                  <div key={i} style={{ background:"#fff", borderRadius:14, padding:18, boxShadow:"0 2px 8px rgba(0,0,0,0.06)", borderTop:`3px solid ${m.c}` }}>
                    <div style={{ fontSize:28, marginBottom:8 }}>{m.icon}</div>
                    <div style={{ fontSize:24, fontWeight:900, color:m.c }}>{m.val}</div>
                    <div style={{ fontSize:12, color:"#888" }}>{m.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ background:"#fff", borderRadius:14, padding:16, boxShadow:"0 2px 8px rgba(0,0,0,0.06)" }}>
                <div style={{ fontWeight:700, marginBottom:10 }}>Platform Service Fee Status</div>
                {["January","February","March","April","May","June"].map((m,i)=>(
                  <div key={m} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"9px 0", borderBottom:i<5?"1px solid #f5f5f5":"none" }}>
                    <span style={{ fontSize:13 }}>{m} 2025</span>
                    <span style={{ fontSize:13, fontWeight:700 }}>₹1,500</span>
                    <span style={{ background:i<4?"#e8f8e8":"#fff3cd", color:i<4?"#27ae60":"#856404", padding:"3px 10px", borderRadius:20, fontSize:11, fontWeight:700 }}>{i<4?"Paid":"Pending"}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── DEVELOPER DASHBOARD ─────────────────────────────────────
const DevDashboard = ({ orders, onClose, mobile }) => {
  const [tab, setTab] = useState("overview");
  const totalEarned = orders.reduce((s,o)=>s+(DEV_CUT), 0) * 12; // demo
  const thisMonth = orders.length * DEV_CUT;
  const monthlyStatus = [
    {m:"January",paid:true},{m:"February",paid:true},{m:"March",paid:true},
    {m:"April",paid:true},{m:"May",paid:false},{m:"June",paid:false},
  ];
  const totalFeeCollected = monthlyStatus.filter(x=>x.paid).length * MONTHLY_FEE;
  const totalFeePending = monthlyStatus.filter(x=>!x.paid).length * MONTHLY_FEE;

  return (
    <div style={{ position:"fixed", inset:0, zIndex:3000, background:"#0f172a", display:"flex", flexDirection:"column" }}>
      {/* Header */}
      <div style={{ background:"#1e293b", padding:"18px 24px", display:"flex", justifyContent:"space-between", alignItems:"center", borderBottom:"1px solid #334155" }}>
        <div>
          <div style={{ color:"#f1f5f9", fontWeight:900, fontSize:18 }}>⚡ Developer Dashboard</div>
          <div style={{ color:"#64748b", fontSize:12 }}>Private — HR Supermarket Platform</div>
        </div>
        <button onClick={onClose} style={{ background:"#334155", border:"none", color:"#94a3b8", padding:"7px 16px", borderRadius:9, cursor:"pointer", fontWeight:700 }}>✕ Exit</button>
      </div>

      {/* Tabs */}
      <div style={{ display:"flex", background:"#1e293b", borderBottom:"1px solid #334155", overflowX:"auto" }}>
        {["overview","earnings","monthly","orders"].map(t=>(
          <button key={t} onClick={()=>setTab(t)} style={{ padding:"12px 22px", background:tab===t?"#0f172a":"transparent", color:tab===t?"#60a5fa":"#64748b", border:"none", cursor:"pointer", fontWeight:700, fontSize:12, whiteSpace:"nowrap", borderBottom:tab===t?"2px solid #60a5fa":"none", textTransform:"capitalize" }}>{t}</button>
        ))}
      </div>

      <div style={{ flex:1, overflowY:"auto", padding: mobile?16:24 }}>

        {tab==="overview" && (
          <div>
            <div style={{ display:"grid", gridTemplateColumns: mobile?"1fr 1fr":"repeat(4,1fr)", gap:14, marginBottom:20 }}>
              {[
                {label:"This Month",val:fmt(thisMonth),sub:"From handling fees",c:"#10b981",icon:"📈"},
                {label:"All Time Earned",val:fmt(totalEarned),sub:"Total handling fee cut",c:"#60a5fa",icon:"💰"},
                {label:"Fee Collected",val:fmt(totalFeeCollected),sub:"Monthly retainer paid",c:"#a78bfa",icon:"✅"},
                {label:"Fee Pending",val:fmt(totalFeePending),sub:"Yet to collect",c:"#f87171",icon:"⏳"},
              ].map((m,i)=>(
                <div key={i} style={{ background:"#1e293b", borderRadius:14, padding:18, borderLeft:`3px solid ${m.c}` }}>
                  <div style={{ fontSize:22, marginBottom:8 }}>{m.icon}</div>
                  <div style={{ fontSize:22, fontWeight:900, color:m.c }}>{m.val}</div>
                  <div style={{ fontSize:13, color:"#94a3b8", fontWeight:600, marginTop:2 }}>{m.label}</div>
                  <div style={{ fontSize:11, color:"#475569" }}>{m.sub}</div>
                </div>
              ))}
            </div>

            <div style={{ background:"#1e293b", borderRadius:14, padding:18, marginBottom:14 }}>
              <div style={{ color:"#f1f5f9", fontWeight:700, marginBottom:14 }}>💡 Fee Breakdown per Order</div>
              {[
                {label:"Customer pays (Handling & Delivery)",val:`₹${PLATFORM_FEE}`,c:"#94a3b8"},
                {label:"Your platform cut",val:`₹${DEV_CUT}`,c:"#10b981"},
                {label:"Actual handling cost",val:`₹${PLATFORM_FEE-DEV_CUT}`,c:"#64748b"},
              ].map((r,i)=>(
                <div key={i} style={{ display:"flex", justifyContent:"space-between", padding:"9px 0", borderBottom:i<2?"1px solid #334155":"none" }}>
                  <span style={{ fontSize:13, color:r.c }}>{r.label}</span>
                  <span style={{ fontWeight:800, color:r.c }}>{r.val}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab==="earnings" && (
          <div>
            <div style={{ color:"#f1f5f9", fontWeight:800, fontSize:15, marginBottom:14 }}>📊 Order Earnings</div>
            {orders.map(o=>(
              <div key={o.id} style={{ background:"#1e293b", borderRadius:12, padding:16, marginBottom:10 }}>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
                  <span style={{ color:"#94a3b8", fontSize:13, fontWeight:700 }}>{o.id}</span>
                  <span style={{ color:"#10b981", fontWeight:900, fontSize:14 }}>+{fmt(DEV_CUT)}</span>
                </div>
                <div style={{ fontSize:12, color:"#475569" }}>{o.date} · Order total {fmt(o.total)}</div>
                <div style={{ marginTop:8 }}>
                  <span style={{ background:"#134e4a", color:"#34d399", padding:"3px 10px", borderRadius:20, fontSize:10, fontWeight:700 }}>COLLECTED</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab==="monthly" && (
          <div>
            <div style={{ color:"#f1f5f9", fontWeight:800, fontSize:15, marginBottom:6 }}>📅 Monthly Platform Service Fee</div>
            <div style={{ color:"#64748b", fontSize:12, marginBottom:16 }}>₹1,500 due from client every month</div>
            {monthlyStatus.map((m,i)=>(
              <div key={m.m} style={{ background:"#1e293b", borderRadius:12, padding:"14px 18px", marginBottom:10, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <div>
                  <div style={{ color:"#f1f5f9", fontWeight:700, fontSize:14 }}>{m.m} 2025</div>
                  <div style={{ color:"#64748b", fontSize:12 }}>Platform Service Fee</div>
                </div>
                <div style={{ display:"flex", gap:10, alignItems:"center" }}>
                  <span style={{ color:"#f1f5f9", fontWeight:800 }}>₹1,500</span>
                  <span style={{ background:m.paid?"#134e4a":"#431407", color:m.paid?"#34d399":"#fb923c", padding:"4px 12px", borderRadius:20, fontSize:11, fontWeight:700 }}>{m.paid?"✓ Paid":"Pending"}</span>
                  {!m.paid && <button style={{ background:"#1d4ed8", color:"#fff", border:"none", padding:"5px 14px", borderRadius:8, cursor:"pointer", fontWeight:700, fontSize:11 }}>Mark Paid</button>}
                </div>
              </div>
            ))}
            <div style={{ background:"#1e293b", borderRadius:12, padding:16, marginTop:16 }}>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
                <span style={{ color:"#94a3b8" }}>Setup Fee (One-time)</span>
                <span style={{ color:"#34d399", fontWeight:800 }}>₹{SETUP_FEE} ✓ Received</span>
              </div>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
                <span style={{ color:"#94a3b8" }}>Total Fee Collected</span>
                <span style={{ color:"#60a5fa", fontWeight:800 }}>{fmt(totalFeeCollected)}</span>
              </div>
              <div style={{ display:"flex", justifyContent:"space-between" }}>
                <span style={{ color:"#94a3b8" }}>Total Fee Pending</span>
                <span style={{ color:"#f87171", fontWeight:800 }}>{fmt(totalFeePending)}</span>
              </div>
            </div>
          </div>
        )}

        {tab==="orders" && (
          <div>
            <div style={{ color:"#f1f5f9", fontWeight:800, fontSize:15, marginBottom:14 }}>🛒 Live Order Feed</div>
            {orders.map(o=>(
              <div key={o.id} style={{ background:"#1e293b", borderRadius:12, padding:16, marginBottom:10 }}>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
                  <span style={{ color:"#f1f5f9", fontWeight:700 }}>{o.id}</span>
                  <span style={{ color:"#10b981", fontWeight:900 }}>{fmt(o.total)}</span>
                </div>
                <div style={{ fontSize:12, color:"#475569", marginBottom:8 }}>{o.date} · {o.area}</div>
                <div style={{ fontSize:12, color:"#64748b" }}>{o.items.map(i=>i.name).join(", ")}</div>
                <div style={{ marginTop:10, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <span style={{ color:"#10b981", fontSize:12, fontWeight:700 }}>My cut: +{fmt(DEV_CUT)}</span>
                  <button style={{ background:"#1d4ed8", color:"#fff", border:"none", padding:"5px 14px", borderRadius:8, cursor:"pointer", fontWeight:700, fontSize:11 }}>✓ Mark Collected</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════
//  MAIN APP
// ═══════════════════════════════════════════════════════════════
function HRSupermarket() {
  const [mobile, setMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const h = () => setMobile(window.innerWidth < 768);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  // State
  const [products, setProducts] = useLS("hr_products", PRODUCTS);
  const [banners, setBanners] = useLS("hr_banners", BANNERS_DEFAULT);
  const [cart, setCart] = useLS("hr_cart", []);
  const [wishlist, setWishlist] = useLS("hr_wishlist", []);
  const [orders, setOrders] = useLS("hr_orders", DEMO_ORDERS);
  const [recentlyViewed, setRecentlyViewed] = useLS("hr_recent", []);

  const [searchVal, setSearchVal] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCat, setActiveCat] = useState("all");
  const [deliveryArea, setDeliveryArea] = useLS("hr_area", null);
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  // UI state
  const [showCart, setShowCart] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutSummary, setCheckoutSummary] = useState(null);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showDev, setShowDev] = useState(false);
  const [pinTarget, setPinTarget] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toast, setToast] = useState(null);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const showToast = useCallback((msg, type="success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  }, []);

  // Search — only on Enter key
  const handleSearchKey = (e) => {
    if (e.key === "Enter") {
      setSearchQuery(searchVal);
      e.target.blur(); // dismiss keyboard
    }
  };

  // Cart operations
  const addToCart = useCallback((p) => {
    setCart(prev => {
      const ex = prev.find(x => x.id === p.id);
      if (ex) return prev.map(x => x.id===p.id ? {...x, qty:x.qty+1} : x);
      return [...prev, {...p, qty:1}];
    });
    showToast(`${p.name.split(" ").slice(0,3).join(" ")} added to cart! 🛒`);
  }, [setCart, showToast]);

  const removeFromCart = (id) => setCart(prev => prev.filter(x => x.id !== id));
  const changeQty = (id, d) => setCart(prev => prev.map(x => x.id===id ? {...x, qty:Math.max(1,x.qty+d)} : x));
  const toggleWish = (id) => setWishlist(prev => prev.includes(id) ? prev.filter(x=>x!==id) : [...prev,id]);

  const viewProduct = (p) => {
    setSelectedProduct(p);
    setRecentlyViewed(prev => [p, ...prev.filter(x=>x.id!==p.id)].slice(0,8));
  };

  const handleCheckout = (summary) => {
    setCheckoutSummary(summary);
    setShowCart(false);
    setShowCheckout(true);
  };

  const handleOrderSuccess = () => {
    const newOrder = {
      id: `ORD-${Date.now().toString().slice(-4)}`,
      date: now(),
      total: checkoutSummary.total,
      status: "Placed",
      items: cart.map(c=>({name:c.name, qty:c.qty, price:c.price})),
      area: DELIVERY_AREAS.find(a=>a.id===deliveryArea)?.name || "",
      deliveryFee: checkoutSummary.deliveryFee,
    };
    setOrders(prev => [newOrder, ...prev]);
    setCart([]);
    setShowCheckout(false);
    setOrderSuccess(true);
    showToast("🎉 Order placed successfully!", "success");
    setTimeout(() => setOrderSuccess(false), 5000);
  };

  // Filtered products
  const filtered = products.filter(p => {
    const mS = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const mC = activeCat==="all" || p.cat===activeCat;
    return mS && mC;
  });

  const cartCount = cart.reduce((s,c)=>s+c.qty, 0);

  // Secret dev access — type "dev" in search
  useEffect(() => {
    if (searchVal.toLowerCase() === "/dev") { setPinTarget("dev"); setSearchVal(""); }
    if (searchVal.toLowerCase() === "/admin") { setPinTarget("admin"); setSearchVal(""); }
  }, [searchVal]);

  return (
    <div style={{ minHeight:"100vh", background:"#f4f5f7", fontFamily:"'Segoe UI', -apple-system, system-ui, sans-serif" }}>

      {/* ── NAVBAR ── */}
      <nav style={{ position:"sticky", top:0, zIndex:500, background:"#1a252f", boxShadow:"0 2px 20px rgba(0,0,0,0.2)" }}>
        {/* Promo strip */}
        <div style={{ background:"linear-gradient(90deg,#e74c3c,#c0392b)", color:"#fff", textAlign:"center", padding: mobile?"6px 8px":"5px", fontSize: mobile?10:12, fontWeight:700, letterSpacing:0.3 }}>
          🚚 Free Delivery Above ₹499 &nbsp;·&nbsp; 📍 Delivering in Surendranagar &nbsp;·&nbsp; 📞 {SHOP_INFO.phone}
        </div>

        {!mobile ? (
          // Desktop navbar
          <div style={{ display:"flex", alignItems:"center", gap:16, padding:"0 32px", height:66 }}>
            {/* Logo */}
            <div style={{ display:"flex", alignItems:"center", gap:12, minWidth:200, cursor:"pointer" }} onClick={()=>{setActiveCat("all");setSearchQuery("");setSearchVal("");}}>
              <div style={{ width:46, height:46, background:"linear-gradient(135deg,#e74c3c,#f39c12)", borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center", fontWeight:900, fontSize:16, color:"#fff", boxShadow:"0 3px 10px rgba(231,76,60,0.4)", letterSpacing:1 }}>HR</div>
              <div>
                <div style={{ fontWeight:900, fontSize:17, color:"#fff", lineHeight:1.1 }}>HR Supermarket</div>
                <div style={{ fontSize:10, color:"#f39c12", fontWeight:600 }}>Surendranagar's Cash & Carry</div>
              </div>
            </div>
            {/* Search */}
            <div style={{ flex:1, position:"relative" }}>
              <span style={{ position:"absolute", left:14, top:"50%", transform:"translateY(-50%)", color:"#aaa", fontSize:16 }}>🔍</span>
              <input value={searchVal} onChange={e=>setSearchVal(e.target.value)} onKeyDown={handleSearchKey}
                placeholder="Search products… press Enter to search"
                style={{ width:"100%", padding:"11px 16px 11px 44px", border:"none", borderRadius:11, fontSize:14, background:"rgba(255,255,255,0.1)", color:"#fff", outline:"none", boxSizing:"border-box" }} />
              {searchVal && <button onClick={()=>{setSearchVal("");setSearchQuery("");}} style={{ position:"absolute", right:12, top:"50%", transform:"translateY(-50%)", background:"none", border:"none", color:"#aaa", cursor:"pointer", fontSize:18 }}>✕</button>}
            </div>
            {/* Nav buttons */}
            <div style={{ display:"flex", gap:8, alignItems:"center" }}>
              <button onClick={()=>setShowAccount(true)} style={{ background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.12)", color:"#fff", padding:"9px 18px", borderRadius:10, cursor:"pointer", fontWeight:700, fontSize:13 }}>👤 Account</button>
              <button onClick={()=>setShowCart(true)} style={{ background:"#e74c3c", border:"none", color:"#fff", padding:"9px 18px", borderRadius:10, cursor:"pointer", fontWeight:700, fontSize:13, position:"relative" }}>
                🛒 Cart {cartCount>0&&<span style={{ background:"#f39c12", color:"#fff", borderRadius:"50%", padding:"1px 6px", fontSize:10, marginLeft:4, fontWeight:900 }}>{cartCount}</span>}
              </button>
            </div>
          </div>
        ) : (
          // Mobile navbar
          <div style={{ padding:"10px 14px" }}>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:8 }}>
              <div style={{ width:38, height:38, background:"linear-gradient(135deg,#e74c3c,#f39c12)", borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center", fontWeight:900, fontSize:14, color:"#fff" }}>HR</div>
              <div style={{ flex:1 }}>
                <div style={{ fontWeight:900, fontSize:15, color:"#fff", lineHeight:1.1 }}>HR Supermarket</div>
                <div style={{ fontSize:9, color:"#f39c12" }}>Surendranagar</div>
              </div>
              <button onClick={()=>setShowAccount(true)} style={{ background:"rgba(255,255,255,0.08)", border:"none", color:"#fff", padding:"8px 13px", borderRadius:9, cursor:"pointer", fontWeight:700 }}>👤</button>
              <button onClick={()=>setShowCart(true)} style={{ background:"#e74c3c", border:"none", color:"#fff", padding:"8px 13px", borderRadius:9, cursor:"pointer", fontWeight:700, position:"relative" }}>
                🛒{cartCount>0&&<span style={{ background:"#f39c12", borderRadius:"50%", padding:"0 5px", fontSize:9, fontWeight:900 }}>{cartCount}</span>}
              </button>
            </div>
            <div style={{ position:"relative" }}>
              <span style={{ position:"absolute", left:12, top:"50%", transform:"translateY(-50%)", color:"#aaa", fontSize:14 }}>🔍</span>
              <input value={searchVal} onChange={e=>setSearchVal(e.target.value)} onKeyDown={handleSearchKey}
                placeholder="Search... press Enter"
                style={{ width:"100%", padding:"9px 36px 9px 36px", border:"none", borderRadius:9, fontSize:13, background:"rgba(255,255,255,0.1)", color:"#fff", outline:"none", boxSizing:"border-box" }} />
              {searchVal && <button onClick={()=>{setSearchVal("");setSearchQuery("");}} style={{ position:"absolute", right:10, top:"50%", transform:"translateY(-50%)", background:"none", border:"none", color:"#aaa", cursor:"pointer", fontSize:16 }}>✕</button>}
            </div>
          </div>
        )}
      </nav>

      {/* ── MAIN CONTENT ── */}
      <div style={{ maxWidth:1280, margin:"0 auto", padding: mobile?"12px 10px 80px":"20px 24px" }}>

        {/* Banner */}
        <BannerCarousel banners={banners} mobile={mobile} />

        {/* Categories */}
        <div style={{ marginBottom:24 }}>
          <div style={{ fontWeight:800, fontSize: mobile?15:18, marginBottom:12, color:"#1a252f" }}>🛒 Shop by Category</div>
          <div style={{ display:"flex", gap:10, overflowX:"auto", paddingBottom:8 }}>
            {CATEGORIES.map(c=>(
              <div key={c.id} onClick={()=>setActiveCat(c.id)} style={{
                flexShrink:0, cursor:"pointer", borderRadius:14, overflow:"hidden",
                width: mobile?80:100, border:`2.5px solid ${activeCat===c.id?c.color:"transparent"}`,
                boxShadow: activeCat===c.id?`0 4px 16px ${c.color}40`:"0 2px 8px rgba(0,0,0,0.07)",
                transition:"all 0.2s", background:"#fff",
              }}>
                <div style={{ height: mobile?60:70, overflow:"hidden" }}>
                  <img src={c.img} alt={c.name} style={{ width:"100%", height:"100%", objectFit:"cover" }} onError={e=>e.target.style.display="none"} />
                </div>
                <div style={{ padding:"6px 4px", textAlign:"center", fontSize: mobile?9:10, fontWeight:700, color: activeCat===c.id?c.color:"#444", lineHeight:1.2 }}>{c.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Search result label */}
        {searchQuery && (
          <div style={{ marginBottom:12, display:"flex", alignItems:"center", gap:10 }}>
            <span style={{ fontWeight:700, color:"#555" }}>Results for "{searchQuery}"</span>
            <button onClick={()=>{setSearchQuery("");setSearchVal("");}} style={{ background:"#f5f5f5", border:"none", padding:"4px 12px", borderRadius:20, cursor:"pointer", fontSize:12, color:"#888", fontWeight:600 }}>✕ Clear</button>
          </div>
        )}

        {/* Products */}
        <div style={{ marginBottom:32 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
            <div style={{ fontWeight:800, fontSize: mobile?15:18, color:"#1a252f" }}>
              {activeCat==="all" ? "🛍️ All Products" : CATEGORIES.find(c=>c.id===activeCat)?.name} ({filtered.length})
            </div>
          </div>
          {filtered.length === 0 ? (
            <div style={{ textAlign:"center", padding:"60px 0", color:"#bbb" }}>
              <div style={{ fontSize:64, marginBottom:12 }}>🔍</div>
              <div style={{ fontSize:16, fontWeight:600 }}>No products found</div>
              <div style={{ fontSize:13, marginTop:4 }}>Try a different search or category</div>
            </div>
          ) : (
            <div style={{ display:"grid", gridTemplateColumns: mobile?"repeat(2,1fr)":"repeat(auto-fill,minmax(220px,1fr))", gap: mobile?12:16 }}>
              {filtered.map(p=>(
                <ProductCard key={p.id} p={p} onAdd={addToCart} onWish={toggleWish} wished={wishlist.includes(p.id)} onOpen={viewProduct} mobile={mobile} />
              ))}
            </div>
          )}
        </div>

        {/* Recently Viewed */}
        {recentlyViewed.length > 0 && (
          <div style={{ marginBottom:32 }}>
            <div style={{ fontWeight:800, fontSize: mobile?15:18, color:"#1a252f", marginBottom:12 }}>👀 Recently Viewed</div>
            <div style={{ display:"flex", gap:12, overflowX:"auto", paddingBottom:8 }}>
              {recentlyViewed.map(p=>(
                <div key={p.id} onClick={()=>viewProduct(p)} style={{ flexShrink:0, width: mobile?130:160, background:"#fff", borderRadius:12, overflow:"hidden", cursor:"pointer", boxShadow:"0 2px 10px rgba(0,0,0,0.07)" }}>
                  <img src={p.img} alt={p.name} style={{ width:"100%", height: mobile?80:100, objectFit:"cover" }} onError={e=>e.target.src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=70"} />
                  <div style={{ padding:"8px 10px" }}>
                    <div style={{ fontSize:11, fontWeight:700, color:"#333", lineHeight:1.3, marginBottom:3 }}>{p.name}</div>
                    <div style={{ fontSize:13, fontWeight:900, color:"#e74c3c" }}>{fmt(p.price)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Wishlist */}
        {wishlist.length > 0 && (
          <div style={{ marginBottom:32 }}>
            <div style={{ fontWeight:800, fontSize: mobile?15:18, color:"#1a252f", marginBottom:12 }}>❤️ My Wishlist ({wishlist.length})</div>
            <div style={{ display:"grid", gridTemplateColumns: mobile?"repeat(2,1fr)":"repeat(auto-fill,minmax(220px,1fr))", gap: mobile?12:16 }}>
              {products.filter(p=>wishlist.includes(p.id)).map(p=>(
                <ProductCard key={p.id} p={p} onAdd={addToCart} onWish={toggleWish} wished={true} onOpen={viewProduct} mobile={mobile} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── FOOTER ── */}
      <footer style={{ background:"#1a252f", color:"rgba(255,255,255,0.65)", padding: mobile?"24px 16px":"36px 40px" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", display:"grid", gridTemplateColumns: mobile?"1fr":"repeat(3,1fr)", gap:24 }}>
          <div>
            <div style={{ fontWeight:900, color:"#fff", fontSize:17, marginBottom:8 }}>HR Supermarket</div>
            <div style={{ fontSize:12, lineHeight:1.8 }}>{SHOP_INFO.address}</div>
            <div style={{ fontSize:12, marginTop:8 }}>📞 {SHOP_INFO.phone}</div>
            <div style={{ fontSize:12 }}>⏰ {SHOP_INFO.hours}</div>
          </div>
          <div>
            <div style={{ fontWeight:700, color:"#fff", marginBottom:10 }}>Quick Links</div>
            {["Home","All Products","Track My Order","Offers & Deals","Contact Us"].map(l=>(
              <div key={l} style={{ fontSize:12, padding:"4px 0", cursor:"pointer" }}>{l}</div>
            ))}
          </div>
          <div>
            <div style={{ fontWeight:700, color:"#fff", marginBottom:10 }}>We Accept</div>
            <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
              {["UPI","Debit Card","Credit Card","Net Banking","Cash on Delivery"].map(m=>(
                <span key={m} style={{ background:"rgba(255,255,255,0.08)", padding:"4px 10px", borderRadius:20, fontSize:10, fontWeight:600 }}>{m}</span>
              ))}
            </div>
            <div style={{ marginTop:16 }}>
              <a href={SHOP_INFO.mapLink} target="_blank" rel="noreferrer" style={{ color:"#f39c12", fontSize:12, fontWeight:700, textDecoration:"none" }}>📍 Find us on Google Maps →</a>
            </div>
          </div>
        </div>
        <div style={{ borderTop:"1px solid rgba(255,255,255,0.08)", marginTop:24, paddingTop:16, textAlign:"center", fontSize:11 }}>
          © 2025 HR Supermarket. All rights reserved.
          <span onClick={()=>setPinTarget("admin")} style={{ marginLeft:16, cursor:"pointer", color:"rgba(255,255,255,0.3)" }}>Admin</span>
        </div>
      </footer>

      {/* ── MOBILE BOTTOM NAV ── */}
      {mobile && (
        <div style={{ position:"fixed", bottom:0, left:0, right:0, background:"#fff", borderTop:"1px solid #eee", display:"flex", zIndex:400, boxShadow:"0 -4px 20px rgba(0,0,0,0.08)" }}>
          {[
            {icon:"🏠",label:"Home",fn:()=>{setActiveCat("all");setSearchQuery("");setSearchVal("");}},
            {icon:"📂",label:"Categories",fn:()=>{}},
            {icon:`🛒${cartCount>0?" "+cartCount:""}`,label:"Cart",fn:()=>setShowCart(true)},
            {icon:"❤️",label:"Wishlist",fn:()=>{}},
            {icon:"👤",label:"Account",fn:()=>setShowAccount(true)},
          ].map((item,i)=>(
            <button key={i} onClick={item.fn} style={{ flex:1, background:"none", border:"none", padding:"10px 2px 8px", cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center", gap:2 }}>
              <span style={{ fontSize:19 }}>{item.icon}</span>
              <span style={{ fontSize:9, color:"#777", fontWeight:600 }}>{item.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* ── ORDER SUCCESS ── */}
      {orderSuccess && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.7)", zIndex:5000, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
          <div style={{ background:"#fff", borderRadius:20, padding:36, textAlign:"center", maxWidth:360, width:"100%" }}>
            <div style={{ fontSize:64, marginBottom:12 }}>✅</div>
            <div style={{ fontWeight:900, fontSize:22, color:"#27ae60", marginBottom:6 }}>Order Placed!</div>
            <div style={{ fontSize:13, color:"#777", marginBottom:24 }}>Your order has been placed successfully. You will receive a confirmation shortly.</div>
            <button onClick={()=>setOrderSuccess(false)} style={{ padding:"12px 32px", background:"#27ae60", color:"#fff", border:"none", borderRadius:12, fontWeight:800, cursor:"pointer", fontSize:15 }}>Continue Shopping →</button>
          </div>
        </div>
      )}

      {/* ── PRODUCT MODAL ── */}
      {selectedProduct && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.7)", zIndex:800, display:"flex", alignItems:"center", justifyContent:"center", padding:16 }}>
          <div style={{ background:"#fff", borderRadius:18, width:"100%", maxWidth:460, overflow:"hidden", boxShadow:"0 20px 60px rgba(0,0,0,0.3)" }}>
            <div style={{ position:"relative", height: mobile?200:260 }}>
              <img src={selectedProduct.img} alt={selectedProduct.name} style={{ width:"100%", height:"100%", objectFit:"cover" }} onError={e=>e.target.src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80"} />
              <button onClick={()=>setSelectedProduct(null)} style={{ position:"absolute", top:12, right:12, background:"rgba(0,0,0,0.5)", border:"none", color:"#fff", borderRadius:"50%", width:34, height:34, cursor:"pointer", fontSize:16 }}>✕</button>
              <button onClick={()=>toggleWish(selectedProduct.id)} style={{ position:"absolute", top:12, left:12, background:"rgba(255,255,255,0.9)", border:"none", borderRadius:"50%", width:34, height:34, cursor:"pointer", fontSize:18 }}>
                {wishlist.includes(selectedProduct.id)?"❤️":"🤍"}
              </button>
            </div>
            <div style={{ padding:20 }}>
              <div style={{ fontWeight:900, fontSize:18, marginBottom:4 }}>{selectedProduct.name}</div>
              <Stars r={selectedProduct.rating||4.2} />
              <div style={{ fontSize:12, color:"#bbb", marginBottom:8 }}></div>
              <div style={{ fontSize:13, color:"#666", marginBottom:14, lineHeight:1.6 }}>{selectedProduct.desc}</div>
              <div style={{ display:"flex", alignItems:"baseline", gap:10, marginBottom:18 }}>
                <span style={{ fontSize:26, fontWeight:900, color:"#1a252f" }}>{fmt(selectedProduct.price)}</span>
                {selectedProduct.mrp>selectedProduct.price&&<span style={{ fontSize:14, textDecoration:"line-through", color:"#bbb" }}>{fmt(selectedProduct.mrp)}</span>}
                {disc(selectedProduct.price,selectedProduct.mrp)>0&&<span style={{ fontSize:13, color:"#27ae60", fontWeight:800 }}>{disc(selectedProduct.price,selectedProduct.mrp)}% OFF</span>}
              </div>
              <div style={{ display:"flex", gap:10 }}>
                <button onClick={()=>toggleWish(selectedProduct.id)} style={{ flex:1, padding:12, background: wishlist.includes(selectedProduct.id)?"#ffeaea":"#f5f5f5", border:`1.5px solid ${wishlist.includes(selectedProduct.id)?"#e74c3c":"#ddd"}`, borderRadius:11, cursor:"pointer", fontWeight:700, color:wishlist.includes(selectedProduct.id)?"#e74c3c":"#666" }}>
                  {wishlist.includes(selectedProduct.id)?"❤️ Wishlisted":"🤍 Wishlist"}
                </button>
                <button onClick={()=>{addToCart(selectedProduct);setSelectedProduct(null);}} disabled={selectedProduct.stock===0}
                  style={{ flex:2, padding:12, background:selectedProduct.stock===0?"#ddd":"#e74c3c", color:"#fff", border:"none", borderRadius:11, cursor:selectedProduct.stock===0?"not-allowed":"pointer", fontWeight:900, fontSize:15 }}>
                  {selectedProduct.stock===0?"Out of Stock":"🛒 Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── OVERLAYS ── */}
      {showCart && <CartDrawer cart={cart} area={deliveryArea} setArea={setDeliveryArea} onClose={()=>setShowCart(false)} onRemove={removeFromCart} onQty={changeQty} onCheckout={handleCheckout} coupon={appliedCoupon} setCoupon={setAppliedCoupon} mobile={mobile} />}
      {showAccount && <AccountPanel onClose={()=>setShowAccount(false)} orders={orders} mobile={mobile} />}
      {showCheckout && checkoutSummary && <CheckoutModal summary={checkoutSummary} cart={cart} onClose={()=>setShowCheckout(false)} onSuccess={handleOrderSuccess} />}
      {showAdmin && <AdminPanel products={products} setProducts={setProducts} banners={banners} setBanners={setBanners} orders={orders} onClose={()=>setShowAdmin(false)} mobile={mobile} />}
      {showDev && <DevDashboard orders={orders} onClose={()=>setShowDev(false)} mobile={mobile} />}

      {/* ── PIN MODAL ── */}
      {pinTarget && (
        <PinModal
          title={pinTarget==="dev"?"Developer Access":"Admin Access"}
          subtitle={pinTarget==="dev"?"Private dashboard — authorized only":"Store admin panel"}
          correctPin={pinTarget==="dev"?DEV_PIN:ADMIN_PIN}
          onSuccess={()=>{ if(pinTarget==="dev") setShowDev(true); else setShowAdmin(true); setPinTarget(null); }}
          onClose={()=>setPinTarget(null)}
        />
      )}

      {/* ── TOAST ── */}
      {toast && <Toast msg={toast.msg} type={toast.type} />}

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        input { font-family: inherit; }
        ::-webkit-scrollbar { width: 5px; height: 5px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #ccc; border-radius: 3px; }
        input::placeholder { color: rgba(255,255,255,0.45) !important; }
        @keyframes toastIn { from { opacity:0; transform:translateX(-50%) translateY(12px); } to { opacity:1; transform:translateX(-50%) translateY(0); } }
        @keyframes spin { to { transform: rotate(360deg); } }
        ${mobile ? "body { padding-bottom: 64px; }" : ""}
      `}</style>
    </div>
  );
}

export default HRSupermarket;
