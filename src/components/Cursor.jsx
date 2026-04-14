import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const mx = useMotionValue(-100)
  const my = useMotionValue(-100)

  // dot follows instantly
  const dotX = useSpring(mx, { damping: 50, stiffness: 800 })
  const dotY = useSpring(my, { damping: 50, stiffness: 800 })

  // ring lags behind for the "trailing" feel
  const ringX = useSpring(mx, { damping: 28, stiffness: 180 })
  const ringY = useSpring(my, { damping: 28, stiffness: 180 })

  useEffect(() => {
    const move = (e) => {
      mx.set(e.clientX)
      my.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mx, my])

  // hide on mobile / touch
  if (window.matchMedia('(hover: none)').matches) return null

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{ x: dotX, y: dotY }}
      />
      <motion.div
        className="cursor-ring"
        style={{ x: ringX, y: ringY }}
      />
    </>
  )
}
