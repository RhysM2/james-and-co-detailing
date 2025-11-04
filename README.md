# Car Detailing Business Website

A modern, ultra-responsive React website for a car washing/valeting/detailing business built with Vite, TypeScript, TailwindCSS, and Framer Motion.

## Features

- **Ultra-modern dark theme** with black (#0D0D0D) and red accent (#E50914)
- **Fully responsive** mobile-first design
- **Smooth animations** using Framer Motion
- **Interactive before/after slider** for showcasing work
- **Fixed pricing display** for car and truck services
- **Contact form** with Formspree integration
- **Sticky navigation** with mobile hamburger menu
- **Google Maps integration** on About page
- **TikTok social links** in footer and gallery
- **Azure Static Web Apps** ready with GitHub Actions deployment

## Pages

1. **Home** - Hero section, features, testimonials, and CTA
2. **Services** - Three service packages with fixed pricing (Car/Truck)
3. **Gallery** - Before/after sliders and image grid
4. **Contact** - Contact form, phone, email, and business hours
5. **About** - Company story, values, location, and map

## Tech Stack

- **React 18** with TypeScript
- **Vite** for blazing fast development
- **TailwindCSS** for utility-first styling
- **Framer Motion** for animations
- **React Router** for navigation
- **Formspree** for contact form submissions

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## Customization Guide

### 1. Replace Placeholder Images

Replace the placeholder images in the following locations:

**Gallery Page** (`src/pages/Gallery.tsx`):
- Before/after image pairs (3 pairs)
- Gallery grid images (6+ images)

**About Page** (`src/pages/About.tsx`):
- Team/business photo

### 2. Add Your Logo

Replace the text logo in:
- `src/components/NavBar/NavBar.tsx` (line 39)
- `src/components/Footer/Footer.tsx` (line 15)

Replace with your logo image:
```tsx
<img src="/path/to/your/logo.png" alt="Your Business Name" className="h-10" />
```

### 3. Update Contact Information

Update in multiple files:

**Footer** (`src/components/Footer/Footer.tsx`):
- Phone number (line 50)
- Email (line 53)
- TikTok URL (line 61)

**Contact Page** (`src/pages/Contact.tsx`):
- Phone (line 40)
- Email (line 53)
- TikTok (line 66)

**Services Page** (`src/pages/Services.tsx`):
- Phone (line 139)
- Email (line 144)

### 4. Configure Formspree

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form ID
4. Update `src/components/ContactForm/ContactForm.tsx` line 20:

```tsx
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

### 5. Update Google Maps

In `src/pages/About.tsx` (line 134), replace the iframe `src` with your business location:

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your business location
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL
5. Replace in the About page

### 6. Customize Business Hours

Update business hours in:
- `src/pages/Contact.tsx` (lines 117-127)
- `src/pages/About.tsx` (lines 154-164)

### 7. Update Business Story

Edit the "Our Story" section in `src/pages/About.tsx` (lines 34-50)

### 8. Modify Service Prices

Update pricing in `src/pages/Services.tsx` (lines 7-62):

```tsx
{
  title: 'Service Name',
  description: 'Service description',
  carPrice: 45,      // Update these
  truckPrice: 65,    // Update these
  // ...
}
```

### 9. Customize Colors

To change the color scheme, edit `tailwind.config.js`:

```js
colors: {
  primary: '#0D0D0D',      // Main background
  accent: '#E50914',        // Accent color (buttons, highlights)
  'text-main': '#FFFFFF',   // Primary text
  'text-secondary': '#B3B3B3', // Secondary text
}
```

## Deployment to Azure Static Web Apps

### Prerequisites

- Azure account
- GitHub repository

### Steps

1. **Push your code to GitHub**:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Create Azure Static Web App**:
   - Go to [Azure Portal](https://portal.azure.com)
   - Create a new "Static Web App"
   - Connect to your GitHub repository
   - Build configuration:
     - Build Presets: `Custom`
     - App location: `/`
     - Output location: `dist`

3. **Add the deployment token to GitHub**:
   - Copy the deployment token from Azure
   - Go to your GitHub repo → Settings → Secrets and variables → Actions
   - Add secret: `AZURE_STATIC_WEB_APPS_API_TOKEN`

4. **Deploy**:
   - Push to main branch triggers automatic deployment
   - GitHub Actions workflow will build and deploy your site

## Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## Project Structure

```
car-detailing-site/
├── src/
│   ├── components/
│   │   ├── NavBar/
│   │   ├── Footer/
│   │   ├── HeroSection/
│   │   ├── ServiceBlock/
│   │   ├── BeforeAfterSlider/
│   │   ├── GalleryGrid/
│   │   └── ContactForm/
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Gallery.tsx
│   │   ├── Contact.tsx
│   │   └── About.tsx
│   ├── assets/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── .github/
│   └── workflows/
│       └── azure-static-web-apps.yml
├── tailwind.config.js
├── postcss.config.js
├── staticwebapp.config.json
└── package.json
```

## Accessibility

- AAA contrast compliance
- Large touch targets for mobile
- Keyboard navigation support
- Prefers-reduced-motion support
- Semantic HTML throughout

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is built for commercial use for your car detailing business.

## Support

For issues or questions about this template, please refer to the documentation above or customize as needed for your business.
