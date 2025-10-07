# Jason Young - All Western Mortgage Website

A professional Next.js website for Jason Young, Loan Officer at All Western Mortgage.

## 🚀 Quick Start

```bash
# Install dependencies (already done)
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
Jason-A2P-website/
├── src/
│   └── app/                 # Next.js App Router pages
│       ├── page.tsx        # Home page (/)
│       ├── contact/        # Contact page (/contact)
│       ├── privacy/        # Privacy page (/privacy)
│       ├── terms/          # Terms page (/terms)
│       ├── layout.tsx      # Root layout with Header/Footer
│       ├── globals.css     # Global styles
│       └── components/     # React components
├── public/                 # Static assets (images, favicon)
├── old-html-backup/        # Original HTML site backup
└── package.json
```

## 🌐 Pages

- **Home** - `/` - Hero section, bio, contact info
- **Contact** - `/contact` - Contact form with SMS consent
- **Privacy Policy** - `/privacy` - Privacy policy & disclosures
- **Terms of Service** - `/terms` - Terms & SMS messaging terms

## ✨ Features

- ✅ Clean URLs (no .html extensions)
- ✅ React/Next.js framework
- ✅ 10DLC/A2P compliant contact form
- ✅ Interactive payment calculator
- ✅ Responsive design (mobile-first)
- ✅ SEO optimized
- ✅ TypeScript for type safety

## 📦 Scripts

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 Branding

- **Colors:** Navy blue (#1e3a5f) to Light blue (#4a90e2) gradient
- **Logo:** The Young Team (Powered by All Western Mortgage)
- **Favicon:** Young Team logo

## 📞 Contact Information

- **Jason Young**
- Loan Officer | NMLS# 7513
- Licensed States: AL, GA, FL, TN, VA
- Phone: (678) 608-2944
- Email: jyoung@allwestern.com

**All Western Mortgage**
- NMLS# 14210
- HQ: 800.707.2830
- Email: info@allwestern.com

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub (already connected)
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy with one click!

Vercel will automatically:
- Build your Next.js app
- Set up HTTPS
- Provide a custom domain
- Enable automatic deployments on git push

### Manual Deployment

```bash
npm run build
npm start
```

## 📝 Notes

- Original HTML files backed up in `old-html-backup/`
- All content and functionality preserved from HTML version
- Images copied to `public/` folder
- Styling migrated to `src/app/globals.css`

## 🔧 Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** CSS Modules
- **Deployment:** Vercel-ready

---

Built with ❤️ for All Western Mortgage