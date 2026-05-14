import { motion } from 'framer-motion'
import { GraduationCap, Award, BookOpen } from 'lucide-react'

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor's in Computer Science",
      institution: 'Malwa Institute of Science And Technology',
      duration: '2021 - 2024',
      cgpa: '8.0 CGPA',
      achievements: [
        'Focused on web development and modern application architecture',
        'Strong foundation in Java programming and OOP concepts',
        'Experience with multimedia systems and rich media applications',
        'Expertise in backend debugging, deployment workflows, and scalable systems',
      ],
      courses: [
        'Web Development',
        'Java Programming',
        'Database Management',
        'Software Engineering',
        'Data Structures',
        'Algorithms',
      ],
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="education" className="section-padding bg-gradient-to-b from-dark-bg to-dark-card/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold">Learning & Growth</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">Education</h2>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="space-y-8"
        >
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-effect p-8 rounded-lg border border-gray-700 hover:border-accent transition-all"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="p-3 rounded-lg bg-accent/20"
                >
                  <GraduationCap className="text-accent" size={32} />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-accent text-lg font-semibold">{edu.institution}</p>
                  <div className="flex flex-col sm:flex-row gap-4 text-gray-400 text-sm mt-2">
                    <span>{edu.duration}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="text-neon-green font-semibold">{edu.cgpa}</span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-8 space-y-3">
                <h4 className="text-lg font-semibold flex items-center gap-2">
                  <Award className="text-accent-secondary" size={20} /> Key Achievements
                </h4>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Relevant Courses */}
              <div>
                <h4 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <BookOpen className="text-neon-green" size={20} /> Relevant Coursework
                </h4>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {edu.courses.map((course, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(124, 58, 237, 0.1)' }}
                      className="px-4 py-2 rounded-lg border border-gray-700 text-gray-300 transition-all cursor-default"
                    >
                      {course}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
