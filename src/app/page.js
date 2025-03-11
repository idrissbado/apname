import UserList from "@/components/user-list"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-primary">User Directory</h1>
            <p className="mt-2 text-xl text-muted-foreground">Explore our vibrant community</p>
          </div>
          <ThemeToggle />
        </header>
        <main>
          <UserList />
        </main>
        <footer className="mt-16 border-t border-accent py-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} User Directory. Crafted with creativity and care.</p>
        </footer>
      </div>
    </div>
  )
}

