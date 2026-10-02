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

// 整数のみカウントアップする（「±0.5」のような値は途中で「5」と表示されてしまうため対象外）
function isNumeric(value: string): boolean {
  return /^\d+$/.test(value);
}

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

  // metrics は呼び出し側で毎レンダー新しい配列として作られるため、依存配列に入れると
  // observer が張り直され続け、非同期のコールバックが発火する前に切断されてしまう。
  // observer はマウント時に一度だけ張り、最新の metrics は ref から読む。
  const metricsRef = useRef(metrics);
  metricsRef.current = metrics;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setHasAnimated(true);

        metricsRef.current.forEach((metric, index) => {
          // 数値以外（「優秀講演賞」など）はカウントアップせず、描画側で props を直接使う
          if (!isNumeric(metric.value)) return;

          const numericValue = parseInt(metric.value, 10);
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
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.metricsGrid} ref={containerRef}>
      {metrics.map((metric, index) => (
        <div key={index} className={`${styles.metricItem} ${hasAnimated ? styles.visible : ''}`}>
          <span
            className={`${styles.metricValue} ${
              metric.value.length > 4 ? styles.metricValueLong : ''
            }`}
          >
            {/* 数値はカウントアップ用の state を、それ以外は props を直接描画する。
                state 経由だと言語切替で値が追従しないため。 */}
            {isNumeric(metric.value) ? displayValues[index] : metric.value}
            {metric.suffix && <span className={styles.metricSuffix}>{metric.suffix}</span>}
          </span>
          <span className={styles.metricLabel}>{metric.label}</span>
        </div>
      ))}
    </div>
  );
}

export default MetricsCard;
