import { motion } from "framer-motion";
import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="h-20 flex flex-col justify-center items-center mt-20 mb-10">
      <motion.span
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
      >
        Designed and Hand Coded by Vagner Rosnoski
      </motion.span>
      <div className="flex gap-2 mt-2">
        <motion.div
          initial={{
            opacity: 0,
            y: -50,
          }}
          transition={{
            duration: 0.5,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <a
            className="cursor-pointer flex flex-col justify-center items-center"
            href="https://github.com/VagnerSR"
          >
            <div className="hover:rotate-12 hover:-translate-y-1">
              <AiOutlineGithub size={30} />
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: -50,
          }}
          transition={{
            duration: 0.5,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <a
            className="cursor-pointer flex flex-col justify-center items-center"
            href="https://www.linkedin.com/in/vagner-da-silva-rosnoski-b657a024a/"
          >
            <div className="hover:rotate-12 hover:-translate-y-1 z-10">
              <AiOutlineLinkedin size={30} />
            </div>
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
