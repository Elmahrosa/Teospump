"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Flame } from "lucide-react"

export function TrendingTokens() {
  return (
    <section className="py-12 md:py-20 bg-background" id="trending">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-2">
              <Flame className="h-8 w-8 text-primary" />
              Trending Tokens
            </h2>
            <p className="text-muted-foreground">Top performing launches will appear here</p>
          </div>
        </div>

        <Card className="p-12 bg-card/80 backdrop-blur border-primary/20 text-center">
          <Flame className="h-16 w-16 text-primary mx-auto mb-4 opacity-50" />
          <h3 className="text-xl font-semibold mb-2">No Tokens Launched Yet</h3>
          <p className="text-muted-foreground mb-6">
            Be the first to launch a token on TeosPump and see it featured here
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Create Token</Button>
        </Card>
      </div>
    </section>
  )
}
