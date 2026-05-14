import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react'

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const roles = ['Full Stack Developer', 'Web Developer', 'Java Developer', 'Frontend Developer']

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-secondary rounded-full mix-blend-screen filter blur-3xl" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-3">
          {/* Greeting */}
          <motion.div variants={itemVariants}>
            <span className="text-accent font-semibold">Welcome to my portfolio</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text">Vishal Pratap Singh</span>
            </h1>
          </motion.div>

          {/* Rotating Role */}
          <motion.div variants={itemVariants} className="h-12 flex items-start">
            <div className="relative">
              <span className="text-2xl md:text-3xl text-gray-400">I'm a </span>
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-bold text-accent-secondary inline-block"
              >
                {roles[roleIndex]}
              </motion.span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Building responsive, user-friendly applications with modern technologies. Passionate about creating beautiful interfaces and scalable backend solutions. Let's create something amazing together!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 214, 10, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-accent to-accent-secondary text-dark-bg font-semibold flex items-center justify-center gap-2 hover:shadow-glow transition-all cursor-pointer"
              component="div"
            >
              <Mail size={20} /> Contact Me
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download="Vishal Singh Resume"
              whileHover={{ scale: 1.05, borderColor: '#ffd60a' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg border border-gray-600 text-white font-semibold flex items-center justify-center gap-2 hover:border-accent transition-all"
            >
              <Download size={20} /> Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex gap-4 pt-4">
            {[
              { icon: Github, href: 'https://github.com/VIRAT178/', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/vishal-singh-7546a9260/', label: 'LinkedIn' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#00d4ff' }}
                className="p-3 rounded-full border border-gray-600 text-gray-400 hover:text-accent hover:border-accent transition-all"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right - Animated Code Editor Visual */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:block"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative"
          >
            {/* Code Editor Window */}
            <div className="glass-effect-strong rounded-lg overflow-hidden border border-gray-700 shadow-2xl">
              {/* Header */}
              <div className="bg-dark-card border-b border-gray-700 px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-sm text-gray-500 ml-4">portfolio.jsx</span>
              </div>

              {/* Content */}
              <div className="p-6 text-xs font-mono text-gray-400 bg-dark-bg/50 overflow-y-auto h-80">
                <div className="space-y-1">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-accent">const</span>{' '}
                    <span className="text-neon-green">profile</span> = {'{'}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="pl-4"
                  >
                    <span className="text-gray-400">name: </span>
                    <span className="text-orange-400">"Vishal Pratap Singh"</span>,
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="pl-4"
                  >
                    <span className="text-gray-400">title: </span>
                    <span className="text-orange-400">"Full-Stack Developer | Code Enthusiast"</span>,
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="pl-4"
                  >
                    <span className="text-gray-400">skills: </span>
                    <span className="text-accent-secondary">['React', 'NodeJS', 'Redux', 'Express',</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="pl-8"
                  >
                    <span className="text-orange-400">'MySQL', 'MongoDB', 'CSS', 'AWS', 'JavaScript',</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="pl-8"
                  >
                    <span className="text-orange-400">'Github', 'Git', 'Linux', 'Discord Dev'],</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="pl-4"
                  >
                    <span className="text-gray-400">hardWorker: </span>
                    <span className="text-accent">true</span>,
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                    className="pl-4"
                  >
                    <span className="text-gray-400">quickLearner: </span>
                    <span className="text-accent">true</span>,
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="pl-4"
                  >
                    <span className="text-gray-400">problemSolver: </span>
                    <span className="text-accent">true</span>,
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.1 }}
                    className="pl-4"
                  >
                    <span className="text-gray-400">yearsOfExperience: </span>
                    <span className="text-accent">1</span>,
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                    className="pl-4"
                  >
                    <span className="text-gray-400">hireable: </span>
                    <span className="text-accent">function</span>() {'{'}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.3 }}
                    className="pl-8"
                  >
                    <span className="text-accent">return</span> {'{'}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 }}
                    className="pl-12"
                  >
                    <span className="text-accent">this</span>.<span className="text-gray-400">hardWorker</span> &&
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 }}
                    className="pl-12"
                  >
                    <span className="text-accent">this</span>.<span className="text-gray-400">problemSolver</span> &&
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6 }}
                    className="pl-12"
                  >
                    <span className="text-accent">this</span>.<span className="text-gray-400">skills</span>.<span className="text-accent">length</span> {'>='}= 5 &&
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.7 }}
                    className="pl-12"
                  >
                    <span className="text-accent">this</span>.<span className="text-gray-400">yearsOfExperience</span> {'>='}= 3
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8 }}
                    className="pl-8"
                  >
                    {'}'};
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.9 }}
                    className="pl-4"
                  >
                    {'}'}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2 }}
                  >
                    {'}'};
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent to-accent-secondary opacity-0 group-hover:opacity-20 blur-xl -z-10" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="text-accent" size={32} />
      </motion.div>
    </section>
  )
}
