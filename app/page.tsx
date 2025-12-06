import { EgyptianHeader } from "@/components/egyptian-header"
import { HeroSection } from "@/components/hero-section"
import { LiveStatsBar } from "@/components/live-stats-bar"
import { TokenCreator } from "@/components/token-creator"
import { TrendingTokens } from "@/components/trending-tokens"
import { CreatorDashboard } from "@/components/creator-dashboard"
import { PresaleSection } from "@/components/presale-section"
import { VestingDashboard } from "@/components/vesting-dashboard"
import { AirdropSection } from "@/components/airdrop-section"
import { AdminDashboard } from "@/components/admin-dashboard"
import { Footer } from "@/components/footer"
import { NotificationsPanel } from "@/components/notifications-panel"
import { WalletProvider } from "@/lib/wallet-context"
import { KYCVerification } from "@/components/kyc-verification"
import { FounderDashboard } from "@/components/founder-dashboard"
import { VestingLockup } from "@/components/vesting-lockup"
import { FiatOnRamp } from "@/components/fiat-onramp"
import { PiApprovalBanner } from "@/components/pi-approval-banner"

export default function HomePage() {
  return (
    <WalletProvider>
      <div className="min-h-screen bg-background">
        <PiApprovalBanner />
        <EgyptianHeader />
        <LiveStatsBar />
        <main>
          <HeroSection />
          <FounderDashboard />
          <TrendingTokens />
          <KYCVerification />
          <TokenCreator />
          <VestingLockup />
          <FiatOnRamp />
          <CreatorDashboard />
          <PresaleSection />
          <VestingDashboard />
          <AirdropSection />
          <AdminDashboard />
        </main>
        <Footer />
        <NotificationsPanel />
      </div>
    </WalletProvider>
  )
}
