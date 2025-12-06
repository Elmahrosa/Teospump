"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useWallet } from "@/lib/wallet-context"
import { Rocket, Upload, Coins, AlertCircle, CheckCircle, Lock } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export function TokenCreator() {
  const { connected, hasBadge } = useWallet()
  const [step, setStep] = useState<"details" | "tokenomics" | "security" | "preview">("details")
  const [creating, setCreating] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<"pi" | "sol" | "teos">("pi")
  const [kycCompleted, setKycCompleted] = useState(false)

  const [tokenData, setTokenData] = useState({
    name: "",
    symbol: "",
    description: "",
    supply: "",
    decimals: "9",
    image: null as File | null,
    website: "",
    twitter: "",
    telegram: "",
    category: "meme",
    country: "egypt",
    vestingEnabled: true,
    vestingMonths: "6",
    liquidityLockEnabled: true,
    liquidityLockMonths: "12",
    antiRugPull: true,
    tier: "standard" as "standard" | "audited" | "vetted",
  })

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setTokenData({ ...tokenData, image: e.target.files[0] })
    }
  }

  const handleCreateToken = async () => {
    setCreating(true)
    console.log("[v0] Creating token with Pi payment:", paymentMethod)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setCreating(false)
    alert("Token created successfully! Address: " + Math.random().toString(36).substring(2, 15))
  }

  if (!connected) {
    return (
      <section className="py-12 md:py-20 bg-secondary/20" id="create">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto p-8 text-center bg-card/80 backdrop-blur border-primary/20">
            <Rocket className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Create Your Token</h2>
            <p className="text-muted-foreground mb-6">
              Connect your Phantom, Solflare, or Pi wallet to start creating SPL tokens
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Connect Wallet
            </Button>
          </Card>
        </div>
      </section>
    )
  }

  if (!hasBadge) {
    return (
      <section className="py-12 md:py-20 bg-secondary/20" id="create">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto p-8 text-center bg-card/80 backdrop-blur border-primary/20">
            <AlertCircle className="h-16 w-16 text-accent mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Verification Required</h2>
            <p className="text-muted-foreground mb-6">
              Complete civic badge verification to create tokens. This protects the ecosystem from spam and bots.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Verify Badge
            </Button>
          </Card>
        </div>
      </section>
    )
  }

  if (!kycCompleted) {
    return (
      <section className="py-12 md:py-20 bg-secondary/20" id="create">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto p-8 text-center bg-card/80 backdrop-blur border-primary/20">
            <AlertCircle className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">KYC Verification Required</h2>
            <p className="text-muted-foreground mb-4">
              For regulatory compliance and community trust, all token creators must complete KYC/AML verification.
            </p>
            <div className="bg-secondary/30 p-4 rounded-lg mb-6 text-left">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                Why KYC is Required
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• MENA regulatory compliance</li>
                <li>• Investor protection and trust</li>
                <li>• Anti-fraud and anti-rug-pull measures</li>
                <li>• Access to premium launchpad features</li>
              </ul>
            </div>
            <div className="flex gap-3">
              <Button
                size="lg"
                className="flex-1 bg-primary hover:bg-primary/90"
                onClick={() => {
                  document.getElementById("kyc")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Complete KYC Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 bg-transparent"
                onClick={() => setKycCompleted(true)}
              >
                Demo Mode (Skip)
              </Button>
            </div>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 md:py-20 bg-secondary/20" id="create">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Create Your Token</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Launch your SPL token in 4 simple steps. Egyptian heritage, MENA culture, or global meme - pay with Pi, SOL,
            or $TEOS.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto bg-card/80 backdrop-blur border-primary/20">
          <div className="flex items-center justify-between p-6 border-b border-border overflow-x-auto">
            <div className={`flex items-center gap-2 ${step === "details" ? "text-primary" : "text-muted-foreground"}`}>
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center ${step === "details" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              >
                1
              </div>
              <span className="hidden sm:inline font-medium whitespace-nowrap">Details</span>
            </div>
            <div className="flex-1 h-px bg-border mx-2" />
            <div
              className={`flex items-center gap-2 ${step === "tokenomics" ? "text-primary" : "text-muted-foreground"}`}
            >
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center ${step === "tokenomics" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              >
                2
              </div>
              <span className="hidden sm:inline font-medium whitespace-nowrap">Tokenomics</span>
            </div>
            <div className="flex-1 h-px bg-border mx-2" />
            <div
              className={`flex items-center gap-2 ${step === "security" ? "text-primary" : "text-muted-foreground"}`}
            >
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center ${step === "security" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              >
                3
              </div>
              <span className="hidden sm:inline font-medium whitespace-nowrap">Security</span>
            </div>
            <div className="flex-1 h-px bg-border mx-2" />
            <div className={`flex items-center gap-2 ${step === "preview" ? "text-primary" : "text-muted-foreground"}`}>
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center ${step === "preview" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              >
                4
              </div>
              <span className="hidden sm:inline font-medium whitespace-nowrap">Preview</span>
            </div>
          </div>

          <div className="p-6 md:p-8">
            {step === "details" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="token-category">Token Category</Label>
                    <Select
                      value={tokenData.category}
                      onValueChange={(value) => setTokenData({ ...tokenData, category: value })}
                    >
                      <SelectTrigger id="token-category" className="bg-background">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="meme">Meme Token</SelectItem>
                        <SelectItem value="cultural">Cultural Token</SelectItem>
                        <SelectItem value="community">Community Token</SelectItem>
                        <SelectItem value="utility">Utility Token</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="token-country">Country/Region</Label>
                    <Select
                      value={tokenData.country}
                      onValueChange={(value) => setTokenData({ ...tokenData, country: value })}
                    >
                      <SelectTrigger id="token-country" className="bg-background">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="egypt">🇪🇬 Egypt</SelectItem>
                        <SelectItem value="saudi">🇸🇦 Saudi Arabia</SelectItem>
                        <SelectItem value="uae">🇦🇪 UAE</SelectItem>
                        <SelectItem value="jordan">🇯🇴 Jordan</SelectItem>
                        <SelectItem value="morocco">🇲🇦 Morocco</SelectItem>
                        <SelectItem value="tunisia">🇹🇳 Tunisia</SelectItem>
                        <SelectItem value="global">🌍 Global/International</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="token-name">Token Name</Label>
                  <Input
                    id="token-name"
                    placeholder="e.g., Egyptian Doge, Pyramid Coin, MENA Pepe"
                    value={tokenData.name}
                    onChange={(e) => setTokenData({ ...tokenData, name: e.target.value })}
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="token-symbol">Token Symbol</Label>
                  <Input
                    id="token-symbol"
                    placeholder="e.g., EDOGE"
                    value={tokenData.symbol}
                    onChange={(e) => setTokenData({ ...tokenData, symbol: e.target.value.toUpperCase() })}
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="token-description">Description</Label>
                  <Textarea
                    id="token-description"
                    placeholder="Tell the community about your token..."
                    value={tokenData.description}
                    onChange={(e) => setTokenData({ ...tokenData, description: e.target.value })}
                    className="bg-background min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="token-image">Token Image</Label>
                  <div className="flex items-center gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById("token-image")?.click()}
                      className="border-primary text-primary"
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Image
                    </Button>
                    <input
                      id="token-image"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />
                    {tokenData.image && <span className="text-sm text-muted-foreground">{tokenData.image.name}</span>}
                  </div>
                </div>

                <Button
                  onClick={() => setStep("tokenomics")}
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={!tokenData.name || !tokenData.symbol}
                >
                  Continue to Tokenomics
                </Button>
              </div>
            )}

            {step === "tokenomics" && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="token-supply">Total Supply</Label>
                  <Input
                    id="token-supply"
                    type="number"
                    placeholder="e.g., 1000000000"
                    value={tokenData.supply}
                    onChange={(e) => setTokenData({ ...tokenData, supply: e.target.value })}
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="token-decimals">Decimals</Label>
                  <Input
                    id="token-decimals"
                    type="number"
                    placeholder="9"
                    value={tokenData.decimals}
                    onChange={(e) => setTokenData({ ...tokenData, decimals: e.target.value })}
                    className="bg-background"
                  />
                  <p className="text-xs text-muted-foreground">Recommended: 9 (standard for Solana tokens)</p>
                </div>

                <div className="space-y-2">
                  <Label>Payment Method</Label>
                  <div className="grid grid-cols-3 gap-3">
                    <Button
                      type="button"
                      variant={paymentMethod === "pi" ? "default" : "outline"}
                      onClick={() => setPaymentMethod("pi")}
                      className={paymentMethod === "pi" ? "bg-primary" : "border-primary text-primary"}
                    >
                      <Coins className="mr-2 h-4 w-4" />
                      Pi (2π)
                    </Button>
                    <Button
                      type="button"
                      variant={paymentMethod === "sol" ? "default" : "outline"}
                      onClick={() => setPaymentMethod("sol")}
                      className={paymentMethod === "sol" ? "bg-primary" : "border-primary text-primary"}
                    >
                      SOL (0.1)
                    </Button>
                    <Button
                      type="button"
                      variant={paymentMethod === "teos" ? "default" : "outline"}
                      onClick={() => setPaymentMethod("teos")}
                      className={paymentMethod === "teos" ? "bg-primary" : "border-primary text-primary"}
                    >
                      $TEOS (100)
                    </Button>
                  </div>
                </div>

                <Alert className="border-primary/50 bg-primary/5">
                  <Coins className="h-4 w-4 text-primary" />
                  <AlertDescription>
                    {paymentMethod === "pi" &&
                      "Creation fee: 2 Pi. Includes SPL token creation, metadata upload, and Pi SDK integration."}
                    {paymentMethod === "sol" &&
                      "Creation fee: 0.1 SOL. Includes SPL token creation and metadata upload."}
                    {paymentMethod === "teos" &&
                      "Creation fee: 100 $TEOS. Includes SPL token creation, priority support, and ecosystem benefits."}
                  </AlertDescription>
                </Alert>

                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setStep("details")} className="flex-1">
                    Back
                  </Button>
                  <Button
                    onClick={() => setStep("security")}
                    className="flex-1 bg-primary hover:bg-primary/90"
                    disabled={!tokenData.supply}
                  >
                    Continue to Security
                  </Button>
                </div>
              </div>
            )}

            {step === "security" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-semibold">Anti-Rug Pull Protection</h4>
                      <p className="text-sm text-muted-foreground">Mandatory for investor safety</p>
                    </div>
                  </div>
                  <Switch checked={tokenData.antiRugPull} disabled />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="vesting-toggle" className="text-base font-semibold">
                        Token Vesting Schedule
                      </Label>
                      <p className="text-sm text-muted-foreground">Gradual release prevents dumps</p>
                    </div>
                    <Switch
                      id="vesting-toggle"
                      checked={tokenData.vestingEnabled}
                      onCheckedChange={(checked) => setTokenData({ ...tokenData, vestingEnabled: checked })}
                    />
                  </div>

                  {tokenData.vestingEnabled && (
                    <div className="space-y-2 ml-6">
                      <Label htmlFor="vesting-months">Vesting Period (Months)</Label>
                      <Select
                        value={tokenData.vestingMonths}
                        onValueChange={(value) => setTokenData({ ...tokenData, vestingMonths: value })}
                      >
                        <SelectTrigger id="vesting-months" className="bg-background">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="3">3 Months</SelectItem>
                          <SelectItem value="6">6 Months (Recommended)</SelectItem>
                          <SelectItem value="12">12 Months</SelectItem>
                          <SelectItem value="24">24 Months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="liquidity-toggle" className="text-base font-semibold">
                        Automatic Liquidity Lock
                      </Label>
                      <p className="text-sm text-muted-foreground">Locks LP tokens for trust</p>
                    </div>
                    <Switch
                      id="liquidity-toggle"
                      checked={tokenData.liquidityLockEnabled}
                      onCheckedChange={(checked) => setTokenData({ ...tokenData, liquidityLockEnabled: checked })}
                    />
                  </div>

                  {tokenData.liquidityLockEnabled && (
                    <div className="space-y-2 ml-6">
                      <Label htmlFor="liquidity-months">Lock Period (Months)</Label>
                      <Select
                        value={tokenData.liquidityLockMonths}
                        onValueChange={(value) => setTokenData({ ...tokenData, liquidityLockMonths: value })}
                      >
                        <SelectTrigger id="liquidity-months" className="bg-background">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="6">6 Months</SelectItem>
                          <SelectItem value="12">12 Months (Recommended)</SelectItem>
                          <SelectItem value="24">24 Months</SelectItem>
                          <SelectItem value="36">36 Months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tier-select">Launchpad Tier (ERT Governance)</Label>
                  <Select
                    value={tokenData.tier}
                    onValueChange={(value: any) => setTokenData({ ...tokenData, tier: value })}
                  >
                    <SelectTrigger id="tier-select" className="bg-background">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard - Community Review</SelectItem>
                      <SelectItem value="audited">Audited - Third-party Security Audit</SelectItem>
                      <SelectItem value="vetted">Vetted - ERT DAO Approved</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    Higher tiers require more ERT tokens but provide better visibility and trust ratings
                  </p>
                </div>

                <Alert className="border-primary/50 bg-primary/5">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <AlertDescription>
                    These security measures protect your community and comply with MENA regulations. Vesting and
                    liquidity locks are enforced by smart contracts.
                  </AlertDescription>
                </Alert>

                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setStep("tokenomics")} className="flex-1">
                    Back
                  </Button>
                  <Button onClick={() => setStep("preview")} className="flex-1 bg-primary hover:bg-primary/90">
                    Continue to Preview
                  </Button>
                </div>
              </div>
            )}

            {step === "preview" && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Review Your Token</h3>

                  <div className="grid grid-cols-2 gap-4 p-4 bg-secondary/20 rounded-lg">
                    <div>
                      <p className="text-sm text-muted-foreground">Name</p>
                      <p className="font-medium">{tokenData.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Symbol</p>
                      <p className="font-medium">{tokenData.symbol}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Category</p>
                      <p className="font-medium capitalize">{tokenData.category}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Country</p>
                      <p className="font-medium capitalize">{tokenData.country}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Supply</p>
                      <p className="font-medium">{Number(tokenData.supply).toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Payment</p>
                      <p className="font-medium uppercase">{paymentMethod}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Vesting Enabled</p>
                      <p className="font-medium">{tokenData.vestingEnabled ? "Yes" : "No"}</p>
                    </div>
                    {tokenData.vestingEnabled && (
                      <div>
                        <p className="text-sm text-muted-foreground">Vesting Period</p>
                        <p className="font-medium">{tokenData.vestingMonths} Months</p>
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-muted-foreground">Liquidity Lock Enabled</p>
                      <p className="font-medium">{tokenData.liquidityLockEnabled ? "Yes" : "No"}</p>
                    </div>
                    {tokenData.liquidityLockEnabled && (
                      <div>
                        <p className="text-sm text-muted-foreground">Lock Period</p>
                        <p className="font-medium">{tokenData.liquidityLockMonths} Months</p>
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-muted-foreground">Anti-Rug Pull</p>
                      <p className="font-medium">{tokenData.antiRugPull ? "Yes" : "No"}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Launchpad Tier</p>
                      <p className="font-medium capitalize">{tokenData.tier}</p>
                    </div>
                  </div>

                  {tokenData.description && (
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Description</p>
                      <p className="text-sm">{tokenData.description}</p>
                    </div>
                  )}
                </div>

                <Alert className="border-primary/50 bg-primary/5">
                  <AlertCircle className="h-4 w-4 text-primary" />
                  <AlertDescription>
                    Once created, token supply and decimals cannot be changed. Transaction is final and irreversible.
                    Please review carefully.
                  </AlertDescription>
                </Alert>

                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setStep("security")} className="flex-1" disabled={creating}>
                    Back
                  </Button>
                  <Button
                    onClick={handleCreateToken}
                    className="flex-1 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
                    disabled={creating}
                  >
                    {creating ? (
                      <>Creating Token...</>
                    ) : (
                      <>
                        <Rocket className="mr-2 h-4 w-4" />
                        Create Token Now
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  )
}
