import KneeScene from '../components/KneeScene'; // 3Dシーン
import styles from './Home.module.css'; // 作成したCSSをインポート

function Home() {
  return (
    <div className={styles.homeContainer}>
      {/* 3Dシーンコンポーネント */}
      <KneeScene />

      {/* キャッチコピー */}
      <div className={styles.catchphrase}>
        コードで思考し，<br />
        鉄で具現化する．
      </div>
    </div>
  );
}

export default Home;