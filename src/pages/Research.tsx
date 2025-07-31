import styles from './Research.module.css';
import FadeIn from '../components/FadeIn';

function Research() {
  return (
    <div className={styles.researchContainer}>
      <h1>Research</h1>

      <FadeIn>
        <section className={styles.section}>
          <h2>研究概要</h2>
          <p>
            PS型人工膝関節置換術（TKA）中に、脛骨大腿関節および膝蓋大腿関節に生じる荷重とその方向を、リアルタイムかつin vivoで計測可能なシステムの開発を行いました。
          </p>
        </section>
      </FadeIn>

      <FadeIn>
        <section className={styles.section}>
          <h2>目的と背景</h2>
          <p>
            （ここには、なぜこの研究が必要なのか、既存の課題は何か、といった背景を記述します。例：術後の成績向上には正確な軟部組織バランスの再現が不可欠であるが、従来の手法では定量的な評価が困難であった...など）
          </p>
        </section>
      </FadeIn>
      
      <FadeIn>
        <section className={styles.section}>
          <h2>技術的ハイライト</h2>
          <p>
            <strong>1. 統合的システム設計:</strong> センサデバイスの設計・製作から、測定データの解析ソフトウェアまで、ハードとソフトの両面から統合的に開発しました。
          </p>
          <p>
            <strong>2. センサ固定治具の開発:</strong> 測定の安定性と生体適合性という二律背反の課題を解決するため、特殊な形状の固定治具をCADで設計し、製作しました。
          </p>
          <p>
            <strong>3. UI/UXの改善:</strong> 術者がリアルタイムに荷重情報を把握できるよう、直感的なユーザーインターフェースを持つソフトウェアを開発・改善しました。
          </p>
          <p>
            <strong>4. UI/UXの改善:</strong> 術者がリアルタイムに荷重情報を把握できるよう、直感的なユーザーインターフェースを持つソフトウェアを開発・改善しました。
          </p>
        </section>
      </FadeIn>

      <FadeIn>
        <section className={styles.section}>
          <h2>結果と社会への還元</h2>
          <p>
            （ここには、研究によって何が明らかになったか、どのようなデータが得られたかを記述します。例：本システムにより、これまでブラックボックスであった術中の詳細な荷重変化を可視化することに成功した...など）
          </p>
          <p>
            将来的には、このシステムがTKAの術中判断を支援し、より再現性の高い手術を実現することで、患者のQOL向上に貢献できると考えています。
          </p>
        </section>
      </FadeIn>

    </div>
  );
}

export default Research;