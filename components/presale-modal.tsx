"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { useWallet } from "@/lib/wallet-context"
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import { useToast } from "@/hooks/use-toast"

interface PresaleModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

type Step = 'select' | 'amount' | 'confirm' | 'success'
type PaymentMethod = 'sol' | 'usdt' | 'pi'

export function PresaleModal({ open, onOpenChange }: PresaleModalProps) {
  const { balance } = useWallet()
  const { toast } = useToast()
  const [step, setStep] = useState<Step>('select')
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('sol')
  const [amount, setAmount] = useState('')
  const [processing, setProcessing] = useState(false)

  const tokenPrice = 0.05
  const tokensReceived = amount ? (parseFloat(amount) / tokenPrice).toFixed(2) : '0'

  const handlePurchase = async () => {
    setProcessing(true)
    // Simulate purchase
    await new Promise(resolve => setTimeout(resolve, 2000))
    setProcessing(false)
    setStep('success')
    
    toast({
      title: "Purchase Successful!",
      description: `You've purchased ${tokensReceived} TEOS tokens`,
    })
  }

  const resetAndClose = () => {
    setStep('select')
    setAmount('')
    setPaymentMethod('sol')
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={resetAndClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {step === 'select' && 'Select Payment Method'}
            {step === 'amount' && 'Enter Purchase Amount'}
            {step === 'confirm' && 'Confirm Purchase'}
            {step === 'success' && 'Purchase Complete!'}
          </DialogTitle>
          <DialogDescription>
            {step === 'select' && 'Choose how you want to pay for TEOS tokens'}
            {step === 'amount' && `1 TEOS = $${tokenPrice} USD`}
            {step === 'confirm' && 'Review your purchase details'}
            {step === 'success' && 'Your tokens will be available for claiming after TGE'}
          </DialogDescription>
        </DialogHeader>

        {/* Step 1: Select Payment */}
        {step === 'select' && (
          <div className="space-y-4 py-4">
            <RadioGroup value={paymentMethod} onValueChange={(v) => setPaymentMethod(v as PaymentMethod)}>
              <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                <RadioGroupItem value="sol" id="sol" />
                <Label htmlFor="sol" className="flex-1 cursor-pointer">
                  <div className="font-semibold">Solana (SOL)</div>
                  <div className="text-xs text-muted-foreground">Balance: {balance.toFixed(4)} SOL</div>
                </Label>
              </div>
              <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                <RadioGroupItem value="usdt" id="usdt" />
                <Label htmlFor="usdt" className="flex-1 cursor-pointer">
                  <div className="font-semibold">Tether (USDT)</div>
                  <div className="text-xs text-muted-foreground">Stablecoin payment</div>
                </Label>
              </div>
              <div className="flex items-center space-x-3 border rounded-lg p-4 cursor-pointer hover:bg-muted/50">
                <RadioGroupItem value="pi" id="pi" />
                <Label htmlFor="pi" className="flex-1 cursor-pointer">
                  <div className="font-semibold">Pi Network (PI)</div>
                  <div className="text-xs text-muted-foreground">Pay with Pi</div>
                </Label>
              </div>
            </RadioGroup>

            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => setStep('amount')}
            >
              Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Step 2: Enter Amount */}
        {step === 'amount' && (
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount ({paymentMethod.toUpperCase()})</Label>
              <Input
                id="amount"
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="0"
                step="0.01"
              />
            </div>

            <div className="bg-muted/50 rounded-lg p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">You pay</span>
                <span className="font-semibold">{amount || '0'} {paymentMethod.toUpperCase()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">You receive</span>
                <span className="font-semibold">{tokensReceived} TEOS</span>
              </div>
              <Separator />
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Price per token</span>
                <span className="font-semibold">${tokenPrice}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" className="flex-1" onClick={() => setStep('select')}>
                Back
              </Button>
              <Button 
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => setStep('confirm')}
                disabled={!amount || parseFloat(amount) <= 0}
              >
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Confirm */}
        {step === 'confirm' && (
          <div className="space-y-4 py-4">
            <div className="bg-muted/50 rounded-lg p-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Payment Method</span>
                <span className="text-sm font-semibold">{paymentMethod.toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Amount Paying</span>
                <span className="text-sm font-semibold">{amount} {paymentMethod.toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">TEOS Tokens</span>
                <span className="text-sm font-semibold">{tokensReceived} TEOS</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Vesting</span>
                <span className="text-sm font-semibold">25% at TGE</span>
              </div>
            </div>

            <div className="text-xs text-muted-foreground bg-muted/30 p-3 rounded">
              By confirming, you agree to the token sale terms. 25% of tokens unlock at Token Generation Event, remaining vest over 6 months.
            </div>

            <div className="flex gap-2">
              <Button variant="outline" className="flex-1" onClick={() => setStep('amount')}>
                Back
              </Button>
              <Button 
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={handlePurchase}
                disabled={processing}
              >
                {processing ? 'Processing...' : 'Confirm Purchase'}
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Success */}
        {step === 'success' && (
          <div className="space-y-4 py-4 text-center">
            <div className="mx-auto h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Purchase Successful!</h3>
              <p className="text-sm text-muted-foreground">
                You've successfully purchased {tokensReceived} TEOS tokens
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tokens Purchased</span>
                <span className="font-semibold">{tokensReceived} TEOS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Immediately Claimable</span>
                <span className="font-semibold">{(parseFloat(tokensReceived) * 0.25).toFixed(2)} TEOS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Vesting</span>
                <span className="font-semibold">{(parseFloat(tokensReceived) * 0.75).toFixed(2)} TEOS</span>
              </div>
            </div>

            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={resetAndClose}
            >
              Done
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
