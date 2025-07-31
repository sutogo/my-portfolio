import styles from './Works.module.css';
import FadeIn from '../components/FadeIn'; // FadeInコンポーネントをインポート

// 実績データを配列で管理
const worksData = [
  {
    title: '大学構内施設の予約システム',
    description: '大学内の特定施設の利用状況を確認し、オンラインで予約できるシステムを開発しました。',
    tags: ['Python', 'Web'],
  },
  {
    title: '神経衰弱アプリ',
    description: 'クラシックなカードゲーム「神経衰弱」をブラウザ上で遊べるように実装しました。',
    tags: ['JavaScript', 'Game'],
  },
  {
    title: '数理計算プログラム',
    description: '特定の数学的問題を効率的に解くための計算アルゴリズムを実装しました。',
    tags: ['Java', 'Algorithm'],
  },
  {
    title: '戦車砲弾弾道計算アプリ',
    description: '物理法則に基づき、戦車の砲弾が描く弾道をシミュレーションするアプリケーションです。',
    tags: ['Python', 'Simulation'],
  },
];

function Works() {
  return (
    <div className={styles.worksContainer}>
      <h1>Works</h1>
      <div className={styles.worksGrid}>
        {worksData.map((work, index) => (
          // ↓ ここでFadeInコンポーネントを使う
          <FadeIn key={index}>
            <div className={styles.workCard}>
              <h3>{work.title}</h3>
              <p>{work.description}</p>
              <div className={styles.tags}>
                {work.tags.map((tag, tagIndex) => (
                  <span className={styles.tag} key={tagIndex}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

export default Works;