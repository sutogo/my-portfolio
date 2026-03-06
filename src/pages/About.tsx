import styles from './About.module.css';
import Timeline from '../components/Timeline';
import FadeIn from '../components/FadeIn';
import MetricsCard from '../components/MetricsCard';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiWantedly } from 'react-icons/si';

const metrics = [
  { value: '57', suffix: '%', label: '測定工数削減' },
  { value: '10', suffix: '+', label: '新規ライン立上げ' },
  { value: '3', suffix: '', label: 'カ国での活動' },
  { value: '2026', suffix: '', label: 'WCB 国際学会' },
];

function About() {
  return (
    <div className={styles.aboutContainer}>
      <FadeIn>
        <p className={styles.sectionLabel}>About Me</p>
        <h2 className={styles.sectionTitle}>
          「現場の痛み」を知っているからこそ，<br />
          作れるシステムがある．
        </h2>
      </FadeIn>

      <MetricsCard metrics={metrics} />

      <FadeIn delay={0.2}>
        <div className={styles.introCard}>
          <p className={styles.introText}>
            福岡工業大学大学院（M1）にて，<strong>医工学（バイオメカニクス）</strong>とIoTシステムを専攻．
            自動車部品メーカーでの品質検査員として
            <span className={styles.highlight}>「月間160時間の工数削減」</span>
            を達成した後，「不具合を見つける側」から「根本的な仕組みを創る側」への転身を決意し，大学へ編入．
          </p>
          <p className={styles.introText}>
            旋盤・溶接といった物理的な「ハードウェア実装力」と，C#(.NET)を用いた「ソフトウェア開発力」の双方を併せ持つ，
            二刀流のエンジニアとして，<strong>CPS（Cyber-Physical System）の社会実装</strong>を目指しています．
          </p>
          <div className={styles.linkButtons}>
            <a href="https://github.com/sutogo" target="_blank" rel="noopener noreferrer" className={styles.iconButton}>
              <FaGithub /> GitHub
            </a>
            <a href="https://www.wantedly.com/id/KHO" target="_blank" rel="noopener noreferrer" className={`${styles.iconButton} ${styles.wantedlyButton}`}>
              <SiWantedly /> Wantedly
            </a>
            <a href="https://linkedin.com/in/kosuke-tokashiki-963a873b0" target="_blank" rel="noopener noreferrer" className={`${styles.iconButton} ${styles.linkedinButton}`}>
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h3 className={styles.timelineTitle}>Career & Education</h3>
      </FadeIn>
      <Timeline />
    </div>
  );
}

export default About;