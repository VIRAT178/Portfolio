import { motion } from 'framer-motion'
import { Github, ExternalLink, Code2 } from 'lucide-react'
import { SiReact, SiNodedotjs, SiPython, SiMongodb, SiExpress, SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'SoulSafe AI',
      description: 'Secure AI-powered digital memory capsule platform with emotion detection and intelligent content analysis.',
      longDescription:
        'A cutting-edge platform that allows users to create digital memory capsules with AI-powered emotion analysis. Features include secure digital vault, intelligent categorization, and dashboard visualization.',
      technologies: [
        { name: 'React.js', icon: SiReact },
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Java', icon: FaJava },
        { name: 'Python', icon: SiPython },
        { name: 'MongoDB', icon: SiMongodb },
      ],
      features: ['AI emotion analysis', 'Secure digital vault', 'Modern dashboard', 'Authentication system'],
      github: 'https://github.com/VIRAT178/SoulSafe-AI',
      demo: 'https://soul-safe-ai-web-react.vercel.app/',
      image: "url('/soulsafe.png') center/cover no-repeat",
    },
    {
      id: 2,
      title: 'KirtiBuildWell',
      description: 'Luxury real estate SaaS platform with cinematic project presentation and concierge-style lead handling.',
      longDescription:
        'A premium real estate experience for developers and boutique brokerages, featuring curated listings, immersive project pages, and a polished lead journey for inquiries and walkthroughs.',
      technologies: [
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Express', icon: SiExpress },
        { name: 'MongoDB', icon: SiMongodb },
      ],
      features: ['Luxury property showcases', 'Lead capture and contact flow', 'Admin login', 'Responsive project pages'],
      github: 'https://github.com/VIRAT178/KirtiBuildWell',
      demo: 'https://www.kirtibuildwell.com/',
      image: "url('/KIRTI.png') center/cover no-repeat",
    },
    {
      id: 3,
      title: 'CropPulse',
      description: 'AI-powered crop and field intelligence platform for monitoring, analysis, and smarter farm decisions.',
      longDescription:
        'A modern agriculture platform that helps users track crop health, surface actionable insights, and support data-driven farming workflows with a clean interface.',
      technologies: [
        { name: 'React.js', icon: SiReact },
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Python', icon: SiPython },
        { name: 'MongoDB', icon: SiMongodb },
      ],
      features: ['Crop monitoring', 'AI-driven insights', 'Data visualization', 'Responsive farm dashboard'],
      github: 'https://github.com/VIRAT178/CropPulse',
      demo: 'https://croppulse-ai.vercel.app/',
      image: "url('/croppulse.png') center/cover no-repeat",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-dark-bg to-dark-card/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">Featured Projects</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Showcasing some of my best work. Each project demonstrates my expertise in full-stack development, UI/UX design, and modern technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="space-y-12"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group"
            >
              <div className={`grid md:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                {/* Image/Visual */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative h-56 md:h-80 rounded-lg overflow-hidden glass-effect border border-gray-700"
                >
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ background: project.image }}
                  >
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Code2 size={80} className="text-white/30" />
                    </motion.div>
                  </div>

                  {/* Overlay Buttons */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4"
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-3 rounded-full bg-accent text-dark-bg"
                    >
                      <Github size={24} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-3 rounded-full bg-accent-secondary text-white"
                    >
                      <ExternalLink size={24} />
                    </motion.a>
                  </motion.div>
                </motion.div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold">{project.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{project.longDescription}</p>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-accent">Key Features:</h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-accent">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.1 }}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg glass-effect border border-gray-700"
                        >
                          <tech.icon className="text-accent" size={16} />
                          <span className="text-sm font-medium">{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-4 pt-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)' }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 rounded-lg border border-accent text-accent font-semibold flex items-center gap-2 hover:bg-accent/10 transition-all"
                    >
                      <Github size={18} /> GitHub
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(124, 58, 237, 0.5)' }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 rounded-lg bg-gradient-to-r from-accent to-accent-secondary text-dark-bg font-semibold flex items-center gap-2"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
