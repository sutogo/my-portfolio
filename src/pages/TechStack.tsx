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
      <FadeIn>
        <p className={styles.sectionLabel}>Tech Stack</p>
        <h2 className={styles.sectionTitle}>使用技術</h2>
        <p className={styles.subtitle}>
          このポートフォリオサイトを構築するために使用した技術スタックです
        </p>
      </FadeIn>

      {categoryOrder.map(category => (
        <div key={category} className={styles.categorySection}>
          <FadeIn>
            <h3 className={styles.categoryTitle}>{category}</h3>
          </FadeIn>
          <div className={styles.cardGrid}>
            {groupedTechs[category].map((tech, index) => (
              <FadeIn key={tech.name} delay={index * 0.05}>
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
