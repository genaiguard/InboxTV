"use client"

import { useRef } from "react"
import { motion, useInView, Variant } from "framer-motion"

type Direction = "left" | "right" | "up" | "down"
type ScrollAnimationProps = {
  children: React.ReactNode
  direction?: Direction
  delay?: number
  className?: string
  once?: boolean
  amount?: number
}

// Animation variants for different directions
const variants = {
  hidden: {
    left: { x: -100, opacity: 0 },
    right: { x: 100, opacity: 0 },
    up: { y: 100, opacity: 0 },
    down: { y: -100, opacity: 0 },
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // Custom easing for smooth entrance
    },
  },
}

export function ScrollAnimation({
  children,
  direction = "left",
  delay = 0,
  className = "",
  once = true,
  amount = 0.3,
}: ScrollAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount })

  // Get the correct hidden variant based on direction
  const hidden = variants.hidden[direction] as Variant

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden,
        visible: {
          ...variants.visible,
          transition: {
            ...variants.visible.transition,
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
} 