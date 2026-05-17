import { motion } from 'framer-motion'
import { CheckCircle, Zap } from 'lucide-react'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const highlights = [
    'Problem-solving mindset with a passion for clean code',
    'Expert in responsive design and modern UI patterns',
    'Full-stack capabilities: Frontend, Backend, and Java',
    'Interest in scalable digital solutions and DevOps',
    'Experienced in API integration and deployment workflows',
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-transparent via-dark-bg to-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">Who I Am</h2>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left - Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm a passionate <span className="text-accent font-semibold">Full Stack Web Developer</span> and <span className="text-accent-secondary font-semibold">Java Developer</span> with hands-on experience building responsive, user-friendly applications using cutting-edge technologies.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              My journey in web development started with a love for creating beautiful interfaces. Over time, I've expanded my expertise to include robust backend solutions, scalable architectures, and modern deployment practices.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              I specialize in turning complex problems into simple, elegant solutions. Whether it's building a dynamic React application, designing efficient Node.js APIs, or working with Java backend systems, I bring a problem-solving mindset and attention to detail to every project.
            </p>

            {/* Highlights */}
            <motion.div variants={containerVariants} className="space-y-3 pt-6">
              {highlights.map((highlight, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <CheckCircle className="text-accent mt-1 flex-shrink-0" size={20} />
                  <span>{highlight}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Stats & Info Cards */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-56 md:w-96 h-auto rounded-xl overflow-hidden shadow-2xl border border-gray-700 max-w-full">
                <img src="/Copilot_20260514_211425.png" alt="Vishal portrait" className="w-full h-auto object-cover block" />
              </div>
            </div>
            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -5, boxShadow: '0 0 30px rgba(0, 212, 255, 0.2)' }}
              className="glass-effect p-6 rounded-lg border border-gray-700 hover:border-accent transition-all"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Zap className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold">Full Stack Developer</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Proficient in React, Node.js, Express, and MongoDB for complete web application development.
              </p>
            </motion.div>


          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
