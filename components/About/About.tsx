import { motion } from "framer-motion";
import React from "react";
import SectionTitle from "../GeneralComponents/SectionTitle";
import SpinButton from "../GeneralComponents/SpinButton";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      className=" flex flex-col text-center h-screen
          px-10 justify-evenly items-center"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -40,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
      >
        <SectionTitle text="About" />
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: -40,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className=" px-0 md:px-10 flex flex-col justify-center items-center lg:w-2/4"
      >
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-vivid dark:decoration-vividDark">
            little
          </span>{" "}
          background
        </h4>
        <p className="text-sm font-semibold lg:text-lg mt-10">
          {`Hi! My name is Vagner, I'm 27 years old and I am from Brazil. 
          I have been working at a notary office for nine years. During this time,
           I have acquired solid skills in organization, data management, and customer
            service. Currently, I am seeking a position in the technology field that 
            offers opportunities for professional growth. Committed to enhancing my 
            academic background, I recently graduated in Software Engineering, and 
            I am taking online courses to develop my skills in fullstack development,
             mainly focusing on backend.`}
        </p>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="flex flex-col justify-center items-center gap-5"
      >
        <span className="text-sm lg:text-lg font-semibold">
          Click on the button to download my resume
        </span>
        <a href="VagnerCV-eng.pdf" download className="w-24 ">
          <SpinButton text="Resume" />
        </a>
      </motion.div>
    </motion.div>
  );
}
