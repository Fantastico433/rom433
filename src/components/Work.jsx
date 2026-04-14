import { motion } from 'framer-motion'
import ProjectItem from './ProjectItem'
import { groups } from '../data/projects'

const VP = { once: true, margin: '-5%' }
const EASE = [0.16, 1, 0.3, 1]

export default function Work({ tr, lang }) {
  const totalProjects = groups.reduce((sum, g) => sum + g.projects.length, 0)

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
        <span className="work-label-count">{tr.workCount(totalProjects)}</span>
      </motion.div>

      <div className="panels">
        {groups.map((group, gi) => (
          <div key={group.id} className="group">
            {/* group header */}
            <motion.div
              className="group-header"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <span className="group-index">
                {String(gi + 1).padStart(2, '0')}
              </span>
              <h3 className="group-label">{group.label[lang]}</h3>
              <span className="group-year">{group.year}</span>
            </motion.div>

            {/* projects within group */}
            {group.projects.map((project, pi) => (
              <ProjectItem
                key={project.id}
                project={project}
                tr={tr}
                lang={lang}
                isEven={pi % 2 !== 0}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
