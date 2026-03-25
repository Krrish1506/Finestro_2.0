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
import { Toaster } from "./components/ui/sonner";

type PageType = "home" | "about" | "products" | "features" | "dashboard" | "contact" | "security";

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
        return <AboutPage />;
      case "products":
        return <ProductsPage />;
      case "features":
        return <FeaturesPage />;
      case "dashboard":
        return <DashboardPage />;
      case "contact":
        return <ContactPage />;
      case "security":
        return <SecurityPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
      <Toaster position="top-right" richColors />
    </div>
  );
}
