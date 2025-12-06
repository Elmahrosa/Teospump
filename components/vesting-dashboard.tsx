"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useWallet } from "@/lib/wallet-context"
import { Coins, Lock } from "lucide-react"

export function VestingDashboard() {
  const { connected } = useWallet()

  if (!connected) {
    return (
      <section id="claim" className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center border-primary/20">
            <CardContent className="pt-12 pb-12">
              <div className="mx-auto h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Connect Wallet to View Dashboard</h3>
              <p className="text-muted-foreground mb-6">
                View your token purchases, vesting schedule, and claim available tokens
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="claim" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Your Token Dashboard</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Track your TEOS token holdings, vesting schedule, and claim unlocked tokens
          </p>
        </div>

        <Card className="max-w-6xl mx-auto border-primary/20 p-12 text-center">
          <div className="mx-auto h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <Coins className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-3">No Tokens Yet</h3>
          <p className="text-muted-foreground mb-6">
            Participate in presales or airdrops to receive tokens. Your vesting schedule and claimable tokens will
            appear here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">View Presale</Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 bg-transparent">
              Check Airdrops
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
