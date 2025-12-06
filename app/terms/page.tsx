import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <Card className="p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last Updated: December 5, 2025</p>

          <div className="space-y-6 text-sm leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using TeosPump, you agree to be bound by these Terms of Service and all applicable laws
                and regulations. If you do not agree with these terms, you are prohibited from using this platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">2. Platform Description</h2>
              <p className="text-muted-foreground">
                TeosPump is a decentralized token launchpad built on Solana and integrated with the Pi Network
                ecosystem. The platform enables users to create, launch, and trade SPL tokens with features including
                presales, vesting schedules, airdrops, and automated liquidity management.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. Eligibility</h2>
              <p className="text-muted-foreground mb-3">To use TeosPump, you must:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Be at least 18 years of age</li>
                <li>Have the legal capacity to enter into binding contracts</li>
                <li>Not be located in a restricted jurisdiction</li>
                <li>Complete KYC/AML verification for token creation</li>
                <li>Not be involved in any illegal activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. KYC/AML Requirements</h2>
              <p className="text-muted-foreground mb-3">
                Token creators must complete mandatory identity verification:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Submit valid government-issued identification</li>
                <li>Provide proof of address</li>
                <li>Complete liveness verification</li>
                <li>Undergo screening for sanctions and PEP status</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                Failure to complete KYC may result in account suspension and fund freezing in accordance with regulatory
                requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">5. Token Creation and Launches</h2>
              <h3 className="text-xl font-semibold mb-2 mt-4">5.1 Creator Responsibilities</h3>
              <p className="text-muted-foreground mb-3">Token creators are solely responsible for:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Accuracy of token information and branding</li>
                <li>Legal compliance in their jurisdiction</li>
                <li>Delivering on project promises and roadmaps</li>
                <li>Managing community expectations</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2 mt-4">5.2 Anti-Rug Pull Protection</h3>
              <p className="text-muted-foreground mb-3">TeosPump implements mandatory safeguards:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Vesting schedules for team tokens</li>
                <li>Automatic liquidity locking post-presale</li>
                <li>Smart contract enforcement of tokenomics</li>
                <li>Transparent fund withdrawal limits</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Fees and Payments</h2>
              <p className="text-muted-foreground mb-3">TeosPump charges fees for platform services:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Token creation fees payable in SOL or $TEOS</li>
                <li>Transaction fees for trades and transfers</li>
                <li>Presale platform fees (percentage of funds raised)</li>
                <li>Fiat on-ramp conversion fees (EGP, USD, SAR, AED)</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                All fees are clearly displayed before transactions and are non-refundable unless required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Risks and Disclaimers</h2>
              <p className="text-muted-foreground mb-3">
                Cryptocurrency and token investments carry significant risks:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Token values can be highly volatile and may result in total loss</li>
                <li>Smart contracts may contain bugs or vulnerabilities</li>
                <li>Blockchain transactions are irreversible</li>
                <li>Projects may fail to deliver on promises</li>
                <li>Regulatory changes may impact token legality</li>
              </ul>
              <p className="text-muted-foreground mt-3 font-semibold">
                YOU ACKNOWLEDGE THAT YOU USE TEOSPUMP AT YOUR OWN RISK. WE ARE NOT RESPONSIBLE FOR ANY LOSSES INCURRED
                FROM TOKEN INVESTMENTS.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. Prohibited Activities</h2>
              <p className="text-muted-foreground mb-3">Users must not:</p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Create fraudulent or misleading tokens</li>
                <li>Manipulate token prices or trading volumes</li>
                <li>Use bots or automated systems (anti-bot measures enforced)</li>
                <li>Engage in money laundering or terrorist financing</li>
                <li>Violate intellectual property rights</li>
                <li>Attempt to hack or exploit platform vulnerabilities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">9. Intellectual Property</h2>
              <p className="text-muted-foreground">
                TeosPump, TEOS Egypt branding, Egyptian-themed design elements, and platform code are protected by
                intellectual property laws. Elmahrosa International (est. 2007) retains all rights. Users may not copy,
                modify, or distribute platform materials without permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">10. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, TEOSPUMP AND ELMAHROSA INTERNATIONAL SHALL NOT BE LIABLE FOR ANY
                INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE PLATFORM.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">11. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms shall be governed by the laws of Egypt and international blockchain regulations. Disputes
                shall be resolved through arbitration in Cairo, Egypt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">12. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms at any time. Continued use of the platform after changes
                constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">13. Contact Information</h2>
              <div className="bg-muted/50 rounded-lg p-4 space-y-1 text-muted-foreground">
                <p>
                  <strong>TEOS Egypt - Elmahrosa International</strong>
                </p>
                <p>Established 2007</p>
                <p>Email: legal@teosegypt.com</p>
                <p>Website: https://teosegypt.com</p>
                <p>Support: https://t.me/teosegypt</p>
              </div>
            </section>
          </div>
        </Card>
      </div>
    </main>
  )
}
