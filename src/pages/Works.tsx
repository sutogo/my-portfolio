import styles from './Works.module.css';
import FadeIn from '../components/FadeIn'; // FadeInコンポーネントをインポート
import { worksData } from '../data/works';

function Works() {
  return (
    <div className={styles.worksContainer}>
      <h1>Works</h1>
      <div className={styles.worksGrid}>
        {worksData.map((work, index) => (
          // ↓ ここでFadeInコンポーネントを使う
          <FadeIn key={index}>
            <div className={styles.workCard}>
              <h3>{work.title}</h3>
              <p>{work.description}</p>
              <div className={styles.tags}>
                {work.tags.map((tag, tagIndex) => (
                  <span className={styles.tag} key={tagIndex}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

export default Works;