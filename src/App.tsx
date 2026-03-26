import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { ProductsPage } from "./components/ProductsPage";
import { DashboardPage } from "./components/DashboardPage";
import { ContactPage } from "./components/ContactPage";
import { SecurityPage } from "./components/SecurityPage";
import { FeaturesPage } from "./components/FeaturesPage";
import { AuthPage } from "./components/AuthPage";
import { Toaster } from "./components/ui/sonner";
import { motion, AnimatePresence } from "framer-motion";

type PageType = "home" | "about" | "products" | "features" | "dashboard" | "contact" | "security" | "auth";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as PageType);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "about":
        return <AboutPage onNavigate={handleNavigate} />;
      case "products":
        return <ProductsPage onNavigate={handleNavigate} />;
      case "features":
        return <FeaturesPage onNavigate={handleNavigate} />;
      case "dashboard":
        return <DashboardPage />;
      case "contact":
        return <ContactPage onNavigate={handleNavigate} />;
      case "security":
        return <SecurityPage onNavigate={handleNavigate} />;
      case "auth":
        return <AuthPage onBack={() => setCurrentPage("home")} onSuccess={() => setCurrentPage("dashboard")} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  const isAuthPage = currentPage === "auth";

  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      {!isAuthPage && <Navigation currentPage={currentPage} onNavigate={handleNavigate} />}
      <main className={`flex-1 relative overflow-hidden ${isAuthPage ? "" : "pt-[72px]"}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: isAuthPage ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: isAuthPage ? 0 : -6 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      {!isAuthPage && <Footer onNavigate={handleNavigate} />}
      <Toaster position="top-right" richColors />
    </div>
  );
}
