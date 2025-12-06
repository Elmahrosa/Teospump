"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ShieldCheck, Upload, AlertCircle, CheckCircle2 } from "lucide-react"
import { useWallet } from "@/lib/wallet-context"

export function KYCVerification() {
  const { connected } = useWallet()
  const [step, setStep] = useState<"identity" | "documents" | "review">("identity")
  const [submitting, setSubmitting] = useState(false)
  const [kycData, setKycData] = useState({
    fullName: "",
    dateOfBirth: "",
    country: "egypt",
    idType: "national-id",
    idNumber: "",
    address: "",
    phone: "",
    idDocument: null as File | null,
    proofOfAddress: null as File | null,
    selfie: null as File | null,
  })

  const handleFileUpload = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setKycData({ ...kycData, [field]: e.target.files[0] })
    }
  }

  const handleSubmitKYC = async () => {
    setSubmitting(true)
    console.log("[v0] Submitting KYC data for verification")
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setSubmitting(false)
    alert("KYC submitted! Review typically takes 24-48 hours.")
  }

  if (!connected) {
    return null
  }

  return (
    <section className="py-12 bg-secondary/10 relative overflow-hidden" id="kyc">
      <div className="absolute inset-0 pharaoh-pattern pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <ShieldCheck className="h-12 w-12 text-accent mx-auto mb-4 golden-glow" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Creator KYC Verification</h2>
          <p className="text-muted-foreground text-lg">
            Complete KYC to unlock token creation. Required for MENA regulatory compliance and ecosystem trust.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto bg-card/80 backdrop-blur border-accent/20 hieroglyphic-accent golden-glow">
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className={`flex items-center gap-2 ${step === "identity" ? "text-accent" : "text-muted-foreground"}`}>
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center ${step === "identity" ? "bg-accent text-accent-foreground" : "bg-muted"}`}
              >
                1
              </div>
              <span className="hidden sm:inline font-medium">Identity</span>
            </div>
            <div className="flex-1 h-px bg-border mx-2" />
            <div
              className={`flex items-center gap-2 ${step === "documents" ? "text-accent" : "text-muted-foreground"}`}
            >
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center ${step === "documents" ? "bg-accent text-accent-foreground" : "bg-muted"}`}
              >
                2
              </div>
              <span className="hidden sm:inline font-medium">Documents</span>
            </div>
            <div className="flex-1 h-px bg-border mx-2" />
            <div className={`flex items-center gap-2 ${step === "review" ? "text-accent" : "text-muted-foreground"}`}>
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center ${step === "review" ? "bg-accent text-accent-foreground" : "bg-muted"}`}
              >
                3
              </div>
              <span className="hidden sm:inline font-medium">Review</span>
            </div>
          </div>

          <div className="p-6 md:p-8">
            {step === "identity" && (
              <div className="space-y-6">
                <Alert className="border-accent/50 bg-accent/5">
                  <AlertCircle className="h-4 w-4 text-accent" />
                  <AlertDescription>
                    All information is encrypted and stored securely. KYC data is used only for compliance and fraud
                    prevention.
                  </AlertDescription>
                </Alert>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="full-name">Full Legal Name</Label>
                    <Input
                      id="full-name"
                      placeholder="As shown on ID"
                      value={kycData.fullName}
                      onChange={(e) => setKycData({ ...kycData, fullName: e.target.value })}
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input
                      id="dob"
                      type="date"
                      value={kycData.dateOfBirth}
                      onChange={(e) => setKycData({ ...kycData, dateOfBirth: e.target.value })}
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">Country of Residence</Label>
                  <Select value={kycData.country} onValueChange={(value) => setKycData({ ...kycData, country: value })}>
                    <SelectTrigger id="country" className="bg-background">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="egypt">🇪🇬 Egypt</SelectItem>
                      <SelectItem value="saudi">🇸🇦 Saudi Arabia</SelectItem>
                      <SelectItem value="uae">🇦🇪 UAE</SelectItem>
                      <SelectItem value="jordan">🇯🇴 Jordan</SelectItem>
                      <SelectItem value="morocco">🇲🇦 Morocco</SelectItem>
                      <SelectItem value="tunisia">🇹🇳 Tunisia</SelectItem>
                      <SelectItem value="lebanon">🇱🇧 Lebanon</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+20 XXX XXX XXXX"
                    value={kycData.phone}
                    onChange={(e) => setKycData({ ...kycData, phone: e.target.value })}
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Residential Address</Label>
                  <Input
                    id="address"
                    placeholder="Full address"
                    value={kycData.address}
                    onChange={(e) => setKycData({ ...kycData, address: e.target.value })}
                    className="bg-background"
                  />
                </div>

                <Button
                  onClick={() => setStep("documents")}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  disabled={!kycData.fullName || !kycData.dateOfBirth || !kycData.phone}
                >
                  Continue to Documents
                </Button>
              </div>
            )}

            {step === "documents" && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="id-type">ID Document Type</Label>
                  <Select value={kycData.idType} onValueChange={(value) => setKycData({ ...kycData, idType: value })}>
                    <SelectTrigger id="id-type" className="bg-background">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="national-id">National ID Card</SelectItem>
                      <SelectItem value="passport">Passport</SelectItem>
                      <SelectItem value="drivers-license">Driver's License</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="id-number">ID Number</Label>
                  <Input
                    id="id-number"
                    placeholder="ID number"
                    value={kycData.idNumber}
                    onChange={(e) => setKycData({ ...kycData, idNumber: e.target.value })}
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Upload ID Document</Label>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("id-doc")?.click()}
                    className="w-full border-accent text-accent"
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    {kycData.idDocument ? kycData.idDocument.name : "Upload ID (Front & Back)"}
                  </Button>
                  <input
                    id="id-doc"
                    type="file"
                    accept="image/*,application/pdf"
                    className="hidden"
                    onChange={handleFileUpload("idDocument")}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Proof of Address</Label>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("proof-address")?.click()}
                    className="w-full border-accent text-accent"
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    {kycData.proofOfAddress ? kycData.proofOfAddress.name : "Upload Utility Bill or Bank Statement"}
                  </Button>
                  <input
                    id="proof-address"
                    type="file"
                    accept="image/*,application/pdf"
                    className="hidden"
                    onChange={handleFileUpload("proofOfAddress")}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Selfie Verification</Label>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("selfie")?.click()}
                    className="w-full border-accent text-accent"
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    {kycData.selfie ? kycData.selfie.name : "Upload Selfie with ID"}
                  </Button>
                  <input
                    id="selfie"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileUpload("selfie")}
                  />
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setStep("identity")} className="flex-1">
                    Back
                  </Button>
                  <Button
                    onClick={() => setStep("review")}
                    className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                    disabled={!kycData.idDocument || !kycData.proofOfAddress || !kycData.selfie}
                  >
                    Review Submission
                  </Button>
                </div>
              </div>
            )}

            {step === "review" && (
              <div className="space-y-6">
                <Alert className="border-accent/50 bg-accent/5">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <AlertDescription>
                    Please review your information. Once submitted, changes require contacting support.
                  </AlertDescription>
                </Alert>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 p-4 bg-secondary/20 rounded-lg">
                    <div>
                      <p className="text-sm text-muted-foreground">Full Name</p>
                      <p className="font-medium">{kycData.fullName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Date of Birth</p>
                      <p className="font-medium">{kycData.dateOfBirth}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Country</p>
                      <p className="font-medium capitalize">{kycData.country}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">ID Type</p>
                      <p className="font-medium capitalize">{kycData.idType.replace("-", " ")}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Documents Uploaded:</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                        ID Document
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                        Proof of Address
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                        Selfie Verification
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setStep("documents")}
                    className="flex-1"
                    disabled={submitting}
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleSubmitKYC}
                    className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                    disabled={submitting}
                  >
                    {submitting ? "Submitting..." : "Submit KYC"}
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
