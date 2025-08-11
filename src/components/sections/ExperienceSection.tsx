"use client";

import { experienceData } from "@/lib/data";
import { motion } from "framer-motion";
import { Award, Briefcase, Calendar, ExternalLink } from "lucide-react";
import React from "react";

interface TimelineItemProps {
  experience: {
    role: string;
    company: string;
    duration: string;
    description: string[];
    certificateUrl?: string;
  };
  index: number;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  experience,
  index,
  isLast,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative flex items-center"
    >
      {/* Timeline line */}
      {!isLast && (
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
          viewport={{ once: true }}
          className="absolute left-1/2 top-16 w-0.5 bg-gradient-to-b from-blue-500 to-transparent transform -translate-x-1/2 z-0"
          style={{ height: "120px" }}
        />
      )}

      {/* Content card */}
      <div
        className={`w-full md:w-5/12 ${
          index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:ml-auto"
        }`}
      >
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300"
        >
          {/* Role and Company */}
          <div className="flex items-center mb-3">
            <div className="p-2 bg-blue-500/10 rounded-lg mr-3">
              <Briefcase size={20} className="text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                {experience.role}
              </h3>
              <p className="text-blue-400 font-semibold">
                {experience.company}
              </p>
            </div>
          </div>

          {/* Duration */}
          <div className="flex items-center mb-4 text-gray-400">
            <Calendar size={16} className="mr-2" />
            <span>{experience.duration}</span>
          </div>

          {/* Description */}
          <ul className="space-y-2 mb-4">
            {experience.description.map((item, descIndex) => (
              <motion.li
                key={descIndex}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2 + descIndex * 0.1 + 0.8,
                }}
                viewport={{ once: true }}
                className="text-gray-300 text-sm leading-relaxed flex items-start"
              >
                <span className="text-blue-400 mr-2 mt-1.5 flex-shrink-0">
                  •
                </span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          {/* Certificate Button */}
          {experience.certificateUrl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2 + experience.description.length * 0.1 + 0.9,
              }}
              viewport={{ once: true }}
              className="flex justify-start"
            >
              <motion.a
                href={experience.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 text-sm font-medium rounded-lg border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300"
              >
                <Award size={16} />
                <span>View Certificate</span>
                <ExternalLink size={14} />
              </motion.a>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        viewport={{ once: true }}
        className="absolute left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-black">
          <div className="w-full h-full bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My journey in building scalable systems and cloud infrastructure
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line for larger screens */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {experienceData.map((experience, index) => (
              <TimelineItem
                key={index}
                experience={experience}
                index={index}
                isLast={index === experienceData.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg mb-6">
            Interested in working together? Let&apos;s connect!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
