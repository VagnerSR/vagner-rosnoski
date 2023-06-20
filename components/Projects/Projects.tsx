import React from "react";
import SectionTitle from "../GeneralComponents/SectionTitle";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import projects from "./Projects.json";

type Props = {};

export default function Projects({}: Props) {
  return (
    <div
      className="flex flex-col text-center h-screen
      items-center overflow-hidden mt-20"
    >
      <motion.div
        initial={{
          opacity: 0,
          x: -200,
        }}
        transition={{
          duration: 0.5,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        className="mt-24 mb-10"
      >
        <SectionTitle text="Projects" />
      </motion.div>

      <div
        className="relative w-full flex items-center 2xl:justify-center overflow-x-scroll 
      overflow-y-hidden gap-10 py-10 px-5 scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-gray-500
      dark:scrollbar-track-gray-800 dark:scrollbar-thumb-light h-3/4"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            imgSrc={project.imgSrc}
            gitHubRepo={project.gitHubRepo}
            linkToProject={project.linkToProject}
          />
        ))}
      </div>
    </div>
  );
}
