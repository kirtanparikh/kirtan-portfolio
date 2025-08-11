"use client";

import { coursesData } from "@/lib/data";
import { motion } from "framer-motion";
import {
  Award,
  Brain,
  CheckCircle,
  Clock,
  Code,
  ExternalLink,
} from "lucide-react";
import React from "react";

const iconMap = {
  Award,
  Code,
  Brain,
};

interface CourseCardProps {
  course: {
    title: string;
    provider: string;
    duration: string;
    status: string;
    description: string;
    skills: string[];
    certificateUrl: string;
    icon: string;
  };
  index: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, index }) => {
  const IconComponent = iconMap[course.icon as keyof typeof iconMap] || Award;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300 group"
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-300">
          <IconComponent
            size={24}
            className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 mb-1">
            {course.title}
          </h3>
          <p className="text-blue-400 font-semibold">{course.provider}</p>
        </div>
        <div className="flex items-center gap-2">
          {course.status === "Completed" ? (
            <div className="flex items-center gap-1 px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full border border-green-500/30">
              <CheckCircle size={12} />
              <span>Completed</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full border border-yellow-500/30">
              <Clock size={12} />
              <span>In Progress</span>
            </div>
          )}
        </div>
      </div>

      {/* Duration */}
      <div className="text-gray-400 text-sm mb-4">{course.duration}</div>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed mb-4">
        {course.description}
      </p>

      {/* Skills */}
      <div className="mb-4">
        <h4 className="text-white text-sm font-semibold mb-2">
          Skills Gained:
        </h4>
        <div className="flex flex-wrap gap-2">
          {course.skills.map((skill, skillIndex) => (
            <span
              key={skillIndex}
              className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Certificate Link */}
      {course.certificateUrl !== "#" && (
        <motion.a
          href={course.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-colors duration-200"
        >
          <ExternalLink size={14} />
          View Certificate
        </motion.a>
      )}
    </motion.div>
  );
};

export default function CoursesSection() {
  return (
    <section id="courses" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Courses & Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Continuous learning through courses, certifications, and hands-on
            practice to stay updated with latest technologies
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {coursesData.map((course, index) => (
            <CourseCard key={index} course={course} index={index} />
          ))}
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-lg p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning Philosophy
            </h3>
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
              &ldquo;Technology evolves rapidly, and staying relevant requires
              continuous learning. I believe in hands-on practice, building real
              projects, and staying updated with industry trends. Every course I
              take and every project I build adds to my arsenal of skills to
              create impactful solutions.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
