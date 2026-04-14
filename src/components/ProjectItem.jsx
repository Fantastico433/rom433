import { motion } from 'framer-motion'
import PdfThumbnail from './PdfThumbnail'

const EASE = [0.16, 1, 0.3, 1]
const VP = { once: true, margin: '-8%' }

// curtain wipe — image appears like a reveal from bottom
const curtain = {
  initial: { clipPath: 'inset(0 0 100% 0)' },
  whileInView: { clipPath: 'inset(0 0 0% 0)' },
  viewport: VP,
  transition: { duration: 1.1, ease: EASE },
}

// slight skew + slide for text
const slideText = (delay = 0, fromLeft = true) => ({
  initial: { opacity: 0, x: fromLeft ? -28 : 28, skewX: fromLeft ? -4 : 4 },
  whileInView: { opacity: 1, x: 0, skewX: 0 },
  viewport: VP,
  transition: { duration: 0.75, delay, ease: EASE },
})

// ghost number: scale in + fade
const ghostAnim = {
  initial: { opacity: 0, scale: 0.6 },
  whileInView: { opacity: 0.04, scale: 1 },
  viewport: VP,
  transition: { duration: 1.4, ease: EASE },
}

export default function ProjectItem({ project, tr, lang, isEven }) {
  const category = tr.categories[project.category] || project.category
  const fileUrl = `/images/${encodeURIComponent(project.file)}`
  const evenClass = isEven ? ' project--even' : ''
  const fromLeft = !isEven

  if (project.type === 'photo' || project.type === 'image') {
    return (
      <article className={`project${evenClass}`}>
        <motion.span className="project-ghost" aria-hidden="true" {...ghostAnim}>
          {project.id}
        </motion.span>

        <motion.div className="project-img-wrap" {...curtain}>
          <img
            src={fileUrl}
            alt={project.title[lang]}
            loading="lazy"
          />
        </motion.div>

        <div className="project-bottom-meta">
          <motion.h2 className="project-title" {...slideText(0.1, fromLeft)}>
            {project.title[lang]}
          </motion.h2>
          <motion.span className="project-category" {...slideText(0.22, fromLeft)}>
            {category}
          </motion.span>
          <motion.span className="project-year" {...slideText(0.3, fromLeft)}>
            {project.year}
          </motion.span>
        </div>
      </article>
    )
  }

  // PDF project
  return (
    <article className={`project project--pdf${evenClass}`}>
      <motion.span className="project-ghost" aria-hidden="true" {...ghostAnim}>
        {project.id}
      </motion.span>

      <motion.div className="project-pdf-wrap" {...curtain}>
        <a
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pdf-thumb-link"
          aria-label={project.title[lang]}
        >
          <PdfThumbnail url={fileUrl} alt={project.title[lang]} />
        </a>
      </motion.div>

      <div className="project-bottom-meta">
        <motion.h2 className="project-title" {...slideText(0.1, fromLeft)}>
          {project.title[lang]}
        </motion.h2>
        <motion.span className="project-category" {...slideText(0.22, fromLeft)}>
          {category}
        </motion.span>
        <motion.span className="project-year" {...slideText(0.3, fromLeft)}>
          {project.year}
        </motion.span>
        <motion.a
          className="project-open"
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          {...slideText(0.38, fromLeft)}
        >
          {tr.open} ↗
        </motion.a>
      </div>
    </article>
  )
}
