# Frontend README

Modern React portfolio frontend with smooth animations and responsive design.

## Technologies

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **GSAP** - Advanced animations
- **Axios** - HTTP client
- **React Hot Toast** - Notifications

## Project Structure

```
src/
├── components/           # Reusable components
│   ├── Navbar.jsx       # Navigation bar
│   ├── Footer.jsx       # Footer
│   ├── ScrollProgressBar.jsx  # Scroll indicator
│   ├── ScrollToTop.jsx   # Scroll to top button
│   └── LoadingAnimation.jsx   # Loading animation
│
├── sections/            # Page sections
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Skills.jsx      # Skills showcase
│   ├── Projects.jsx    # Projects portfolio
│   ├── Experience.jsx  # Work experience
│   ├── Education.jsx   # Education details
│   └── Contact.jsx     # Contact form
│
├── styles/
│   └── globals.css     # Global styles
│
├── utils/
│   └── api.js         # API calls
│
├── App.jsx            # Main app component
└── main.jsx           # Entry point
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create `.env` file:**
   ```bash
   cp .env.example .env
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

## Available Scripts

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
npm run format   # Format code with Prettier
```

## Customization

### Update Portfolio Content

Edit files in `src/sections/`:
- **Hero** - Name, roles, tagline
- **About** - Bio and description
- **Skills** - Technologies and proficiency
- **Projects** - Project details and links
- **Experience** - Work history
- **Education** - Education details
- **Contact** - Contact information

### Change Colors

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'accent': '#00d4ff',           // Change this
      'accent-secondary': '#7c3aed', // And this
    }
  }
}
```

### Add More Sections

1. Create new file in `src/sections/`
2. Import in `App.jsx`
3. Add to main layout

Example:
```jsx
// src/sections/Blog.jsx
export default function Blog() {
  return (
    <section id="blog" className="section-padding">
      {/* Your content */}
    </section>
  )
}
```

## Performance Tips

- Use React DevTools Profiler to identify slow renders
- Lazy load heavy components with `React.lazy()`
- Optimize images with tools like TinyPNG
- Use WebP format for images
- Keep animation keyframes minimal
- Test on real devices

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Common Issues

**CORS errors?**
- Check `VITE_API_URL` in `.env`
- Verify backend CORS configuration

**Animations not smooth?**
- Enable GPU acceleration
- Check browser dev tools for performance
- Reduce animation complexity

**Contact form not working?**
- Check backend is running
- Verify `VITE_API_URL` is correct
- Check browser console for errors

## Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag dist folder to Netlify
```

### Custom Server
```bash
npm run build
# Deploy dist folder
```

## Additional Resources

- [React Documentation](https://react.dev)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev)

## Support

For issues:
1. Check existing issues
2. Create detailed issue report
3. Include error messages and steps to reproduce
