import React from "react";
import SectionTitle from "../GeneralComponents/SectionTitle";
import skillsJson from "./Skills.json";
import SkillTimeLine from "./SkillTimeLine";
import { motion } from "framer-motion";

type Props = {};

export default function Skills({}: Props) {
  return (
    <div
      className="flex flex-col text-center 
    px-5 justify-evenly items-center"
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
        <SectionTitle text="SKills" />
      </motion.div>

      <motion.p
        initial={{
          opacity: 0,
          x: -200,
        }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        className="text-md lg:text-xl font-semibold"
      >
        Here is a timeline of my learning
      </motion.p>

      <div className="relative text-primary dark:text-primary antialiased text-sm font-semibold mt-20 lg:w-1/2">
        <div className="w-1 bg-vivid dark:bg-light absolute h-full left-1/2 transform -translate-x-1/2"></div>

        {skillsJson.map((skill, index) => (
          <SkillTimeLine
            key={index}
            title={skill.name}
            text={skill.text}
            imgSrc={skill.imgSrc}
            styles={skill.rounded}
            justify={index % 2 === 0 ? "justify-start" : "justify-end"}
            padding={index % 2 === 0 ? "pr-8 lg:pr-12" : "pl-8 lg:pl-12"}
            popOnScreen={0}
          />
        ))}
      </div>

      <motion.p
        initial={{
          opacity: 0,
          x: -200,
        }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        className="text-md lg:text-xl mt-10 lg:w-1/2 font-semibold"
      >
        Each of these technologies has its own unique aspects, challenges, and
        rewards. Learning them and applying them in practical projects can be a
        truly enjoyable and fulfilling experience.
      </motion.p>
    </div>
  );
}
