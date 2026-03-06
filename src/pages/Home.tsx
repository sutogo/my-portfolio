import KneeScene from '../components/KneeScene';
import styles from './Home.module.css';
import FadeIn from '../components/FadeIn';

function Home() {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.heroContainer}>
      {/* 3D Background */}
      <div className={styles.canvasWrapper}>
        <KneeScene />
        <span className={styles.modelCaption}>Knee Joint 3D Model — 研究対象</span>
      </div>

      {/* Hero Content */}
      <div className={styles.heroContent}>
        <FadeIn delay={0.3}>
          <p className={styles.greeting}>
            Engineering Portfolio
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <h1 className={styles.name}>
            Kosuke <span className={styles.nameAccent}>Tokashiki</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.9}>
          <p className={styles.catchphrase}>
            コードで思考し，<br />鉄で具現化する．
          </p>
        </FadeIn>

        <FadeIn delay={1.2}>
          <p className={styles.subtitle}>
            フィジカルとデジタルを繋ぐ「ブリッジエンジニア」
          </p>
        </FadeIn>

        <FadeIn delay={1.5}>
          <div className={styles.heroCta}>
            <button className={styles.ctaPrimary} onClick={scrollToAbout}>
              View My Work
            </button>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </div>
    </div>
  );
}

export default Home;