import styles from './Vision.module.css';
import FadeIn from '../components/FadeIn';

const visionSteps = [
  {
    icon: '🔩',
    label: 'Edge',
    title: 'センサ × ハードウェア',
    description: '物理空間のデータを正確にキャプチャするセンサシステムと，それを支える堅牢な機構設計',
  },
  {
    icon: '↔️',
    label: 'Bridge',
    title: 'リアルタイム処理 × 通信',
    description: 'C#(.NET)によるリアルタイムデータ処理と，IoTプロトコルによるクラウドへのシームレスな接続',
  },
  {
    icon: '☁️',
    label: 'Cloud',
    title: 'クラウド × 可視化',
    description: 'AWS IoT Core等を活用したデータ蓄積・分析基盤と，意思決定を支援するダッシュボード',
  },
];

function Vision() {
  return (
    <div className={styles.visionContainer}>
      <FadeIn>
        <p className={styles.sectionLabel}>Future Vision</p>
        <h2 className={styles.sectionTitle}>What's Next</h2>
        <p className={styles.subtitle}>
          エッジからクラウドまでを一気通貫で設計する「サービス化」への挑戦
        </p>
      </FadeIn>

      <div className={styles.pipelineGrid}>
        {visionSteps.map((step, index) => (
          <FadeIn key={step.label} delay={index * 0.15} direction="up">
            <div className={styles.pipelineCard}>
              <div className={styles.stepBadge}>{step.label}</div>
              <div className={styles.stepIcon}>{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
            {index < visionSteps.length - 1 && (
              <div className={styles.connector}>
                <div className={styles.connectorLine} />
                <div className={styles.connectorArrow}>→</div>
              </div>
            )}
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.4}>
        <div className={styles.visionStatement}>
          <p>
            ハードウェアの物理的制約とソフトウェアの柔軟性の双方を翻訳できる
            <strong>「ブリッジエンジニア」</strong>として，
            九州（福岡・佐賀）を拠点に，医療・自動車・製造といった領域で
            <strong>CPSの社会実装</strong>をリードしたいと考えています．
          </p>
        </div>
      </FadeIn>
    </div>
  );
}

export default Vision;
