import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import CustomLink from "./CustomLink/CustomLink";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";
import { SunIcon, MoonIcon } from "../../../public/Icons";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import CustomLinkMobile from "./CustomLink/CustomLinkMobile";
import SpinButton from "../../GeneralComponents/SpinButton";

type Props = {};

export default function NavMenu({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const [mode, setMode] = useThemeSwitcher();

  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (!menuRef?.current?.contains(e.target as HTMLElement)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  return (
    <div className="flex flex-col items-end cursor-pointer">
      <motion.button
        initial={{
          y: -100,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        aria-label="open nav menu"
        onClick={() => setIsOpen(true)}
        className="relative flex flex-col justify-end items-end lg:hidden mt-2"
      >
        <span
          className={`bg-primary dark:bg-primaryDark transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
          ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
        ></span>
        <span
          className={`bg-primary dark:bg-primaryDark transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 
          ${isOpen ? "opacity-0" : "opacity-1"}`}
        ></span>
        <span
          className={`bg-primary dark:bg-primaryDark transition-all duration-300 ease-out h-0.5 w-6 rounded-sm 
          ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
        ></span>
      </motion.button>

      <div className={isOpen ? "fixed inset-0 bg-black/60 h-screen" : "hidden"}>
        <motion.nav
          initial={{
            x: 100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.2,
          }}
          ref={menuRef}
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col bg-light dark:bg-dark
           fixed right-0 left-1/4 inset-y-0 h-screen z-20 md:left-2/4 lg:hidden`}
        >
          <button
            aria-label="open nav menu"
            onClick={() => setIsOpen(false)}
            className="relative flex flex-col justify-end items-end lg:hidden mt-8 mr-5"
          >
            <motion.span
              initial={{
                rotate: 0,
                translateY: 0.5,
                opacity: 0,
              }}
              whileInView={{
                rotate: 45,
                translateY: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                delay: 0.2,
              }}
              className={`bg-primary dark:bg-primaryDark h-0.5 w-6 rounded-sm`}
            ></motion.span>

            <span
              className={`bg-primary dark:bg-primaryDark h-0.5 w-6 rounded-sm my-0.5 opacity-0`}
            ></span>

            <motion.span
              initial={{
                rotate: 0,
                translateY: 0.5,
                opacity: 0,
              }}
              whileInView={{
                rotate: -45,
                translateY: -6,
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                delay: 0.2,
              }}
              className={`bg-primary dark:bg-primaryDark  h-0.5 w-6 rounded-sm `}
            ></motion.span>
          </button>
          <div className="flex flex-col justify-center items-center mt-5 gap-4">
            <CustomLinkMobile
              href="#main"
              title="Home"
              onClick={() => setIsOpen(false)}
              calssName=""
              duration={0.2}
              delay={0.1}
            />
            <CustomLinkMobile
              href="#about"
              title="About"
              onClick={() => setIsOpen(false)}
              calssName=""
              duration={0.2}
              delay={0.2}
            />
            <CustomLinkMobile
              href="#skills"
              title="Skills"
              onClick={() => setIsOpen(false)}
              calssName=""
              duration={0.2}
              delay={0.4}
            />
            <CustomLinkMobile
              href="#projects"
              title="Projects"
              onClick={() => setIsOpen(false)}
              calssName=""
              duration={0.2}
              delay={0.3}
            />
            <CustomLinkMobile
              href="#contact"
              title="Contact"
              onClick={() => setIsOpen(false)}
              calssName=""
              duration={0.2}
              delay={0.4}
            />
          </div>

          <a href="VagnerCV-eng.pdf" download className="flex justify-center items-center">
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                delay: 0.6,
                ease: "easeIn",
              }}
              className="mt-5 w-24"
            >
              <SpinButton text="Resume" />
            </motion.div>
          </a>

          <div className="flex my-8 justify-center gap-4 text-vivid dark:text-vividDark">
            <motion.a
              initial={{
                y: 20,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.80,
                ease: "easeIn",
              }}
              href="https://github.com/VagnerSR"
            >
              <AiOutlineGithub size={30} />
            </motion.a>
            <motion.a
              initial={{
                y: 20,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.85,
                ease: "easeIn",
              }}
              href="https://www.linkedin.com/in/vagner-da-silva-rosnoski-b657a024a/"
            >
              <AiOutlineLinkedin size={30} />
            </motion.a>
          </div>

          <motion.span
            initial={{
              y: 20,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 1.1,
              ease: "easeIn",
            }}
            className="text-center text-md text-vivid dark:text-vividDark font-bold"
          >
            vagnerrosnoski@gmail.com
          </motion.span>

          <motion.div
            initial={{
              y: 20,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 1.2,
              ease: "easeIn",
            }}
            className="flex flex-col justify-center items-center"
          >
            <hr className="border-vivid dark:border-vividDark my-5 w-40" />

            <div className="bg-dark dark:border-2 dark:border-vividDark p-1 rounded-xl flex items-center justify-center">
              <span
                className="text-md text-primaryDark font-bold pl-2"
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                Switch theme
              </span>
              <button
                className="ml-3 p-1 rounded-full"
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "dark" ? (
                  <SunIcon className={"text-yellow-500"} />
                ) : (
                  <MoonIcon className={"text-yellow-500"} />
                )}
              </button>
            </div>
          </motion.div>
        </motion.nav>
      </div>

      {/**
       * NAV PC
       */}

      <nav className={`hidden lg:flex z-20 `}>
        <CustomLink href="#main" title="Home" calssName="mr-4" duration={0.5} />
        <CustomLink
          href="#about"
          title="About"
          calssName="mx-4"
          duration={0.7}
        />
        <CustomLink
          href="#skills"
          title="Skills"
          calssName="mx-4"
          duration={1.1}
        />
        <CustomLink
          href="#projects"
          title="Projects"
          calssName="mx-4"
          duration={0.9}
        />
        <CustomLink
          href="#contact"
          title="Contact"
          calssName="ml-4"
          duration={1.1}
        />

        <motion.button
          initial={{
            y: -100,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.3,
          }}
          className="ml-10 p-2 rounded-full bg-light/20 dark:bg-dark/20 dark:text-yellow-500 hover:bg-dark hover:dark:bg-light
            hover:text-yellow-500 hover:dark:text-primary"
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
          {mode === "dark" ? (
            <SunIcon className={""} />
          ) : (
            <MoonIcon className={""} />
          )}
        </motion.button>
      </nav>
    </div>
  );
}
