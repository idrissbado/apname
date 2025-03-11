"use client"
import "./ThemeToggle.css"

function ThemeToggle() {
  const toggleTheme = () => {
    document.body.classList.toggle("light-theme")
  }

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      <span className="theme-toggle-icon">🌓</span>
    </button>
  )
}

export default ThemeToggle

