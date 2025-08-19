import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import '../App.css';

function Layout() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeNav = () => setIsNavOpen(false);

  return (
    <div className="App">
      {/* HamburgerMenu is now a direct child of App, not in the header */}
      <HamburgerMenu isOpen={isNavOpen} onClick={() => setIsNavOpen(!isNavOpen)} />

      {/* Overlay for when the nav is open */}
      {isNavOpen && <div className="overlay" onClick={closeNav}></div>}

      {/* Side Navigation Panel */}
      <nav className={`side-nav ${isNavOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={closeNav}>Home</NavLink>
        <NavLink to="/research" onClick={closeNav}>Research</NavLink>
        <NavLink to="/about" onClick={closeNav}>About</NavLink>
        <NavLink to="/skills" onClick={closeNav}>Skills</NavLink>
        <NavLink to="/tech-stack" onClick={closeNav}>Tech Stack</NavLink>
        <NavLink to="/works" onClick={closeNav}>Works</NavLink>
        <NavLink to="/contact" onClick={closeNav}>Contact</NavLink>
      </nav>

      <main className="App-main">
        <Outlet />
      </main>

      <footer className="App-footer">
        <p>&copy; 2025 Your Name</p>
      </footer>
    </div>
  );
}

export default Layout;
