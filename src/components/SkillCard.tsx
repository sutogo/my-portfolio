import styles from './SkillCard.module.css';

// 型定義
export type Skill = {
  name: string;
  icon: React.ReactNode; // ← JSX.Element から変更
  experience: string;
  level: number; // 1-5の5段階評価
  description: string;
  category: 'Web' | 'Hardware' | 'Other';
};


// 星を描画するヘルパー関数
const renderStars = (level: number) => {
  let stars = '';
  for (let i = 0; i < 5; i++) {
    stars += i < level ? '★' : '☆';
  }
  return stars;
};

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.icon}>{skill.icon}</span>
        <h3 className={styles.title}>{skill.name}</h3>
      </div>
      <div className={styles.meta}>
        <span>経験年数: {skill.experience}</span>
        {' | '}
        <span className={styles.stars}>{renderStars(skill.level)}</span>
      </div>
      <p className={styles.description}>{skill.description}</p>
    </div>
  );
}

export default SkillCard;