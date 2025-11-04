# Setup Guide - Car Detailing Website

## What's Been Built

Your complete car detailing website is ready! Here's what's included:

### ✅ Features Delivered

1. **5 Complete Pages**:
   - Home (with hero, features, testimonials, CTA)
   - Services (with fixed car/truck pricing)
   - Gallery (with interactive before/after sliders)
   - Contact (with form, phone, email, hours)
   - About (with story, values, location, Google Maps)

2. **Premium Components**:
   - Sticky navigation with mobile hamburger menu
   - Interactive before/after slider with drag functionality
   - Service blocks with fixed pricing display
   - Contact form (Formspree ready)
   - Footer with TikTok integration

3. **Modern Tech Stack**:
   - React 18 + TypeScript
   - Vite for fast development
   - TailwindCSS v4 for styling
   - Framer Motion for animations
   - React Router for navigation

4. **Deployment Ready**:
   - Azure Static Web Apps configuration
   - GitHub Actions workflow for CI/CD
   - Production build tested and working

## Quick Start

### Run Locally

```bash
# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
```

## Next Steps - Customization Checklist

### 1. Update Contact Information

Replace placeholder contact details in these files:

- [ ] `src/components/Footer/Footer.tsx` - Phone, Email, TikTok URL
- [ ] `src/pages/Contact.tsx` - Phone, Email, TikTok URL
- [ ] `src/pages/Services.tsx` - Phone, Email

**Current Placeholders:**
- Phone: +44 123 456 7890
- Email: info@autoshine.com
- TikTok: @yourhandle

### 2. Add Your Logo

Replace the text logo "AUTOSHINE" in:
- [ ] `src/components/NavBar/NavBar.tsx` (line 39)
- [ ] `src/components/Footer/Footer.tsx` (line 15)

Add your logo image to `/public/logo.png` and update:

```tsx
<img src="/logo.png" alt="Your Business Name" className="h-10" />
```

### 3. Configure Formspree

1. [ ] Sign up at https://formspree.io
2. [ ] Create a new form
3. [ ] Copy your form ID
4. [ ] Update `src/components/ContactForm/ContactForm.tsx` line 20:

```tsx
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

### 4. Add Real Images

Replace placeholder images in:

**Gallery Page** (`src/pages/Gallery.tsx`):
- [ ] 3 before/after image pairs (lines 10-19)
- [ ] 6+ gallery grid images (lines 22-29)

**About Page** (`src/pages/About.tsx`):
- [ ] Team/business photo (line 64)

Add images to `/public/images/` directory.

### 5. Update Google Maps

1. [ ] Go to https://www.google.com/maps
2. [ ] Search for your business location
3. [ ] Click "Share" → "Embed a map"
4. [ ] Copy the iframe src URL
5. [ ] Update in `src/pages/About.tsx` (line 134)

### 6. Customize Business Details

- [ ] Update business story in `src/pages/About.tsx` (lines 34-50)
- [ ] Update business hours in:
  - `src/pages/Contact.tsx` (lines 117-127)
  - `src/pages/About.tsx` (lines 154-164)
- [ ] Update business address in `src/pages/About.tsx` (lines 144-148)

### 7. Adjust Service Prices

Edit prices in `src/pages/Services.tsx` (lines 7-62):

```tsx
carPrice: 45,      // Your car price
truckPrice: 65,    // Your truck price
```

Current prices:
- Exterior Clean: Car £45 / Truck £65
- Interior Clean: Car £40 / Truck £55
- Full Valet: Car £80 / Truck £105

### 8. Update Meta Information

- [ ] Update page title in `index.html` (line 7)
- [ ] Update meta description in `index.html` (line 8)
- [ ] Replace favicon in `/public/vite.svg` with your own

## Deployment to Azure

### Prerequisites

- Azure account
- GitHub account

### Steps

1. **Initialize Git Repository**:

```bash
git init
git add .
git commit -m "Initial commit"
```

2. **Push to GitHub**:

```bash
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

3. **Create Azure Static Web App**:
   - Go to https://portal.azure.com
   - Click "Create a resource" → "Static Web App"
   - Connect to your GitHub repository
   - Build settings:
     - Build Presets: `Custom`
     - App location: `/`
     - Output location: `dist`

4. **Add Deployment Token**:
   - Copy the deployment token from Azure
   - Go to your GitHub repo → Settings → Secrets and variables → Actions
   - Create new secret: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - Paste the token

5. **Deploy**:
   - Push to main branch
   - GitHub Actions will automatically build and deploy
   - Check the Actions tab on GitHub for deployment status

## Color Customization

To change the color scheme, edit `src/index.css`:

```css
@theme {
  --color-primary: #0D0D0D;      /* Main background */
  --color-accent: #E50914;        /* Buttons, highlights */
  --color-text-main: #FFFFFF;     /* Primary text */
  --color-text-secondary: #B3B3B3; /* Secondary text */
}
```

## Support

- Check the main `README.md` for detailed documentation
- All placeholder content is marked with comments
- Search for "placeholder" or "YOUR_" to find items to customize

## Testing Checklist

Before deploying, test:

- [ ] All navigation links work
- [ ] Mobile menu opens and closes
- [ ] Before/after slider works on desktop and mobile
- [ ] Contact form submits (after Formspree setup)
- [ ] All images load properly
- [ ] Responsive design on mobile, tablet, desktop
- [ ] TikTok link opens correctly

---

**Your website is ready to customize and deploy!** 🚀

For questions about the code structure, refer to `README.md`.
