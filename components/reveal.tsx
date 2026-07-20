"use client"

import { motion, type Variants } from "framer-motion"

import { fadeUp } from "@/lib/motion"

export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  variants?: Variants
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -30px 0px" }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
