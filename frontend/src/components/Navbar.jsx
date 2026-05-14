import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', id: 'home', href: '#home' },
    { name: 'About', id: 'about', href: '#about' },
    { name: 'Skills', id: 'skills', href: '#skills' },
    { name: 'Projects', id: 'projects', href: '#projects' },
    { name: 'Experience', id: 'experience', href: '#experience' },
    { name: 'Contact', id: 'contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect-strong py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold gradient-text"
        >
          VS
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={item.href}
              onClick={() => setActiveSection(item.id)}
              whileHover={{ scale: 1.05 }}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-accent bg-accent/10'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-6 py-2 rounded-lg bg-gradient-to-r from-accent to-accent-secondary text-white font-semibold hover:shadow-glow transition-all"
        >
          Let's Talk
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-effect border-t border-gray-700 mt-4"
        >
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={item.href}
                onClick={() => {
                  setActiveSection(item.id)
                  setIsOpen(false)
                }}
                className="block px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-accent/10 transition-all"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setIsOpen(false)}
              whileHover={{ scale: 1.05 }}
              className="block w-full px-6 py-2 rounded-lg bg-gradient-to-r from-accent to-accent-secondary text-white font-semibold text-center"
            >
              Let's Talk
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
