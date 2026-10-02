import styles from './QualificationCard.module.css';
import type { Qualification } from '../data/skills';
import { useLang } from '../i18n/LangContext';

type Props = {
  qualification: Qualification;
};

function QualificationCard({ qualification }: Props) {
  const { t } = useLang();
  return (
    <div className={styles.card}>
      <span className={styles.icon}>{qualification.icon}</span>
      <span className={styles.name}>{t(`skills.qual.${qualification.id}`)}</span>
    </div>
  );
}

export default QualificationCard;