"use client"
import { TrendingUp, Activity, Users, Coins } from "lucide-react"

export function LiveStatsBar() {
  const stats = {
    tokensLaunched: 0,
    volume24h: 0,
    activeUsers: 0,
    trending: "Coming Soon",
  }

  return (
    <div className="bg-secondary/40 backdrop-blur border-y border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 overflow-x-auto gap-4 md:gap-8">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <Coins className="h-4 w-4 text-primary" />
            <span className="text-xs text-muted-foreground">Tokens:</span>
            <span className="text-sm font-bold text-foreground">{stats.tokensLaunched}</span>
          </div>

          <div className="flex items-center gap-2 whitespace-nowrap">
            <Activity className="h-4 w-4 text-primary" />
            <span className="text-xs text-muted-foreground">24h Vol:</span>
            <span className="text-sm font-bold text-foreground">${stats.volume24h}</span>
          </div>

          <div className="flex items-center gap-2 whitespace-nowrap">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-xs text-muted-foreground">Active:</span>
            <span className="text-sm font-bold text-foreground">{stats.activeUsers}</span>
          </div>

          <div className="flex items-center gap-2 whitespace-nowrap">
            <TrendingUp className="h-4 w-4 text-accent" />
            <span className="text-xs text-muted-foreground">Trending:</span>
            <span className="text-sm font-bold text-accent">{stats.trending}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
