import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  href: string;
  title: string;
  calssName: string;
  duration: number
};

export default function CustomLink({ href, title, calssName, duration }: Props) {
  const router = useRouter();
  const path = router.asPath;

  return (
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
      duration: duration,
    }}
     className="flex items-center justify-center">
    <Link
      href={href}
      className={`${calssName} relative group text-lg`}
    >
      {title}
      <span
        className={`h-[1px] bg-violet-600 absolute left-0 -bottom-0.5
          transition-[width] ease-out group-hover:w-full
            duration-300 ${path.includes(href) ? "w-full" : "w-0"}
            `}
      >
        &nbsp;
      </span>
    </Link>
    </motion.div>
  );
}
