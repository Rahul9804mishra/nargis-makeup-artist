# Nargis Makeup Artist - Premium Beauty & Makeup Website

A modern, premium, and fully responsive website for Nargis Makeup Artist, a professional beauty and makeup service provider in Lucknow, Uttar Pradesh.

## 🌟 Features

### Design & User Experience
- **Premium Design**: Luxurious burgundy, maroon, champagne gold, and cream color palette
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion animations throughout the site
- **Indian Festive Aesthetic**: Special Navratri/Dandiya themed sections
- **Professional Typography**: Playfair Display (headings) and Poppins (body text)

### Sections
1. **Hero Section**: Full-screen introduction with floating decorative elements
2. **Services**: Professional makeup, hair styling, skin care, bridal makeup, manicure/pedicure, and home service
3. **Beauty Care**: Everyday beauty services with pricing
4. **Navratri Special**: Festive makeup packages for Dandiya and Navratri celebrations
5. **Bridal Makeup**: Premium bridal packages (Bridal, Engagement, Reception, Haldi)
6. **Packages**: Combo deals and special offers
7. **Home Service**: At-home beauty services
8. **Why Choose Nargis**: Trust factors and unique selling points
9. **Gallery**: Interactive image gallery with lightbox and category filters
10. **Testimonials**: Client testimonials carousel
11. **Instagram**: Social media integration
12. **Booking System**: Full-featured appointment booking form with database integration
13. **Location**: Interactive map and contact information
14. **Footer**: Complete site navigation and contact details

### Interactive Features
- **Sticky Navigation**: Responsive navbar that adapts on scroll
- **Mobile Bottom Bar**: Quick access to Call, WhatsApp, and Book actions
- **Floating WhatsApp**: Direct WhatsApp booking button
- **Gallery Lightbox**: Full-screen image viewer with navigation
- **Form Validation**: Client-side and server-side validation
- **Smooth Scrolling**: Enhanced navigation experience

### Technical Features
- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **PostgreSQL** database via Drizzle ORM
- **API Routes** for appointment management
- **SEO Optimized**: Meta tags, structured data (JSON-LD), and semantic HTML
- **Accessibility**: WCAG compliant with proper ARIA labels

## 📱 Contact Information

**Phone/WhatsApp**: 8303407836  
**Instagram**: [@nargiskhan4544](https://instagram.com/nargiskhan4544)  
**Location**: E Block Market, Raja Ji Puram Market, Shop No. 209, Lucknow, Uttar Pradesh

## 🎨 Services Offered

### Bridal Services
- Bridal Makeup (from ₹5,999)
- Engagement Makeup (from ₹3,999)
- Reception Makeup (from ₹4,999)
- Haldi Makeup (from ₹2,999)

### Party & Festive
- Dandiya Makeup (from ₹999)
- Navratri Party Makeup (from ₹1,199)
- Party Makeup + Hairstyle (₹1,499)
- HD Party Makeup (₹1,999)

### Beauty Care
- Facial (from ₹299)
- Waxing (from ₹199)
- Threading (from ₹20)
- Hair Cut (from ₹149)
- Hair Styling (from ₹499)
- Manicure/Pedicure (from ₹299)

### Special Packages
- Navratri Special Combo (₹699)
- Dandiya Special Combo (₹1,499)
- Full Beauty Package (₹999) - Most Popular

### Home Service
All beauty and makeup services available at your doorstep starting from ₹499

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- PostgreSQL database

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables in `.env`:
```
DATABASE_URL=postgresql://user:password@localhost:5432/database_name
```

4. Push database schema:
```bash
npx drizzle-kit push
```

5. Run development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📊 Database Schema

The application uses PostgreSQL with the following schema:

### Appointments Table
- `id`: Serial primary key
- `name`: Customer name
- `phone`: Contact number
- `service`: Selected service
- `preferredDate`: Preferred appointment date
- `preferredTime`: Preferred appointment time
- `location`: Customer location (for home service)
- `message`: Additional notes
- `createdAt`: Timestamp

## 🎯 SEO & Performance

- **Meta Tags**: Comprehensive meta tags for social sharing
- **Structured Data**: LocalBusiness schema for better search visibility
- **Image Optimization**: Next.js Image component for optimal loading
- **Code Splitting**: Automatic code splitting for faster page loads
- **Mobile-First**: Responsive design optimized for all devices

## 🎨 Color Palette

- **Burgundy**: #6d1c3e (Primary brand color)
- **Maroon**: #8b1538 (Secondary brand color)
- **Gold**: #d4af37 (Accent color)
- **Champagne**: #f7e7ce (Light accent)
- **Cream**: #fdf8f3 (Background)
- **Pink**: #ffc7d8 (Soft accent)

## 📝 License

© 2026 Nargis Makeup Artist. All Rights Reserved.

## 🤝 Support

For support or inquiries:
- Call/WhatsApp: 8303407836
- Instagram: @nargiskhan4544
- Visit: Shop No. 209, E Block Market, Raja Ji Puram Market, Lucknow

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
