import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  href: string;
  title: string;
  onClick: () => void;
  calssName: string;
  duration: number;
  delay: number
};

export default function CustomLink({
  href,
  title,
  onClick,
  calssName,
  duration,
  delay,
}: Props) {
  const router = useRouter();
  const path = router.asPath;

  return (
    <motion.div
      initial={{
        x: 20,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: duration,
        ease: "easeIn",
        delay: delay,
      }}
    >
      <Link
        href={href}
        className={`${calssName} relative group text-xl`}
        onClick={onClick}
      >
        {title}
        <span
          className={`h-[1px] bg-vivid dark:bg-vividDark absolute left-0 -bottom-0.5
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
