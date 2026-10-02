import { FaReact, FaHtml5, FaPython, FaJava, FaDocker, FaGithub, FaPhp, FaWrench, FaCar, FaBroadcastTower, FaSearch } from 'react-icons/fa';
import { SiTypescript, SiRubyonrails, SiSharp } from 'react-icons/si';
import { AiOutlineTool, AiFillCar } from 'react-icons/ai';
import { BsGraphUp, BsTools, BsCpu } from 'react-icons/bs';

// 名前と説明は辞書（LangContext）の skills.<id>.name / skills.<id>.desc にある
export type Skill = {
  id: string;
  icon: React.ReactNode;
  years: number; // 0 は「1年未満」
  level: number;
  category: 'hardware' | 'software' | 'web';
};

export type Qualification = {
  id: string;
  icon: React.ReactNode;
};

// 表示順はカテゴリ内でもこの並びのまま
export const skillsData: Skill[] = [
  { id: 'inspection', icon: <FaSearch />, years: 6, level: 5, category: 'hardware' },
  { id: 'machining', icon: <BsTools />, years: 5, level: 4, category: 'hardware' },
  { id: 'cad', icon: <AiOutlineTool />, years: 3, level: 5, category: 'hardware' },
  { id: 'automotive', icon: <AiFillCar />, years: 3, level: 4, category: 'hardware' },

  { id: 'csharp', icon: <SiSharp />, years: 3, level: 4, category: 'software' },
  { id: 'matlab', icon: <BsGraphUp />, years: 4, level: 3, category: 'software' },
  { id: 'arduino', icon: <BsCpu />, years: 3, level: 3, category: 'software' },
  { id: 'python', icon: <FaPython />, years: 3, level: 2, category: 'software' },
  { id: 'java', icon: <FaJava />, years: 4, level: 3, category: 'software' },
  { id: 'git', icon: <FaGithub />, years: 3, level: 3, category: 'software' },
  { id: 'docker', icon: <FaDocker />, years: 2, level: 2, category: 'software' },

  { id: 'html', icon: <FaHtml5 />, years: 3, level: 4, category: 'web' },
  { id: 'react', icon: <FaReact />, years: 1, level: 2, category: 'web' },
  { id: 'typescript', icon: <SiTypescript />, years: 1, level: 2, category: 'web' },
  { id: 'rails', icon: <SiRubyonrails />, years: 1, level: 3, category: 'web' },
  { id: 'php', icon: <FaPhp />, years: 0, level: 2, category: 'web' },
];

export const qualificationsData: Qualification[] = [
  { id: 'inspection', icon: <FaWrench /> },
  { id: 'maintenance', icon: <FaWrench /> },
  { id: 'mechanicGas', icon: <FaCar /> },
  { id: 'mechanicDiesel', icon: <FaCar /> },
  { id: 'radio', icon: <FaBroadcastTower /> },
];
