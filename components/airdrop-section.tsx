"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useWallet } from "@/lib/wallet-context"
import { Gift, Sparkles, Lock } from "lucide-react"

export function AirdropSection() {
  const { connected } = useWallet()

  return (
    <section id="airdrop" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary">
            <Gift className="mr-1 h-3 w-3" />
            Coming Soon
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">TEOS Airdrops</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Claim free tokens by participating in community activities and achieving milestones
          </p>
        </div>

        {!connected ? (
          <Card className="max-w-2xl mx-auto text-center border-primary/20">
            <CardContent className="pt-12 pb-12">
              <div className="mx-auto h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Connect Wallet to View Airdrops</h3>
              <p className="text-muted-foreground mb-6">
                Connect your wallet to check eligibility and claim available airdrops
              </p>
            </CardContent>
          </Card>
        ) : (
          <Card className="max-w-6xl mx-auto border-primary/20 p-12 text-center">
            <div className="mx-auto h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Airdrop Campaigns Coming Soon</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Stay tuned for exciting airdrop campaigns. Early supporters, badge holders, and active community members
              will be rewarded.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Join Community</Button>
          </Card>
        )}
      </div>
    </section>
  )
}
