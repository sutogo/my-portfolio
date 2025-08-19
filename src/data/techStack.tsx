import { FaReact, FaDocker, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiVite, SiThreedotjs, SiGreensock, SiReactrouter } from 'react-icons/si';

export type Tech = {
  name: string;
  icon: React.ReactNode;
  description: string;
  category: 'Development Environment' | 'Core Framework' | '3D & Animation' | 'Styling';
};

export const techStackData: Tech[] = [
  {
    name: 'React',
    icon: <FaReact />,
    description: 'このポートフォリオのUIを構築するためのコアライブラリとして全面的に採用しています。コンポーネントベースの設計により、保守性と再利用性の高いコードを実現しました。',
    category: 'Core Framework',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
    description: 'すべてのコンポーネントとロジックに型定義を適用し、開発時のエラーを削減。コードの可読性と堅牢性を高めています。',
    category: 'Core Framework',
  },
  {
    name: 'Vite',
    icon: <SiVite />,
    description: '開発サーバーの起動やHMR（ホットリロード）が非常に高速なため採用。快適な開発体験と、本番用の効率的なビルドを実現しています。',
    category: 'Development Environment',
  },
  {
    name: 'Three.js / R3F',
    icon: <SiThreedotjs />,
    description: 'React Three Fiber(R3F)を介してThree.jsを利用。Home画面のインタラクティブな3D膝関節モデルの描画に使用しています。',
    category: '3D & Animation',
  },
  {
    name: 'GSAP',
    icon: <SiGreensock />,
    description: 'GreenSock Animation Platform。3Dモデルのカメラワークや登場アニメーションなど、複雑で滑らかな動きを実装するために使用しました。',
    category: '3D & Animation',
  },
  {
    name: 'React Router',
    icon: <SiReactrouter />,
    description: 'SPA（シングルページアプリケーション）としてのページ遷移を管理。URLに応じたコンポーネントの表示切り替えを行っています。',
    category: 'Core Framework',
  },
  {
    name: 'CSS Modules',
    icon: <FaCss3Alt />,
    description: 'コンポーネントごとにCSSを記述し、クラス名がローカルスコープに限定されるため、スタイル競合の心配がない堅牢なスタイリングを実現しています。',
    category: 'Styling',
  },
  {
    name: 'Docker',
    icon: <FaDocker />,
    description: '開発環境をコンテナ化するために使用。OSに依存しない一貫した開発環境を構築し、チーム開発やデプロイの容易性を高めています。',
    category: 'Development Environment',
  },
];
