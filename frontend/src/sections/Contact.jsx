import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, MessageCircle, Mail, Phone, MapPin, Sparkles } from 'lucide-react'
import toast from 'react-hot-toast'
import axios from 'axios'

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectType: 'web-development',
    budget: 'not-sure',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all fields')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Please enter a valid email')
      return
    }

    setIsLoading(true)

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/contact`,
        formData
      )

      if (response.status === 200) {
        toast.success('Message sent successfully! I\'ll get back to you soon.')
        setFormData({
          fullName: '',
          email: '',
          projectType: 'web-development',
          budget: 'not-sure',
          message: '',
        })
      }
    } catch (error) {
      console.error('Error sending message:', error)
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

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
      transition: { duration: 0.6 },
    },
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'vishalsinghvicky95@gmail.com',
      href: 'mailto:vishalsinghvicky95@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: 'Chat on WhatsApp',
      href: 'https://wa.me/919999999999',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'India',
      href: '#',
      color: 'from-red-500 to-pink-500',
    },
  ]

  return (
    <section id="contact" className="section-padding bg-dark-bg relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-secondary rounded-full mix-blend-screen filter blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold flex items-center justify-center gap-2">
            <Sparkles size={18} /> Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">Let's Work Together</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new projects, innovative ideas, and opportunities to be part of your vision.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {contactMethods.map((method, idx) => (
            <motion.a
              key={idx}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 0 30px rgba(0, 212, 255, 0.2)' }}
              className="glass-effect p-6 rounded-lg border border-gray-700 hover:border-accent transition-all text-center group"
            >
              <motion.div
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: idx * 0.3 }}
                className={`w-14 h-14 rounded-lg bg-gradient-to-r ${method.color} p-0.5 mx-auto mb-4`}
              >
                <div className="w-full h-full rounded-lg bg-dark-bg flex items-center justify-center">
                  <method.icon className="text-white" size={24} />
                </div>
              </motion.div>
              <h3 className="text-lg font-bold mb-2">{method.title}</h3>
              <p className="text-gray-400 text-sm">{method.value}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          className="max-w-2xl mx-auto glass-effect p-8 rounded-lg border border-gray-700"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <MessageCircle className="text-accent" /> Send me a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email Row */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-all"
                  placeholder="Your name"
                  required
                />
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-sm font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-all"
                  placeholder="your@email.com"
                  required
                />
              </motion.div>
            </div>

            {/* Project Type & Budget Row */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Project Type */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-semibold mb-2">Project Type</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-gray-700 text-white focus:outline-none focus:border-accent transition-all"
                >
                  <option value="web-development">Web Development</option>
                  <option value="app-development">App Development</option>
                  <option value="freelance">Freelance Project</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>

              {/* Budget */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-semibold mb-2">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-gray-700 text-white focus:outline-none focus:border-accent transition-all"
                >
                  <option value="not-sure">Not Sure</option>
                  <option value="less-than-1000">Less than $1,000</option>
                  <option value="1000-5000">$1,000 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="more-than-10000">More than $10,000</option>
                </select>
              </motion.div>
            </div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-dark-bg border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-all resize-none h-28"
                placeholder="Tell me about your project..."
                required
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-accent to-accent-secondary text-dark-bg font-bold flex items-center justify-center gap-2 hover:shadow-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-5 h-5 border-2 border-dark-bg border-t-dark-card rounded-full"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} /> Send Message
                </>
              )}
            </motion.button>
          </form>

          {/* CTA Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 p-4 rounded-lg bg-accent/10 border border-accent/30 text-center"
          >
            <p className="text-sm text-gray-300">
              ⭐ Available for freelance projects, internships, and collaborations
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
