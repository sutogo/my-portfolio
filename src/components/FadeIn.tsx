import { useInView } from 'react-intersection-observer';
import styles from './Fadein.module.css';

type FadeInProps = {
  children: React.ReactNode;
};

function FadeIn({ children }: FadeInProps) {
  const { ref, inView } = useInView({
    // オプション
    rootMargin: '-50px', // 画面の下端から50px上で検知開始
    triggerOnce: true,   // 一度表示されたらアニメーションを繰り返さない
  });

  return (
    <div
      ref={ref}
      className={`${styles.fadeIn} ${inView ? styles.visible : ''}`}
    >
      {children}
    </div>
  );
}

export default FadeIn;