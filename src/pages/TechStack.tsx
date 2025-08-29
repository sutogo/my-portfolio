import styles from './TechStack.module.css';
import FadeIn from '../components/FadeIn';
import TechCard from '../components/TechCard';
import { techStackData, type Tech } from '../data/techStack';

const categoryOrder: Tech['category'][] = [
  'Development Environment',
  'Core Framework',
  '3D & Animation',
  'Styling',
];

// カテゴリごとに技術をグループ化する
const groupedTechs = techStackData.reduce((acc, tech) => {
  const category = tech.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(tech);
  return acc;
}, {} as Record<Tech['category'], Tech[]>);

function TechStack() {
  return (
    <div className={styles.container}>
      <h1>Technology Stack</h1>
      <p className={styles.subtitle}>
        このポートフォリオサイトを構築するために使用した技術スタックです。
      </p>

      {categoryOrder.map(category => (
        <div key={category} className={styles.categorySection}>
          <FadeIn>
            <h2 className={styles.categoryTitle}>{category}</h2>
          </FadeIn>
          <div className={styles.cardGrid}>
            {groupedTechs[category].map(tech => (
              <FadeIn key={tech.name}>
                <TechCard tech={tech} />
              </FadeIn>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TechStack;

