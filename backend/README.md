# Backend API for Vishal Pratap Singh's Portfolio

## Environment Variables

Create a `.env` file in the backend directory with the following variables:

```
PORT=5000
NODE_ENV=development

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=vishalsinghvicky95@gmail.com

# CORS
FRONTEND_URL=http://localhost:3000
```

### Setting up Gmail SMTP

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the generated password as `SMTP_PASS`

## Installation

```bash
npm install
```

## Running the Server

**Development:**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

## API Endpoints

### POST /contact

Send a contact form message.

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "projectType": "web-development",
  "budget": "5000-10000",
  "message": "I'd like to discuss a project..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

**Status Codes:**
- 200: Email sent successfully
- 400: Validation error
- 429: Too many requests (rate limited)
- 500: Server error
