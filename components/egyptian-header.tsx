"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wallet, Menu, X, ShieldCheck, Globe } from "lucide-react"
import { useState } from "react"
import { useWallet } from "@/lib/wallet-context"
import { WalletConnectModal } from "./wallet-connect-modal"
import { PetitionModal } from "./petition-modal"

export function EgyptianHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [walletModalOpen, setWalletModalOpen] = useState(false)
  const [petitionModalOpen, setPetitionModalOpen] = useState(false)
  const { connected, address, disconnect, hasBadge } = useWallet()

  const handleWalletClick = () => {
    if (connected) {
      disconnect()
    } else {
      setWalletModalOpen(true)
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg shadow-primary/20">
                T
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  TeosPump
                </span>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Globe className="h-3 w-3" />
                  <span>TEOS Egypt Ecosystem</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#create" className="text-sm font-medium hover:text-primary transition-colors">
                Create
              </a>
              <a href="#trending" className="text-sm font-medium hover:text-primary transition-colors">
                Trending
              </a>
              <a href="#presale" className="text-sm font-medium hover:text-primary transition-colors">
                Presale
              </a>
              <a href="#airdrop" className="text-sm font-medium hover:text-primary transition-colors">
                Airdrop
              </a>
              <a href="#dashboard" className="text-sm font-medium hover:text-primary transition-colors">
                Dashboard
              </a>
            </nav>

            {/* Wallet Section */}
            <div className="hidden md:flex items-center gap-3">
              {connected && !hasBadge && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPetitionModalOpen(true)}
                  className="border-accent text-accent hover:bg-accent/10"
                >
                  <ShieldCheck className="mr-2 h-4 w-4" />
                  Verify Badge
                </Button>
              )}

              {connected && hasBadge && (
                <Badge className="bg-primary/10 text-primary border-primary">
                  <ShieldCheck className="mr-1 h-3 w-3" />
                  Verified Pioneer
                </Badge>
              )}

              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
                onClick={handleWalletClick}
              >
                <Wallet className="mr-2 h-4 w-4" />
                {connected
                  ? `${address?.substring(0, 4)}...${address?.substring(address.length - 4)}`
                  : "Connect Wallet"}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-primary/20">
              <nav className="flex flex-col gap-4">
                <a
                  href="#create"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Create Token
                </a>
                <a
                  href="#trending"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Trending
                </a>
                <a
                  href="#presale"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Presale
                </a>
                <a
                  href="#airdrop"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Airdrop
                </a>
                <a
                  href="#dashboard"
                  className="text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </a>

                {connected && !hasBadge && (
                  <Button
                    variant="outline"
                    onClick={() => {
                      setPetitionModalOpen(true)
                      setMobileMenuOpen(false)
                    }}
                    className="border-accent text-accent hover:bg-accent/10 w-full"
                  >
                    <ShieldCheck className="mr-2 h-4 w-4" />
                    Verify Badge
                  </Button>
                )}

                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                  onClick={() => {
                    handleWalletClick()
                    setMobileMenuOpen(false)
                  }}
                >
                  <Wallet className="mr-2 h-4 w-4" />
                  {connected
                    ? `${address?.substring(0, 6)}...${address?.substring(address.length - 4)}`
                    : "Connect Wallet"}
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      <WalletConnectModal open={walletModalOpen} onOpenChange={setWalletModalOpen} />
      <PetitionModal open={petitionModalOpen} onOpenChange={setPetitionModalOpen} />
    </>
  )
}
