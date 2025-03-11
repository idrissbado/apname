"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import UserCard from "./UserCard"
import UserCardSkeleton from "./UserCardSkeleton"
import "./UserList.css"

function UserList() {
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
      <div className="error-message">
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="user-grid">
      {loading
        ? Array(8)
            .fill(0)
            .map((_, index) => <UserCardSkeleton key={`skeleton-${index}`} />)
        : users.map((user) => <UserCard key={user.id} user={user} />)}
    </div>
  )
}

export default UserList

