import FadeIn from './FadeIn';
import styles from './Timeline.module.css';

const timelineData = [
  {
    date: '2018年03月',
    title: '福岡市立博多工業高等学校自動車工学科 卒業',
    description: '自動車工学を専攻し，基礎的な自動車・機械工学の知識と技能を習得．',
  },
  {
    date: '2018年04月 - 2020年07月',
    title: '自動車部品サプライヤーで機械検査員として従事',
    description: '社外品の受入検査業務，内製品検査および初品検査を担当．',
  },
  {
    date: '2021年03月 - 2021年07月',
    title: 'ドローン系ベンチャー企業でスタッフとして従事',
    description: 'ドローンの運行管理および法定飛行手続き代行を担当．',
  },
  {
    date: '2022年04月',
    title: `福岡工業大学短期大学部
            情報メディア学科入学`,
    description: '一念発起し，ソフトウェアにも手を広げることを決意．',
  },
  {
    date: '2024年03月',
    title: `福岡工業大学短期大学部
            情報メディア学科卒業`,
    description: '学内研究発表にて，学長賞を受賞 テーマ：xx',
  },
  {
    date: '2024年04月',
    title: `福岡工業大学情報工学部
            情報システム工学科編入学`,
    description: '今までのハード・ソフトウェアに関する能力を活かし，工学と医療と掛け合わせた研究に挑戦．',
  },
  {
    date: '現在',
    title: '整形外科と工学を融合しTKA適応後のQOL向上に寄与する研究に従事',
    description: '',
  },
  {
    date: '2026年03月',
    title: `福岡工業大学情報工学部
            情報システム工学科卒業`,
    description: '',
  },
  {
    date: '2026年04月',
    title: `福岡工業大学大学院
            情報システム工学専攻入学`,
    description: 'さらに専門的な研究を深め，医療分野における技術革新に貢献することを目指す．',
  },
];

function Timeline() {
  return (
    <div className={styles.timelineContainer}>
      {timelineData.map((item, index) => (
        <FadeIn key={index}>
          <div className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <span className={styles.timelineDate}>{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

export default Timeline;