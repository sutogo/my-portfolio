import styles from './QualificationCard.module.css';

// 型定義
export type Qualification = {
  name: string;
  icon: React.ReactNode;
};

function QualificationCard({ qualification }: { qualification: Qualification }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.icon}>{qualification.icon}</span>
        <h3 className={styles.title}>{qualification.name}</h3>
      </div>
    </div>
  );
}

export default QualificationCard;