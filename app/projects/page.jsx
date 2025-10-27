"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const projects = [
  { title: "Portfolio Website", description: "Built with Next.js, React, and Tailwind CSS", video: "https://www.youtube.com/embed/5mnanvJGPvw", github: "https://github.com/dikimanu/portfolio.git" },
  
  { title: "Html CSS Javascript Projects", description: "5 projects built with Html CSS Javascript, amazing and cool begineer friendly projects", video: "https://www.youtube.com/embed/yCJZb51Lhs0", github: "https://github.com/dikimanu/javascript-projects.git" },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-100 to-purple-50 px-5 py-12">
      <motion.h1
        className="text-5xl font-bold text-center mb-12 text-purple-900"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
      >
        My Projects
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white border rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
          >
            <h2 className="text-2xl font-semibold mb-3 text-purple-900">{project.title}</h2>
            <div className="relative w-full pb-[56.25%] mb-3">
              <iframe
                src={project.video}
                title={project.title}
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <p className="mb-3 text-purple-700">{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-purple-500 underline">
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
