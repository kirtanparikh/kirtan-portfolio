"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactData, socialLinks } from "@/lib/data";
import { motion } from "framer-motion";
import {
  Code,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import React, { useState } from "react";

const iconMap = {
  Github,
  Linkedin,
  Code,
  Twitter,
};

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual implementation
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            I&apos;m always interested in new opportunities and collaborations.
            Let&apos;s build something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
                Whether you have a project in mind, want to discuss
                opportunities, or just want to say hello, I&apos;d love to hear
                from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-6">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 glass-card"
              >
                <div className="p-2 sm:p-3 glass-card flex-shrink-0">
                  <Mail size={20} className="sm:w-6 sm:h-6 text-blue-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-gray-400 text-xs sm:text-sm">Email</p>
                  <a
                    href={`mailto:${contactData.email}`}
                    className="text-white hover:text-blue-400 transition-colors text-sm sm:text-base break-all"
                  >
                    {contactData.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 glass-card"
              >
                <div className="p-2 sm:p-3 glass-card flex-shrink-0">
                  <Phone size={20} className="sm:w-6 sm:h-6 text-blue-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-gray-400 text-xs sm:text-sm">Phone</p>
                  <a
                    href={`tel:${contactData.phone}`}
                    className="text-white hover:text-blue-400 transition-colors text-sm sm:text-base"
                  >
                    {contactData.phone}
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 glass-card"
              >
                <div className="p-2 sm:p-3 glass-card flex-shrink-0">
                  <MapPin size={20} className="sm:w-6 sm:h-6 text-blue-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-gray-400 text-xs sm:text-sm">Location</p>
                  <p className="text-white text-sm sm:text-base">
                    {contactData.location}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
                Follow me on social media
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((link, index) => {
                  const IconComponent =
                    iconMap[link.icon as keyof typeof iconMap];
                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 sm:p-3 glass-card transition-all duration-300 flex-shrink-0"
                      aria-label={`Visit my ${link.name} profile`}
                    >
                      <IconComponent
                        size={18}
                        className="sm:w-5 sm:h-5 text-gray-300 hover:text-blue-400 transition-colors"
                      />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="glass text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 border-0"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="glass text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 border-0"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="glass text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 border-0 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  variant="default"
                  className="w-full font-semibold py-3"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2"></div>
                      <span className="text-sm sm:text-base">Sending...</span>
                    </div>
                  ) : (
                    <>
                      <Send className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-base">Send Message</span>
                    </>
                  )}
                </Button>
              </motion.div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg"
                >
                  <p className="text-green-400 text-center">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg"
                >
                  <p className="text-red-400 text-center">
                    Something went wrong. Please try again or reach out via
                    email.
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
