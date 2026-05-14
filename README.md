# Vishal Pratap Singh's Premium Portfolio Website

A modern, production-ready developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion. Featuring smooth animations, responsive design, and a fully functional contact system with SMTP email integration.

## 🌟 Features

- ✨ **Smooth Animations** - Scroll animations, page transitions, and interactive hover effects
- 🎨 **Modern Design** - Glassmorphism effects, gradients, and modern SaaS-inspired aesthetics
- 📱 **Fully Responsive** - Beautiful on all devices from mobile to desktop
- 🌙 **Dark Mode** - Premium dark theme as default with smooth transitions
- 📧 **Contact System** - Full SMTP email integration for inquiries
- ⚡ **Performance Optimized** - Fast loading, lazy loading, and clean component architecture
- 🎯 **SEO Friendly** - Proper meta tags and semantic HTML
- 🔒 **Secure** - Input validation and rate limiting on contact form
- 🚀 **Production Ready** - Deployment guides included

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **GSAP** - Advanced scroll animations
- **React Icons & Lucide** - Icon libraries
- **Axios** - HTTP client
- **React Hot Toast** - Notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Nodemailer** - Email service
- **CORS** - Cross-origin resource sharing
- **Express Rate Limit** - Rate limiting middleware

## 📋 Project Structure

```
Portfolio/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── sections/        # Page sections (Hero, About, Skills, etc.)
│   │   ├── styles/          # Global styles
│   │   ├── utils/           # Utility functions
│   │   ├── App.jsx          # Main app component
│   │   └── main.jsx         # Entry point
│   ├── public/              # Static assets
│   ├── index.html           # HTML template
│   ├── vite.config.js       # Vite configuration
│   ├── tailwind.config.js   # Tailwind configuration
│   ├── postcss.config.js    # PostCSS configuration
│   ├── package.json         # Dependencies
│   └── .env.example         # Environment variables example
│
├── backend/                  # Express backend API
│   ├── routes/              # API routes
│   ├── middleware/          # Middleware (validation, auth, etc.)
│   ├── utils/               # Utility functions
│   ├── server.js            # Express server
│   ├── package.json         # Dependencies
│   ├── .env.example         # Environment variables example
│   └── README.md            # Backend documentation
│
├── .gitignore               # Git ignore rules
└── README.md                # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Gmail account with app password (for email functionality)

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

4. Update environment variables in `.env`:
```env
VITE_API_URL=http://localhost:5000
```

5. Start development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

4. Configure SMTP credentials in `.env`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=vishalsinghvicky95@gmail.com
FRONTEND_URL=http://localhost:3000
```

5. Start the server:
```bash
npm run dev
```

The backend API will be available at `http://localhost:5000`

## 📧 Email Configuration (Gmail)

1. Go to [Google Account Settings](https://myaccount.google.com)
2. Navigate to **Security** tab
3. Enable **2-Step Verification** if not already enabled
4. Generate an **App Password** for Mail
5. Copy the generated password and use it as `SMTP_PASS` in `.env`

## 🏗️ Build & Deployment

### Building for Production

**Frontend:**
```bash
cd frontend
npm run build
```

This creates an optimized production build in `frontend/dist/`

**Backend:**
The backend runs as-is. Just ensure environment variables are properly configured.

### Deployment Options

#### Vercel (Frontend)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on every push

#### Render or Railway (Backend)
1. Create account and connect GitHub repository
2. Set environment variables
3. Deploy from the `backend` directory
4. Update `FRONTEND_URL` in frontend `.env` to point to deployed backend

#### Traditional VPS (Node.js)
```bash
# SSH into your server
ssh user@your-server.com

# Clone repository
git clone your-repo-url
cd Portfolio/backend

# Install dependencies
npm install --production

# Setup environment variables
nano .env

# Use PM2 for process management
npm install -g pm2
pm2 start server.js --name "portfolio-api"
pm2 startup
pm2 save
```

## 🎨 Customization

### Colors
Edit `frontend/tailwind.config.js` to customize:
- Accent color: `#00d4ff` (cyan)
- Secondary accent: `#7c3aed` (purple)
- Dark background: `#0a0e27`
- Dark cards: `#1a1f3a`

### Content
Update portfolio content in:
- `src/sections/Hero.jsx` - Hero section text and roles
- `src/sections/About.jsx` - About section content
- `src/sections/Skills.jsx` - Skills and technologies
- `src/sections/Projects.jsx` - Project information
- `src/sections/Experience.jsx` - Work experience
- `src/sections/Education.jsx` - Education details

### Images & Assets
Place image assets in `frontend/public/` and reference them in components.

## 📊 Performance Tips

1. **Optimize Images**: Use compressed images in WebP format
2. **Code Splitting**: Components are already optimized
3. **Lazy Loading**: Images and heavy components load on-demand
4. **Caching**: Implement browser caching headers on production

## 🔒 Security Checklist

- ✅ Input validation on contact form
- ✅ Rate limiting on API endpoints
- ✅ CORS configured properly
- ✅ Environment variables for sensitive data
- ✅ HTTPS recommended for production
- ✅ XSS protection with input sanitization

## 🐛 Troubleshooting

### Email not sending
- Check SMTP credentials in `.env`
- Verify Gmail app password is correct
- Check backend logs for errors
- Ensure frontend is pointing to correct backend URL

### CORS errors
- Verify `FRONTEND_URL` in backend `.env`
- Check `VITE_API_URL` in frontend `.env`
- Ensure both URLs match your deployment environment

### Animations not smooth
- Check browser hardware acceleration is enabled
- Reduce animation complexity on lower-end devices
- Use `useReducedMotion` hook for accessibility

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📝 License

MIT License - Feel free to use this portfolio as a template for your own.

## 📞 Support

For issues or questions:
1. Check existing issues on GitHub
2. Create a new issue with detailed description
3. Contact via portfolio contact form

## 🙏 Credits

- **Framer Motion** - Animation library
- **GSAP** - Scroll animations
- **Tailwind CSS** - CSS framework
- **Lucide Icons** - Icon set
- **Nodemailer** - Email service

---

Made with ❤️ by **Vishal Pratap Singh**

Portfolio: https://vishalportfolio.dev  
GitHub: https://github.com  
LinkedIn: https://linkedin.com  
Email: vishalsinghvicky95@gmail.com
