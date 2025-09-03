"use client";

import { socialLinks } from "@/lib/data";
import { motion } from "framer-motion";
import { Code, Github, Heart, Linkedin, Twitter } from "lucide-react";

const iconMap = {
  Github,
  Linkedin,
  Code,
  Twitter,
};

export default function Footer() {
  // Use static year to avoid hydration mismatch
  const currentYear = 2025;

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left order-1 md:order-1"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Kirtan Parikh
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Full-Stack & DevOps Enthusiast
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-4 sm:space-x-6 order-3 md:order-2"
          >
            {socialLinks.map((link) => {
              const IconComponent = iconMap[link.icon as keyof typeof iconMap];
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 sm:p-3 bg-gray-800/50 hover:bg-blue-600/20 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 flex-shrink-0"
                  aria-label={`Visit my ${link.name} profile`}
                >
                  <IconComponent
                    size={18}
                    className="sm:w-5 sm:h-5 text-gray-300 hover:text-blue-400 transition-colors"
                  />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-right order-2 md:order-3"
          >
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">Quick Links</p>
              <div className="flex flex-wrap justify-center md:justify-end gap-x-3 sm:gap-x-4 gap-y-2 text-sm">
                <a
                  href="#about"
                  className="text-gray-300 hover:text-blue-400 transition-colors px-1"
                >
                  About
                </a>
                <a
                  href="#education"
                  className="text-gray-300 hover:text-blue-400 transition-colors px-1"
                >
                  Education
                </a>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-blue-400 transition-colors px-1"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-blue-400 transition-colors px-1"
                >
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 my-6 sm:my-8"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-0">
            <span>© {currentYear} Kirtan Parikh.</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
