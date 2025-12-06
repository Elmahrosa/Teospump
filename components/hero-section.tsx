"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Rocket, Shield, Zap, Coins, Users, TrendingUp, Globe } from "lucide-react"

export function HeroSection() {
  const scrollToCreate = () => {
    document.getElementById("create")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 papyrus-texture opacity-30" />
      <div className="absolute inset-0 pharaoh-pattern" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="container relative mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 golden-glow">
            <Globe className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Part of TEOS Egypt Blockchain Ecosystem</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Launch Tokens in Seconds
            </span>
            <br />
            <span className="text-foreground">The Pi Ecosystem Launchpad</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Empower creators from Egypt to the world. Create Egyptian tokens, MENA cultural coins, or global meme tokens
            instantly. Pay with Pi, SOL, or $TEOS. Join the fastest-growing community-driven launchpad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 golden-glow"
              onClick={scrollToCreate}
            >
              <Rocket className="mr-2 h-5 w-5" />
              Create Token Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
              onClick={() => document.getElementById("trending")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Launches
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
          <Card className="p-6 bg-card/80 backdrop-blur border-accent/20 hover:border-accent/40 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/10 hieroglyphic-accent">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 golden-glow">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2 text-lg">Instant Token Creation</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Create SPL tokens on Solana in 3 simple steps. Egyptian heritage or global vision - no coding required.
            </p>
          </Card>

          <Card className="p-6 bg-card/80 backdrop-blur border-accent/20 hover:border-accent/40 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/10 hieroglyphic-accent">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 golden-glow">
              <Coins className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2 text-lg">Pi Network Payments</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Native Pi SDK integration. Pay fees with Pi, SOL, or $TEOS. Seamless authentication for 50M+ pioneers.
            </p>
          </Card>

          <Card className="p-6 bg-card/80 backdrop-blur border-accent/20 hover:border-accent/40 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/10 hieroglyphic-accent">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 golden-glow">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2 text-lg">Anti-Bot Security</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Military-grade protection with rate limits, wallet verification, civic badges, and signature checks.
            </p>
          </Card>

          <Card className="p-6 bg-card/80 backdrop-blur border-accent/20 hover:border-accent/40 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/10 hieroglyphic-accent">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 golden-glow">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2 text-lg">Auto Liquidity Pools</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Automated LP creation on Raydium & OpenBook. Instant trading, transparent reserves, auditable on-chain.
            </p>
          </Card>

          <Card className="p-6 bg-card/80 backdrop-blur border-accent/20 hover:border-accent/40 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/10 hieroglyphic-accent">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 golden-glow">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2 text-lg">Community Driven</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Track supporters, distribute airdrops, manage whitelists. Build engaged communities with built-in tools.
            </p>
          </Card>

          <Card className="p-6 bg-card/80 backdrop-blur border-accent/20 hover:border-accent/40 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/10 hieroglyphic-accent">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 golden-glow">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2 text-lg">Global Token Support</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Egyptian tokens, MENA cultural coins, international meme tokens. Any country, any vision, one platform.
            </p>
          </Card>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12">
          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-card/80 to-card/40 backdrop-blur border border-accent/20 hover:border-accent/40 transition-all golden-glow">
            <div className="flex items-center justify-center gap-1 mb-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <div className="text-3xl md:text-4xl font-bold text-primary">532+</div>
            </div>
            <div className="text-sm text-muted-foreground">Tokens Launched</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-card/80 to-card/40 backdrop-blur border border-accent/20 hover:border-accent/40 transition-all golden-glow">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">$2.8M+</div>
            <div className="text-sm text-muted-foreground">24h Volume</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-card/80 to-card/40 backdrop-blur border border-accent/20 hover:border-accent/40 transition-all golden-glow">
            <div className="flex items-center justify-center gap-1 mb-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <div className="text-3xl md:text-4xl font-bold text-primary">10.8K+</div>
            </div>
            <div className="text-sm text-muted-foreground">Active Pioneers</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-gradient-to-br from-card/80 to-card/40 backdrop-blur border border-accent/20 hover:border-accent/40 transition-all golden-glow">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  )
}
