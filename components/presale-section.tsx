"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useWallet } from "@/lib/wallet-context"
import { Clock, TrendingUp, Users, DollarSign } from 'lucide-react'
import { useState, useEffect } from 'react'
import { PresaleModal } from "./presale-modal"

export function PresaleSection() {
  const { connected, hasBadge } = useWallet()
  const [presaleModalOpen, setPresaleModalOpen] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 8,
    minutes: 34,
    seconds: 22
  })

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const presaleProgress = 67 // 67% filled

  return (
    <>
      <section id="presale" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary">Live Now</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              TEOS Token Presale
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              Join the civic revolution with transparent token distribution and verified participants
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Main Presale Card */}
            <Card className="md:col-span-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Presale Round 1</CardTitle>
                <CardDescription>1 TEOS = $0.05 USD</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Raised</span>
                    <span className="font-semibold">$3,350,000 / $5,000,000</span>
                  </div>
                  <Progress value={presaleProgress} className="h-3" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>67M TEOS sold</span>
                    <span>33M remaining</span>
                  </div>
                </div>

                {/* Countdown */}
                <div className="bg-muted/50 rounded-lg p-6">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Presale Ends In</span>
                  </div>
                  <div className="grid grid-cols-4 gap-3 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary">{timeLeft.days}</div>
                      <div className="text-xs text-muted-foreground">Days</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">{timeLeft.hours}</div>
                      <div className="text-xs text-muted-foreground">Hours</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">{timeLeft.minutes}</div>
                      <div className="text-xs text-muted-foreground">Minutes</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">{timeLeft.seconds}</div>
                      <div className="text-xs text-muted-foreground">Seconds</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => setPresaleModalOpen(true)}
                  disabled={!connected || !hasBadge}
                >
                  {!connected ? 'Connect Wallet to Participate' : !hasBadge ? 'Verify Badge to Participate' : 'Buy TEOS Tokens'}
                </Button>

                {!hasBadge && connected && (
                  <p className="text-sm text-center text-muted-foreground">
                    Please sign the civic petition to verify your badge and participate
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Stats Cards */}
            <Card className="border-primary/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Participants</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,847</div>
                <p className="text-xs text-muted-foreground">+2,340 this week</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current Price</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$0.05</div>
                <p className="text-xs text-muted-foreground">Next round: $0.08</p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="md:col-span-2 border-primary/20">
              <CardHeader>
                <CardTitle>Presale Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex gap-3">
                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Multiple Payment Options</div>
                      <div className="text-sm text-muted-foreground">Pay with SOL, USDT, or Pi</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Vesting Schedule</div>
                      <div className="text-sm text-muted-foreground">25% unlock at TGE, rest over 6 months</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Verified Only</div>
                      <div className="text-sm text-muted-foreground">Badge verification required</div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Auto Liquidity</div>
                      <div className="text-sm text-muted-foreground">70% to Raydium pools</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <PresaleModal open={presaleModalOpen} onOpenChange={setPresaleModalOpen} />
    </>
  )
}
