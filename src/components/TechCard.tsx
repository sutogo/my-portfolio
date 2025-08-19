import styles from './TechCard.module.css';
import type { Tech } from '../data/techStack';

function TechCard({ tech }: { tech: Tech }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.icon}>{tech.icon}</span>
        <h3 className={styles.title}>{tech.name}</h3>
      </div>
      <p className={styles.description}>{tech.description}</p>
    </div>
  );
}

export default TechCard;
