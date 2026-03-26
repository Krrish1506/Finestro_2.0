import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore — Vite handles assets with spaces at runtime
import finestroIcon from "../Finestro_removed bg.png";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [logoHovered, setLogoHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { name: "Home",      path: "home"      },
    { name: "About",     path: "about"     },
    { name: "Products",  path: "products"  },
    { name: "Features",  path: "features"  },
    { name: "Dashboard", path: "dashboard" },
    { name: "Security",  path: "security"  },
    { name: "Contact",   path: "contact"   },
  ];

  // Shared dark-glass pill style for all three sections
  const pillStyle: React.CSSProperties = {
    background: "rgba(5, 8, 20, 0.72)",
    backdropFilter: "blur(24px) saturate(160%)",
    WebkitBackdropFilter: "blur(24px) saturate(160%)",
    border: "1px solid rgba(255,255,255,0.11)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.06)",
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: "transparent",
        pointerEvents: "none",
        transition: "padding 0.35s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          height: scrolled ? "58px" : "72px",
          paddingLeft: scrolled ? "16px" : "24px",
          paddingRight: scrolled ? "16px" : "24px",
          width: "100%",
          boxSizing: "border-box",
          transition: "height 0.35s cubic-bezier(0.4,0,0.2,1), padding 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}
      >

        {/* ── PILL 1: Logo — far left ───────────────────────────────── */}
        <div style={{ display: "flex", justifyContent: "flex-start", pointerEvents: "auto" }}>
          <button
            type="button"
            onClick={() => onNavigate("home")}
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <motion.div
              animate={{ width: logoHovered ? "auto" : "48px" }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              style={{
                ...pillStyle,
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                height: scrolled ? "40px" : "48px",
                borderRadius: "14px",
                minWidth: scrolled ? "40px" : "48px",
                flexShrink: 0,
                transition: "height 0.35s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: scrolled ? "40px" : "48px",
                  height: scrolled ? "40px" : "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  padding: "8px",
                  boxSizing: "border-box",
                  transition: "width 0.35s, height 0.35s",
                }}
              >
                <img
                  src={finestroIcon}
                  alt="Finestro"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    filter: "drop-shadow(0 0 6px rgba(6,182,212,0.55))",
                  }}
                />
              </div>

              {/* "FINESTRO" slides in on hover */}
              <AnimatePresence>
                {logoHovered && (
                  <motion.div
                    key="brand"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    style={{ paddingRight: "16px", whiteSpace: "nowrap" }}
                  >
                    <div style={{ color: "#e0f2fe", fontWeight: 800, fontSize: "14px", letterSpacing: "0.14em", textTransform: "uppercase", lineHeight: 1.1 }}>
                      Finestro
                    </div>
                    <div style={{ color: "rgba(125,211,252,0.60)", fontSize: "9px", letterSpacing: "0.06em", fontWeight: 500, textTransform: "uppercase", marginTop: "2px" }}>
                      Financial Advisory
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </button>
        </div>

        {/* ── PILL 2: Nav links — center ───────────────────────────────── */}
        <nav
          style={{
            ...pillStyle,
            display: "flex",
            alignItems: "center",
            gap: "2px",
            borderRadius: "14px",
            padding: scrolled ? "3px 4px" : "5px 6px",
            pointerEvents: "auto",
            transition: "padding 0.35s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {navItems.map((item) => {
            const active = currentPage === item.path;
            return (
              <button
                key={item.path}
                type="button"
                onClick={() => onNavigate(item.path)}
                style={{
                  position: "relative",
                  padding: scrolled ? "5px 12px" : "6px 14px",
                  borderRadius: "9px",
                  fontSize: "13px",
                  fontWeight: active ? 600 : 400,
                  color: active ? "#fff" : "rgba(255,255,255,0.50)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "color 0.15s ease, padding 0.35s ease",
                  lineHeight: 1,
                }}
                onMouseEnter={(e) => {
                  if (!active) (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.90)";
                }}
                onMouseLeave={(e) => {
                  if (!active) (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.50)";
                }}
              >
                {active && (
                  <motion.span
                    layoutId="navPill"
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "9px",
                      background: "rgba(59,130,246,0.28)",
                      border: "0.5px solid rgba(96,165,250,0.65)",
                      boxShadow: "0 0 16px rgba(59,130,246,0.28)",
                      zIndex: 0,
                    }}
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                )}
                <span style={{ position: "relative", zIndex: 1 }}>{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* ── PILL 3: CTAs — far right ─────────────────────────────────── */}
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", pointerEvents: "auto" }}>

          {/* Get Started — full pill + blue outer glow */}
          <motion.button
            type="button"
            onClick={() => onNavigate("auth")}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            style={{
              height: scrolled ? "34px" : "40px",
              padding: "0 24px",
              borderRadius: "9999px",
              fontSize: "13px",
              fontWeight: 700,
              color: "#ffffff",
              background: "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 60%, #60a5fa 100%)",
              boxShadow: "0 0 15px rgba(59,130,246,0.45), 0 4px 18px rgba(59,130,246,0.52), inset 0 1px 0 rgba(255,255,255,0.15)",
              border: "1px solid rgba(96,165,250,0.35)",
              cursor: "pointer",
              whiteSpace: "nowrap",
              letterSpacing: "0.02em",
              transition: "height 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 25px rgba(59,130,246,0.70), 0 6px 24px rgba(59,130,246,0.65), inset 0 1px 0 rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 15px rgba(59,130,246,0.45), 0 4px 18px rgba(59,130,246,0.52), inset 0 1px 0 rgba(255,255,255,0.15)";
            }}
          >
            Get Started
          </motion.button>
        </div>

      </div>
    </header>
  );
}
