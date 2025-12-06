"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type WalletType = "phantom" | "solflare" | "walletconnect" | "pi" | null

interface WalletContextType {
  connected: boolean
  walletType: WalletType
  address: string | null
  balance: number
  connect: (type: WalletType) => Promise<void>
  disconnect: () => void
  signPetition: () => Promise<boolean>
  hasBadge: boolean
  piBalance: number
  payWithPi: (amount: number, memo: string) => Promise<boolean>
}

const WalletContext = createContext<WalletContextType | undefined>(undefined)

export function WalletProvider({ children }: { children: ReactNode }) {
  const [connected, setConnected] = useState(false)
  const [walletType, setWalletType] = useState<WalletType>(null)
  const [address, setAddress] = useState<string | null>(null)
  const [balance, setBalance] = useState(0)
  const [hasBadge, setHasBadge] = useState(false)
  const [piBalance, setPiBalance] = useState(0)

  useEffect(() => {
    // Load Pi SDK script
    const script = document.createElement("script")
    script.src = "https://sdk.minepi.com/pi-sdk.js"
    script.async = true
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  const connect = async (type: WalletType) => {
    console.log("[v0] Connecting to wallet:", type)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (type === "pi" && typeof window !== "undefined" && (window as any).Pi) {
      try {
        const piSDK = (window as any).Pi
        await piSDK.init({ version: "2.0", sandbox: true })
        const auth = await piSDK.authenticate(["username", "payments"], () => {})
        const mockAddress = `PI${auth.user.uid.substring(0, 8)}`
        setAddress(mockAddress)
        setPiBalance(Math.random() * 500)
      } catch (error) {
        console.error("[v0] Pi authentication error:", error)
      }
    } else {
      const mockAddress = `${type?.substring(0, 2).toUpperCase()}${Math.random().toString(36).substring(2, 15)}`
      setAddress(mockAddress)
    }

    setConnected(true)
    setWalletType(type)
    setBalance(Math.random() * 1000)

    const badgeStatus = localStorage.getItem("badge-verified")
    setHasBadge(badgeStatus === "true")
  }

  const disconnect = () => {
    setConnected(false)
    setWalletType(null)
    setAddress(null)
    setBalance(0)
    setPiBalance(0)
  }

  const signPetition = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setHasBadge(true)
    localStorage.setItem("badge-verified", "true")
    return true
  }

  const payWithPi = async (amount: number, memo: string): Promise<boolean> => {
    if (walletType !== "pi" || typeof window === "undefined") return false

    try {
      const piSDK = (window as any).Pi
      const payment = await piSDK.createPayment(
        {
          amount,
          memo,
          metadata: { productId: "token-creation" },
        },
        {
          onReadyForServerApproval: (paymentId: string) => {
            console.log("[v0] Pi payment ready:", paymentId)
          },
          onReadyForServerCompletion: (paymentId: string, txid: string) => {
            console.log("[v0] Pi payment completed:", paymentId, txid)
          },
          onCancel: (paymentId: string) => {
            console.log("[v0] Pi payment cancelled:", paymentId)
          },
          onError: (error: any, payment: any) => {
            console.error("[v0] Pi payment error:", error)
          },
        },
      )

      return true
    } catch (error) {
      console.error("[v0] Pi payment failed:", error)
      return false
    }
  }

  return (
    <WalletContext.Provider
      value={{
        connected,
        walletType,
        address,
        balance,
        connect,
        disconnect,
        signPetition,
        hasBadge,
        piBalance,
        payWithPi,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export function useWallet() {
  const context = useContext(WalletContext)
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider")
  }
  return context
}
