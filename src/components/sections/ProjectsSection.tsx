"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
  details: string;
}

interface ProjectCardProps {
  project: Project;
  onCardClick: (project: Project) => void;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onCardClick,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      onClick={() => onCardClick(project)}
      className="rounded-2xl cursor-pointer group glass-accent-ring overflow-hidden flex flex-col bg-white/5 backdrop-blur-xl border border-white/10"
    >
      {/* Image section with fixed aspect ratio */}
      <div className="relative w-full aspect-[16/9]">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className="object-cover brightness-[0.7] contrast-110 saturate-125 transition-transform duration-700 group-hover:scale-105"
          priority={index < 2}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80" />
        <div className="absolute top-2 right-2 text-[10px] px-2 py-1 rounded-md bg-black/40 text-white/80 border border-white/10 backdrop-blur-sm">
          {project.tags[0]}
        </div>
      </div>
      {/* Content area */}
      <div className="glass-content p-5 backdrop-blur supports-[backdrop-filter]:bg-black/50 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-white mb-1 group-hover:text-blue-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-300/90 text-sm line-clamp-2">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2 py-1 rounded-full text-[10px] font-medium bg-white/10 text-blue-200 border border-white/15 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 rounded-full text-[10px] font-medium bg-white/10 text-gray-200 border border-white/10">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
        <div className="flex items-center justify-between pt-1">
          <span className="text-gray-400/80 text-[11px]">Click to view</span>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/15 text-white text-xs border border-white/10 transition-colors"
          >
            <Github size={14} />
            Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <Dialog open={!!project} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-[95vw] sm:max-w-4xl max-h-[90vh] overflow-y-auto glass-dark border-white/10 mx-4">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold text-white">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-gray-300 mt-2 text-sm sm:text-base">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 sm:mt-6 space-y-6 sm:space-y-8">
          {/* Project Image with overlay */}
          <div className="relative h-0 pb-[56.25%] rounded-2xl overflow-hidden glass-accent-ring">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              sizes="100vw"
              className="object-cover brightness-[0.65]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-white drop-shadow-lg">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm max-w-3xl">
                {project.description}
              </p>
            </div>
          </div>

          {/* Project Details */}
          <div className="glass-content p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-white mb-3">
              Project Details
            </h3>
            <p className="text-gray-300/90 leading-relaxed text-sm">
              {project.details}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="glass-content p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-white mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 rounded-md text-xs font-medium bg-white/10 text-blue-200 border border-white/10 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Button
              asChild
              size="lg"
              className="bg-white/10 hover:bg-white/15 text-white border border-white/15 backdrop-blur-sm"
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <ExternalLink size={18} className="mr-2" />
                Live Demo
              </a>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-200 border border-blue-400/30"
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github size={18} className="mr-2" />
                Source Code
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-black via-gray-900 to-black relative"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/3 w-48 sm:w-96 h-48 sm:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 sm:w-96 h-48 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Here are some of my recent projects that showcase my skills and
            passion for creating innovative solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onCardClick={handleCardClick}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-300 mb-6">Want to see more of my work?</p>
          <motion.a
            href="https://github.com/kirtanparikh"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 btn-macos text-white font-semibold"
          >
            <Github className="mr-2" size={20} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>

      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </section>
  );
}
