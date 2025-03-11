"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { UserCard } from "./user-card"
import { UserCardSkeleton } from "./user-card-skeleton"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default function UserList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(response.data)
        setLoading(false)
      } catch (err) {
        setError("Failed to fetch users. Please try again later.")
        setLoading(false)
        console.error("Error fetching users:", err)
      }
    }

    fetchUsers()
  }, [])

  if (error) {
    return (
      <Alert variant="destructive" className="mx-auto max-w-2xl">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {loading
        ? Array(8)
            .fill(0)
            .map((_, index) => <UserCardSkeleton key={`skeleton-${index}`} />)
        : users.map((user) => <UserCard key={user.id} user={user} />)}
    </div>
  )
}

