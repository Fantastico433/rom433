import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

export default function Footer({ tr }) {
  return (
    <footer className="footer">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-5%' }}
        transition={{ duration: 1, ease: EASE }}
      >
        <p className="footer-contact-label">{tr.contact}</p>
        <p className="footer-contact-line">{tr.contactLine}</p>
        <a className="footer-email" href={`mailto:${tr.email}`}>
          {tr.email}
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: EASE }}
      >
        <div className="footer-name-ghost" aria-hidden="true">rom433</div>
      </motion.div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Roman
      </p>
    </footer>
  )
}
