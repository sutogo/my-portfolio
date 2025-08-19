import styles from './About.module.css';
import Timeline from '../components/Timeline';
import FadeIn from '../components/FadeIn';

function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Me</h1>
      
      <FadeIn>
        <section className={styles.section}>
          <p>
            ハードウェアとソフトウェア、双方の領域を深く理解し、アイデアを構想から物理的な形にするまでを一気通貫で実現することを得意としています。
          </p>
          <p>
            約3年間の社会人経験で培った課題解決能力と、幅広い技術領域への探求心で、まだ見ぬ価値を創造します。
          </p>
        </section>
      </FadeIn>
      
      <h2>Career & History</h2>
      <Timeline />
    </div>
  );
}

export default About;