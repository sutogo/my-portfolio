import styles from './TechStack.module.css';
import FadeIn from '../components/FadeIn';
import TechCard from '../components/TechCard';
import { techStackData, type Tech } from '../data/techStack';

const categories: Tech['category'][] = [
  'Development Environment',
  'Core Framework',
  '3D & Animation',
  'Styling',
];

function TechStack() {
  const groupedTechs = techStackData.reduce((acc, tech) => {
    const category = tech.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(tech);
    return acc;
  }, {} as Record<Tech['category'], Tech[]>);

  return (
    <div className={styles.container}>
      <h1>Technology Stack</h1>
      <p className={styles.subtitle}>
        このポートフォリオサイトの構築に使用した技術です。
      </p>
      <div className={styles.techContainer}>
        {categories.map((category) => (
          <FadeIn key={category}>
            <div className={styles.categoryColumn}>
              <h2 className={styles.categoryTitle}>{category}</h2>
              <div className={styles.cardGrid}>
                {groupedTechs[category].map((tech) => (
                  <TechCard key={tech.name} tech={tech} />
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
