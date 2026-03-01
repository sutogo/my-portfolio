import { useRef, useEffect, type ReactNode } from 'react';
import styles from './FadeIn.module.css';

type FadeDirection = 'up' | 'down' | 'left' | 'right';

type Props = {
  children: ReactNode;
  direction?: FadeDirection;
  delay?: number;
  duration?: number;
  className?: string;
};

function FadeIn({ children, direction = 'up', delay = 0, duration = 0.6, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}s`;
          el.style.transitionDuration = `${duration}s`;
          el.classList.add(styles.visible);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, duration]);

  const directionClass = styles[`fade${direction.charAt(0).toUpperCase() + direction.slice(1)}`] || styles.fadeUp;

  return (
    <div ref={ref} className={`${styles.fadeIn} ${directionClass} ${className}`}>
      {children}
    </div>
  );
}

export default FadeIn;