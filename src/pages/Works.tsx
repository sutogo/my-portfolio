import { useState } from 'react';
import Masonry from 'react-masonry-css';
import styles from './Works.module.css';
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

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div className={styles.worksContainer}>
      <h1>Works</h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.masonryGrid}
        columnClassName={styles.masonryColumn}>
        {worksData.map((work, index) => (
          // imageUrlが存在する場合のみカードを表示
          work.imageUrl && (
            <FadeIn key={index}>
              <div className={styles.workCard} onClick={() => handleCardClick(work)}>
                <img src={work.imageUrl} alt={work.title} className={styles.workImage} />
              </div>
            </FadeIn>
          )
        ))}
      </Masonry>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedWork && (
          <div className={styles.modalContent}>
            <h2>{selectedWork.title}</h2>
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
