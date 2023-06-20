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
          {`Hi! My name is Vagner, I'm 27 years old and I am from Brazil. I have been employed at the courthouse for 8 years, but I am now
          seeking a career transition into the field of IT. I am currently
          studying to obtain a degree in software engineering and taking online
          courses to enhance my skills in both front-end and back-end
          technologies.`}
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
