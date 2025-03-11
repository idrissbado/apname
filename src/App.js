import "./App.css"
import UserList from "./components/UserList"
import ThemeToggle from "./components/ThemeToggle"

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div>
            <h1>User Directory</h1>
            <p>Explore our vibrant community</p>
          </div>
          <ThemeToggle />
        </header>
        <main>
          <UserList />
        </main>
        <footer>
          <p>© {new Date().getFullYear()} User Directory. Crafted with creativity and care.</p>
        </footer>
      </div>
    </div>
  )
}

export default App

