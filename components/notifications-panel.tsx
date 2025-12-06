"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, X, Rocket, TrendingUp, Users } from "lucide-react"
import { useWallet } from "@/lib/wallet-context"

interface Notification {
  id: string
  type: "launch" | "presale" | "milestone"
  title: string
  message: string
  time: string
  read: boolean
}

export function NotificationsPanel() {
  const { connected } = useWallet()
  const [open, setOpen] = useState(false)
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "launch",
      title: "New Token Launch",
      message: "Pharaoh Pepe (PHARPE) just launched on TeosPump!",
      time: "5m ago",
      read: false,
    },
    {
      id: "2",
      type: "presale",
      title: "Presale Alert",
      message: "Cairo Cats presale starts in 30 minutes",
      time: "15m ago",
      read: false,
    },
    {
      id: "3",
      type: "milestone",
      title: "Milestone Reached",
      message: "EDOGE reached 1000 holders!",
      time: "1h ago",
      read: true,
    },
  ])

  const unreadCount = notifications.filter((n) => !n.read).length

  if (!connected) return null

  const getIcon = (type: string) => {
    switch (type) {
      case "launch":
        return <Rocket className="h-4 w-4 text-primary" />
      case "presale":
        return <TrendingUp className="h-4 w-4 text-accent" />
      case "milestone":
        return <Users className="h-4 w-4 text-primary" />
      default:
        return <Bell className="h-4 w-4" />
    }
  }

  const markAsRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!open && (
        <Button
          onClick={() => setOpen(true)}
          size="icon"
          className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 relative"
        >
          <Bell className="h-6 w-6" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 h-6 w-6 bg-destructive text-destructive-foreground rounded-full text-xs flex items-center justify-center font-bold">
              {unreadCount}
            </span>
          )}
        </Button>
      )}

      {open && (
        <Card className="w-80 md:w-96 max-h-[500px] bg-card/95 backdrop-blur border-primary/20 shadow-2xl">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h3 className="font-semibold flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              Notifications
            </h3>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="max-h-[400px] overflow-y-auto">
            {notifications.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">No notifications</p>
            ) : (
              <div className="divide-y divide-border">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 hover:bg-secondary/20 cursor-pointer transition-colors ${!notification.read ? "bg-primary/5" : ""}`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1">{getIcon(notification.type)}</div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm mb-1">{notification.title}</p>
                        <p className="text-sm text-muted-foreground mb-2">{notification.message}</p>
                        <p className="text-xs text-muted-foreground">{notification.time}</p>
                      </div>
                      {!notification.read && <div className="h-2 w-2 bg-primary rounded-full flex-shrink-0 mt-2" />}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="p-4 border-t border-border">
            <Button variant="outline" className="w-full bg-transparent" size="sm">
              View All Notifications
            </Button>
          </div>
        </Card>
      )}
    </div>
  )
}
