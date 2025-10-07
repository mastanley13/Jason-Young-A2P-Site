# Jason Young - All Western Mortgage Website

A simple, functional website built for 10DLC/A2P compliance.

## Website Structure

The website includes four main pages:

1. **[index.html](index.html)** - Main landing page
2. **[contact.html](contact.html)** - Contact Us page
3. **[privacy.html](privacy.html)** - Privacy Policy page (10DLC/A2P compliant)
4. **[terms.html](terms.html)** - Terms of Service page (10DLC/A2P compliant)

## Completed Features

### ✅ Fully Implemented

- **All required pages** (Landing, Contact, Privacy, Terms)
- **10DLC/A2P Compliance Requirements**:
  - SMS opt-out language with STOP/HELP keywords ✅
  - Carrier liability disclaimer ✅
  - Message and data rates disclosure ✅
  - Mobile information sharing policy ✅
  - Privacy Policy link in Terms of Service ✅
  - Privacy Policy and Terms links in footer (static on all pages) ✅
  - Privacy Policy and Terms links in Contact Us page ✅
- **Responsive Design** - Mobile-friendly layout
- **Professional Styling** - Clean, modern design
- **Navigation** - Consistent across all pages
- **Footer** - Static Privacy and Terms links on every page

### 📝 Placeholders That Need Completion

The following items need to be replaced with actual information:

1. **Images** (Required):
   - `/images/awm-logo.png` - All Western Mortgage logo
   - `/images/young-team-logo.png` - The Young Team logo
   - `/images/jason-young.jpg` - Jason Young professional photo

2. **Dates** (2 locations):
   - Privacy Policy: "Last Updated: [DATE - PLACEHOLDER]"
   - Terms of Service: "Last Updated: [DATE - PLACEHOLDER]"

3. **Governing Law** (1 location):
   - Terms of Service: "Governed by laws of [STATE - PLACEHOLDER]"

4. **Office Hours** (1 location):
   - Contact page sidebar shows placeholder hours - verify if these are correct

## File Structure

```
Jason-A2P-website/
├── index.html          # Landing page
├── contact.html        # Contact form
├── privacy.html        # Privacy policy (compliant)
├── terms.html          # Terms of service (compliant)
├── styles.css          # All styling
├── package.json        # NPM configuration
├── .gitignore          # Git ignore rules
├── base.md             # Original requirements
└── images/             # Add your images here
    ├── awm-logo.png
    ├── young-team-logo.png
    └── jason-young.jpg
```

## Development Setup

### Quick Start

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

   This will:
   - Start a local development server on `http://localhost:3000`
   - Automatically open the website in your default browser
   - Enable live reloading (changes auto-refresh the page)

### Setup Instructions

1. **Add Images**:
   - Add the three required image files to the `images/` folder:
     - `awm-logo.png` - All Western Mortgage logo
     - `young-team-logo.png` - The Young Team logo
     - `jason-young.jpg` - Jason's professional photo
   - Recommended image sizes:
     - `awm-logo.png`: 200x50px (or similar ratio)
     - `young-team-logo.png`: 300x100px (or similar ratio)
     - `jason-young.jpg`: 400x500px (portrait orientation)

2. **Update Placeholder Text**:
   - Replace `[DATE - PLACEHOLDER]` with current date in privacy.html and terms.html
   - Replace `[STATE - PLACEHOLDER]` with governing state in terms.html
   - Verify office hours in contact.html

3. **Deploy**:
   - Upload all files to your web hosting (exclude `node_modules/`)
   - Ensure all links work correctly
   - Test on mobile devices

## Compliance Features

This website meets all 10DLC/A2P requirements:

✅ SMS opt-in/opt-out language
✅ STOP and HELP keyword instructions
✅ Carrier liability disclaimer
✅ Message frequency disclosure
✅ Data rates disclosure
✅ Mobile information sharing policy
✅ Privacy Policy accessible from all pages
✅ Terms of Service accessible from all pages
✅ Both policies linked in Contact Us page

## Browser Compatibility

The website is built with standard HTML5 and CSS3, compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contact Information Used

- Phone: 404.5501.252 (also 678.608-2944 shown on landing page)
- Email: jyoung@allwestern.com
- NMLS#: 7513
- Licensed States: AL, GA, FL, TN, VA
