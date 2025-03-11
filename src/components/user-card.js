"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Globe, Building2, MapPin, ChevronDown, ChevronUp } from "lucide-react"

export function UserCard({ user }) {
  const [expanded, setExpanded] = useState(false)

  const colors = [
    "bg-gradient-to-br from-pink-500 to-orange-400 text-white",
    "bg-gradient-to-br from-green-400 to-blue-500 text-white",
    "bg-gradient-to-br from-purple-500 to-indigo-500 text-white",
    "bg-gradient-to-br from-yellow-400 to-red-500 text-white",
    "bg-gradient-to-br from-blue-400 to-emerald-400 text-white",
    "bg-gradient-to-br from-red-500 to-pink-500 text-white",
    "bg-gradient-to-br from-indigo-400 to-purple-500 text-white",
    "bg-gradient-to-br from-orange-400 to-yellow-400 text-white",
  ]

  const colorIndex = user.id % colors.length
  const avatarColor = colors[colorIndex]

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl dark:hover:shadow-primary/10">
      <div className="p-6">
        <div className="flex items-center gap-4">
          <Avatar className={`h-16 w-16 ${avatarColor} text-2xl font-bold`}>{user.name.charAt(0)}</Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">{user.name}</h3>
              <Badge variant="outline" className="ml-2">
                #{user.id}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">@{user.username}</p>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-3 text-sm">
            <Mail className="h-5 w-5 text-primary" />
            <span className="truncate">{user.email}</span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <Phone className="h-5 w-5 text-primary" />
            <span>{user.phone}</span>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <Globe className="h-5 w-5 text-primary" />
            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {user.website}
            </a>
          </div>

          {expanded && (
            <>
              <div className="flex items-center gap-3 text-sm">
                <Building2 className="h-5 w-5 text-primary" />
                <span>{user.company.name}</span>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-5 w-5 text-primary" />
                <span>
                  {user.address.city}, {user.address.zipcode}
                </span>
              </div>
            </>
          )}

          <Button
            variant="outline"
            size="sm"
            className="mt-4 w-full justify-between"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show less" : "Show more"}
            {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </Card>
  )
}

