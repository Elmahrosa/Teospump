"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Clock, Lock, TrendingUp } from "lucide-react"
import { Slider } from "@/components/ui/slider"

export function VestingLockup() {
  const [vestingSchedule, setVestingSchedule] = useState("linear")
  const [lockupPeriod, setLockupPeriod] = useState([6])
  const [cliffPeriod, setCliffPeriod] = useState([3])

  return (
    <section className="py-12 bg-secondary/10" id="vesting">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Token Vesting & Lockup</h2>
          <p className="text-muted-foreground text-lg">
            Configure vesting schedules to prevent rug pulls and ensure long-term project commitment. Builds trust with
            your community.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto bg-card/80 backdrop-blur border-primary/20 p-6 md:p-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="vesting-type">Vesting Schedule Type</Label>
              <Select value={vestingSchedule} onValueChange={setVestingSchedule}>
                <SelectTrigger id="vesting-type" className="bg-background">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="linear">Linear Vesting (Gradual unlock)</SelectItem>
                  <SelectItem value="milestone">Milestone-Based (Unlock at targets)</SelectItem>
                  <SelectItem value="cliff">Cliff Vesting (All at once after period)</SelectItem>
                  <SelectItem value="custom">Custom Schedule</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <Label>Lockup Period</Label>
                  <span className="text-sm text-muted-foreground">{lockupPeriod[0]} months</span>
                </div>
                <Slider
                  value={lockupPeriod}
                  onValueChange={setLockupPeriod}
                  max={24}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <p className="text-xs text-muted-foreground mt-1">Total time before tokens fully unlock</p>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <Label>Cliff Period</Label>
                  <span className="text-sm text-muted-foreground">{cliffPeriod[0]} months</span>
                </div>
                <Slider
                  value={cliffPeriod}
                  onValueChange={setCliffPeriod}
                  max={12}
                  min={0}
                  step={1}
                  className="w-full"
                />
                <p className="text-xs text-muted-foreground mt-1">Initial waiting period before vesting begins</p>
              </div>
            </div>

            <Alert className="border-primary/50 bg-primary/5">
              <Lock className="h-4 w-4 text-primary" />
              <AlertDescription>
                <strong>Recommended:</strong> 6-month lockup with 3-month cliff prevents immediate dumps and
                demonstrates team commitment to holders.
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-4 bg-primary/5 border-primary/20">
                <TrendingUp className="h-6 w-6 text-primary mb-2" />
                <div className="text-sm font-medium mb-1">Trust Score</div>
                <div className="text-2xl font-bold text-primary">+45%</div>
                <div className="text-xs text-muted-foreground">With vesting enabled</div>
              </Card>
              <Card className="p-4 bg-accent/5 border-accent/20">
                <Lock className="h-6 w-6 text-accent mb-2" />
                <div className="text-sm font-medium mb-1">Rug Pull Prevention</div>
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-xs text-muted-foreground">Automatic protection</div>
              </Card>
              <Card className="p-4 bg-primary/5 border-primary/20">
                <Clock className="h-6 w-6 text-primary mb-2" />
                <div className="text-sm font-medium mb-1">Auto Unlock</div>
                <div className="text-2xl font-bold text-primary">Smart</div>
                <div className="text-xs text-muted-foreground">Contract enforced</div>
              </Card>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90">Apply Vesting Schedule</Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
