import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/VIRAT178/', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vishal-singh-7546a9260/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:vishalsinghvicky95@gmail.com', label: 'Email' },
  ]

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative border-t border-dark-border bg-dark-bg/50 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand / About */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold gradient-text">Vishal Pratap Singh</h3>
            <p className="text-gray-400 text-sm max-w-sm">Full Stack Developer & Java Engineer — building polished, production-ready web apps and SaaS products.</p>
            <div className="mt-3 text-sm text-gray-400">
              <div>📍 Lucknow, India</div>
              <div>
                ✉️ <a href="mailto:vishalsinghvicky95@gmail.com" className="hover:text-accent transition-colors">vishalsinghvicky95@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Explore</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {['Projects', 'About', 'Experience', 'Skills'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="hover:text-accent transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Resume</a>
                </li>
                <li>
                  <a href="https://github.com/VIRAT178" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
                </li>
                <li>
                  <a href="https://www.kirtibuildwell.com/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Featured Project</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social + CTA */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="font-semibold mb-3">Connect</h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-dark-card hover:bg-accent/10 text-gray-300 transition-colors"
                    title={social.label}
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent to-accent-secondary text-dark-bg rounded-md font-semibold shadow-sm hover:scale-[1.01] transition-transform"
              >
                <Mail size={16} /> Get in touch
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-border pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-4">
          <p>© {currentYear} Vishal Pratap Singh. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
            <span className="text-gray-400">Built with React & Tailwind</span>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
