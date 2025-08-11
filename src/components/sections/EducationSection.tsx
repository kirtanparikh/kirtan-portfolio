"use client";

import { educationData } from "@/lib/data";
import { motion } from "framer-motion";
import { BookOpen, Calendar, GraduationCap, MapPin } from "lucide-react";
import React from "react";

const iconMap = {
  GraduationCap,
  BookOpen,
};

interface EducationCardProps {
  education: {
    degree: string;
    institution: string;
    location: string;
    duration: string;
    grade: string;
    description: string[];
    coursework?: string[];
    icon: string;
  };
  index: number;
}

const EducationCard: React.FC<EducationCardProps> = ({ education, index }) => {
  const IconComponent =
    iconMap[education.icon as keyof typeof iconMap] || GraduationCap;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300 group"
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-300">
          <IconComponent
            size={28}
            className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 mb-1">
            {education.degree}
          </h3>
          <p className="text-blue-400 font-semibold text-lg">
            {education.institution}
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-6 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{education.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{education.location}</span>
          </div>
        </div>

        <div className="inline-block px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-500/30">
          Grade: {education.grade}
        </div>
      </div>

      {/* Description */}
      <ul className="space-y-2 mb-4">
        {education.description.map((item, descIndex) => (
          <motion.li
            key={descIndex}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2 + descIndex * 0.1 + 0.3,
            }}
            viewport={{ once: true }}
            className="text-gray-300 text-sm leading-relaxed flex items-start"
          >
            <span className="text-blue-400 mr-2 mt-1.5 flex-shrink-0">•</span>
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>

      {/* Coursework */}
      {education.coursework && education.coursework.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.2 + education.description.length * 0.1 + 0.4,
          }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-4"
        >
          <h4 className="text-white font-semibold mb-3 text-sm">
            Relevant Coursework:
          </h4>
          <div className="flex flex-wrap gap-2">
            {education.coursework.map((course, courseIndex) => (
              <motion.span
                key={courseIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.2 + courseIndex * 0.05 + 0.5,
                }}
                viewport={{ once: true }}
                className="px-2 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-md border border-blue-500/20 hover:bg-blue-500/20 transition-colors duration-200"
              >
                {course}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My academic journey and educational background in Computer Science
            and Engineering
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((education, index) => (
            <EducationCard key={index} education={education} index={index} />
          ))}
        </div>

        {/* Academic Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">8.67</div>
              <div className="text-gray-400">Current CGPA</div>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
              <div className="text-gray-400">Years of Study</div>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">2026</div>
              <div className="text-gray-400">Expected Graduation</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
