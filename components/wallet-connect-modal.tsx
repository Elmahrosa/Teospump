"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useWallet } from "@/lib/wallet-context"
import { Wallet, Loader2 } from 'lucide-react'
import { useState } from 'react'

interface WalletConnectModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function WalletConnectModal({ open, onOpenChange }: WalletConnectModalProps) {
  const { connect } = useWallet()
  const [connecting, setConnecting] = useState(false)

  const handleConnect = async (type: 'phantom' | 'solflare' | 'walletconnect' | 'pi') => {
    setConnecting(true)
    try {
      await connect(type)
      onOpenChange(false)
    } catch (error) {
      console.error("[v0] Wallet connection error:", error)
    } finally {
      setConnecting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Connect Wallet</DialogTitle>
          <DialogDescription>
            Choose your preferred wallet to access TeosPump
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-3 py-4">
          <Button
            variant="outline"
            className="w-full justify-start h-auto p-4"
            onClick={() => handleConnect('phantom')}
            disabled={connecting}
          >
            {connecting ? (
              <Loader2 className="mr-3 h-5 w-5 animate-spin" />
            ) : (
              <div className="mr-3 h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Wallet className="h-5 w-5 text-primary" />
              </div>
            )}
            <div className="text-left">
              <div className="font-semibold">Phantom</div>
              <div className="text-xs text-muted-foreground">Solana wallet</div>
            </div>
          </Button>

          <Button
            variant="outline"
            className="w-full justify-start h-auto p-4"
            onClick={() => handleConnect('solflare')}
            disabled={connecting}
          >
            {connecting ? (
              <Loader2 className="mr-3 h-5 w-5 animate-spin" />
            ) : (
              <div className="mr-3 h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Wallet className="h-5 w-5 text-primary" />
              </div>
            )}
            <div className="text-left">
              <div className="font-semibold">Solflare</div>
              <div className="text-xs text-muted-foreground">Solana wallet</div>
            </div>
          </Button>

          <Button
            variant="outline"
            className="w-full justify-start h-auto p-4"
            onClick={() => handleConnect('walletconnect')}
            disabled={connecting}
          >
            {connecting ? (
              <Loader2 className="mr-3 h-5 w-5 animate-spin" />
            ) : (
              <div className="mr-3 h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Wallet className="h-5 w-5 text-primary" />
              </div>
            )}
            <div className="text-left">
              <div className="font-semibold">WalletConnect</div>
              <div className="text-xs text-muted-foreground">Multi-chain support</div>
            </div>
          </Button>

          <Button
            variant="outline"
            className="w-full justify-start h-auto p-4"
            onClick={() => handleConnect('pi')}
            disabled={connecting}
          >
            {connecting ? (
              <Loader2 className="mr-3 h-5 w-5 animate-spin" />
            ) : (
              <div className="mr-3 h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <Wallet className="h-5 w-5 text-primary" />
              </div>
            )}
            <div className="text-left">
              <div className="font-semibold">Pi Wallet</div>
              <div className="text-xs text-muted-foreground">Pi Network integration</div>
            </div>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
