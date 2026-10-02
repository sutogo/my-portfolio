import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

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
      try { localStorage.setItem('lang', next); } catch { /* ストレージが使えない環境では保存しない */ }
      return next;
    });
  };

  const t = (key: string): string => {
    const dict = translations[lang];
    return dict[key] ?? key;
  };

  // スクリーンリーダーの読み上げ言語が切替に追従するようにする
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

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
    'about.intro2': '旋盤・溶接といった物理的な「ハードウェア実装力」と，C#(.NET)を用いた「ソフトウェア開発力」の双方を併せ持つ，二刀流のエンジニアです．九州（福岡・佐賀）を拠点に，医療・自動車・製造の領域で{cps}を目指しています．',
    'about.intro2.cps': 'CPS（Cyber-Physical System）の社会実装',
    'about.timelineTitle': 'Career & Education',
    'about.metric.reduction': '測定工数削減',
    'about.metric.lines': '新規ライン立上げ',
    'about.metric.countries': 'カ国での活動',
    'about.metric.wcb': 'WCB 国際学会',
    'about.metric.award': '日本機械学会 九州学生会',
    'about.metric.award.value': '優秀講演賞',

    // Research
    'research.label': 'Research',
    'research.title': '手術中に，膝の2つの関節にかかる力を同時に測る',
    'research.subtitle': 'PS型全人工膝関節置換術（TKA）における脛骨大腿関節（TFJ）・膝蓋大腿関節（PFJ）荷重の\n同時計測システムの開発',
    'research.problem.title': '背景・課題・目的',
    'research.problem.backgroundLabel': '背景',
    'research.problem.background': '全人工膝関節置換術（TKA）は，傷んだ膝を人工関節に置き換える手術です．術後も痛みや合併症，可動域の制限が残ることがあり，満足度に課題があります．鍵となるのは，すねの関節（TFJ）とお皿の関節（PFJ）にかかる荷重です．',
    'research.problem.issueLabel': '課題',
    'research.problem.issue': '既存の術中計測器はTFJのみに対応しています．術中に両関節の荷重を同時に計測した実例は確認されていません．',
    'research.problem.goalLabel': '目的',
    'research.problem.goal': 'TFJとPFJの荷重を，TKAの術中に同時計測できるシステムを開発しました．',
    'research.features.title': 'システムの特徴',
    'research.f1.title': '2つの関節を同時に計測',
    'research.f1.desc': 'PFJには3軸力覚センサ，TFJには2軸モーメントセンサ．PFJは圧縮力に加えて，剪断力の向きまで捉えます．',
    'research.f2.title': '手術の手順はそのまま',
    'research.f2.desc': 'センサを，手術中に使う仮の人工関節（トライアル）に内蔵しました．薄い膝蓋骨トライアルには，低頭ボルトと締結方向の反転により，金属を露出させずに固定しています．',
    'research.f3.title': 'リアルタイム表示',
    'research.f3.desc': '計測ソフトをC#（.NET 8.0）で自作しました．両関節の荷重ベクトルをPC上に同時に表示し，USBカメラの映像とセンサ値を同期して記録します．',
    'research.flow.title': 'システム構成',
    'research.flow.s1': 'センサ',
    'research.flow.s1.sub': 'PFJ 3軸力覚／TFJ 2軸モーメント',
    'research.flow.s2': 'シグナルコンディショナ',
    'research.flow.s2.sub': '信号の増幅・整形',
    'research.flow.s3': 'アナログ入力ターミナル',
    'research.flow.s3.sub': 'デジタル変換',
    'research.flow.s4': 'PC',
    'research.flow.s4.sub': 'C#（.NET 8.0）でリアルタイム表示',
    'research.flow.eval': '評価：CT由来の骨形状と，靱帯・腱をばねで再現した3Dプリント膝モデルを用い，屈曲0〜90°で計測しました．',
    'research.results.title': '結果',
    'research.results.m1': 'PFJ 最大圧縮力（屈曲90°）',
    'research.results.m2': 'PFJ 剪断力の向きが反転',
    'research.results.m3': 'TFJ 荷重の偏り（センサ精度と同程度）',
    'research.results.summary': 'PFJでは屈曲に伴って荷重の大きさと向きが変化し（90°で最大約48 N，20°付近で剪断力の向きが反転），TFJでは大きな偏りは見られませんでした．両関節の荷重を0〜90°の全範囲で同時に計測できることを確認しました．',
    'research.outlook.title': '今後の展望',
    'research.outlook.text': '靱帯の張りとインサート厚の条件を複数用意して計測し，条件の違いが荷重の差として現れるかを検証します．長期的には，術中のリアルタイム表示による手術支援への応用を目指します．',
    'research.achievements.title': '成果・発表',
    'research.achievements.wcb': 'WCB 2026',
    'research.achievements.wcb.text': ' — World Congress of Biomechanics（カナダ・バンクーバー）にてポスター発表（2026年7月・実施済み）',
    'research.achievements.jsme': '日本機械学会 九州支部',
    'research.achievements.jsme.text': ' — 第57回学生員卒業研究発表講演会にて発表し，優秀講演賞を受賞',
    'research.achievements.icbme': 'ICBME 2024',
    'research.achievements.icbme.text': ' — シンガポールにてFIT-Techプログラムメンバーとして参加',

    // Skills
    'skills.label': 'Skills & Qualifications',
    'skills.title': 'スキル & 資格',
    'skills.qualTitle': '保有資格',
    'skills.cat.hardware': 'ハードウェア・計測',
    'skills.cat.software': 'ソフトウェア・組込み',
    'skills.cat.web': 'Web',
    'skills.inspection.name': '機械検査',
    'skills.inspection.desc': '三次元測定機や各種測定器を用いたμm単位での精度保証，および品質管理業務に従事．',
    'skills.machining.name': '機械加工',
    'skills.machining.desc': 'NCフライス盤，旋盤，溶接（アーク，TIG）など，設計から製作まで一貫して対応可能．',
    'skills.cad.name': 'CAD (SolidWorks, Fusion360)',
    'skills.cad.desc': '3Dプリンタでの出力を想定した部品設計，および研究用実験装置の設計が可能．',
    'skills.automotive.name': '自動車整備',
    'skills.automotive.desc': 'ガソリン・ジーゼル両方の3級整備士資格を保有．基本的な車両整備，点検，故障診断が可能．',
    'skills.csharp.name': 'C# (.NET)',
    'skills.csharp.desc': '.NET 8.0 / WPFで手術支援システムの計測GUIを独力開発．マルチスレッドでセンサ信号とUSBカメラ映像をミリ秒単位で同期し，荷重ベクトルをリアルタイム描画．CSV出力まで実装．',
    'skills.matlab.name': 'MATLAB',
    'skills.matlab.desc': '数値計算，データ解析，シミュレーションなどに使用．研究データの可視化やアルゴリズムの検証経験あり．',
    'skills.arduino.name': '組込み (Arduino)',
    'skills.arduino.desc': 'センサ制御や簡単なプロトタイピングなど，ハードウェアと連携するプログラムを作成可能．',
    'skills.python.name': 'Python',
    'skills.python.desc': 'データ解析や，科学技術計算アプリケーションの作成に使用．',
    'skills.java.name': 'Java',
    'skills.java.desc': '基本的なオブジェクト指向プログラミングを理解し，数理計算プログラムの開発経験あり．',
    'skills.git.name': 'Git / GitHub',
    'skills.git.desc': '基本的なバージョン管理，ブランチ戦略を理解．チーム開発でのプルリクエストベースのワークフロー経験あり．',
    'skills.docker.name': 'Docker',
    'skills.docker.desc': '開発環境のコンテナ化，Dockerfileやdocker-composeを用いた環境構築が可能．本ポートフォリオもDocker上で開発．',
    'skills.html.name': 'HTML/CSS',
    'skills.html.desc': 'セマンティックなマークアップと，CSS ModulesやSassを用いた保守性の高いスタイリングが得意．',
    'skills.react.name': 'React',
    'skills.react.desc': '本ポートフォリオを開発．コンポーネント設計，Context APIによる日英切替，IntersectionObserverを用いたスクロール演出を実装．',
    'skills.typescript.name': 'TypeScript',
    'skills.typescript.desc': '本ポートフォリオの全コンポーネントに型定義を適用．React Three Fiberの型拡張も含めて対応．',
    'skills.rails.name': 'Ruby / Rails',
    'skills.rails.desc': 'Ruby on Railsを用いたWebアプリケーションの基本的な開発経験あり．',
    'skills.php.name': 'PHP',
    'skills.php.desc': '基本的なWebサイトのバックエンド処理や，既存システムの改修経験あり．',
    'skills.qual.inspection': '機械検査技能士 2級',
    'skills.qual.maintenance': '機械保全技能士 2級',
    'skills.qual.mechanicGas': '自動車整備士 3級ガソリン',
    'skills.qual.mechanicDiesel': '自動車整備士 3級ジーゼル',
    'skills.qual.radio': '陸上特殊無線技士 2級',

    // Works
    'works.label': 'Works',
    'works.title': 'プロジェクト',
    'works.subtitle': 'これまでに取り組んだ主なプロジェクト',
    'works.others': 'その他のプロジェクト',
    'works.challenge': '課題',
    'works.action': '取り組み',
    'works.result': '成果',
    'works.github': 'GitHubで見る →',
    'works.tka.title': 'TKA 術中支援システム',
    'works.tka.desc': 'TKAの術中に，膝の2つの関節（TFJ・PFJ）にかかる荷重を同時計測するシステム．センサの組込みから計測ソフトまでを一貫して開発．',
    'works.tka.challenge': '厚みの薄い膝蓋骨トライアルへのセンサ内蔵．初期設計では固定具が骨側に突出し，トライアルそのものを設置できませんでした．',
    'works.tka.action': '固定具の小型化ではなく，低頭ボルトの採用と締結方向の反転という構造の転換で解決し，金属を露出させずに固定しました．計測ソフトはC#（.NET 8.0）で自作し，荷重ベクトルのリアルタイム描画，USBカメラ映像とセンサ値の同期記録，CSV出力を実装しました．',
    'works.tka.result': '日本機械学会九州学生会 第57回卒業研究発表講演会で優秀講演賞を受賞．WCB 2026（カナダ・バンクーバー）でポスター発表．',
    'works.adas.title': 'ADAS機能シミュレーション環境（Unity × MATLAB）',
    'works.adas.desc': '短期大学部2年次の研究．UnityとMATLAB（Simulink）を連携させ，ADAS（先進運転支援システム）の機能をシミュレーション上で確かめられる環境を，共同研究者と2名で構築．',
    'works.adas.challenge': '当初はハンドルコントローラーとUnityが同期せず，運転操作をシミュレーションに反映できない，使えない状態でした．',
    'works.adas.action': 'ハンドルコントローラーとUnityの同期を実現し，実際にハンドルを操作して車両を走らせられる状態にしました．あわせてUnity上の走行コースを作成し，車両を検知すると自動で回避するアルゴリズムを実装しました．車両モデルと障害物検知アルゴリズムは共同研究者が構築しました．',
    'works.adas.result': '短期大学部で学長賞を受賞しました．',
    'works.formula.title': '学生フォーミュラEVチームの創設',
    'works.formula.desc': '短期大学部1年次に，学生フォーミュラのEVクラスに挑む「FIT EV Formula Car Project」を立ち上げ．4名で始め，現在は5名で活動．',
    'works.formula.challenge': '立ち上げ時は資金，部品，作業場所，人手，大学の承認と，あらゆるものが不足していました．',
    'works.formula.action': '学生フォーミュラには内燃機関（ICV）クラスもある中で，あえてEVクラスを選びました．自動車科と自動車部品メーカーで培った知識がどこまで通用するかを試したかったこと，電気分野に苦手意識を持つ学生が多い中で，自動車と電気工学を楽しく学べる場をつくりたかったことが理由です．EVという選択がSDGsと新規性の両面で大学の関心を引き，承認につながったと考えています．',
    'works.formula.result': '限られた資源の中で，まずシャシーを製作しました．大会レギュレーションへの適合は今後の課題です．',
    'works.seminarQa.title': 'ゼミ質疑支援アプリ',
    'works.seminarQa.desc': '研究室のゼミで，聴衆がスマートフォンから匿名で質問を投稿し，共感の多い順に答えていくWebアプリ．聴衆が理解を見失った時刻を「わからん」として記録し，発表のどこで伝わらなかったかをグラフで発表者に返す．外部と通信せず，LAN内だけで動作．',
    'works.mysteryWalk.title': 'Mystery Walk（散歩ナビ）',
    'works.mysteryWalk.desc': '目的地を伏せたまま，コンパスが指す方向と距離だけを頼りに未知のスポットを探索する，Android向けの散歩ナビ．歩いた距離に応じた経験値とレベル，到着したスポットの履歴表示，通信が途切れても出発地点へ戻れる帰還モードを備える．',
    'works.timeVisible.title': '福工大前駅 デジタル時刻表',
    'works.timeVisible.desc': 'JR福工大前駅専用のデジタル時刻表．次の列車までの残り時間と，駅までの徒歩時間をもとに「歩いても間に合います」「急げば間に合います」と行動を提案する．遅延・運休情報は15分ごとに自動取得して表示．',
    'works.kneeSim.title': '人工膝関節運動力学シミュレーター',
    'works.kneeSim.desc': '特定の屈曲角度における膝の安定した3次元的な姿勢（内外反・内外旋）を，ポテンシャルエネルギー最小化で計算するPythonアプリケーション．各角度での関節角度，靭帯（MCL・LCL・膝蓋靭帯）の張力，関節面の接触力を算出し，グラフで可視化します．',
    'works.ballistic.title': '戦車砲弾弾道計算アプリ',
    'works.ballistic.desc': '物理法則に基づき，戦車の砲弾が描く弾道をシミュレーションするアプリケーション．',
    'works.reservation.title': '大学の工作機械予約システム',
    'works.reservation.desc': '工作機械の予約を管理するWebアプリケーション．月間カレンダーでの予約状況の確認，機械ごとの利用状況グラフ，メンテナンス期間の設定，CSV出力に対応．',
    'works.memory.title': '神経衰弱アプリ',
    'works.memory.desc': 'クラシックなカードゲーム「神経衰弱」をブラウザ上で遊べるように実装．',

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
    'timeline.university.desc': 'TKAの術中にTFJ・PFJの荷重を同時計測するシステムの開発に従事．日本機械学会 九州支部 第57回学生員卒業研究発表講演会にて発表し，優秀講演賞を受賞．',
    'timeline.grad.title': '福岡工業大学 / 大学院（情報システム工学専攻）',
    'timeline.grad.subtitle': '【The Integration】そして世界へ',
    'timeline.grad.desc': '引き続きTKA術中の二関節荷重同時計測システムの開発に従事．WCB 2026（カナダ・バンクーバー）にてポスター発表を実施．',
  },

  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.research': 'Research',
    'nav.skills': 'Skills',
    'nav.works': 'Works',
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
    'about.intro2': 'As a dual-skilled engineer with both physical "hardware implementation" capabilities (lathe, welding) and "software development" skills using C# (.NET), I aim to drive {cps} in healthcare, automotive, and manufacturing from Kyushu (Fukuoka/Saga), Japan.',
    'about.intro2.cps': 'CPS (Cyber-Physical System) social implementation',
    'about.timelineTitle': 'Career & Education',
    'about.metric.reduction': 'Workload Reduced',
    'about.metric.lines': 'Lines Launched',
    'about.metric.countries': 'Countries Active',
    'about.metric.wcb': 'WCB Intl. Conf.',
    'about.metric.award': 'JSME Kyushu Student Branch',
    'about.metric.award.value': 'Award',

    // Research
    'research.label': 'Research',
    'research.title': 'Measuring the forces on two knee joints at once, during surgery',
    'research.subtitle': 'Development of a system for simultaneous measurement of tibiofemoral (TFJ) and patellofemoral (PFJ) joint loads in posterior-stabilized total knee arthroplasty (TKA)',
    'research.problem.title': 'Background, Problem & Goal',
    'research.problem.backgroundLabel': 'Background',
    'research.problem.background': 'Total knee arthroplasty (TKA) replaces a damaged knee with an artificial joint. Pain, complications, and limited range of motion can remain after surgery, leaving room to improve patient satisfaction. The loads on the shin joint (TFJ) and the kneecap joint (PFJ) are key.',
    'research.problem.issueLabel': 'Problem',
    'research.problem.issue': 'Existing intraoperative measurement devices cover the TFJ only. No prior case of measuring both joint loads simultaneously during surgery has been found.',
    'research.problem.goalLabel': 'Goal',
    'research.problem.goal': 'I developed a system that measures TFJ and PFJ loads simultaneously during TKA.',
    'research.features.title': 'Key Features',
    'research.f1.title': 'Both joints, simultaneously',
    'research.f1.desc': 'A 3-axis force sensor for the PFJ and a 2-axis moment sensor for the TFJ. For the PFJ, it captures not only compression but also the direction of shear.',
    'research.f2.title': 'No change to the procedure',
    'research.f2.desc': 'Sensors are built into the trial components used during surgery. In the thin patellar trial, a low-head bolt with a reversed fastening direction secures the sensor without exposing metal.',
    'research.f3.title': 'Real-time display',
    'research.f3.desc': 'Self-developed measurement software in C# (.NET 8.0) displays load vectors for both joints simultaneously and records USB camera footage synchronized with sensor values.',
    'research.flow.title': 'System Configuration',
    'research.flow.s1': 'Sensors',
    'research.flow.s1.sub': 'PFJ 3-axis force / TFJ 2-axis moment',
    'research.flow.s2': 'Signal conditioner',
    'research.flow.s2.sub': 'Amplification & shaping',
    'research.flow.s3': 'Analog input terminal',
    'research.flow.s3.sub': 'Digital conversion',
    'research.flow.s4': 'PC',
    'research.flow.s4.sub': 'Real-time display in C# (.NET 8.0)',
    'research.flow.eval': 'Evaluation: a 3D-printed knee model with CT-derived bone geometry and springs reproducing ligaments and tendons, measured from 0 to 90° of flexion.',
    'research.results.title': 'Results',
    'research.results.m1': 'PFJ peak compression (90° flexion)',
    'research.results.m2': 'PFJ shear direction reverses',
    'research.results.m3': 'TFJ load offset (comparable to sensor accuracy)',
    'research.results.summary': 'In the PFJ, load magnitude and direction changed with flexion (peak of about 48 N at 90°, shear reversing around 20°); the TFJ showed no notable offset. Both joint loads were measured simultaneously across the full 0–90° range.',
    'research.outlook.title': 'Outlook',
    'research.outlook.text': 'Next, I will measure under multiple conditions of ligament tension and insert thickness to verify whether these differences appear as differences in load. In the long term, I aim to apply real-time intraoperative display to surgical support.',
    'research.achievements.title': 'Achievements',
    'research.achievements.wcb': 'WCB 2026',
    'research.achievements.wcb.text': ' — Poster presentation at the World Congress of Biomechanics, Vancouver, Canada (July 2026)',
    'research.achievements.jsme': 'JSME Kyushu Branch',
    'research.achievements.jsme.text': ' — Presented at the 57th Student Graduation Research Conference, receiving the Outstanding Presentation Award',
    'research.achievements.icbme': 'ICBME 2024',
    'research.achievements.icbme.text': ' — Participated in Singapore as a FIT-Tech program member',

    // Skills
    'skills.label': 'Skills & Qualifications',
    'skills.title': 'Skills & Certifications',
    'skills.qualTitle': 'Certifications',
    'skills.cat.hardware': 'Hardware & Measurement',
    'skills.cat.software': 'Software & Embedded',
    'skills.cat.web': 'Web',
    'skills.inspection.name': 'Mechanical Inspection',
    'skills.inspection.desc': 'Micron-level precision assurance with coordinate measuring machines and other instruments, plus quality control work.',
    'skills.machining.name': 'Machining',
    'skills.machining.desc': 'NC milling, lathe, and welding (arc, TIG), handling everything from design to fabrication.',
    'skills.cad.name': 'CAD (SolidWorks, Fusion360)',
    'skills.cad.desc': 'Part design for 3D printing and design of experimental apparatus for research.',
    'skills.automotive.name': 'Automotive Maintenance',
    'skills.automotive.desc': 'Certified Grade 3 mechanic for both gasoline and diesel engines; basic maintenance, inspection, and fault diagnosis.',
    'skills.csharp.name': 'C# (.NET)',
    'skills.csharp.desc': 'Independently developed the measurement GUI for a surgical support system in .NET 8.0 / WPF: multithreaded, millisecond-level synchronization of sensor signals and USB camera footage, real-time load vector rendering, and CSV export.',
    'skills.matlab.name': 'MATLAB',
    'skills.matlab.desc': 'Numerical computation, data analysis, and simulation, including research data visualization and algorithm verification.',
    'skills.arduino.name': 'Embedded (Arduino)',
    'skills.arduino.desc': 'Programs that interface with hardware, such as sensor control and quick prototyping.',
    'skills.python.name': 'Python',
    'skills.python.desc': 'Data analysis and scientific computing applications.',
    'skills.java.name': 'Java',
    'skills.java.desc': 'Object-oriented programming fundamentals, with experience developing numerical computation programs.',
    'skills.git.name': 'Git / GitHub',
    'skills.git.desc': 'Version control and branching strategies, with experience in pull-request-based team workflows.',
    'skills.docker.name': 'Docker',
    'skills.docker.desc': 'Containerized development environments with Dockerfile and docker-compose. This portfolio is also developed on Docker.',
    'skills.html.name': 'HTML/CSS',
    'skills.html.desc': 'Semantic markup and maintainable styling with CSS Modules and Sass.',
    'skills.react.name': 'React',
    'skills.react.desc': 'Built this portfolio: component design, JA/EN switching with the Context API, and scroll effects with IntersectionObserver.',
    'skills.typescript.name': 'TypeScript',
    'skills.typescript.desc': 'Typed every component of this portfolio, including type extensions for React Three Fiber.',
    'skills.rails.name': 'Ruby / Rails',
    'skills.rails.desc': 'Basic web application development with Ruby on Rails.',
    'skills.php.name': 'PHP',
    'skills.php.desc': 'Basic website back-end processing and modifications to existing systems.',
    'skills.qual.inspection': 'Certified Skilled Worker, Machine Inspection (Grade 2)',
    'skills.qual.maintenance': 'Certified Skilled Worker, Machine Maintenance (Grade 2)',
    'skills.qual.mechanicGas': 'Certified Automobile Mechanic, Gasoline (Grade 3)',
    'skills.qual.mechanicDiesel': 'Certified Automobile Mechanic, Diesel (Grade 3)',
    'skills.qual.radio': 'Land Special Radio Operator (Class 2)',

    // Works
    'works.label': 'Works',
    'works.title': 'Projects',
    'works.subtitle': 'Key projects I have worked on',
    'works.others': 'Other Projects',
    'works.challenge': 'Challenge',
    'works.action': 'Approach',
    'works.result': 'Outcome',
    'works.github': 'View on GitHub →',
    'works.tka.title': 'TKA Intraoperative Support System',
    'works.tka.desc': 'A system that simultaneously measures the loads on two knee joints (TFJ and PFJ) during TKA. Developed end to end, from sensor integration to measurement software.',
    'works.tka.challenge': 'Embedding a sensor in the thin patellar trial. In the initial design, the fixture protruded toward the bone, so the trial itself could not be seated.',
    'works.tka.action': 'Instead of shrinking the fixture, I changed the structure: a low-head bolt with a reversed fastening direction, fixing the sensor without exposing metal. I also wrote the measurement software in C# (.NET 8.0), with real-time load vector rendering, recording synchronized with USB camera footage, and CSV export.',
    'works.tka.result': 'Outstanding Presentation Award at the 57th JSME Kyushu Student Graduation Research Conference. Poster presentation at WCB 2026 (Vancouver, Canada).',
    'works.adas.title': 'ADAS Function Simulation Environment (Unity × MATLAB)',
    'works.adas.desc': 'A second-year junior college research project. With a co-researcher, I built an environment that connects Unity and MATLAB (Simulink) to test advanced driver-assistance system (ADAS) functions in simulation.',
    'works.adas.challenge': 'At first, the steering wheel controller would not synchronize with Unity, so driver input could not reach the simulation and the environment was unusable.',
    'works.adas.action': 'I got the steering wheel controller and Unity synchronized, so the vehicle could be driven by actually turning the wheel. I also built the driving course in Unity and implemented an algorithm that automatically steers around a vehicle once it is detected. My co-researcher built the vehicle model and the obstacle detection algorithm.',
    'works.adas.result': 'Received the President\'s Award at FIT Junior College.',
    'works.formula.title': 'Founding a Student Formula EV Project',
    'works.formula.desc': 'In my first year of junior college, I founded the FIT EV Formula Car Project to compete in the EV class of Student Formula. It started with four members and now has five.',
    'works.formula.challenge': 'At launch, everything was in short supply: funding, parts, workspace, people, and university approval.',
    'works.formula.action': 'Student Formula also has a combustion (ICV) class, but I deliberately chose EV. I wanted to test how far the knowledge I had built in an automotive high school program and at an automotive parts manufacturer would take me, and to create a place where students who feel uneasy about electrical engineering can enjoy learning it alongside automotive engineering. I believe the EV choice caught the university\'s interest for both sustainability (SDGs) and novelty, which led to its approval.',
    'works.formula.result': 'With limited resources, we built the chassis first. Meeting the competition regulations is the next challenge.',
    'works.seminarQa.title': 'Seminar Q&A Support App',
    'works.seminarQa.desc': 'A web app for lab seminars: the audience posts questions anonymously from their phones, and questions are answered in order of upvotes. Moments when listeners lose track are logged with an "I\'m lost" button and returned to the presenter as a graph of where the talk stopped landing. Runs entirely on the local network with no external connections.',
    'works.mysteryWalk.title': 'Mystery Walk (Walking Navigation App)',
    'works.mysteryWalk.desc': 'An Android walking navigator that hides the destination and guides you only by compass direction and distance. Includes XP and levels based on distance walked, a history of arrived spots, and a return mode that guides you back to the start even when offline.',
    'works.timeVisible.title': 'Fukkodai-mae Station Digital Timetable',
    'works.timeVisible.desc': 'A digital timetable dedicated to JR Fukkodai-mae Station. It shows the time until the next train and, based on walking time to the station, suggests whether you can walk or need to hurry. Delay and suspension info is fetched automatically every 15 minutes.',
    'works.kneeSim.title': 'Knee Joint Kinetics Simulator',
    'works.kneeSim.desc': 'A Python application that computes the stable 3D posture of the knee (varus/valgus, internal/external rotation) at given flexion angles by potential energy minimization. It calculates joint angles, ligament tensions (MCL, LCL, patellar ligament), and articular contact forces, and plots the results.',
    'works.ballistic.title': 'Tank Shell Ballistics Calculator',
    'works.ballistic.desc': 'An application that simulates the trajectory of a tank shell based on physical laws.',
    'works.reservation.title': 'University Machine Tool Reservation System',
    'works.reservation.desc': 'A web application for managing machine tool reservations, with a monthly calendar view, per-machine usage charts, maintenance period settings, and CSV export.',
    'works.memory.title': 'Memory Card Game',
    'works.memory.desc': 'A browser implementation of the classic card-matching game.',

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
    'timeline.university.desc': 'Developed a system for simultaneous intraoperative measurement of TFJ and PFJ loads in total knee arthroplasty. Presented at the JSME Kyushu Branch 57th Student Graduation Research Conference, receiving the Outstanding Presentation Award.',
    'timeline.grad.title': 'Fukuoka Institute of Technology / Graduate School',
    'timeline.grad.subtitle': '【The Integration】Reaching the world',
    'timeline.grad.desc': 'Continuing development of the simultaneous intraoperative TFJ/PFJ load measurement system for TKA. Presented a poster at WCB 2026 (Vancouver, Canada).',
  },
};
