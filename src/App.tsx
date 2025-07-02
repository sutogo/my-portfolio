import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home' // Homeページをインポート
import About from './pages/About' // Aboutページをインポート

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          {/* 他のページへのリンクもここに追加していく */}
        </nav>
      </header>
      <main className="App-main">
        {/* URLに応じて、ここの中身が切り替わる */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer className="App-footer">
        <p>&copy; 2025 Your Name</p>
      </footer>
    </div>
  )
}

export default App