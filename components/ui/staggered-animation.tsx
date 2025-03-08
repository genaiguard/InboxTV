"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"

type StaggeredAnimationProps = {
  children: React.ReactNode
  staggerDelay?: number
  className?: string
  once?: boolean
  amount?: number
}

export function StaggeredAnimation({
  children,
  staggerDelay = 0.1,
  className = "",
  once = true,
  amount = 0.3,
}: StaggeredAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount })

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={container}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={item}>{child}</motion.div>
      ))}
    </motion.div>
  )
} 