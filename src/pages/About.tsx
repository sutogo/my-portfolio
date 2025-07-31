import styles from './About.module.css';
import Timeline from '../components/Timeline';
import FadeIn from '../components/FadeIn';
import SkillCard from '../components/SkillCard';
import type { Skill } from '../components/SkillCard'; // ← 型はこちらでインポート
import QualificationCard from '../components/QualificationCard'; // ← この行を追加
import type { Qualification } from '../components/QualificationCard';

// アイコンをreact-iconsからインポート
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaPython, FaJava, FaDocker, FaGitAlt, FaPhp, FaGithub } from 'react-icons/fa';
import { FaWrench, FaCar, FaBroadcastTower, FaSearch } from 'react-icons/fa';
import { FcInspection } from "react-icons/fc";
import { SiTypescript, SiRubyonrails, SiCplusplus, SiSharp,} from 'react-icons/si';
import { AiOutlineTool, AiFillCar } from 'react-icons/ai';
import { BsGraphUp } from 'react-icons/bs';
import { BsTools, BsCpu } from 'react-icons/bs';
import { VscBeaker } from 'react-icons/vsc';

// スキルデータを定義
// スキルデータを定義
const skillsData: Skill[] = [
  {
    name: 'React',
    icon: <FaReact />,
    experience: '2年',
    level: 4,
    description: 'SPA構築、状態管理、コンポーネント設計など、実践的なフロントエンド開発が可能。本ポートフォリオもReactで制作。',
    category: 'Web',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
    experience: '1年',
    level: 4,
    description: '静的型付けによる堅牢なコード記述を好む。大規模なアプリケーションでの開発経験あり。',
    category: 'Web',
  },
  {
    name: 'HTML/CSS',
    icon: <FaHtml5 />,
    experience: '3年',
    level: 4,
    description: 'セマンティックなマークアップと、CSS ModulesやSassを用いた保守性の高いスタイリングが得意。',
    category: 'Web',
  },
  {
    name: 'Ruby / Rails',
    icon: <SiRubyonrails />,
    experience: '1年',
    level: 3,
    description: 'Ruby on Railsを用いたWebアプリケーションの基本的な開発経験あり。',
    category: 'Web',
  },
  {
    name: 'Python',
    icon: <FaPython />,
    experience: '2年',
    level: 3,
    description: 'データ解析や、科学技術計算アプリケーションの作成に使用。',
    category: 'Other',
  },
  {
    name: 'Java',
    icon: <FaJava />,
    experience: '1年',
    level: 3,
    description: '基本的なオブジェクト指向プログラミングを理解し、数理計算プログラムの開発経験あり。',
    category: 'Other',
  },
  {
    name: 'PHP',
    icon: <FaPhp />,
    experience: '1年未満',
    level: 2,
    description: '基本的なWebサイトのバックエンド処理や、既存システムの改修経験あり。',
    category: 'Web',
  },
  {
    name: 'C#',
    icon: <SiSharp />,
    experience: '1年未満',
    level: 2,
    description: '基本的な文法を理解しており、簡単なアプリケーションの作成が可能。',
    category: 'Other',
  },
  {
    name: 'Git / GitHub',
    icon: <FaGithub />,
    experience: '3年',
    level: 4,
    description: '基本的なバージョン管理、ブランチ戦略を理解。チーム開発でのプルリクエストベースのワークフロー経験あり。',
    category: 'Other',
  },
  {
    name: 'Docker',
    icon: <FaDocker />,
    experience: '1年',
    level: 3,
    description: '開発環境のコンテナ化、Dockerfileやdocker-composeを用いた環境構築が可能。本ポートフォリオもDocker上で開発。',
    category: 'Other',
  },
  {
    name: 'MATLAB',
    icon: <BsGraphUp />,
    experience: '2年',
    level: 3,
    description: '数値計算、データ解析、シミュレーションなどに使用。研究データの可視化やアルゴリズムの検証経験あり。',
    category: 'Other',
  },

  {
    name: 'CAD (SolidWorks, Fusion360)',
    icon: <AiOutlineTool />,
    experience: '5年以上',
    level: 5,
    description: '3Dプリンタでの出力を想定した精密な部品設計、および研究用実験装置の設計が可能。',
    category: 'Hardware',
  },
  {
    name: '機械加工',
    icon: <BsTools />,
    experience: '3年',
    level: 4,
    description: 'NCフライス盤、旋盤、溶接（アーク、TIG）など、設計から製作まで一貫して対応可能。',
    category: 'Hardware',
  },
  {
    name: '機械検査',
    icon: <FaSearch />,
    experience: '3年',
    level: 5,
    description: '三次元測定機や各種測定器を用いたμm単位での精度保証、および品質管理業務に従事。',
    category: 'Hardware',
  },
  {
    name: '自動車整備',
    icon: <AiFillCar />,
    experience: '3年',
    level: 4,
    description: 'ガソリン・ジーゼル両方の3級整備士資格を保有。基本的な車両整備、点検、故障診断が可能。',
    category: 'Hardware',
  },
  {
    name: '組込み (Arduino)',
    icon: <BsCpu />,
    experience: '2年',
    level: 3,
    description: 'センサ制御や簡単なプロトタイピングなど、ハードウェアと連携するプログラムを作成可能。',
    category: 'Other',
  },
];

// 資格データを定義
const qualificationsData: Qualification[] = [
  {
    name: '機械検査技能士 2級',
    icon: <FaWrench />,
  },
  {
    name: '機械保全技能士 2級',
    icon: <FaWrench />,
  },
  {
    name: '自動車整備士 3級ガソリン',
    icon: <FaCar />,
  },
  {
    name: '自動車整備士 3級ジーゼル',
    icon: <FaCar />,
  },
  {
    name: '陸上特殊無線技士 2級',
    icon: <FaBroadcastTower />,
  },
];

function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Me</h1>
      
      <FadeIn>
        <section className={styles.section}>
          <p>
            ハードウェアとソフトウェア、双方の領域を深く理解し、アイデアを構想から物理的な形にするまでを一気通貫で実現することを得意としています。
          </p>
          <p>
            約3年間の社会人経験で培った課題解決能力と、幅広い技術領域への探求心で、まだ見ぬ価値を創造します。
          </p>
        </section>
      </FadeIn>

      {/* ↓↓↓ このSkillsセクションが修正・補足した部分です ↓↓↓ */}
      <h2>Skills</h2>
      <div className={styles.skillsGrid}>
        {skillsData.map((skill, index) => (
          <FadeIn key={index}>
            <SkillCard skill={skill} />
          </FadeIn>
        ))}
      </div>

       <h2>Qualifications</h2>
      <div className={styles.skillsGrid}>
        {qualificationsData.map((qualification, index) => (
          <FadeIn key={index}>
            <QualificationCard qualification={qualification} />
          </FadeIn>
        ))}
      </div>
      
      <h2>Career & History</h2>
      <Timeline />
    </div>
  );
}

export default About;