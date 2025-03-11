"use client"

import { useState } from "react"
import "./UserCard.css"

function UserCard({ user }) {
  const [expanded, setExpanded] = useState(false)

  const gradients = ["gradient-1", "gradient-2", "gradient-3", "gradient-4", "gradient-5", "gradient-6"]

  const gradientClass = gradients[user.id % gradients.length]

  return (
    <div className={`user-card ${gradientClass}`}>
      <div className="user-card-header">
        <div className="avatar">
          <span>{user.name.charAt(0)}</span>
        </div>
        <div className="user-info">
          <h2>{user.name}</h2>
          <p>@{user.username}</p>
        </div>
      </div>
      <div className="user-card-body">
        <div className="user-detail">
          <span className="icon">✉️</span>
          <span>{user.email}</span>
        </div>
        <div className="user-detail">
          <span className="icon">📞</span>
          <span>{user.phone}</span>
        </div>
        <div className="user-detail">
          <span className="icon">🌐</span>
          <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
            {user.website}
          </a>
        </div>
        {expanded && (
          <>
            <div className="user-detail">
              <span className="icon">🏢</span>
              <span>{user.company.name}</span>
            </div>
            <div className="user-detail">
              <span className="icon">📍</span>
              <span>
                {user.address.city}, {user.address.zipcode}
              </span>
            </div>
          </>
        )}
        <button className="expand-button" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  )
}

export default UserCard

