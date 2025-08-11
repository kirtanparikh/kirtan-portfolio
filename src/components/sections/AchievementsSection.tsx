"use client";

import { achievementsData } from "@/lib/data";
import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, Trophy } from "lucide-react";
import React from "react";

const iconMap = {
  Trophy,
  Award,
  GraduationCap,
  BookOpen,
};

interface AchievementCardProps {
  achievement: {
    title: string;
    score: string;
    date: string;
    description: string;
    icon: string;
  };
  index: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  achievement,
  index,
}) => {
  const IconComponent = iconMap[achievement.icon as keyof typeof iconMap];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-blue-500/10 rounded-lg mr-4">
          <IconComponent size={24} className="text-blue-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">
            {achievement.title}
          </h3>
          <p className="text-blue-400 font-semibold text-lg">
            {achievement.score}
          </p>
        </div>
        <div className="text-right">
          <p className="text-gray-400 text-sm">{achievement.date}</p>
        </div>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">
        {achievement.description}
      </p>
    </motion.div>
  );
};

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Academic Achievements
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Recognitions and test scores that reflect my academic excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((achievement, index) => (
            <AchievementCard
              key={index}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
