import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import PdfThumbnail from './PdfThumbnail'

const EASE = [0.16, 1, 0.3, 1]
const VP = { once: true, margin: '-4%' }

const fold = {
  initial: { rotateX: -14, y: 80, opacity: 0, clipPath: 'inset(0 0 60% 0)' },
  whileInView: { rotateX: 0, y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)' },
  viewport: VP,
  transition: { duration: 1.2, ease: EASE },
}

const slideIn = (delay = 0, dir = 1) => ({
  initial: { opacity: 0, x: dir * 24 },
  whileInView: { opacity: 1, x: 0 },
  viewport: VP,
  transition: { duration: 0.7, delay, ease: EASE },
})

export default function ProjectItem({ project, tr, lang, isEven }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['4%', '-4%'])

  const category = tr.categories[project.category] || project.category
  const fileUrl = `/images/${encodeURIComponent(project.file)}`
  const dir = isEven ? -1 : 1

  return (
    <article ref={ref} className={`panel${isEven ? ' panel--even' : ''}`}>
      {/* ghost number */}
      <motion.span
        className="panel-ghost"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.045 }}
        viewport={VP}
        transition={{ duration: 1.6, ease: EASE }}
      >
        {project.id}
      </motion.span>

      {/* visual block */}
      <div className="panel-perspective">
        <motion.div className="panel-visual" {...fold}>
          {project.type === 'photo' || project.type === 'image' ? (
            <div className="panel-img-clip">
              <motion.img
                src={fileUrl}
                alt={project.title[lang]}
                loading="lazy"
                style={{ y: imgY }}
                className="panel-img"
              />
            </div>
          ) : (
            <a
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pdf-thumb-link"
              aria-label={project.title[lang]}
            >
              <PdfThumbnail url={fileUrl} alt={project.title[lang]} />
            </a>
          )}
        </motion.div>
      </div>

      {/* meta */}
      <div className="panel-meta">
        <motion.div className="panel-meta-top" {...slideIn(0.1, dir)}>
          <span className="panel-category">{category}</span>
          <span className="panel-year">{project.year}</span>
        </motion.div>

        <motion.h2 className="panel-title" {...slideIn(0.22, dir)}>
          {project.title[lang]}
        </motion.h2>

        <motion.p className="panel-desc" {...slideIn(0.34, dir)}>
          {project.desc[lang]}
        </motion.p>

        {project.type === 'pdf' && (
          <motion.a
            className="panel-open"
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            {...slideIn(0.44, dir)}
          >
            {tr.open} ↗
          </motion.a>
        )}
      </div>
    </article>
  )
}
