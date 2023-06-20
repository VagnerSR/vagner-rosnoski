import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function Projects({}: Props) {
  return (
    <motion.div
    initial={{
      width: 0
    }}
    animate={{
      width: "100%"
    }}
    exit={{
      x: "100%",
      transition: {
        duration: 0.2
      }
    }}>Projects</motion.div>
  )
}
