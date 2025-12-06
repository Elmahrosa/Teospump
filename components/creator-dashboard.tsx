"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useWallet } from "@/lib/wallet-context"
import { Rocket, TrendingUp, Users, DollarSign } from "lucide-react"

export function CreatorDashboard() {
  const { connected, hasBadge } = useWallet()

  if (!connected || !hasBadge) {
    return null
  }

  return (
    <section className="py-12 md:py-20 bg-secondary/20" id="dashboard">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Creator Dashboard</h2>
          <p className="text-muted-foreground">Your tokens and analytics will appear here</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-card/50">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tokens">My Tokens</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="p-6 bg-card/80 backdrop-blur">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Total Tokens</p>
                  <Rocket className="h-4 w-4 text-primary" />
                </div>
                <p className="text-3xl font-bold">0</p>
                <p className="text-xs text-muted-foreground mt-1">Create your first token</p>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Total Volume</p>
                  <DollarSign className="h-4 w-4 text-primary" />
                </div>
                <p className="text-3xl font-bold">$0</p>
                <p className="text-xs text-muted-foreground mt-1">Awaiting launches</p>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Total Holders</p>
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <p className="text-3xl font-bold">0</p>
                <p className="text-xs text-muted-foreground mt-1">Build your community</p>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">Avg. Growth</p>
                  <TrendingUp className="h-4 w-4 text-primary" />
                </div>
                <p className="text-3xl font-bold">--</p>
                <p className="text-xs text-muted-foreground mt-1">No data yet</p>
              </Card>
            </div>

            <Card className="p-12 bg-card/80 backdrop-blur text-center">
              <Rocket className="h-16 w-16 text-primary mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">No Tokens Yet</h3>
              <p className="text-muted-foreground">Launch your first token to see performance metrics and analytics</p>
            </Card>
          </TabsContent>

          <TabsContent value="tokens">
            <Card className="p-12 bg-card/80 backdrop-blur text-center">
              <p className="text-muted-foreground">Your token management interface</p>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="p-12 bg-card/80 backdrop-blur text-center">
              <p className="text-muted-foreground">Advanced analytics and insights</p>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="p-12 bg-card/80 backdrop-blur text-center">
              <p className="text-muted-foreground">Creator settings and preferences</p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
