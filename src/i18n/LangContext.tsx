import { createContext, useContext, useState, type ReactNode } from 'react';

export type Lang = 'ja' | 'en';

type LangContextType = {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
};

const LangContext = createContext<LangContextType>({
  lang: 'ja',
  toggleLang: () => {},
  t: (key: string) => key,
});

export function useLang() {
  return useContext(LangContext);
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      return (localStorage.getItem('lang') as Lang) || 'ja';
    } catch {
      return 'ja';
    }
  });

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === 'ja' ? 'en' : 'ja';
      try { localStorage.setItem('lang', next); } catch {}
      return next;
    });
  };

  const t = (key: string): string => {
    const dict = translations[lang];
    return dict[key] ?? key;
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

// ─── Translation Dictionaries ───

const translations: Record<Lang, Record<string, string>> = {
  ja: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.research': 'Research',
    'nav.skills': 'Skills',
    'nav.works': 'Works',
    'nav.techStack': 'Tech Stack',
    'nav.vision': 'Vision',
    'nav.contact': 'Contact',

    // Home
    'home.greeting': 'Engineering Portfolio',
    'home.catchphrase': 'コードで思考し，\n鉄で具現化する．',
    'home.subtitle': 'フィジカルとデジタルを繋ぐ「ブリッジエンジニア」',
    'home.cta': 'View My Work',
    'home.scroll': 'Scroll',
    'home.modelCaption': 'Knee Joint 3D Model — 研究対象',

    // About
    'about.label': 'About Me',
    'about.title': '「現場の痛み」を知っているからこそ，\n作れるシステムがある．',
    'about.intro1': '福岡工業大学大学院（M1）にて，{bio}とIoTシステムを専攻．自動車部品メーカーでの品質検査員として{highlight}を達成した後，「不具合を見つける側」から「根本的な仕組みを創る側」への転身を決意し，大学へ編入．',
    'about.intro1.bio': '医工学（バイオメカニクス）',
    'about.intro1.highlight': '「月間160時間の工数削減」',
    'about.intro2': '旋盤・溶接といった物理的な「ハードウェア実装力」と，C#(.NET)を用いた「ソフトウェア開発力」の双方を併せ持つ，二刀流のエンジニアとして，{cps}を目指しています．',
    'about.intro2.cps': 'CPS（Cyber-Physical System）の社会実装',
    'about.timelineTitle': 'Career & Education',
    'about.metric.reduction': '測定工数削減',
    'about.metric.lines': '新規ライン立上げ',
    'about.metric.countries': 'カ国での活動',
    'about.metric.wcb': 'WCB 国際学会',

    // Research
    'research.label': 'Research',
    'research.title': 'TKA手術支援システムの開発',
    'research.subtitle': '「職人の勘」を「客観データ」へ翻訳し，手術の成功率と患者のQOLを向上させる',
    'research.overview.title': '研究概要',
    'research.overview.text': '全人工膝関節置換術（TKA）において，脛骨大腿関節（TFJ）と膝蓋大腿関節（PFJ）にかかる荷重とその方向を，{strong}できる手術支援システムを開発．世界で初めてTFJとPFJの同時評価を実現し，執刀医の熟練度に左右されない高精度な手術を支援します．',
    'research.overview.strong': '同時かつリアルタイムに動的評価',
    'research.background.title': '背景と課題',
    'research.background.text': '術後の満足度向上には軟部組織バランスの適正化が不可欠ですが，従来は医師の手先の感覚（暗黙知）に依存していました．また，既存デバイスはTFJのみを評価対象とし，術後疼痛の主要因とされるPFJを含めた包括的評価が困難でした．',
    'research.approach.title': '技術的アプローチ',
    'research.approach.hw.label': 'Hardware',
    'research.approach.hw.text': 'TFJ側にはインサートトライアルに{s1}を内蔵，PFJ側にはパテラトライアルに{s2}を配置．パテラ側はボルト・ナット配置を{s3}させる独自設計で安全性を確保．インサート側はOリングを用いた弾性嵌合構造をISO 14630基準で評価し採用．',
    'research.approach.hw.s1': '小型2軸モーメントセンサ',
    'research.approach.hw.s2': '小型3軸力覚センサ',
    'research.approach.hw.s3': '180度反転',
    'research.approach.sw.label': 'Software',
    'research.approach.sw.text': 'C# (.NET 8.0, WPF) で開発した専用GUIアプリ．センサの電圧値を{s1}で力（N）・モーメント（Nm）に変換し，リアルタイムでベクトルとして可視化．USBカメラ映像との{s2}機能を搭載．',
    'research.approach.sw.s1': '干渉補正行列',
    'research.approach.sw.s2': 'ミリ秒単位の同期録画',
    'research.knee.title': '生体再現性の高い膝モデル',
    'research.knee.text': '医用CT画像から骨形状を抽出し，3Dプリンタ（KEYENCE AGILISTA-3200）で大腿骨・脛骨モデルを造形．大腿四頭筋腱・膝蓋靭帯・MCL・LCLを人工靭帯と{s1}で実装し，解剖学的知見に基づいた付着位置・走行方向を正確に再現しました．',
    'research.knee.s1': '非線形ばね要素',
    'research.results.title': '実験結果',
    'research.results.pfj': 'PFJ',
    'research.results.pfj.text': '屈曲角度の進行に伴い圧縮力が増大し，深屈曲域（90°）で最大値{s1}を記録．屈曲20°付近で剪断力方向が反転 — 膝蓋骨が大腿骨滑車溝へ進入する生体力学的機構を力学的に捕捉．',
    'research.results.pfj.s1': '約48N',
    'research.results.tfj': 'TFJ',
    'research.results.tfj.text': '前後方向荷重は全屈曲範囲で小さい値で推移．PS型特有の{s1}が適切に機能し，関節面への過度なストレスを抑制していることを定量的に裏付け．',
    'research.results.tfj.s1': 'ポスト・カム機構',
    'research.results.summary': '→ 従来のテンサーでは把握困難だった{s1}することに成功',
    'research.results.summary.s1': '「非線形な荷重変化」を連続的に定量化',
    'research.achievements.title': '成果・発表',
    'research.achievements.wcb': 'WCB 2026',
    'research.achievements.wcb.text': ' — World Congress of Biomechanics（カナダ・バンクーバー）にてポスター発表採択（2026年7月）',
    'research.achievements.jsme': '日本機械学会 九州支部',
    'research.achievements.jsme.text': ' — 第57回学生員卒業研究発表講演会にて発表',
    'research.achievements.icbme': 'ICBME 2024',
    'research.achievements.icbme.text': ' — シンガポールにてFIT-Techプログラムメンバーとして参加',
    'research.slide.title': '研究紹介スライド',

    // Skills
    'skills.label': 'Skills & Qualifications',
    'skills.title': 'スキル & 資格',
    'skills.qualTitle': '保有資格',

    // Works
    'works.label': 'Works',
    'works.title': 'プロジェクト',
    'works.subtitle': 'これまでに取り組んだ主なプロジェクト',

    // TechStack
    'techStack.label': 'Tech Stack',
    'techStack.title': 'このポートフォリオを支える技術',
    'techStack.subtitle': 'このサイトで使用している技術スタック',

    // Vision
    'vision.label': 'Future Vision',
    'vision.title': "What's Next",
    'vision.subtitle': 'エッジからクラウドまでを一気通貫で設計する「サービス化」への挑戦',
    'vision.edge.title': 'センサ × ハードウェア',
    'vision.edge.desc': '物理空間のデータを正確にキャプチャするセンサシステムと，それを支える堅牢な機構設計',
    'vision.bridge.title': 'リアルタイム処理 × 通信',
    'vision.bridge.desc': 'C#(.NET)によるリアルタイムデータ処理と，IoTプロトコルによるクラウドへのシームレスな接続',
    'vision.cloud.title': 'クラウド × 可視化',
    'vision.cloud.desc': 'AWS IoT Core等を活用したデータ蓄積・分析基盤と，意思決定を支援するダッシュボード',
    'vision.statement': 'ハードウェアの物理的制約とソフトウェアの柔軟性の双方を翻訳できる{bridge}として，九州（福岡・佐賀）を拠点に，医療・自動車・製造といった領域で{cps}をリードしたいと考えています．',
    'vision.statement.bridge': '「ブリッジエンジニア」',
    'vision.statement.cps': 'CPSの社会実装',

    // Contact
    'contact.label': 'Contact',
    'contact.title': 'お問い合わせ',
    'contact.subtitle': 'お気軽にご連絡ください',
    'contact.name': 'お名前',
    'contact.email': 'メールアドレス',
    'contact.message': 'メッセージ',
    'contact.send': '送信する',
    'contact.sending': '送信中...',
    'contact.success': '送信が完了しました！',
    'contact.error': '送信に失敗しました。もう一度お試しください。',
    'contact.snsTitle': 'SNS',

    // Footer
    'footer.rights': 'All rights reserved.',

    // Timeline
    'timeline.highschool.title': '工業高等学校（自動車科）',
    'timeline.highschool.subtitle': '【The Origin】エンジニアとしての原体験',
    'timeline.highschool.desc': '自動車工学の基礎を学び，3級自動車整備士の技能を習得．廃車のスクーターエンジンをOHして流用し，TIG溶接やアッカーマン機構の組み付けを行い，ゼロから「三輪バギー」をチームで製作．',
    'timeline.advics.title': '株式会社アドヴィックス',
    'timeline.advics.subtitle': '【The Professional】徹底した現場改善と品質へのこだわり',
    'timeline.advics.desc': 'ブレーキ（ABS/ESC）の検査員として従事．三次元測定機の自動化を推進し，月間280時間→120時間へ測定工数を57%削減．QCサークルのサブリーダーとしても組織をけん引．',
    'timeline.trajectory.title': '株式会社トラジェクトリー（長崎・対馬）',
    'timeline.trajectory.subtitle': '【The Pioneer】0→1の立ち上げ',
    'timeline.trajectory.desc': '官民一体のドローン運用プロジェクトに新規事務所の立ち上げメンバーとして参画．遠隔管制システムや運用ルールの整備・マニュアル作成を行い，退職後も運用される「仕組み」を構築．',
    'timeline.short.title': '福岡工業大学短期大学部（情報メディア学科）',
    'timeline.short.subtitle': '【The Pivot】ソフトウェアと論理の世界へ',
    'timeline.short.desc': 'プログラミングと情報工学の基礎を学ぶべく短期大学へ．在学中はUnity-MATLAB連携によるADASシミュレーション環境構築を研究テーマとし，学長賞を受賞．その他，FIT EV Formula Car Project創設，FIT隊幹部メンバー（学生広報団体），Global Student Lounge副リーダーを兼任．',
    'timeline.university.title': '福岡工業大学 情報工学部 情報システム工学科',
    'timeline.university.subtitle': '【The Integration】ブリッジ人材としてハードとソフトの知識を生かした研究へ',
    'timeline.university.desc': '全人工膝関節置換術におけるリアルタイム動的荷重計測システムの開発に従事．日本機械学会 九州支部 第57回学生員卒業研究発表講演会にて発表．',
    'timeline.grad.title': '福岡工業大学 / 大学院（情報システム工学専攻）',
    'timeline.grad.subtitle': '【The Integration】そして世界へ',
    'timeline.grad.desc': '引き続きTKAにおけるリアルタイム動的荷重計測システムの開発に従事．WCB 2026（バンクーバー）にてポスター発表予定．',
  },

  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.research': 'Research',
    'nav.skills': 'Skills',
    'nav.works': 'Works',
    'nav.techStack': 'Tech Stack',
    'nav.vision': 'Vision',
    'nav.contact': 'Contact',

    // Home
    'home.greeting': 'Engineering Portfolio',
    'home.catchphrase': 'Think in code,\nbuild with steel.',
    'home.subtitle': 'A "Bridge Engineer" connecting the physical and digital worlds',
    'home.cta': 'View My Work',
    'home.scroll': 'Scroll',
    'home.modelCaption': 'Knee Joint 3D Model — Research Subject',

    // About
    'about.label': 'About Me',
    'about.title': 'Because I know the pain of the field,\nI can build better systems.',
    'about.intro1': 'Currently pursuing a Master\'s (M1) at Fukuoka Institute of Technology, majoring in {bio} and IoT systems. After achieving {highlight} as a quality inspector at an automotive parts manufacturer, I decided to shift from "finding defects" to "creating fundamental systems" and transferred to university.',
    'about.intro1.bio': 'Biomedical Engineering (Biomechanics)',
    'about.intro1.highlight': '"160-hour monthly workload reduction"',
    'about.intro2': 'As a dual-skilled engineer with both physical "hardware implementation" capabilities (lathe, welding) and "software development" skills using C# (.NET), I aim to drive {cps}.',
    'about.intro2.cps': 'CPS (Cyber-Physical System) social implementation',
    'about.timelineTitle': 'Career & Education',
    'about.metric.reduction': 'Workload Reduced',
    'about.metric.lines': 'Lines Launched',
    'about.metric.countries': 'Countries Active',
    'about.metric.wcb': 'WCB Intl. Conf.',

    // Research
    'research.label': 'Research',
    'research.title': 'TKA Surgical Support System',
    'research.subtitle': 'Translating "surgeon\'s intuition" into "objective data" to improve surgical outcomes and patient QOL',
    'research.overview.title': 'Overview',
    'research.overview.text': 'Developed a surgical support system for Total Knee Arthroplasty (TKA) that can {strong} the loads and directions on both the tibiofemoral joint (TFJ) and patellofemoral joint (PFJ). First in the world to achieve simultaneous TFJ and PFJ evaluation.',
    'research.overview.strong': 'dynamically evaluate in real-time simultaneously',
    'research.background.title': 'Background & Challenges',
    'research.background.text': 'Proper soft tissue balance is essential for postoperative satisfaction, but traditionally depended on the surgeon\'s tactile sense (tacit knowledge). Existing devices only evaluated TFJ, making comprehensive assessment including PFJ—a major cause of postoperative pain—difficult.',
    'research.approach.title': 'Technical Approach',
    'research.approach.hw.label': 'Hardware',
    'research.approach.hw.text': 'A {s1} is embedded in the insert trial for TFJ, and a {s2} is placed in the patella trial for PFJ. The patella side features a unique {s3} bolt-nut design for safety. The insert side uses an O-ring elastic fitting structure evaluated against ISO 14630.',
    'research.approach.hw.s1': 'compact 2-axis moment sensor',
    'research.approach.hw.s2': 'compact 3-axis force sensor',
    'research.approach.hw.s3': '180° reversed',
    'research.approach.sw.label': 'Software',
    'research.approach.sw.text': 'A dedicated GUI application developed with C# (.NET 8.0, WPF). Converts sensor voltage values to force (N) and moment (Nm) using a {s1}, visualized as real-time vectors. Features {s2} with USB camera feed.',
    'research.approach.sw.s1': 'cross-talk compensation matrix',
    'research.approach.sw.s2': 'millisecond-level synchronized recording',
    'research.knee.title': 'Biofidelic Knee Model',
    'research.knee.text': 'Bone geometry extracted from medical CT images and fabricated using a 3D printer (KEYENCE AGILISTA-3200). Quadriceps tendon, patellar ligament, MCL, and LCL were implemented with artificial ligaments and {s1}, accurately reproducing anatomical attachment points and directions.',
    'research.knee.s1': 'nonlinear spring elements',
    'research.results.title': 'Experimental Results',
    'research.results.pfj': 'PFJ',
    'research.results.pfj.text': 'Compressive force increased with flexion angle, reaching a maximum of {s1} at deep flexion (90°). Shear force direction reversed around 20° flexion—capturing the biomechanical mechanism of patellar engagement with the femoral trochlear groove.',
    'research.results.pfj.s1': 'approx. 48N',
    'research.results.tfj': 'TFJ',
    'research.results.tfj.text': 'Anteroposterior loads remained small across the full flexion range. This quantitatively confirms that the {s1} unique to PS-type implants functions properly, suppressing excessive stress on articular surfaces.',
    'research.results.tfj.s1': 'post-cam mechanism',
    'research.results.summary': '→ Successfully achieved {s1}, which was difficult to capture with conventional tensor-based methods',
    'research.results.summary.s1': 'continuous quantification of "nonlinear load changes"',
    'research.achievements.title': 'Achievements',
    'research.achievements.wcb': 'WCB 2026',
    'research.achievements.wcb.text': ' — Poster presentation accepted at World Congress of Biomechanics, Vancouver (July 2026)',
    'research.achievements.jsme': 'JSME Kyushu Branch',
    'research.achievements.jsme.text': ' — Presented at the 57th Student Graduation Research Conference',
    'research.achievements.icbme': 'ICBME 2024',
    'research.achievements.icbme.text': ' — Participated in Singapore as a FIT-Tech program member',
    'research.slide.title': 'Research Presentation Slides',

    // Skills
    'skills.label': 'Skills & Qualifications',
    'skills.title': 'Skills & Certifications',
    'skills.qualTitle': 'Certifications',

    // Works
    'works.label': 'Works',
    'works.title': 'Projects',
    'works.subtitle': 'Key projects I have worked on',

    // TechStack
    'techStack.label': 'Tech Stack',
    'techStack.title': 'Technologies Behind This Portfolio',
    'techStack.subtitle': 'The tech stack used to build this site',

    // Vision
    'vision.label': 'Future Vision',
    'vision.title': "What's Next",
    'vision.subtitle': 'Taking on the challenge of "end-to-end service design" from edge to cloud',
    'vision.edge.title': 'Sensors × Hardware',
    'vision.edge.desc': 'Sensor systems that accurately capture physical-space data, backed by robust mechanical design',
    'vision.bridge.title': 'Real-time Processing × Communication',
    'vision.bridge.desc': 'Real-time data processing with C# (.NET) and seamless cloud connectivity via IoT protocols',
    'vision.cloud.title': 'Cloud × Visualization',
    'vision.cloud.desc': 'Data storage and analytics infrastructure using AWS IoT Core, with dashboards to support decision-making',
    'vision.statement': 'As a {bridge} who can translate between hardware constraints and software flexibility, I aim to lead {cps} in healthcare, automotive, and manufacturing from Kyushu (Fukuoka/Saga), Japan.',
    'vision.statement.bridge': '"Bridge Engineer"',
    'vision.statement.cps': 'CPS social implementation',

    // Contact
    'contact.label': 'Contact',
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Feel free to reach out',
    'contact.name': 'Your Name',
    'contact.email': 'Email Address',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Failed to send. Please try again.',
    'contact.snsTitle': 'Social',

    // Footer
    'footer.rights': 'All rights reserved.',

    // Timeline
    'timeline.highschool.title': 'Technical High School (Automotive Dept.)',
    'timeline.highschool.subtitle': '【The Origin】The origin of hands-on engineering',
    'timeline.highschool.desc': 'Learned automotive fundamentals, obtained Level-3 Auto Mechanic certification. Rebuilt a scrapped scooter engine, performed TIG welding and Ackermann geometry assembly—built a "three-wheel buggy" from scratch as a team.',
    'timeline.advics.title': 'ADVICS Co., Ltd.',
    'timeline.advics.subtitle': '【The Professional】Relentless kaizen & quality commitment',
    'timeline.advics.desc': 'Worked as a brake (ABS/ESC) inspector. Drove automation of CMM measurements, reducing monthly workload from 280h to 120h (57% reduction). Also served as QC Circle sub-leader.',
    'timeline.trajectory.title': 'Trajectory Inc. (Tsushima, Nagasaki)',
    'timeline.trajectory.subtitle': '【The Pioneer】Building from zero',
    'timeline.trajectory.desc': 'Joined a public-private drone operations project as a founding office member. Established remote control systems, operation rules, and manuals—building a "system" that continued to operate after departure.',
    'timeline.short.title': 'FIT Junior College (Information Media)',
    'timeline.short.subtitle': '【The Pivot】Into the world of software & logic',
    'timeline.short.desc': 'Enrolled in junior college to learn programming and information engineering fundamentals. Researched ADAS simulation using Unity-MATLAB integration, earning the Dean\'s Award. Also founded FIT EV Formula Car Project, served as FIT-tai executive member (student PR organization), and Vice Leader of Global Student Lounge.',
    'timeline.university.title': 'Fukuoka Institute of Technology, Dept. of Information Systems Engineering',
    'timeline.university.subtitle': '【The Integration】Leveraging HW & SW knowledge as a bridge engineer',
    'timeline.university.desc': 'Engaged in development of a real-time dynamic load measurement system for Total Knee Arthroplasty. Presented at JSME Kyushu Branch 57th Student Graduation Research Conference.',
    'timeline.grad.title': 'Fukuoka Institute of Technology / Graduate School',
    'timeline.grad.subtitle': '【The Integration】Reaching the world',
    'timeline.grad.desc': 'Continuing development of real-time dynamic load measurement system for TKA. Poster presentation scheduled at WCB 2026 (Vancouver).',
  },
};
