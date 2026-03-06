import { useEffect, useRef, useState } from 'react';
import styles from './MetricsCard.module.css';

type Metric = {
  value: string;
  suffix?: string;
  label: string;
};

type Props = {
  metrics: Metric[];
};

function animateValue(
  start: number,
  end: number,
  duration: number,
  onUpdate: (val: number) => void,
  onComplete: () => void
) {
  const startTime = performance.now();
  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(start + (end - start) * eased);
    onUpdate(current);
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      onComplete();
    }
  }
  requestAnimationFrame(step);
}

function MetricsCard({ metrics }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayValues, setDisplayValues] = useState<string[]>(
    metrics.map(() => '0')
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          metrics.forEach((metric, index) => {
            const numericValue = parseInt(metric.value.replace(/[^0-9]/g, ''), 10);
            if (isNaN(numericValue)) {
              // Non-numeric (e.g. "WCB 2026") - just reveal
              setDisplayValues((prev) => {
                const next = [...prev];
                next[index] = metric.value;
                return next;
              });
            } else {
              animateValue(
                0,
                numericValue,
                1200 + index * 200,
                (val) => {
                  setDisplayValues((prev) => {
                    const next = [...prev];
                    next[index] = String(val);
                    return next;
                  });
                },
                () => {
                  setDisplayValues((prev) => {
                    const next = [...prev];
                    next[index] = metric.value;
                    return next;
                  });
                }
              );
            }
          });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated, metrics]);

  return (
    <div className={styles.metricsGrid} ref={containerRef}>
      {metrics.map((metric, index) => (
        <div key={index} className={`${styles.metricItem} ${hasAnimated ? styles.visible : ''}`}>
          <span className={styles.metricValue}>
            {displayValues[index]}
            {metric.suffix && <span className={styles.metricSuffix}>{metric.suffix}</span>}
          </span>
          <span className={styles.metricLabel}>{metric.label}</span>
        </div>
      ))}
    </div>
  );
}

export default MetricsCard;
