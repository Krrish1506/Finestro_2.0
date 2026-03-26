import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { ArrowLeft, Mail, Lock, User, Eye, EyeOff, TrendingUp, Shield, Zap, BarChart3 } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import finestroIcon from "../Finestro_removed bg.png";

interface AuthPageProps {
  onBack: () => void;
  onSuccess: () => void;
}

// ── Google G SVG (official multicolor) ──────────────────────────────────────
const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

// ── Auth placeholder (wire to Firebase / Supabase here) ─────────────────────
const handleGoogleAuth = () => {
  console.log("[Auth] Google sign-in invoked — wire up Firebase/Supabase here");
  toast.info("Google Sign-In", {
    description: "Connect your Firebase or Supabase auth here.",
  });
};

// ── Pill Input ────────────────────────────────────────────────────────────────
interface PillInputProps {
  type?: string;
  placeholder: string;
  icon: React.ReactNode;
  value: string;
  onChange: (v: string) => void;
}

const PillInput = ({ type = "text", placeholder, icon, value, onChange }: PillInputProps) => {
  const [focused, setFocused] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const isPassword = type === "password";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        background: focused ? "#fff" : "#f8fafc",
        border: focused
          ? "1.5px solid rgba(59,130,246,0.55)"
          : "1.5px solid rgba(203,213,225,0.80)",
        borderRadius: "9999px",
        padding: "0 18px",
        height: "52px",
        boxShadow: focused
          ? "0 0 0 4px rgba(59,130,246,0.12), 0 2px 8px rgba(0,0,0,0.06)"
          : "0 1px 4px rgba(0,0,0,0.04)",
        transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      <span style={{ color: focused ? "#3b82f6" : "#94a3b8", flexShrink: 0, transition: "color 0.2s" }}>
        {icon}
      </span>
      <input
        type={isPassword ? (showPass ? "text" : "password") : type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          background: "transparent",
          fontSize: "14px",
          color: "#0f172a",
          fontFamily: "inherit",
        }}
      />
      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPass((p) => !p)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            color: "#94a3b8",
            flexShrink: 0,
          }}
        >
          {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      )}
    </div>
  );
};

// ── Left Art Panel ────────────────────────────────────────────────────────────
const ArtPanel = () => (
  <div
    style={{
      flex: 1,
      background: "linear-gradient(160deg, #0F172A 0%, #0f2a4a 40%, #1a3a6b 70%, #1e40af 100%)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "48px",
      position: "relative",
      overflow: "hidden",
      minHeight: "100vh",
    }}
  >
    {/* Glow blobs */}
    <div style={{ position: "absolute", top: "10%", right: "-15%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(59,130,246,0.20) 0%, transparent 70%)", borderRadius: "50%" }} />
    <div style={{ position: "absolute", bottom: "15%", left: "-10%", width: "320px", height: "320px", background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)", borderRadius: "50%" }} />
    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(30,64,175,0.12) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

    {/* SVG chart art */}
    <svg
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.12, pointerEvents: "none" }}
      viewBox="0 0 600 700"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
          <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      {/* Grid lines */}
      {[100, 200, 300, 400, 500, 600].map((y) => (
        <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="rgba(148,163,184,0.3)" strokeWidth="1" />
      ))}
      {[0, 100, 200, 300, 400, 500].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="700" stroke="rgba(148,163,184,0.3)" strokeWidth="1" />
      ))}
      {/* Chart curves */}
      <path d="M0,500 C80,480 120,420 200,380 S320,300 400,260 S520,180 600,140" stroke="url(#lineGrad)" strokeWidth="2.5" fill="none" />
      <path d="M0,560 C100,530 180,480 280,430 S400,360 500,300 S580,260 600,240" stroke="rgba(99,102,241,0.6)" strokeWidth="2" fill="none" />
      <path d="M0,620 C120,590 200,540 300,500 S420,440 520,380" stroke="rgba(167,139,250,0.4)" strokeWidth="1.5" fill="none" />

      {/* Nodes */}
      {[[200, 380], [400, 260], [540, 180]].map(([cx, cy]) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r="5" fill="#3b82f6" opacity="0.9" />
          <circle cx={cx} cy={cy} r="12" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.35" />
        </g>
      ))}
    </svg>

    {/* Top brand */}
    {/* Top Brand Branding Pill */}
    <div style={{ position: "relative", zIndex: 1 }}>
      <motion.div 
        animate={{ 
          boxShadow: [
            "0 8px 32px rgba(0,0,0,0.3), 0 0 0 1.5px rgba(59,130,246,0.15)",
            "0 8px 48px rgba(0,0,0,0.45), 0 0 24px rgba(59,130,246,0.50)",
            "0 8px 32px rgba(0,0,0,0.3), 0 0 0 1.5px rgba(59,130,246,0.15)"
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ 
          display: "inline-flex", 
          alignItems: "center", 
          gap: "18px", 
          padding: "10px 24px 10px 14px", 
          background: "rgba(15, 23, 42, 0.45)", 
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderRadius: "9999px",
          border: "1px solid rgba(255,255,255,0.08)",
          marginBottom: "36px",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Shimmer effect inside the branding pill */}
        <motion.div 
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 5 }}
          style={{ 
            position: "absolute", 
            top: 0, 
            left: 0, 
            width: "30%", 
            height: "100%", 
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)", 
            zIndex: 0,
            transform: "skewX(-25deg)"
          }} 
        />

        {/* Logo Container */}
        <div 
          style={{ 
            width: "42px", 
            height: "42px", 
            background: "rgba(255,255,255,0.05)", 
            borderRadius: "12px", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            position: "relative",
            zIndex: 1,
            border: "1px solid rgba(255,255,255,0.05)"
          }}
        >
          <img 
            src={finestroIcon} 
            alt="Finestro" 
            style={{ 
              width: "28px", 
              height: "28px", 
              objectFit: "contain",
              filter: "drop-shadow(0 0 8px rgba(59,130,246,0.5))" 
            }} 
          />
        </div>

        {/* Text Container */}
        <div style={{ display: "flex", flexDirection: "column", position: "relative", zIndex: 1 }}>
          <span style={{ 
            fontSize: "22px", 
            fontWeight: 900, 
            color: "#ffffff", 
            letterSpacing: "0.08em", 
            lineHeight: 1, 
            fontFamily: "'Inter', sans-serif"
          }}>
            FINESTRO
          </span>
          <span style={{ 
            fontSize: "10px", 
            fontWeight: 800, 
            color: "rgba(96, 165, 250, 0.85)", 
            letterSpacing: "0.18em", 
            textTransform: "uppercase", 
            marginTop: "3px",
            lineHeight: 1.2
          }}>
            FINANCIAL ADVISORY
          </span>
        </div>
      </motion.div>

      <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#f1f5f9", lineHeight: 1.2, letterSpacing: "-0.03em", marginBottom: "16px", maxWidth: "320px" }}>
        The platform built for elite advisors.
      </h2>
      <p style={{ fontSize: "15px", color: "rgba(148,163,184,0.80)", lineHeight: 1.7, maxWidth: "300px" }}>
        Unified workflows, institutional analytics, and compliance — all in one executive-grade platform.
      </p>
    </div>

    {/* Glassmorphic stats cards */}
    <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: "14px" }}>
      {[
        { icon: <TrendingUp size={16} strokeWidth={1.5} />, label: "AUM Managed", value: "₹4,200 Cr", change: "+12.4%" },
        { icon: <BarChart3 size={16} strokeWidth={1.5} />, label: "Active Policies", value: "8,340+", change: "+5.1%" },
        { icon: <Zap size={16} strokeWidth={1.5} />, label: "Avg. Processing", value: "2.3 hrs", change: "−68%" },
      ].map((stat) => (
        <div
          key={stat.label}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: "14px",
            padding: "14px 18px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.20), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          <div style={{ width: "34px", height: "34px", background: "rgba(59,130,246,0.18)", borderRadius: "9px", display: "flex", alignItems: "center", justifyContent: "center", color: "#60a5fa", flexShrink: 0 }}>
            {stat.icon}
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "11px", color: "rgba(148,163,184,0.60)", margin: 0, fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase" }}>{stat.label}</p>
            <p style={{ fontSize: "16px", fontWeight: 700, color: "#f1f5f9", margin: "2px 0 0", letterSpacing: "-0.01em" }}>{stat.value}</p>
          </div>
          <span style={{ fontSize: "12px", fontWeight: 600, color: "#4ade80" }}>{stat.change}</span>
        </div>
      ))}
    </div>
  </div>
);

// ── Form Panel ────────────────────────────────────────────────────────────────
export function AuthPage({ onBack, onSuccess }: AuthPageProps) {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onSuccess();
    }, 1500);
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      }}
    >
      {/* ── Left art panel (hidden on narrow screens via inline style — use responsive CSS in index.css if needed) */}
      <div style={{ display: "flex", flex: "0 0 50%", maxWidth: "50%" }} className="auth-art-panel">
        <ArtPanel />
      </div>

      {/* ── Right form panel ── */}
      <div
        style={{
          flex: 1,
          background: "#F8FAFC",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 40px",
          position: "relative",
          minHeight: "100vh",
          overflowY: "auto",
        }}
      >
        {/* Subtle top-right glow */}
        <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "280px", height: "280px", background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* Back button */}
        <button
          onClick={onBack}
          style={{
            position: "absolute",
            top: "28px",
            left: "28px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            background: "rgba(248,250,252,0.9)",
            border: "1px solid rgba(203,213,225,0.80)",
            borderRadius: "9999px",
            padding: "8px 16px 8px 12px",
            cursor: "pointer",
            color: "#475569",
            fontSize: "13px",
            fontWeight: 500,
            backdropFilter: "blur(8px)",
            boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(59,130,246,0.40)";
            (e.currentTarget as HTMLButtonElement).style.color = "#1d4ed8";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(203,213,225,0.80)";
            (e.currentTarget as HTMLButtonElement).style.color = "#475569";
          }}
        >
          <ArrowLeft size={14} />
          Back
        </button>

        {/* Form container */}
        <div style={{ width: "100%", maxWidth: "400px", position: "relative", zIndex: 1 }}>

          {/* Header */}
          <motion.div
            key={mode + "-header"}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ textAlign: "center", marginBottom: "36px" }}
          >
            <h1
              style={{
                fontSize: "30px",
                fontWeight: 800,
                color: "#0f172a",
                letterSpacing: "-0.03em",
                margin: "0 0 8px",
              }}
            >
              {mode === "login" ? "Welcome back" : "Join Finestro"}
            </h1>
            <p style={{ fontSize: "15px", color: "#64748b", margin: 0, lineHeight: 1.5 }}>
              {mode === "login"
                ? "Access your institutional dashboard"
                : "The platform for modern financial advisors"}
            </p>
          </motion.div>

          {/* Google Button */}
          <button
            type="button"
            onClick={handleGoogleAuth}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              height: "52px",
              borderRadius: "9999px",
              background: "#ffffff",
              border: "1.5px solid rgba(203,213,225,0.90)",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: 600,
              color: "#1e293b",
              boxShadow: "0 1px 6px rgba(0,0,0,0.06), 0 0 0 0 rgba(59,130,246,0)",
              transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
              marginBottom: "24px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(59,130,246,0.35)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.10), 0 0 0 3px rgba(59,130,246,0.08)";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(203,213,225,0.90)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 1px 6px rgba(0,0,0,0.06), 0 0 0 0 rgba(59,130,246,0)";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
            }}
          >
            <GoogleIcon />
            Continue with Google
          </button>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "24px" }}>
            <div style={{ flex: 1, height: "1px", background: "rgba(203,213,225,0.60)" }} />
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#94a3b8", letterSpacing: "0.10em", whiteSpace: "nowrap" }}>
              OR CONTINUE WITH EMAIL
            </span>
            <div style={{ flex: 1, height: "1px", background: "rgba(203,213,225,0.60)" }} />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "20px" }}
              >
                {mode === "signup" && (
                  <div>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#475569", marginBottom: "7px", letterSpacing: "0.02em" }}>
                      Full Name
                    </label>
                    <PillInput
                      placeholder="Jane Smith"
                      icon={<User size={16} strokeWidth={1.5} />}
                      value={name}
                      onChange={setName}
                    />
                  </div>
                )}
                <div>
                  <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#475569", marginBottom: "7px", letterSpacing: "0.02em" }}>
                    Email Address
                  </label>
                  <PillInput
                    type="email"
                    placeholder="name@email.com"
                    icon={<Mail size={16} strokeWidth={1.5} />}
                    value={email}
                    onChange={setEmail}
                  />
                </div>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "7px" }}>
                    <label style={{ fontSize: "12px", fontWeight: 600, color: "#475569", letterSpacing: "0.02em" }}>
                      Password
                    </label>
                    {mode === "login" && (
                      <span
                        style={{ fontSize: "12px", color: "#3b82f6", fontWeight: 600, cursor: "pointer" }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLSpanElement).style.color = "#1d4ed8")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLSpanElement).style.color = "#3b82f6")}
                      >
                        Forgot password?
                      </span>
                    )}
                  </div>
                  <PillInput
                    type="password"
                    placeholder="••••••••"
                    icon={<Lock size={16} strokeWidth={1.5} />}
                    value={password}
                    onChange={setPassword}
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: "100%",
                height: "52px",
                borderRadius: "9999px",
                background: "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 60%, #60a5fa 100%)",
                border: "none",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.03em",
                cursor: isLoading ? "not-allowed" : "pointer",
                boxShadow: "0 0 16px rgba(59,130,246,0.50), 0 4px 18px rgba(59,130,246,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
                opacity: isLoading ? 0.75 : 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                transition: "transform 0.15s, box-shadow 0.2s, opacity 0.2s",
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px) scale(1.01)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 26px rgba(59,130,246,0.70), 0 6px 24px rgba(59,130,246,0.50), inset 0 1px 0 rgba(255,255,255,0.2)";
                }
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0) scale(1)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 16px rgba(59,130,246,0.50), 0 4px 18px rgba(59,130,246,0.35), inset 0 1px 0 rgba(255,255,255,0.15)";
              }}
            >
              {isLoading ? (
                <div style={{ width: "20px", height: "20px", border: "2.5px solid rgba(255,255,255,0.25)", borderTop: "2.5px solid #ffffff", borderRadius: "50%", animation: "spin 0.7s linear infinite" }} />
              ) : (
                mode === "login" ? "Access Dashboard →" : "Create My Account →"
              )}
            </button>
          </form>

          {/* Switch mode */}
          <p style={{ textAlign: "center", marginTop: "24px", fontSize: "14px", color: "#64748b", margin: "22px 0 0" }}>
            {mode === "login" ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              onClick={() => setMode(mode === "login" ? "signup" : "login")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#3b82f6",
                fontWeight: 700,
                fontSize: "14px",
                fontFamily: "inherit",
                padding: 0,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#1d4ed8")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#3b82f6")}
            >
              {mode === "login" ? "Create account" : "Sign in"}
            </button>
          </p>

          {/* Trust badges */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", marginTop: "36px" }}>
            {[
              { icon: <Shield size={13} strokeWidth={1.5} />, label: "SOC 2 Certified" },
              { icon: <Zap size={13} strokeWidth={1.5} />, label: "256-bit SSL" },
            ].map((badge) => (
              <div
                key={badge.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "11px",
                  color: "#94a3b8",
                  fontWeight: 500,
                  letterSpacing: "0.03em",
                }}
              >
                <span style={{ color: "#3b82f6" }}>{badge.icon}</span>
                {badge.label}
              </div>
            ))}
          </div>
        </div>

        {/* Spinner keyframe */}
        <style>{`
          @keyframes spin { to { transform: rotate(360deg); } }
          @media (max-width: 768px) { .auth-art-panel { display: none !important; } }
        `}</style>
      </div>
    </div>
  );
}
