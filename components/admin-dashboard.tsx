"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useWallet } from "@/lib/wallet-context"
import { Shield, TrendingUp, Users, DollarSign, Activity, Droplet, Download, Settings, Lock, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import { useToast } from "@/hooks/use-toast"

export function AdminDashboard() {
  const { connected, address } = useWallet()
  const { toast } = useToast()
  const [withdrawing, setWithdrawing] = useState(false)
  const [creatingLP, setCreatingLP] = useState(false)

  // Mock admin check - in production would verify from smart contract
  const isAdmin = address?.startsWith('PH') || address?.startsWith('SO')

  const handleWithdraw = async () => {
    setWithdrawing(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setWithdrawing(false)
    toast({
      title: "Funds Withdrawn",
      description: "Presale funds have been sent to treasury wallet",
    })
  }

  const handleCreateLP = async () => {
    setCreatingLP(true)
    await new Promise(resolve => setTimeout(resolve, 3000))
    setCreatingLP(false)
    toast({
      title: "Liquidity Pool Created",
      description: "70% of funds added to Raydium LP successfully",
    })
  }

  if (!connected) {
    return (
      <section id="dashboard" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center border-primary/20">
            <CardContent className="pt-12 pb-12">
              <div className="mx-auto h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Admin Access Required</h3>
              <p className="text-muted-foreground mb-6">
                Connect your admin wallet to access the dashboard
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  if (!isAdmin) {
    return (
      <section id="dashboard" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center border-destructive/20">
            <CardContent className="pt-12 pb-12">
              <div className="mx-auto h-16 w-16 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
                <AlertCircle className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Unauthorized Access</h3>
              <p className="text-muted-foreground mb-6">
                This wallet does not have admin privileges
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="dashboard" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-3xl md:text-4xl font-bold">Admin Dashboard</h2>
              <Badge className="bg-primary text-primary-foreground">
                <Shield className="mr-1 h-3 w-3" />
                Admin
              </Badge>
            </div>
            <p className="text-muted-foreground">
              Manage presale, liquidity, analytics, and platform operations
            </p>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="liquidity">Liquidity</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="border-primary/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Raised</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$3.35M</div>
                  <p className="text-xs text-muted-foreground">67% of target</p>
                  <Progress value={67} className="mt-2 h-1" />
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Participants</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12,847</div>
                  <p className="text-xs text-muted-foreground">+2,340 this week</p>
                  <Progress value={85} className="mt-2 h-1" />
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Verified Users</CardTitle>
                  <Shield className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">10,234</div>
                  <p className="text-xs text-muted-foreground">79.7% verified</p>
                  <Progress value={79.7} className="mt-2 h-1" />
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Tokens Sold</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">67M</div>
                  <p className="text-xs text-muted-foreground">33M remaining</p>
                  <Progress value={67} className="mt-2 h-1" />
                </CardContent>
              </Card>
            </div>

            {/* Treasury Management */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Treasury Balance</CardTitle>
                  <CardDescription>Available funds for withdrawal</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">SOL Balance</span>
                      <span className="font-semibold">23,456.78 SOL</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">USDT Balance</span>
                      <span className="font-semibold">1,234,567 USDT</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Pi Balance</span>
                      <span className="font-semibold">456,789 PI</span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={handleWithdraw}
                    disabled={withdrawing}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    {withdrawing ? 'Withdrawing...' : 'Withdraw Funds'}
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Liquidity Pool Status</CardTitle>
                  <CardDescription>Raydium LP management</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">LP Created</span>
                      <Badge variant="outline" className="text-muted-foreground">
                        Not Yet
                      </Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Allocated Funds</span>
                      <span className="font-semibold">70% ($2.35M)</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Initial Price</span>
                      <span className="font-semibold">$0.08</span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={handleCreateLP}
                    disabled={creatingLP}
                  >
                    <Droplet className="mr-2 h-4 w-4" />
                    {creatingLP ? 'Creating...' : 'Create Liquidity Pool'}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Latest presale purchases and claims</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { wallet: 'PH8x...2a4b', amount: 50000, type: 'Purchase', time: '2 min ago' },
                    { wallet: 'SO3k...9f1c', amount: 25000, type: 'Purchase', time: '5 min ago' },
                    { wallet: 'WC7m...4e2d', amount: 3000, type: 'Claim', time: '12 min ago' },
                    { wallet: 'PI2n...8c7a', amount: 100000, type: 'Purchase', time: '18 min ago' },
                    { wallet: 'PH5j...1b9e', amount: 5000, type: 'Claim', time: '23 min ago' },
                  ].map((tx, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b last:border-0">
                      <div className="flex items-center gap-3">
                        <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                          tx.type === 'Purchase' ? 'bg-primary/10' : 'bg-muted'
                        }`}>
                          {tx.type === 'Purchase' ? (
                            <DollarSign className="h-5 w-5 text-primary" />
                          ) : (
                            <Download className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                        <div>
                          <div className="font-semibold font-mono text-sm">{tx.wallet}</div>
                          <div className="text-xs text-muted-foreground">{tx.time}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{tx.amount.toLocaleString()} TEOS</div>
                        <Badge variant="outline" className="text-xs">
                          {tx.type}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Daily Purchases</CardTitle>
                  <CardDescription>Last 7 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-end justify-between gap-2">
                    {[45, 62, 55, 78, 92, 85, 97].map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2">
                        <div 
                          className="w-full bg-primary rounded-t transition-all hover:bg-primary/80"
                          style={{ height: `${height}%` }}
                        />
                        <span className="text-xs text-muted-foreground">
                          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                  <CardDescription>Distribution by currency</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>SOL</span>
                        <span className="font-semibold">48%</span>
                      </div>
                      <Progress value={48} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>USDT</span>
                        <span className="font-semibold">35%</span>
                      </div>
                      <Progress value={35} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Pi</span>
                        <span className="font-semibold">17%</span>
                      </div>
                      <Progress value={17} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Verification Stats</CardTitle>
                  <CardDescription>Badge verification metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Total Users</span>
                      <span className="text-2xl font-bold">12,847</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Verified</span>
                      <span className="text-2xl font-bold text-primary">10,234</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Pending</span>
                      <span className="text-2xl font-bold text-muted-foreground">2,613</span>
                    </div>
                    <Progress value={79.7} className="h-2" />
                    <p className="text-xs text-muted-foreground text-center">
                      79.7% verification rate
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Security Metrics</CardTitle>
                  <CardDescription>Anti-bot and rate limiting</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Blocked Attempts</span>
                      <span className="font-semibold">234</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Rate Limits Active</span>
                      <Badge className="bg-primary text-primary-foreground">Yes</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Signature Verification</span>
                      <Badge className="bg-primary text-primary-foreground">Enabled</Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Cooldown Period</span>
                      <span className="font-semibold">60s</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Liquidity Tab */}
          <TabsContent value="liquidity" className="space-y-6">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Liquidity Pool Configuration</CardTitle>
                <CardDescription>Setup and manage Raydium liquidity</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">DEX Platform</label>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <span className="font-semibold">Raydium</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Backup DEX</label>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <span className="font-semibold">OpenBook</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Allocation %</label>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <span className="font-semibold">70%</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Initial Price</label>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <span className="font-semibold">$0.08</span>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg space-y-2">
                  <div className="flex items-start gap-2">
                    <Activity className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold mb-1">Automatic LP Creation</p>
                      <p className="text-xs text-muted-foreground">
                        Liquidity pool will be automatically created after presale ends. 
                        70% of raised funds will be allocated to TEOS/SOL pair on Raydium.
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={handleCreateLP}
                  disabled={creatingLP}
                >
                  <Droplet className="mr-2 h-5 w-5" />
                  {creatingLP ? 'Creating Liquidity Pool...' : 'Create Liquidity Pool Now'}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>Platform Settings</CardTitle>
                <CardDescription>Configure platform parameters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Presale Status</label>
                  <div className="flex items-center gap-4">
                    <Badge className="bg-primary text-primary-foreground">Active</Badge>
                    <Button variant="outline" size="sm">
                      <Settings className="mr-2 h-4 w-4" />
                      Manage
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Badge Verification</label>
                  <div className="flex items-center gap-4">
                    <Badge className="bg-primary text-primary-foreground">Required</Badge>
                    <Button variant="outline" size="sm">
                      <Shield className="mr-2 h-4 w-4" />
                      Configure
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Anti-Bot Protection</label>
                  <div className="flex items-center gap-4">
                    <Badge className="bg-primary text-primary-foreground">Enabled</Badge>
                    <Button variant="outline" size="sm">
                      <Lock className="mr-2 h-4 w-4" />
                      Settings
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
