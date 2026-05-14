import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

/**
 * Send email to admin and confirmation email to user
 */
export const sendContactEmail = async (contactData) => {
  const { fullName, email, projectType, budget, message } = contactData

  try {
    // Email to admin
    const adminMailOptions = {
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `New Portfolio Contact - ${fullName}`,
      html: generateAdminEmailTemplate(contactData),
    }

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for reaching out! - Vishal Pratap Singh',
      html: generateUserEmailTemplate(fullName),
    }

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ])

    return { success: true, message: 'Emails sent successfully' }
  } catch (error) {
    console.error('Email sending error:', error)
    throw new Error('Failed to send email')
  }
}

/**
 * Generate admin email template
 */
function generateAdminEmailTemplate(data) {
  const { fullName, email, projectType, budget, message } = data
  const timestamp = new Date().toLocaleString()

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #0a0e27; color: #ffffff; }
          .container { max-width: 600px; margin: 0 auto; background: #1a1f3a; padding: 40px; border-radius: 12px; border: 1px solid #2d3561; }
          .header { text-align: center; margin-bottom: 30px; }
          .header h1 { color: #00d4ff; margin: 0; font-size: 24px; }
          .content { background: #0a0e27; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .field { margin: 15px 0; }
          .label { color: #00d4ff; font-weight: bold; font-size: 12px; text-transform: uppercase; }
          .value { color: #ffffff; margin-top: 5px; font-size: 14px; line-height: 1.6; }
          .footer { color: #999; font-size: 12px; margin-top: 30px; text-align: center; border-top: 1px solid #2d3561; padding-top: 20px; }
          .badge { display: inline-block; background: linear-gradient(135deg, #00d4ff, #7c3aed); color: #0a0e27; padding: 8px 16px; border-radius: 20px; font-size: 12px; font-weight: bold; margin: 5px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 New Portfolio Contact</h1>
          </div>

          <div class="content">
            <div class="field">
              <div class="label">Client Name</div>
              <div class="value">${fullName}</div>
            </div>

            <div class="field">
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:${email}" style="color: #00d4ff; text-decoration: none;">${email}</a></div>
            </div>

            <div class="field">
              <div class="label">Project Type</div>
              <div class="value"><span class="badge">${projectType}</span></div>
            </div>

            <div class="field">
              <div class="label">Budget Range</div>
              <div class="value"><span class="badge">${budget}</span></div>
            </div>

            <div class="field">
              <div class="label">Message</div>
              <div class="value">${message}</div>
            </div>

            <div class="field">
              <div class="label">Received At</div>
              <div class="value">${timestamp}</div>
            </div>
          </div>

          <div class="footer">
            <p>This is an automated message from your portfolio contact form.</p>
          </div>
        </div>
      </body>
    </html>
  `
}

/**
 * Generate user confirmation email template
 */
function generateUserEmailTemplate(fullName) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #0a0e27; color: #ffffff; }
          .container { max-width: 600px; margin: 0 auto; background: #1a1f3a; padding: 40px; border-radius: 12px; border: 1px solid #2d3561; }
          .header { text-align: center; margin-bottom: 30px; }
          .header h1 { color: #00d4ff; margin: 0; font-size: 24px; }
          .content { background: #0a0e27; padding: 20px; border-radius: 8px; margin: 20px 0; line-height: 1.8; }
          .cta { text-align: center; margin: 30px 0; }
          .cta-button { background: linear-gradient(135deg, #00d4ff, #7c3aed); color: #0a0e27; padding: 12px 30px; border-radius: 6px; text-decoration: none; font-weight: bold; display: inline-block; }
          .footer { color: #999; font-size: 12px; margin-top: 30px; text-align: center; border-top: 1px solid #2d3561; padding-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You, ${fullName}! 🚀</h1>
          </div>

          <div class="content">
            <p>Thanks for reaching out! I've received your message and will get back to you as soon as possible.</p>
            <p>I'm excited to hear about your project and explore how we can work together to bring your ideas to life.</p>
            <p>In the meantime, feel free to check out my work on my portfolio website.</p>
          </div>

          <div class="cta">
            <a href="https://vishalportfolio.dev" class="cta-button">Visit My Portfolio</a>
          </div>

          <div class="footer">
            <p>Best regards,<br><strong>Vishal Pratap Singh</strong><br>Full Stack Web Developer & Java Developer</p>
            <p>© 2024 All rights reserved. Made with ❤️</p>
          </div>
        </div>
      </body>
    </html>
  `
}

/**
 * Verify SMTP connection
 */
export const verifyConnection = async () => {
  try {
    await transporter.verify()
    console.log('✅ SMTP connection verified')
    return true
  } catch (error) {
    console.error('❌ SMTP connection failed:', error.message)
    return false
  }
}
