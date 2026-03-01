import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Contact from './pages/Contact';
import Research from './pages/Research';
import Skills from './pages/Skills';
import TechStack from './pages/TechStack';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="App">
      <ScrollProgress />
      <Navbar />

      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="research">
          <Research />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="works">
          <Works />
        </section>
        <section id="tech-stack">
          <TechStack />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} Kosuke Tokashiki. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;