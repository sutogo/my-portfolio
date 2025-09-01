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
            PS型人工膝関節置換術（TKA）中に、脛骨大腿関節および膝蓋大腿関節に生じる荷重とその方向を、リアルタイムかつin vivoで計測可能なシステムの開発を行っています。
          </p>
        </section>
      </FadeIn>

      <FadeIn>
        <section className={styles.section}>
          <h2>目的と背景</h2>
          <p>
            術中の軟部組織における荷重バランスの定量化は、TKA後のQOL向上に寄与するとされていますが、TKA術中の軟部組織のバランス調整時に従来用いられているテンサーは膝蓋骨を裏返し、
            または側方にずらしたまま使用します。そのため、術後との整合性に課題がありました。
          </p>

          <p>
            加えて、市販のセンサ内蔵型インサートは高価かつ使い捨てであり、CR型にのみ対応しています。
            さらに、近年主流となっているPS型では術後動態が異なるため、PS型対応の測定手法が求められている一方で、膝蓋大腿関節を取り扱った研究は件数が少ないのが現状です。
            これは膝蓋骨が小さいため、対象とするのが難しいことが理由として挙げられますが、膝蓋大腿関節に加わる圧縮力は、膝前部の痛みなどTKA術後の合併症に繋がる可能性があります。
          </p>

          <p>
            以上のことから、術中に軟部組織のバランスと膝蓋大腿関節に掛かる負荷を動的に測定が可能となれば、術中の荷重バランス調整の精度が向上し、術後の機能回復期間短縮やQOL向上への貢献が期待されます。
          </p>
        </section>
      </FadeIn>
      
      <FadeIn>
        <section className={styles.section}>
          <h2>技術的ハイライト</h2>
          <p>
            <strong>鋭意製作中</strong> 
          </p>
        </section>
      </FadeIn>

      <FadeIn>
        <section className={styles.section}>
          <h2>研究についてわかりやすくまとめた資料</h2>
          <div className={styles.slideContainer}>
            <iframe 
              className="speakerdeck-iframe" 
              style={{border: '5px solid #000000', background: 'rgba(0, 0, 0, 0.1)', margin: '0px', padding: '0px', borderRadius: '6px', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 5px 40px', width: '100%', height: 'auto', aspectRatio: '560 / 315'}} 
              src="https://speakerdeck.com/player/ffcc7a7df3874b8ca71421c9b9dfde44" 
              title="Your Presentation Title" 
              allowFullScreen 
              data-ratio="1.7777777777777777">
            </iframe>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className={styles.section}>
          <h2>結果と社会への還元</h2>
          <p>
            術中に軟部組織のバランスと膝蓋大腿関節に掛かる負荷を動的に測定が可能となれば、術中の荷重バランス調整の精度が向上し、術後の機能回復期間短縮やQOL向上への貢献が期待されます。
          </p>

        </section>
      </FadeIn>

    </div>
  );
}

export default Research;