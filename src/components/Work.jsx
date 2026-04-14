import { motion } from 'framer-motion'
import ProjectItem from './ProjectItem'
import { projects } from '../data/projects'

export default function Work({ tr, lang }) {
  return (
    <section className="work">
      <motion.div
        className="work-label"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="work-label-title">{tr.work}</span>
        <span className="work-label-count">{tr.workCount(projects.length)}</span>
      </motion.div>

      <div className="panels">
        {projects.map((project, i) => (
          <ProjectItem
            key={project.id}
            project={project}
            tr={tr}
            lang={lang}
            isEven={i % 2 !== 0}
          />
        ))}
      </div>
    </section>
  )
}
