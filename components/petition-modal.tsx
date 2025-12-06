"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useWallet } from "@/lib/wallet-context"
import { Shield, Loader2 } from 'lucide-react'
import { useState } from 'react'

interface PetitionModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PetitionModal({ open, onOpenChange }: PetitionModalProps) {
  const { signPetition } = useWallet()
  const [agreed, setAgreed] = useState(false)
  const [signing, setSigning] = useState(false)

  const handleSign = async () => {
    if (!agreed) return
    
    setSigning(true)
    try {
      await signPetition()
      onOpenChange(false)
    } catch (error) {
      console.error("[v0] Petition signing error:", error)
    } finally {
      setSigning(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <div className="mx-auto h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <DialogTitle className="text-center">Civic Commitment Petition</DialogTitle>
          <DialogDescription className="text-center">
            Sign the petition to verify your commitment to civic participation
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="bg-muted/50 p-4 rounded-lg space-y-2 text-sm">
            <p className="font-semibold">By signing this petition, I commit to:</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Participate in transparent governance</li>
              <li>Support community-driven initiatives</li>
              <li>Uphold ethical blockchain practices</li>
              <li>Verify my identity for anti-bot protection</li>
            </ul>
          </div>

          <div className="flex items-start gap-2">
            <Checkbox 
              id="agree" 
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked as boolean)}
            />
            <label 
              htmlFor="agree" 
              className="text-sm leading-relaxed cursor-pointer"
            >
              I have read and agree to the civic commitment terms and understand 
              this will verify my badge for presale access
            </label>
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={signing}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSign}
            disabled={!agreed || signing}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            {signing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing...
              </>
            ) : (
              'Sign Petition'
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
