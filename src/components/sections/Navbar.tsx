"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
  { name: "Courses", href: "#courses" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    const toggleVisibility = () => {
      const currentIsMobile = window.innerWidth < 768;

      if (currentIsMobile) {
        // On mobile, show navbar after minimal scroll
        setIsVisible(window.scrollY > 50);
      } else {
        // Desktop behavior
        setIsVisible(window.scrollY > 100);
      }
    };

    const handleResize = () => {
      checkMobile();
      // Close mobile menu when switching to desktop view
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
      toggleVisibility();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    // Set initial visibility state
    toggleVisibility();

    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      // Close mobile menu first
      setIsMobileMenuOpen(false);

      // Add a small delay to allow menu to close before scrolling
      setTimeout(
        () => {
          const offset = isMobile ? 70 : 100; // Account for navbar height
          const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset - offset;

          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          });
        },
        isMobile ? 300 : 0
      ); // Delay only on mobile to let menu close
    } else {
      // Fallback - just close menu if element not found
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {isClient && isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed z-50 glass-navbar ${
            isMobile
              ? "top-0 left-0 right-0 mobile-navbar"
              : "top-4 left-4 right-4 rounded-2xl"
          }`}
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-14 sm:h-16">
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="font-bold text-white text-lg sm:text-xl truncate flex-shrink-0"
              >
                Kirtan Parikh
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-1 lg:space-x-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.href)}
                    className="nav-item-glass text-gray-300 hover:text-white transition-all duration-300 relative z-10 text-sm lg:text-base"
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden btn-macos-secondary p-3 text-white rounded-lg flex-shrink-0"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden border-t border-white/10 mt-2"
                >
                  <div className="py-2 max-h-[60vh] overflow-y-auto">
                    <div className="space-y-1">
                      {navItems.map((item, index) => (
                        <motion.button
                          key={item.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => scrollToSection(item.href)}
                          className="block w-full text-left nav-item-glass text-gray-300 hover:text-white transition-all duration-200 py-3 px-4 rounded-lg text-base font-medium"
                        >
                          {item.name}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
