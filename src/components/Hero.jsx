import { motion, useScroll, useTransform } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

export default function Hero({ tr }) {
  const { scrollY } = useScroll()

  // name drifts up slower than scroll — parallax
  const nameY = useTransform(scrollY, [0, 600], [0, -80])
  // accent dot drifts faster + fades
  const accentY = useTransform(scrollY, [0, 600], [0, -140])
  const accentOpacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section className="hero">
      <motion.div
        className="hero-accent"
        aria-hidden="true"
        style={{ y: accentY, opacity: accentOpacity }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
      >
        ·
      </motion.div>

      <motion.div
        className="hero-rule"
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 0.2, ease: EASE }}
      />

      <motion.h1
        className="hero-name"
        style={{ y: nameY }}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: EASE }}
      >
        rom433
      </motion.h1>

      <motion.p
        className="hero-role"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        {tr.role}
      </motion.p>

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
