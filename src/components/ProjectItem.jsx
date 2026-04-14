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

      <motion.div className="project-doc-wrap" {...fadeUp(0)}>
        <div className="project-doc-card">
          <div className="project-meta-top">
            <span className="project-category">{category}</span>
            <span className="project-year">{project.year}</span>
          </div>

          <h2 className="project-title">{project.title[lang]}</h2>

          <a
            className="project-open"
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {tr.open} ↗
          </a>
        </div>
      </motion.div>
    </article>
  )
}
