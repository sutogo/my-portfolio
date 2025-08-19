
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaPython, FaJava, FaDocker, FaGithub, FaPhp, FaWrench, FaCar, FaBroadcastTower, FaSearch } from 'react-icons/fa';
import { SiTypescript, SiRubyonrails, SiSharp, SiCplusplus } from 'react-icons/si';
import { AiOutlineTool, AiFillCar } from 'react-icons/ai';
import { BsGraphUp, BsTools, BsCpu } from 'react-icons/bs';

// Type definitions
export type Skill = {
  name: string;
  icon: React.ReactNode;
  experience: string;
  level: number;
  description: string;
  category: 'Web' | 'Hardware' | 'Other';
};

export type Qualification = {
  name: string;
  icon: React.ReactNode;
};

// Data
export const skillsData: Skill[] = [
  {
    name: 'React',
    icon: <FaReact />,
    experience: '1年未満',
    level: 1,
    description: '本ポートフォリオ作成のために使用。',
    category: 'Web',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
    experience: '1年未満',
    level: 1,
    description: '本ポートフォリオ作成のために使用。',
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
    experience: '3年',
    level: 2,
    description: 'データ解析や、科学技術計算アプリケーションの作成に使用。',
    category: 'Other',
  },
  {
    name: 'Java',
    icon: <FaJava />,
    experience: '4年',
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
    experience: '1年',
    level: 2,
    description: '短期大学所属時の研究活動でUnityでの使用経験あり。',
    category: 'Other',
  },
  {
    name: 'Git / GitHub',
    icon: <FaGithub />,
    experience: '3年',
    level: 3,
    description: '基本的なバージョン管理、ブランチ戦略を理解。チーム開発でのプルリクエストベースのワークフロー経験あり。',
    category: 'Other',
  },
  {
    name: 'Docker',
    icon: <FaDocker />,
    experience: '2年',
    level: 2,
    description: '開発環境のコンテナ化、Dockerfileやdocker-composeを用いた環境構築が可能。本ポートフォリオもDocker上で開発。',
    category: 'Other',
  },
  {
    name: 'MATLAB',
    icon: <BsGraphUp />,
    experience: '4年',
    level: 3,
    description: '数値計算、データ解析、シミュレーションなどに使用。研究データの可視化やアルゴリズムの検証経験あり。',
    category: 'Other',
  },

  {
    name: 'CAD (SolidWorks, Fusion360)',
    icon: <AiOutlineTool />,
    experience: '3年',
    level: 5,
    description: '3Dプリンタでの出力を想定した部品設計、および研究用実験装置の設計が可能。',
    category: 'Hardware',
  },
  {
    name: '機械加工',
    icon: <BsTools />,
    experience: '5年',
    level: 4,
    description: 'NCフライス盤、旋盤、溶接（アーク、TIG）など、設計から製作まで一貫して対応可能。',
    category: 'Hardware',
  },
  {
    name: '機械検査',
    icon: <FaSearch />,
    experience: '6年',
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
    experience: '3年',
    level: 3,
    description: 'センサ制御や簡単なプロトタイピングなど、ハードウェアと連携するプログラムを作成可能。',
    category: 'Other',
  },
];

export const qualificationsData: Qualification[] = [
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
