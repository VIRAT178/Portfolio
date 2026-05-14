import { motion } from 'framer-motion'
import { 
  SiReact, SiJavascript, SiTypescript, SiTailwindcss, SiNodedotjs, 
  SiExpress, SiMongodb, SiMysql, SiGit, SiGithub 
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', icon: SiReact, level: 90 },
        { name: 'JavaScript', icon: SiJavascript, level: 85 },
        { name: 'TypeScript', icon: SiTypescript, level: 80 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 88 },
      ],
    },
    {
      title: 'Backend',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, level: 85 },
        { name: 'Express.js', icon: SiExpress, level: 83 },
        { name: 'MongoDB', icon: SiMongodb, level: 82 },
        { name: 'MySQL', icon: SiMysql, level: 80 },
        { name: 'Java', icon: FaJava, level: 82 },
      ],
    },
    {
      title: 'Tools & DevOps',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git', icon: SiGit, level: 88 },
        { name: 'GitHub', icon: SiGithub, level: 87 },
        { name: 'API Integration', icon: SiNodedotjs, level: 84 },
        { name: 'Debugging', icon: SiNodedotjs, level: 86 },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="section-padding bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold">Technical Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">Skills & Technologies</h2>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              variants={itemVariants}
              className="space-y-6"
            >
              {/* Category Header */}
              <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${category.color}`} />
              <h3 className="text-2xl font-bold">{category.title}</h3>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 10 }}
                    className="space-y-2"
                  >
                    {/* Skill Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg glass-effect">
                          <skill.icon className="text-accent" size={20} />
                        </div>
                        <span className="font-semibold">{skill.name}</span>
                      </div>
                      <span className="text-accent text-sm">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 rounded-full bg-dark-border overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mt-16 pt-16 border-t border-dark-border"
        >
          {[
            { number: '10+', label: 'Projects Completed' },
            { number: '8', label: 'Months Experience' },
            { number: '15+', label: 'Technologies Mastered' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="text-center p-6 glass-effect rounded-lg"
            >
              <h3 className="text-3xl font-bold text-accent mb-2">{stat.number}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
