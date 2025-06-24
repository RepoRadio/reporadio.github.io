# RepoRadio Landing Page

A modern, responsive landing page for RepoRadio - the AI-powered tool that transforms GitHub repositories into engaging podcast episodes.

## 🎯 About RepoRadio

RepoRadio helps developers onboard faster, understand architecture, and stay up-to-date with changelogs through AI-generated narrated episodes. Turn your code into audio content that makes complex repositories accessible and engaging.

## ✨ Features

- **AI-Powered Scripts**: Advanced LLMs analyze codebases and generate informative episode scripts
- **High-Quality Audio**: Professional voice synthesis using OpenAI APIs
- **CLI Integration**: Simple command-line tool for seamless workflow integration
- **Hosted Content**: Public/private landing pages with RSS feeds for podcast players
- **Enterprise Ready**: SSO, team access controls, audit logs, and SLA support
- **Team Collaboration**: Role-based access and team notifications

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **UI Components**: Radix UI primitives
- **Icons**: [Lucide React](https://lucide.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Deployment**: GitHub Pages with automated CI/CD

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ 
- pnpm 9+

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/reporadio.github.io.git
cd reporadio.github.io
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🏗️ Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── audio-player.tsx       # Audio player component
│   ├── cta.tsx               # Call-to-action section
│   ├── features.tsx          # Features showcase
│   ├── footer.tsx            # Site footer
│   ├── header.tsx            # Site header
│   ├── hero.tsx              # Hero section
│   ├── how-it-works.tsx      # Process explanation
│   ├── pricing.tsx           # Pricing information
│   └── use-cases.tsx         # Use case examples
├── lib/
│   └── utils.ts              # Utility functions
├── public/
│   └── images/               # Static images
└── styles/
    └── globals.css           # Global styles
```

## 🎨 Design System

This project uses a custom design system built on:
- **Colors**: Orange primary palette (`orange-50` to `orange-900`)
- **Typography**: System font stack with careful hierarchy
- **Components**: Consistent shadcn/ui components
- **Spacing**: Tailwind's spacing scale
- **Responsive**: Mobile-first responsive design

## 🌐 Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions:

1. Push changes to the `main` branch
2. GitHub Actions builds the site with `pnpm build`
3. Static files are deployed to GitHub Pages
4. Site is available at your GitHub Pages URL

### Manual Deployment

```bash
# Build the project
pnpm build

# The built files will be in the 'out' directory
# Deploy these files to your hosting provider
```

## 🔧 Configuration

### Environment Variables

No environment variables are required for the basic setup. The site is fully static.

### Customization

- **Styling**: Modify `tailwind.config.ts` for theme customization
- **Components**: Update components in the `components/` directory
- **Content**: Edit the main page content in `app/page.tsx`

## 📱 Responsive Design

The landing page is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🎯 Performance

- **Core Web Vitals**: Optimized for excellent performance scores
- **Image Optimization**: Next.js Image component with proper sizing
- **Bundle Size**: Minimal dependencies and code splitting
- **SEO**: Proper meta tags and semantic HTML

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [RepoRadio CLI](https://github.com/RepoRadio/reporadio-cli)
- [Live Demo](https://your-username.github.io/reporadio.github.io)
- [Documentation](https://docs.reporadio.com)

## 🆘 Support

For support, please open an issue on GitHub or contact the RepoRadio team.

---

Made with ❤️ by the RepoRadio team
