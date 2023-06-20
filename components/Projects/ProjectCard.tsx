import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  imgSrc: string;
  title: string;
  text: string;
  gitHubRepo: string;
  linkToProject?: string;
};

export default function ProjectCard({
  imgSrc,
  title,
  text,
  gitHubRepo,
  linkToProject,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -40,
      }}
      transition={{
        duration: 0.5,
        delay: 0.3,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800
       dark:border-gray-700 w-[322px] h-[560px]"
    >
      <div className="w-80 h-56 flex justify-center overflow-hidden 	">
        <a href={linkToProject} className="relative w-80 h-56">
          <Image
            src={imgSrc}
            alt="Project Image"
            fill
            className="object-cover rounded-lg"
          />
        </a>
      </div>

      <div className="p-5 flex flex-col items-center justify-around h-[320px]">
        <a href={linkToProject}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {text}
        </p>

        <div className="flex gap-5 justify-center">
          {gitHubRepo ? (
            <a
              href={gitHubRepo}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center
         text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none
          focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              GitHub Repo
            </a>
          ) : (
            ""
          )}

          <a
            href={linkToProject}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center
         text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none
          focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Link to the project
          </a>
        </div>
      </div>
    </motion.div>
  );
}
