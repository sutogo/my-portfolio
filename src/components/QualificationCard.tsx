import styles from './QualificationCard.module.css';
import type { Qualification } from '../data/skills';

type Props = {
  qualification: Qualification;
};

function QualificationCard({ qualification }: Props) {
  return (
    <div className={styles.card}>
      <span className={styles.icon}>{qualification.icon}</span>
      <span className={styles.name}>{qualification.name}</span>
    </div>
  );
}

export default QualificationCard;