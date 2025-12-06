"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Crown, Users, Globe, Twitter, MessageCircle, Send, ExternalLink } from "lucide-react"

export function FounderDashboard() {
  return (
    <section
      className="py-12 md:py-20 bg-gradient-to-br from-accent/5 via-background to-primary/5 relative overflow-hidden"
      id="founder"
    >
      <div className="absolute inset-0 pharaoh-pattern pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-card/90 backdrop-blur border-accent/30 shadow-xl shadow-accent/10 overflow-hidden hieroglyphic-accent">
            <div className="relative h-32 md:h-48 bg-gradient-to-r from-accent via-primary to-accent overflow-hidden">
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=1200')] opacity-20" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent golden-glow" />
            </div>

            <div className="relative px-6 md:px-8 pb-8">
              <div className="flex flex-col md:flex-row gap-6 -mt-16 md:-mt-20">
                <div className="relative">
                  <div className="h-32 w-32 rounded-full border-4 border-accent bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-2xl golden-glow">
                    <Crown className="h-16 w-16 text-accent-foreground" />
                  </div>
                  <Badge className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground font-bold">
                    Founder
                  </Badge>
                </div>

                <div className="flex-1 mt-4 md:mt-0">
                  <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                    <h2 className="text-3xl md:text-4xl font-bold">Elmahrosa</h2>
                    <Badge className="w-fit bg-primary/10 text-primary border-primary">Est. 2007</Badge>
                  </div>

                  <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    Founder of TEOS Egypt International • Building the future of Web3 from Egypt to the world •
                    Empowering creators across MENA and beyond with blockchain innovation
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    <Badge variant="outline" className="text-accent border-accent">
                      <Globe className="mr-1 h-3 w-3" />
                      TEOS Egypt Ecosystem
                    </Badge>
                    <Badge variant="outline" className="text-primary border-primary">
                      <Users className="mr-1 h-3 w-3" />
                      Pioneer Leader
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-500 text-blue-500 hover:bg-blue-500/10 bg-transparent"
                      onClick={() => window.open("https://twitter.com/teosegypt", "_blank")}
                    >
                      <Twitter className="mr-2 h-4 w-4" />
                      Twitter
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-600 text-blue-600 hover:bg-blue-600/10 bg-transparent"
                      onClick={() => window.open("https://t.me/teosegypt", "_blank")}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Telegram
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-purple-500 text-purple-500 hover:bg-purple-500/10 bg-transparent"
                      onClick={() => window.open("https://discord.gg/teosegypt", "_blank")}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Discord
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                      onClick={() => window.open("https://teosegypt.com", "_blank")}
                    >
                      <Globe className="mr-2 h-4 w-4" />
                      teosegypt.com
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-accent/20">
                <Card className="p-6 bg-primary/5 border-primary/20 hover:border-primary/40 transition-colors golden-glow">
                  <div className="text-3xl font-bold text-primary mb-2">18+</div>
                  <div className="text-sm text-muted-foreground">Years of Experience</div>
                </Card>
                <Card className="p-6 bg-accent/5 border-accent/20 hover:border-accent/40 transition-colors golden-glow">
                  <div className="text-3xl font-bold text-accent mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">Community Members</div>
                </Card>
                <Card className="p-6 bg-primary/5 border-primary/20 hover:border-primary/40 transition-colors golden-glow">
                  <div className="text-3xl font-bold text-primary mb-2">MENA</div>
                  <div className="text-sm text-muted-foreground">Leading the Region</div>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
