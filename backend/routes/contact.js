import express from 'express'
import { sendContactEmail } from '../utils/emailService.js'
import { validateContact, sanitizeInput } from '../middleware/validation.js'

const router = express.Router()

/**
 * POST /contact
 * Send a contact form message
 */
router.post('/contact', sanitizeInput, validateContact, async (req, res) => {
  try {
    const { fullName, email, projectType, budget, message } = req.body

    // Send emails
    const result = await sendContactEmail({
      fullName,
      email,
      projectType,
      budget,
      message,
    })

    res.status(200).json({
      success: true,
      message: 'Thank you for your message! I will get back to you soon.',
      data: result,
    })
  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to send your message. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    })
  }
})

export default router
