import { useState } from 'react';
import styles from './Works.module.css';
import FadeIn from '../components/FadeIn';
import { worksData, type Work } from '../data/works';
import Modal from '../components/Modal';
import { useLang } from '../i18n/LangContext';

function Works() {
  const { t } = useLang();
  const [selected, setSelected] = useState<Work | null>(null);

  const card = (work: Work, index: number) => (
    <FadeIn key={work.id} delay={index * 0.1}>
      <button
        type="button"
        className={`${styles.workCard} ${work.featured ? styles.featured : ''}`}
        onClick={() => setSelected(work)}
      >
        <div className={styles.visual}>
          {work.imageUrl ? (
            <img src={work.imageUrl} alt="" className={styles.workImage} />
          ) : (
            <span className={styles.workIcon}>{work.icon}</span>
          )}
        </div>
        <div className={styles.body}>
          <h3>{t(`works.${work.id}.title`)}</h3>
          <p>{t(`works.${work.id}.desc`)}</p>
          <div className={styles.tags}>
            {work.tags.map((tag) => (
              <span className={styles.tag} key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </button>
    </FadeIn>
  );

  return (
    <div className={styles.worksContainer}>
      <FadeIn>
        <p className={styles.sectionLabel}>{t('works.label')}</p>
        <h2 className={styles.sectionTitle}>{t('works.title')}</h2>
        <p className={styles.sectionSubtitle}>{t('works.subtitle')}</p>
      </FadeIn>

      <div className={styles.featuredGrid}>
        {worksData.filter((w) => w.featured).map(card)}
      </div>

      <h3 className={styles.groupTitle}>{t('works.others')}</h3>
      <div className={styles.worksGrid}>
        {worksData.filter((w) => !w.featured).map(card)}
      </div>

      <Modal isOpen={selected !== null} onClose={() => setSelected(null)}>
        {selected && (
          <div className={styles.modalContent}>
            <h2>{t(`works.${selected.id}.title`)}</h2>
            {selected.imageUrl && (
              <img src={selected.imageUrl} alt={t(`works.${selected.id}.title`)} className={styles.modalImage} />
            )}
            <p>{t(`works.${selected.id}.desc`)}</p>
            {selected.featured && (
              <dl className={styles.story}>
                {['challenge', 'action', 'result'].map((k) => (
                  <div key={k}>
                    <dt>{t(`works.${k}`)}</dt>
                    <dd>{t(`works.${selected.id}.${k}`)}</dd>
                  </div>
                ))}
              </dl>
            )}
            <div className={styles.tags}>
              {selected.tags.map((tag) => (
                <span className={styles.tag} key={tag}>{tag}</span>
              ))}
            </div>
            {selected.githubUrl && (
              <a href={selected.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                {t('works.github')}
              </a>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Works;
