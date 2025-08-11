"use client";

import { Button } from "@/components/ui/button";
import { heroData, socialLinks } from "@/lib/data";
import { motion } from "framer-motion";
import { Code, Download, Github, Linkedin, Send, Twitter } from "lucide-react";

const iconMap = {
  Github,
  Linkedin,
  Code,
  Twitter,
};

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = heroData.cvUrl;
    link.download = "Kirtan_Parikh_CV.pdf";
    link.click();
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 40% 60%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
          />
        </div>

        {/* Floating Orbs */}
        <div className="absolute -inset-10 opacity-30">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-2xl"
          />
          <motion.div
            animate={{
              x: [0, -120, 0],
              y: [0, 80, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute top-3/4 right-1/4 w-80 h-80 bg-teal-500/20 rounded-full mix-blend-multiply filter blur-2xl"
          />
          <motion.div
            animate={{
              x: [0, 80, 0],
              y: [0, -60, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
            className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-2xl"
          />
        </div>

        {/* Particle System */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut",
              }}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${60 + Math.sin(i) * 20}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Name with Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4 sm:mb-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent relative leading-tight"
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                  "0 0 40px rgba(59, 130, 246, 0.8)",
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {heroData.name}
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Enhanced Tagline with Stagger Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {heroData.tagline.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Button
              onClick={downloadCV}
              size="lg"
              variant="default"
              className="px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold relative overflow-hidden group w-full sm:w-auto"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <Download className="mr-2 sm:mr-3" size={18} />
              <span className="relative z-10">Download CV</span>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Button
              onClick={scrollToContact}
              variant="secondary"
              size="lg"
              className="px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold relative overflow-hidden group w-full sm:w-auto"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/2"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              />
              <Send className="mr-2 sm:mr-3" size={18} />
              <span className="relative z-10">Get In Touch</span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Enhanced Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex justify-center space-x-4 sm:space-x-8 px-4"
        >
          {socialLinks.map((link, index) => {
            const IconComponent = iconMap[link.icon as keyof typeof iconMap];
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: 1.4 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                whileHover={{
                  scale: 1.2,
                  y: -8,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-gray-800/30 hover:bg-blue-600/20 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm relative group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <IconComponent
                  size={28}
                  className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300 relative z-10"
                />

                {/* Ripple Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-blue-400/0 group-hover:border-blue-400/50"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.a>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-blue-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
