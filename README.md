# NUhome Interiors - Frontend

React.js frontend for NUhome Interiors website with Tailwind CSS and Framer Motion animations.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Navigate to frontend folder:**
   ```bash
   cd nuhome-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env` file (Optional):**
   If your backend is running on a different URL, create a `.env` file:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. **Add your logo:**
   - Place your logo file in the `public` folder
   - Name it `logo.png` (or update the reference in `Hero.jsx`)
   - Recommended size: 512x512 pixels

5. **Start the development server:**
   ```bash
   npm start
   ```

6. **Open in browser:**
   The app will automatically open at http://localhost:3000

## 📁 Project Structure

```
nuhome-frontend/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── logo.png          # Place your logo here
├── src/
│   ├── components/       # All React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── config/
│   │   └── api.js        # API configuration
│   ├── App.js            # Main app component
│   ├── index.js          # Entry point
│   └── index.css         # Global styles
├── tailwind.config.js    # Tailwind configuration
├── package.json
└── README.md
```

## 🎨 Color Scheme

The website uses your brand colors:
- **Navy Blue:** `#030F30` (Primary)
- **Orange:** `#FD8802` (Accent)
- **Dark Gray:** `#292929` (Secondary)

## 🧩 Sections

1. **Hero Section** - Fullscreen banner with logo and CTA
2. **About Section** - Company information and mission
3. **Services Section** - Grid of interior design services
4. **Portfolio Section** - Image gallery with lightbox
5. **Testimonials Section** - Client reviews (from API)
6. **Contact Section** - Contact form (connected to backend)
7. **Footer Section** - Company info and social links

## ⚙️ Available Scripts

- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run tests

## 🔧 Customization

### Update Logo
Replace `/public/logo.png` with your company logo.

### Update Contact Information
Edit the contact details in `src/components/Footer.jsx` and `src/components/Contact.jsx`.

### Update Social Media Links
Modify the social links array in `src/components/Footer.jsx`.

### Change Colors
Update colors in `tailwind.config.js` if needed.

### Add More Portfolio Images
Portfolio images are now fetched from MongoDB. To add more:
1. Run the backend migration script to seed portfolio data
2. Or use the API to add portfolio items dynamically

See `nuhome-backend/MIGRATION_GUIDE.md` for details.

## 🌐 Backend Integration

The frontend connects to the backend API for:
- Contact form submissions
- Fetching testimonials
- Fetching portfolio items (NEW!)

Make sure the backend server is running before using these features.

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔥 Features

- ✅ Modern, professional design
- ✅ Smooth scrolling navigation
- ✅ Framer Motion animations
- ✅ Responsive grid layouts
- ✅ Interactive portfolio gallery
- ✅ Form validation
- ✅ API integration
- ✅ Custom scrollbar
- ✅ Loading states

## 🐛 Troubleshooting

### Logo Not Showing
- Make sure logo file exists at `/public/logo.png`
- Check the file name matches exactly
- Clear browser cache

### Contact Form Not Working
- Ensure backend server is running
- Check API URL in `.env` or `src/config/api.js`
- Check browser console for errors

### Testimonials Not Loading
- Backend server must be running
- API endpoint `/api/testimonials` must be accessible

## 📝 Notes for Beginners

- Don't modify files in `node_modules/`
- All your changes should be in the `src/` folder
- Use `Ctrl + C` in terminal to stop the server
- Changes auto-reload in browser (hot reload)
- If something breaks, try deleting `node_modules/` and running `npm install` again

## 🚀 Production Deployment

1. Build the production version:
   ```bash
   npm run build
   ```

2. The `build/` folder will contain optimized files ready for deployment.

3. Deploy to services like:
   - Vercel (recommended)
   - Netlify
   - GitHub Pages
   - AWS S3

## 📞 Support

For any issues or questions, refer to the main README.md in the project root.

