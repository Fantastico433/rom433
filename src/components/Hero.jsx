import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

export default function Hero({ tr }) {
  return (
    <section className="hero">
      {/* Bold element: large red accent dot, top-right */}
      <motion.div
        className="hero-accent"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
      >
        ·
      </motion.div>

      {/* Subtle horizontal rule — bold structural line */}
      <motion.div
        className="hero-rule"
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 0.2, ease: EASE }}
      />

      {/* Name — the core identity */}
      <motion.h1
        className="hero-name"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: EASE }}
      >
        rom433
      </motion.h1>

      {/* Role subtitle */}
      <motion.p
        className="hero-role"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        {tr.role}
      </motion.p>

      {/* Scroll hint */}
      <motion.div
        className="hero-scroll"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        {tr.scrollHint}
        <span className="hero-scroll-line" />
      </motion.div>
    </section>
  )
}
