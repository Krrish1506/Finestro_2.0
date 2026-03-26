import { useState } from "react";
import {
  Shield,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

const SocialIcon = ({ children }: { children: React.ReactNode }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "38px",
        height: "38px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        background: hovered
          ? "rgba(59,130,246,0.18)"
          : "rgba(255,255,255,0.05)",
        border: hovered
          ? "1px solid rgba(59,130,246,0.55)"
          : "1px solid rgba(255,255,255,0.09)",
        boxShadow: hovered
          ? "0 0 14px rgba(59,130,246,0.50), inset 0 1px 0 rgba(255,255,255,0.06)"
          : "inset 0 1px 0 rgba(255,255,255,0.04)",
        color: hovered ? "#60a5fa" : "rgba(148,163,184,0.70)",
        transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      {children}
    </div>
  );
};

interface LinkItemProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const LinkItem = ({ children, onClick }: LinkItemProps) => {
  const [hovered, setHovered] = useState(false);
  return (
    <li>
      <button
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          fontSize: "14px",
          color: hovered ? "#60a5fa" : "rgba(148,163,184,0.75)",
          fontWeight: 400,
          transition: "color 0.2s ease",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          letterSpacing: "0.01em",
        }}
      >
        {hovered && (
          <ArrowRight
            size={12}
            style={{ color: "#3b82f6", transition: "all 0.2s" }}
          />
        )}
        {children}
      </button>
    </li>
  );
};

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer
      style={{
        background: "#0F172A",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "80px",
        paddingBottom: "0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background glow blobs */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          left: "-80px",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "0",
          right: "-60px",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 32px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Main Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
            gap: "48px",
            paddingBottom: "64px",
          }}
        >
          {/* ── Brand Column ── */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  background:
                    "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 16px rgba(59,130,246,0.40)",
                }}
              >
                <Shield size={18} color="#fff" strokeWidth={1.5} />
              </div>
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: 800,
                  color: "#f1f5f9",
                  letterSpacing: "-0.02em",
                }}
              >
                Finestro
              </span>
            </div>

            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.7",
                color: "rgba(148,163,184,0.70)",
                marginBottom: "28px",
                maxWidth: "280px",
              }}
            >
              Empowering insurance and mutual fund agents with unified,
              institutional-grade workflow solutions across the digital
              landscape.
            </p>

            {/* Contact info */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginBottom: "28px",
              }}
            >
              <a
                href="mailto:support@finestro.in"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "rgba(148,163,184,0.65)",
                  fontSize: "13px",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "#60a5fa")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(148,163,184,0.65)")
                }
              >
                <Mail size={14} color="#3b82f6" strokeWidth={1.5} />
                support@finestro.in
              </a>
              <a
                href="tel:+911800123456"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "rgba(148,163,184,0.65)",
                  fontSize: "13px",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "#60a5fa")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(148,163,184,0.65)")
                }
              >
                <Phone size={14} color="#3b82f6" strokeWidth={1.5} />
                1800-123-456
              </a>
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "10px" }}>
              <SocialIcon>
                <Twitter size={16} strokeWidth={1.5} />
              </SocialIcon>
              <SocialIcon>
                <Linkedin size={16} strokeWidth={1.5} />
              </SocialIcon>
              <SocialIcon>
                <Facebook size={16} strokeWidth={1.5} />
              </SocialIcon>
              <SocialIcon>
                <Instagram size={16} strokeWidth={1.5} />
              </SocialIcon>
            </div>
          </div>

          {/* ── Product Column ── */}
          <div>
            <h3
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#94a3b8",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Product
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <LinkItem onClick={() => onNavigate("products")}>
                Health Insurance
              </LinkItem>
              <LinkItem onClick={() => onNavigate("products")}>
                Life Insurance
              </LinkItem>
              <LinkItem onClick={() => onNavigate("products")}>
                General Insurance
              </LinkItem>
              <LinkItem onClick={() => onNavigate("products")}>
                Mutual Funds
              </LinkItem>
              <LinkItem onClick={() => onNavigate("features")}>
                Analytics Suite
              </LinkItem>
            </ul>
          </div>

          {/* ── Company Column ── */}
          <div>
            <h3
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#94a3b8",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Company
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <LinkItem onClick={() => onNavigate("about")}>About Us</LinkItem>
              <LinkItem onClick={() => onNavigate("security")}>
                Security &amp; Compliance
              </LinkItem>
              <LinkItem onClick={() => onNavigate("dashboard")}>
                Agent Dashboard
              </LinkItem>
              <LinkItem onClick={() => onNavigate("contact")}>
                Contact Us
              </LinkItem>
              <LinkItem>Careers</LinkItem>
            </ul>
          </div>

          {/* ── Resources Column ── */}
          <div>
            <h3
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "#94a3b8",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Resources
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <LinkItem>Documentation</LinkItem>
              <LinkItem>API Reference</LinkItem>
              <LinkItem>Status Page</LinkItem>
              <LinkItem>Blog</LinkItem>
              <LinkItem>Changelog</LinkItem>
            </ul>

            {/* CTA mini-card */}
            <div
              style={{
                marginTop: "28px",
                padding: "16px",
                borderRadius: "14px",
                background: "rgba(59,130,246,0.10)",
                border: "1px solid rgba(59,130,246,0.22)",
                backdropFilter: "blur(12px)",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                  color: "#93c5fd",
                  fontWeight: 600,
                  marginBottom: "10px",
                  lineHeight: 1.4,
                }}
              >
                Ready to get started?
              </p>
              <button
                onClick={() => onNavigate("auth")}
                style={{
                  width: "100%",
                  padding: "9px 0",
                  borderRadius: "9999px",
                  background:
                    "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)",
                  border: "none",
                  color: "#fff",
                  fontSize: "13px",
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 0 12px rgba(59,130,246,0.40)",
                  transition: "box-shadow 0.2s, transform 0.15s",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform =
                    "scale(1.03)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 0 20px rgba(59,130,246,0.65)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform =
                    "scale(1)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 0 12px rgba(59,130,246,0.40)";
                }}
              >
                Get Started Free
              </button>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(100,116,139,0.30) 20%, rgba(100,116,139,0.30) 80%, transparent 100%)",
            marginBottom: "0",
          }}
        />

        {/* ── Bottom bar ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "24px 0",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              color: "rgba(100,116,139,0.65)",
              fontWeight: 500,
              letterSpacing: "0.04em",
              margin: 0,
            }}
          >
            © 2025 Finestro. All rights reserved. | Excellence in Fintech Engineering
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(
              (item) => (
                <span
                  key={item}
                  style={{
                    fontSize: "12px",
                    color: "rgba(100,116,139,0.60)",
                    cursor: "pointer",
                    transition: "color 0.2s",
                    letterSpacing: "0.03em",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLSpanElement).style.color =
                      "#60a5fa")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLSpanElement).style.color =
                      "rgba(100,116,139,0.60)")
                  }
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
