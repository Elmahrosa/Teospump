import { Globe, Twitter, Send, Github } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-card/50 backdrop-blur py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 bg-primary rounded flex items-center justify-center text-primary-foreground font-bold">
                T
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                TeosPump
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              The official Solana-based launchpad of the TEOS Egypt ecosystem. From Egypt to the world.
            </p>
            <div className="flex gap-3">
              <a
                href="https://twitter.com/teosegypt"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Twitter className="h-4 w-4 text-primary" />
              </a>
              <a
                href="https://t.me/teosegypt"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Send className="h-4 w-4 text-primary" />
              </a>
              <a
                href="https://github.com/Elmahrosa"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Github className="h-4 w-4 text-primary" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#create" className="hover:text-primary transition-colors">
                  Create Token
                </a>
              </li>
              <li>
                <a href="#trending" className="hover:text-primary transition-colors">
                  Trending Tokens
                </a>
              </li>
              <li>
                <a href="#presale" className="hover:text-primary transition-colors">
                  Presale
                </a>
              </li>
              <li>
                <a href="#airdrop" className="hover:text-primary transition-colors">
                  Airdrops
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">TEOS Ecosystem</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://pharaoh.teosegypt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-1"
                >
                  Pharaoh Portal
                  <Globe className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://teosegypt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  TEOS Bankchain
                </a>
              </li>
              <li>
                <a
                  href="https://teosegypt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Pi Smart City
                </a>
              </li>
              <li>
                <a
                  href="https://teosegypt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  TeosPioneers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://docs.teosegypt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://docs.teosegypt.com/api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Elmahrosa/Teos-Pharaoh-Portal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Smart Contracts
                </a>
              </li>
              <li>
                <a href="mailto:ayman@teosegypt.com" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2025 TeosPump - Part of TEOS Egypt Blockchain Ecosystem. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <a
                href="https://docs.teosegypt.com/security"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
