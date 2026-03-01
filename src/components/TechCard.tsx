import styles from './TechCard.module.css';
import type { Tech } from '../data/techStack';

type Props = {
  tech: Tech;
};

function TechCard({ tech }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.icon}>{tech.icon}</span>
        <h4 className={styles.name}>{tech.name}</h4>
      </div>
      <p className={styles.description}>{tech.description}</p>
    </div>
  );
}

export default TechCard;
