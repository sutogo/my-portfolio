import { useState } from 'react';
import styles from './Works.module.css';
import FadeIn from '../components/FadeIn';
import { worksData } from '../data/works';
import Modal from '../components/Modal';
import { useLang } from '../i18n/LangContext';

type Work = (typeof worksData)[0] & { githubUrl?: string; imageUrl?: string };

function Works() {
  const { t } = useLang();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  const handleCardClick = (work: Work) => {
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWork(null);
  };

  return (
    <div className={styles.worksContainer}>
      <FadeIn>
        <p className={styles.sectionLabel}>{t('works.label')}</p>
        <h2 className={styles.sectionTitle}>{t('works.title')}</h2>
        <p className={styles.sectionSubtitle}>
          {t('works.subtitle')}
        </p>
      </FadeIn>

      <div className={styles.worksGrid}>
        {worksData.map((work, index) =>
          work.imageUrl ? (
            <FadeIn key={index} delay={index * 0.1}>
              <div className={styles.workCard} onClick={() => handleCardClick(work)}>
                <img src={work.imageUrl} alt={work.title} className={styles.workImage} />
                <div className={styles.workCardOverlay}>
                  <h3 dangerouslySetInnerHTML={{ __html: work.title }} />
                  <div className={styles.tags}>
                    {work.tags.map((tag, tagIndex) => (
                      <span className={styles.tag} key={tagIndex}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ) : null
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedWork && (
          <div className={styles.modalContent}>
            <h2 dangerouslySetInnerHTML={{ __html: selectedWork.title }} />
            {selectedWork.imageUrl && (
              <img src={selectedWork.imageUrl} alt={selectedWork.title} className={styles.modalImage} />
            )}
            <p>{selectedWork.description}</p>
            <div className={styles.tags}>
              {selectedWork.tags.map((tag, tagIndex) => (
                <span className={styles.tag} key={tagIndex}>{tag}</span>
              ))}
            </div>
            {selectedWork.githubUrl && (
              <a
                href={selectedWork.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.githubLink}
              >
                GitHubで見る →
              </a>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Works;