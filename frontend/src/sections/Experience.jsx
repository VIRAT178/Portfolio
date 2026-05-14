import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      role: 'Web Developer Intern',
      company: 'Brodev Code',
      duration: 'Feb 2024 – Dec 2024',
      location: 'Remote',
      description: 'Collaborated with a dynamic team to build and maintain responsive web applications. Gained hands-on experience with modern frontend frameworks and backend integration.',
      responsibilities: [
        'Built responsive and interactive user interfaces using React.js',
        'Collaborated with UI/UX designers to implement pixel-perfect designs',
        'Integrated third-party APIs and payment gateways',
        'Improved website performance and user experience metrics',
        'Maintained technical documentation and code quality standards',
        'Debugged and fixed frontend and backend issues',
      ],
      skills: ['React.js', 'JavaScript', 'Node.js', 'API Integration', 'Git'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="section-padding bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold">My Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">Experience</h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="space-y-8"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline line */}
              {idx !== experiences.length - 1 && (
                <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-gradient-to-b from-accent to-transparent" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-r from-accent to-accent-secondary flex items-center justify-center">
                <Briefcase size={20} className="text-dark-bg" />
              </div>

              {/* Content */}
              <motion.div
                whileHover={{ x: 10 }}
                className="ml-20 glass-effect p-8 rounded-lg border border-gray-700 hover:border-accent transition-all"
              >
                {/* Header */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <p className="text-accent text-lg font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-gray-400 space-y-1 md:text-right">
                    <div className="flex items-center gap-2 md:justify-end">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 md:justify-end">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6">{exp.description}</p>

                {/* Responsibilities */}
                <div className="space-y-3 mb-6">
                  {exp.responsibilities.map((resp, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <ArrowRight className="text-accent mt-1 flex-shrink-0" size={16} />
                      <span>{resp}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20 transition-all"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
