"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { DollarSign, CreditCard, Banknote } from "lucide-react"

export function FiatOnRamp() {
  const [currency, setCurrency] = useState("egp")
  const [amount, setAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("card")

  const exchangeRates: Record<string, number> = {
    egp: 30.5,
    usd: 1,
    sar: 3.75,
    aed: 3.67,
  }

  const calculateTokens = () => {
    const usdAmount = Number(amount) / exchangeRates[currency]
    return (usdAmount * 100).toFixed(2)
  }

  return (
    <section className="py-12 bg-secondary/10" id="onramp">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fiat On-Ramp</h2>
          <p className="text-muted-foreground text-lg">
            Buy tokens directly with local currency. Supports EGP, USD, SAR, and AED with instant conversion.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto bg-card/80 backdrop-blur border-primary/20 p-6 md:p-8">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="currency">Currency</Label>
                <Select value={currency} onValueChange={setCurrency}>
                  <SelectTrigger id="currency" className="bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="egp">🇪🇬 EGP (Egyptian Pound)</SelectItem>
                    <SelectItem value="usd">🇺🇸 USD (US Dollar)</SelectItem>
                    <SelectItem value="sar">🇸🇦 SAR (Saudi Riyal)</SelectItem>
                    <SelectItem value="aed">🇦🇪 AED (UAE Dirham)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="100"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-background"
                />
              </div>
            </div>

            {amount && (
              <Card className="p-4 bg-primary/5 border-primary/20">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">You pay</span>
                  <span className="font-bold">
                    {Number(amount).toLocaleString()} {currency.toUpperCase()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">You receive</span>
                  <span className="font-bold text-primary">~{calculateTokens()} $TEOS</span>
                </div>
              </Card>
            )}

            <div className="space-y-2">
              <Label htmlFor="payment-method">Payment Method</Label>
              <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                <SelectTrigger id="payment-method" className="bg-background">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="card">
                    <div className="flex items-center">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Credit/Debit Card
                    </div>
                  </SelectItem>
                  <SelectItem value="bank">
                    <div className="flex items-center">
                      <Banknote className="mr-2 h-4 w-4" />
                      Bank Transfer
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Alert className="border-primary/50 bg-primary/5">
              <DollarSign className="h-4 w-4 text-primary" />
              <AlertDescription>
                Instant conversion via trusted payment processors. 2.5% processing fee applies. Funds appear in wallet
                within 5 minutes.
              </AlertDescription>
            </Alert>

            <Button className="w-full bg-primary hover:bg-primary/90" disabled={!amount}>
              Continue to Payment
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
