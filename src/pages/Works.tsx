import { useState } from 'react';
import styles from './works.module.css';
import FadeIn from '../components/FadeIn';
import { worksData } from '../data/works';
import Modal from '../components/Modal';

// worksDataの型を定義
type Work = (typeof worksData)[0] & { githubUrl?: string; imageUrl?: string };

function Works() {
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
      <h1>Works</h1>
      <div className={styles.worksGrid}>
        {worksData.map((work, index) => (
          // imageUrlが存在する場合のみカードを表示
          work.imageUrl && (
            <FadeIn key={index}>
              <div className={styles.workCard} onClick={() => handleCardClick(work)}>
                <img src={work.imageUrl} alt={work.title} className={styles.workImage} />
                <div className={styles.workCardOverlay}>
                  <h3 dangerouslySetInnerHTML={{ __html: work.title }} />
                </div>
              </div>
            </FadeIn>
          )
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedWork && (
          <div className={styles.modalContent}>
            <h2 dangerouslySetInnerHTML={{ __html: selectedWork.title }} />
            {selectedWork.imageUrl && <img src={selectedWork.imageUrl} alt={selectedWork.title} className={styles.modalImage} />}
            <p>{selectedWork.description}</p>
            <div className={styles.tags}>
              {selectedWork.tags.map((tag, tagIndex) => (
                <span className={styles.tag} key={tagIndex}>
                  {tag}
                </span>
              ))}
            </div>
            {selectedWork.githubUrl && (
              <a href={selectedWork.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.githubButton}>
                GitHubで見る
              </a>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Works;