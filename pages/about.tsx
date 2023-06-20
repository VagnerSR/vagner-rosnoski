import About from '@/components/About/About'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function about({}: Props) {
  return (
    <motion.section
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
    }}>
      <About />
    </motion.section>
  )
}
