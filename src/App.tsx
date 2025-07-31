import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Contact from './pages/Contact';
import Research from './pages/Research'; // Researchページをインポート

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/research">Research</Link> {/* リンクを追加 */}
          <Link to="/about">About</Link>
          <Link to="/works">Works</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <main className="App-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} /> {/* ルーティングを追加 */}
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="App-footer">
        <p>&copy; 2025 Your Name</p>
      </footer>
    </div>
  );
}

export default App;