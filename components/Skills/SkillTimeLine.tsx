import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  title: string;
  text: string;
  imgSrc: string;
  justify: string;
  padding: string;
  styles: string;
  popOnScreen: number;
};

export default function SkillTimeLine({
  text,
  imgSrc,
  justify,
  padding,
  title,
  styles,
}: Props) {
  return (
    <motion.div
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
      className="mb-12"
    >
      <div className="flex flex-row items-center ">
        <div className={`flex ${justify} w-full mx-auto items-center`}>
          <div className={`w-1/2 ${padding}`}>
            <div className="p-2 bg-white dark:bg-light rounded shadow">
              <span className="pr-2">{text}</span>
            </div>
          </div>
        </div>
        <div
          className={`${styles} absolute left-1/2 transform
        -translate-x-1/2 flex items-center justify-center `}
        >
          <Image src={imgSrc} alt="Skill Image" width={50} height={50} />
        </div>
      </div>
    </motion.div>
  );
}
