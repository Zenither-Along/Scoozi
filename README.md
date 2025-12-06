# Scoozi | Artisan Café & Restaurant

A modern, elegant website for Scoozi - an artisan café and restaurant that celebrates the warmth of handcrafted coffee, fresh pastries, and a welcoming atmosphere where every moment is savored.

## 🌟 Features

- **Modern Design**: Clean, responsive interface with smooth animations and transitions
- **Interactive Sections**:
  - Hero section with compelling visuals
  - About section showcasing the café's story
  - Menu display featuring offerings
  - Gallery showcasing ambiance and dishes
  - Customer testimonials
  - Online reservation system
  - Contact information and form
- **Optimized Performance**: Built with Next.js 16 for lightning-fast page loads
- **Mobile-First**: Fully responsive design that works seamlessly on all devices
- **Smooth Animations**: Powered by Framer Motion for delightful user interactions
- **SEO Optimized**: Comprehensive metadata and Open Graph tags for better discoverability

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Runtime**: React 19

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun package manager

## 🚀 Getting Started

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Scoozi/web
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The page will auto-reload when you make changes to the code.

## 📁 Project Structure

```
web/
├── app/                    # Next.js App Router
│   ├── menu/              # Menu page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── home/             # Home page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Menu.tsx
│   │   ├── Gallery.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Reservation.tsx
│   │   └── Contact.tsx
│   ├── ui/               # Reusable UI components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ErrorBoundary.tsx # Error handling
├── lib/                   # Utility functions
├── public/               # Static assets
└── package.json
```

## 🎨 Typography

The project uses a carefully selected font pairing:

- **Playfair Display**: Elegant serif font for headings and emphasis
- **Lato**: Clean sans-serif font for body text and UI elements

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🌐 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

### Other Deployment Options

This Next.js application can also be deployed to:

- AWS Amplify
- Netlify
- Railway
- DigitalOcean App Platform
- Any Node.js hosting platform

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 📞 Support

For questions or support, please contact the development team.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Icons by [Lucide](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**Made with ❤️ for Scoozi - Where every moment is savored**
