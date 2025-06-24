import { Github, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Documentation", href: "https://github.com/RepoRadio/reporadio-cli" },
      { name: "API Reference", href: "https://github.com/RepoRadio/reporadio-cli" },
    ],
    Company: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
    ],
    Resources: [
      { name: "Community", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Status", href: "#" },
      { name: "Changelog", href: "#" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/images/radio-icon.png"
                alt="Radio Icon"
                width={32}
                height={32}
                className="h-8 w-8 mr-2 brightness-0 invert"
              />
              <Image
                src="/images/reporadio-logo.png"
                alt="RepoRad.io"
                width={120}
                height={28}
                className="h-6 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transform GitHub repositories into narrated podcast episodes for better developer onboarding and
              documentation.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/RepoRadio/reporadio-cli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-white">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} RepoRad.io. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">Made with 💖 for developers everywhere</p>
        </div>
      </div>
    </footer>
  )
}
