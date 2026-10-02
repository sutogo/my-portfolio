import { FaCarSide, FaCogs, FaHeartbeat } from 'react-icons/fa';

// 文言は辞書（LangContext）の works.<id>.* にある
export type Work = {
  id: string;
  tags: string[];
  githubUrl?: string;
  imageUrl?: string;
  icon?: React.ReactNode;
  // 課題・取り組み・成果をモーダルに出す主力プロジェクト
  featured?: boolean;
};

export const worksData: Work[] = [
  {
    id: 'tka',
    tags: ['C#', '.NET 8.0', 'WPF', 'Sensor', 'Biomechanics'],
    icon: <FaHeartbeat />,
    featured: true,
  },
  {
    id: 'adas',
    tags: ['Unity', 'MATLAB', 'Simulink', 'ADAS', 'Collision Avoidance'],
    icon: <FaCarSide />,
    featured: true,
  },
  {
    id: 'formula',
    tags: ['EV', 'Chassis', 'Founder'],
    icon: <FaCogs />,
    featured: true,
  },
  {
    id: 'kneeSim',
    tags: ['Python', 'Simulation', 'Biomechanics'],
    githubUrl: 'https://github.com/sutogo/Knee-joint-simulation',
    imageUrl: '/simulation_results.png',
  },
  {
    id: 'ballistic',
    tags: ['Python', 'Simulation'],
    githubUrl: 'https://github.com/sutogo/Ballistic_Trajectory',
    imageUrl: '/Ba_Tr.png',
  },
  {
    id: 'reservation',
    tags: ['Python', 'Web'],
    githubUrl: 'https://github.com/sutogo/Reservation_System',
    imageUrl: '/Reservation_System.png',
  },
  {
    id: 'memory',
    tags: ['JavaScript', 'Game'],
    githubUrl: 'https://github.com/sutogo/Nervous_breakdown',
    imageUrl: '/Nervous_breakdown.png',
  },
];
