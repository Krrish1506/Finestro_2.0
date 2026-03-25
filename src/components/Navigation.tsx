import { useState } from "react";
import { Shield, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "home" },
    { name: "About Us", path: "about" },
    { name: "Products", path: "products" },
    { name: "Features", path: "features" },
    { name: "Dashboard", path: "dashboard" },
    { name: "Security", path: "security" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <nav className="glass sticky top-0 z-50 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2.5 cursor-pointer group" onClick={() => onNavigate("home")}>
            <div className="bg-gradient-to-br from-indigo-600 to-violet-600 p-1.5 rounded-lg shadow-sm group-hover:shadow-indigo-200 transition-all">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text tracking-tight">Finestro</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  currentPage === item.path
                    ? "text-indigo-600 bg-indigo-50 shadow-sm"
                    : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="ml-4 pl-4 border-l border-slate-200">
              <Button onClick={() => onNavigate("dashboard")} size="sm" className="shadow-ambient">
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 p-2"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-6 space-y-2 overflow-hidden"
            >
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    onNavigate(item.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    currentPage === item.path
                      ? "text-indigo-600 bg-indigo-50 shadow-sm"
                      : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-2">
                <Button onClick={() => {
                  onNavigate("dashboard");
                  setMobileMenuOpen(false);
                }} className="w-full rounded-full shadow-ambient">
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
