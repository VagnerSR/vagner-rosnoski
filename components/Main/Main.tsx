import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import {
  AiOutlineArrowDown,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import Link from "next/link";

type Props = {};

export default function Main({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi there!",
      "I'm Full-stack developer",
      "and I recently graduated in Software Engineering",
    ],
    loop: 0,
    delaySpeed: 4000,
  });
  return (
    <div className=" relative flex flex-col items-center justify-around text-center h-screen">
      <div
        className="blob w-[50px] h-[500px] lg:h-[800px] rounded-[999px] absolute -top-20 right-5 lg:right-1/2 z-0
       blur-3xl opacity-50 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
       -rotate-12"
      ></div>
      <div className="flex flex-col w-full justify-center items-center">
        <motion.h1
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="text-4xl lg:text-6xl lg:mb-5 uppercase tracking-[15px]"
        >
          Vagner
        </motion.h1>
        <motion.h2
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className="text-4xl lg:text-6xl lg:mb-5 uppercase tracking-[15px]"
        >
          Rosnoski
        </motion.h2>
        <motion.h3
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="text-xl h-10 lg:text-4xl font-semibold text-secondary dark:text-secondaryDark"
        >
          <span className="">{text}</span>
          <Cursor />
        </motion.h3>
        <div className="flex mt-10 gap-5 z-10">
          <div className="hover:rotate-12 hover:-translate-y-1">
            <motion.a
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.8,
              }}
              href="https://github.com/VagnerSR"
            >
              <AiOutlineGithub size={30} />
            </motion.a>
          </div>

          <div className="hover:rotate-12 hover:-translate-y-1 z-10">
            <motion.a
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 1,
              }}
              href="https://www.linkedin.com/in/vagner-da-silva-rosnoski-b657a024a/"
            >
              <AiOutlineLinkedin size={30} />
            </motion.a>
          </div>
        </div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: -40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.3,
        }}
        className="flex flex-col items-center justify-center"
      >
        <Link
          href="#about"
          className="animate-bounce text-secondary dark:text-secondaryDark"
        >
          <AiOutlineArrowDown size={30} />
        </Link>
        <span className="text-lg lg:text-xl uppercase text-secondary dark:text-secondaryDark tracking-[6px]">
          Scroll Down
        </span>
      </motion.div>
    </div>
  );
}
