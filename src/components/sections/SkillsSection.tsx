"use client";

import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import {
  Atom,
  Box,
  Brain,
  Cloud,
  Code,
  Database,
  GitBranch,
  GitCommit,
  Globe,
  Link,
  Package,
  Palette,
  Server,
  Settings,
  Wifi,
  Zap,
} from "lucide-react";
import React from "react";

const iconMap = {
  Code,
  Database,
  Atom,
  Zap,
  Server,
  Globe,
  Palette,
  Wifi,
  Cloud,
  Package,
  Box,
  Settings,
  GitBranch,
  GitCommit,
  Brain,
  Link,
};

interface SkillCardProps {
  skill: {
    name: string;
    icon: string;
  };
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const IconComponent = iconMap[skill.icon as keyof typeof iconMap] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 text-center hover:border-blue-500/50 transition-all duration-300 group"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-full mb-4 group-hover:bg-blue-500/20 transition-colors duration-300"
      >
        <IconComponent
          size={32}
          className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
        />
      </motion.div>
      <h3 className="text-white font-semibold group-hover:text-blue-300 transition-colors duration-300">
        {skill.name}
      </h3>
    </motion.div>
  );
};

interface SkillCategoryProps {
  title: string;
  skills: Array<{ name: string; icon: string }>;
  delay: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  skills,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        {title}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use
            to build scalable applications
          </p>
        </motion.div>

        <div className="space-y-16">
          <SkillCategory
            title="Programming Languages"
            skills={skillsData.languages}
            delay={0.2}
          />

          <SkillCategory
            title="Frameworks & Libraries"
            skills={skillsData.frameworks}
            delay={0.4}
          />

          <SkillCategory
            title="Cloud & DevOps"
            skills={skillsData.cloudAndDevOps}
            delay={0.6}
          />

          <SkillCategory
            title="Databases & AI"
            skills={skillsData.databasesAndAI}
            delay={0.8}
          />
        </div>
      </div>
    </section>
  );
}
