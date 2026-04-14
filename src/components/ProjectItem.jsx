import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-8%' },
  transition: { duration: 1.1, delay, ease: EASE },
})

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-8%' },
  transition: { duration: 0.8, delay, ease: EASE },
})

export default function ProjectItem({ project, tr, lang, isEven }) {
  const category = tr.categories[project.category] || project.category
  const fileUrl = `/images/${encodeURIComponent(project.file)}`
  const evenClass = isEven ? ' project--even' : ''

  if (project.type === 'photo' || project.type === 'image') {
    return (
      <article className={`project${evenClass}`}>
        <span className="project-ghost" aria-hidden="true">{project.id}</span>

        <motion.div className="project-img-wrap" {...fadeUp(0)}>
          <img
            src={fileUrl}
            alt={project.title[lang]}
            loading="lazy"
          />
        </motion.div>

        <motion.div className="project-bottom-meta" {...fadeIn(0.18)}>
          <h2 className="project-title">{project.title[lang]}</h2>
          <span className="project-category">{category}</span>
          <span className="project-year">{project.year}</span>
        </motion.div>
      </article>
    )
  }

  // PDF / document project
  return (
    <article className={`project project--pdf${evenClass}`}>
      <span className="project-ghost" aria-hidden="true">{project.id}</span>

      <motion.div className="project-pdf-wrap" {...fadeUp(0)}>
        <object
          className="project-pdf-embed"
          data={fileUrl}
          type="application/pdf"
          aria-label={project.title[lang]}
        >
          {/* fallback kui browser ei toeta inline PDF-i */}
          <div className="project-pdf-fallback">
            <span>{project.title[lang]}</span>
          </div>
        </object>
      </motion.div>

      <motion.div className="project-bottom-meta" {...fadeIn(0.18)}>
        <h2 className="project-title">{project.title[lang]}</h2>
        <span className="project-category">{category}</span>
        <span className="project-year">{project.year}</span>
        <a
          className="project-open"
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {tr.open} ↗
        </a>
      </motion.div>
    </article>
  )
}
