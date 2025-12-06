import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <Card className="p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last Updated: December 5, 2025</p>

          <div className="space-y-6 text-sm leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
              <p className="text-muted-foreground">
                TeosPump ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information when you use our decentralized application
                (dApp) and services within the Pi Network ecosystem.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-2 mt-4">2.1 Wallet Information</h3>
              <p className="text-muted-foreground mb-3">
                We collect your public wallet addresses when you connect to TeosPump via Phantom, Solflare,
                WalletConnect, or Pi Wallet. This information is necessary for token transactions and blockchain
                interactions.
              </p>
              <h3 className="text-xl font-semibold mb-2 mt-4">2.2 KYC/AML Data</h3>
              <p className="text-muted-foreground mb-3">
                For regulatory compliance in MENA regions, we collect identity verification information including:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Full legal name</li>
                <li>Date of birth</li>
                <li>Nationality and country of residence</li>
                <li>Government-issued ID documents</li>
                <li>Proof of address</li>
              </ul>
              <h3 className="text-xl font-semibold mb-2 mt-4">2.3 Transaction Data</h3>
              <p className="text-muted-foreground">
                All blockchain transactions are recorded on-chain and are publicly visible. We also maintain internal
                records of token launches, presales, and claims for platform analytics.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To facilitate token creation, presales, and claims</li>
                <li>To verify your identity for regulatory compliance (KYC/AML)</li>
                <li>To prevent fraud, scams, and unauthorized activities</li>
                <li>To improve platform security and user experience</li>
                <li>To communicate important updates about your tokens and campaigns</li>
                <li>To comply with legal obligations and law enforcement requests</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. Data Security</h2>
              <p className="text-muted-foreground mb-3">We implement industry-standard security measures including:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>End-to-end encryption for sensitive KYC data</li>
                <li>Secure storage with access controls and monitoring</li>
                <li>Regular security audits and penetration testing</li>
                <li>Anti-bot protection and rate limiting</li>
                <li>Smart contract audits for on-chain operations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Data Sharing</h2>
              <p className="text-muted-foreground mb-3">
                We do not sell your personal information. We may share data with:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Third-party KYC/AML verification providers</li>
                <li>Blockchain networks (Solana, Pi Network) for transaction processing</li>
                <li>Legal authorities when required by law</li>
                <li>Service providers who assist with platform operations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
              <p className="text-muted-foreground mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Access your personal data</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your data (subject to legal retention requirements)</li>
                <li>Withdraw consent for data processing</li>
                <li>Object to certain data processing activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. International Data Transfers</h2>
              <p className="text-muted-foreground">
                TeosPump operates globally. Your data may be transferred to and processed in countries outside your
                jurisdiction. We ensure appropriate safeguards are in place for such transfers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. Children's Privacy</h2>
              <p className="text-muted-foreground">
                TeosPump is not intended for users under 18 years of age. We do not knowingly collect data from
                children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">9. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy periodically. We will notify users of material changes via email or
                platform notifications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">10. Contact Us</h2>
              <p className="text-muted-foreground mb-3">For privacy-related questions or requests, contact:</p>
              <div className="bg-muted/50 rounded-lg p-4 space-y-1 text-muted-foreground">
                <p>
                  <strong>TEOS Egypt - Elmahrosa International</strong>
                </p>
                <p>Established 2007</p>
                <p>Email: privacy@teosegypt.com</p>
                <p>Website: https://teosegypt.com</p>
              </div>
            </section>
          </div>
        </Card>
      </div>
    </main>
  )
}
