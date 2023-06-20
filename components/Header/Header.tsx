import { motion } from "framer-motion";
import React from "react";
import NavMenu from "./Navmenu/NavMenu";
import Link from "next/link";
import logo from "../../public/V.svg" 
import Image from "next/image";

type Props = {};

export default function Header({}: Props) {
  

  return (
    <header
      className="fixed w-full top-0 p-5 flex flex-col z-40 shadow-md
       backdrop-blur-lg lg:pr-52 lg:pl-52"
    >
      <motion.div className="flex flex-row items-center justify-between relative">
        <Link href="#main">
          <motion.div
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
            className=""
          >
            <Image 
            src={logo}
            alt="logo"
            width={50}
            height={50}
            className="absolute -top-8 lg:-top-5" />
          </motion.div>
        </Link>

        <NavMenu />
      </motion.div>
    </header>
  );
}
