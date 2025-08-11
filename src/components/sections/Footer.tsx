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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              Kirtan Parikh
            </h3>
            <p className="text-gray-400">Full-Stack & DevOps Enthusiast</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6"
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
                  className="p-3 bg-gray-800/50 hover:bg-blue-600/20 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300"
                >
                  <IconComponent
                    size={20}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
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
            className="text-center md:text-right"
          >
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">Quick Links</p>
              <div className="space-x-4 text-sm">
                <a
                  href="#about"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  About
                </a>
                <a
                  href="#education"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Education
                </a>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
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
          className="border-t border-gray-800 my-8"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm flex items-center justify-center">
            © {currentYear} Kirtan Parikh. Built with
            <Heart size={16} className="text-red-500 mx-1" />
            using Next.js & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
