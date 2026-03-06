import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { useLang } from '../i18n/LangContext';

const navKeys = [
  { id: 'home', key: 'nav.home' },
  { id: 'about', key: 'nav.about' },
  { id: 'research', key: 'nav.research' },
  { id: 'skills', key: 'nav.skills' },
  { id: 'works', key: 'nav.works' },
  { id: 'tech-stack', key: 'nav.techStack' },
  { id: 'vision', key: 'nav.vision' },
  { id: 'contact', key: 'nav.contact' },
];

function Navbar() {
  const { lang, toggleLang, t } = useLang();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navKeys.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navKeys[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.navInner}>
          <button
            className={styles.logo}
            onClick={() => scrollToSection('home')}
            aria-label="Scroll to top"
          >
            <span className={styles.logoAccent}>K</span>
            <span className={styles.logoText}>.Tokashiki</span>
          </button>

          <ul className={styles.navLinks}>
            {navKeys.map(item => (
              <li key={item.id}>
                <button
                  className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {t(item.key)}
                </button>
              </li>
            ))}
            <li>
              <button
                className={styles.langToggle}
                onClick={toggleLang}
                aria-label="Toggle language"
              >
                {lang === 'ja' ? 'EN' : 'JA'}
              </button>
            </li>
          </ul>

          <div className={styles.mobileControls}>
            <button
              className={styles.langToggle}
              onClick={toggleLang}
              aria-label="Toggle language"
            >
              {lang === 'ja' ? 'EN' : 'JA'}
            </button>
            <button
              className={`${styles.hamburger} ${isMobileOpen ? styles.hamburgerOpen : ''}`}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
            >
              <span className={styles.bar} />
              <span className={styles.bar} />
              <span className={styles.bar} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div className={styles.overlay} onClick={() => setIsMobileOpen(false)} />
      )}

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${isMobileOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          {navKeys.map((item, index) => (
            <li key={item.id} style={{ transitionDelay: `${index * 50}ms` }}>
              <button
                className={`${styles.mobileLink} ${activeSection === item.id ? styles.active : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {t(item.key)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
