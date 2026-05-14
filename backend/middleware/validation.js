// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const VALID_PROJECT_TYPES = ['web-development', 'app-development', 'freelance', 'consultation', 'other']
const VALID_BUDGET_RANGES = ['not-sure', 'less-than-1000', '1000-5000', '5000-10000', 'more-than-10000']

// Validate contact form data
export const validateContact = (req, res, next) => {
  const { fullName, email, projectType, budget, message } = req.body
  const errors = []

  // Validate full name
  if (!fullName || !fullName.trim()) {
    errors.push({ field: 'fullName', message: 'Full name is required' })
  } else if (fullName.trim().length < 2 || fullName.length > 100) {
    errors.push({ field: 'fullName', message: 'Full name must be between 2 and 100 characters' })
  }

  // Validate email
  if (!email || !email.trim()) {
    errors.push({ field: 'email', message: 'Email address is required' })
  } else if (!EMAIL_REGEX.test(email.trim())) {
    errors.push({ field: 'email', message: 'Please provide a valid email address' })
  }

  // Validate project type
  if (!projectType) {
    errors.push({ field: 'projectType', message: 'Project type is required' })
  } else if (!VALID_PROJECT_TYPES.includes(projectType)) {
    errors.push({ field: 'projectType', message: 'Invalid project type' })
  }

  // Validate budget
  if (!budget) {
    errors.push({ field: 'budget', message: 'Budget range is required' })
  } else if (!VALID_BUDGET_RANGES.includes(budget)) {
    errors.push({ field: 'budget', message: 'Invalid budget range' })
  }

  // Validate message
  if (!message || !message.trim()) {
    errors.push({ field: 'message', message: 'Message is required' })
  } else if (message.trim().length < 10 || message.length > 5000) {
    errors.push({ field: 'message', message: 'Message must be between 10 and 5000 characters' })
  }

  // If errors exist, return them
  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      errors,
    })
  }

  // All validations passed
  next()
}

// Handle validation errors middleware
export const handleValidationErrors = (req, res, next) => {
  next()
}

// Sanitization middleware
export const sanitizeInput = (req, res, next) => {
  if (req.body.message) {
    req.body.message = req.body.message
      .replace(/[<>\"\']/g, '') // Remove potentially dangerous characters
      .trim()
  }
  next()
}
