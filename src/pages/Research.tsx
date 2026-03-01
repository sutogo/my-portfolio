import styles from './Research.module.css';
import FadeIn from '../components/FadeIn';

function Research() {
  return (
    <div className={styles.researchContainer}>
      <FadeIn>
        <p className={styles.sectionLabel}>Research</p>
        <h2 className={styles.sectionTitle}>
          TKA手術支援システムの開発
        </h2>
        <p className={styles.sectionSubtitle}>
          「職人の勘」を「客観データ」へ翻訳し，手術の成功率と患者のQOLを向上させる
        </p>
      </FadeIn>

      <div className={styles.researchGrid}>
        {/* 研究概要 */}
        <FadeIn delay={0.1}>
          <div className={styles.researchCard}>
            <div className={styles.cardIcon}>🔬</div>
            <h3>研究概要</h3>
            <p>
              全人工膝関節置換術（TKA）において，脛骨大腿関節（TFJ）と膝蓋大腿関節（PFJ）にかかる荷重とその方向を，
              <strong>同時かつリアルタイムに動的評価</strong>できる手術支援システムを開発．
              世界で初めてTFJとPFJの同時評価を実現し，執刀医の熟練度に左右されない高精度な手術を支援します．
            </p>
          </div>
        </FadeIn>

        {/* 背景と課題 */}
        <FadeIn delay={0.2}>
          <div className={styles.researchCard}>
            <div className={styles.cardIcon}>🎯</div>
            <h3>背景と課題</h3>
            <p>
              術後の満足度向上には軟部組織バランスの適正化が不可欠ですが，
              従来は医師の手先の感覚（暗黙知）に依存していました．
              また，既存デバイスはTFJのみを評価対象とし，
              術後疼痛の主要因とされるPFJを含めた包括的評価が困難でした．
            </p>
          </div>
        </FadeIn>

        {/* Hardware */}
        <FadeIn delay={0.3}>
          <div className={styles.researchCard}>
            <div className={styles.cardIcon}>⚙️</div>
            <h3>技術的アプローチ</h3>
            <div className={styles.approachGrid}>
              <div className={styles.approachItem}>
                <span className={styles.approachLabel}>Hardware</span>
                <p>
                  TFJ側にはインサートトライアルに<strong>小型2軸モーメントセンサ</strong>を内蔵，
                  PFJ側にはパテラトライアルに<strong>小型3軸力覚センサ</strong>を配置．
                  パテラ側はボルト・ナット配置を<strong>180度反転</strong>させる独自設計で安全性を確保．
                  インサート側はOリングを用いた弾性嵌合構造をISO 14630基準で評価し採用．
                </p>
              </div>
              <div className={styles.approachItem}>
                <span className={styles.approachLabel}>Software</span>
                <p>
                  C# (.NET 8.0, WPF) で開発した専用GUIアプリ．
                  センサの電圧値を<strong>干渉補正行列</strong>で力（N）・モーメント（Nm）に変換し，
                  リアルタイムでベクトルとして可視化．USBカメラ映像との<strong>ミリ秒単位の同期録画</strong>機能を搭載．
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 膝モデル */}
        <FadeIn delay={0.15}>
          <div className={styles.researchCard}>
            <div className={styles.cardIcon}>🦴</div>
            <h3>生体再現性の高い膝モデル</h3>
            <p>
              医用CT画像から骨形状を抽出し，3Dプリンタ（KEYENCE AGILISTA-3200）で大腿骨・脛骨モデルを造形．
              大腿四頭筋腱・膝蓋靭帯・MCL・LCLを人工靭帯と<strong>非線形ばね要素</strong>で実装し，
              解剖学的知見に基づいた付着位置・走行方向を正確に再現しました．
            </p>
          </div>
        </FadeIn>

        {/* 実験結果 */}
        <FadeIn delay={0.25}>
          <div className={styles.researchCard}>
            <div className={styles.cardIcon}>📊</div>
            <h3>実験結果</h3>
            <div className={styles.resultGrid}>
              <div className={styles.resultItem}>
                <span className={styles.resultMetric}>PFJ</span>
                <p>
                  屈曲角度の進行に伴い圧縮力が増大し，深屈曲域（90°）で最大値<strong>約48N</strong>を記録．
                  屈曲20°付近で剪断力方向が反転 — 膝蓋骨が大腿骨滑車溝へ進入する生体力学的機構を力学的に捕捉．
                </p>
              </div>
              <div className={styles.resultItem}>
                <span className={styles.resultMetric}>TFJ</span>
                <p>
                  前後方向荷重は全屈曲範囲で小さい値で推移．
                  PS型特有の<strong>ポスト・カム機構</strong>が適切に機能し，関節面への過度なストレスを抑制していることを定量的に裏付け．
                </p>
              </div>
            </div>
            <p className={styles.resultSummary}>
              → 従来のテンサーでは把握困難だった<strong>「非線形な荷重変化」を連続的に定量化</strong>することに成功
            </p>
          </div>
        </FadeIn>

        {/* 成果 */}
        <FadeIn delay={0.35}>
          <div className={styles.researchCard}>
            <div className={styles.cardIcon}>🏆</div>
            <h3>成果・発表</h3>
            <ul className={styles.achievementList}>
              <li>
                <strong>WCB 2026</strong> — World Congress of Biomechanics（カナダ・バンクーバー）にてポスター発表採択（2026年7月）
              </li>
              <li>
                <strong>日本機械学会 九州支部</strong> — 第57回学生員卒業研究発表講演会にて発表
              </li>
              <li>
                <strong>ICBME 2024</strong> — シンガポールにてFIT-Techプログラムメンバーとして参加
              </li>
            </ul>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.3}>
        <div className={styles.slideSection}>
          <h3>研究紹介スライド</h3>
          <div className={styles.slideContainer}>
            <iframe
              className="speakerdeck-iframe"
              style={{
                border: 'none',
                background: 'rgba(0, 0, 0, 0.2)',
                borderRadius: '12px',
                width: '100%',
                height: 'auto',
                aspectRatio: '560 / 315',
              }}
              src="https://speakerdeck.com/player/ffcc7a7df3874b8ca71421c9b9dfde44"
              title="研究発表スライド"
              allowFullScreen
              data-ratio="1.7777777777777777"
            />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default Research;