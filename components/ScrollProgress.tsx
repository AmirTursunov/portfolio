'use client';

import { motion } from 'framer-motion';
import styles from '~/styles/ScrollProgress.module.css';

type ScrollProgressProps = {
  activeIndex: number;
  totalSections: number;
  handleNavigationClick: (index: number) => void;
};

const ScrollProgress = ({ activeIndex, totalSections, handleNavigationClick }: ScrollProgressProps) => {
  return (
    <div className={styles.container}>
      {Array.from({ length: totalSections }).map((_, index) => (
        <div
          key={index}
          className={styles.dotWrapper}
          onClick={() => handleNavigationClick(index)}
        >
          <motion.div
            animate={{
              scale: activeIndex === index ? 1.5 : 1,
              backgroundColor: activeIndex === index ? 'var(--main-color)' : 'rgba(255, 255, 255, 0.3)',
              boxShadow: activeIndex === index ? '0 0 10px var(--main-color)' : 'none',
            }}
            className={styles.dot}
          />
          {activeIndex === index && (
            <motion.div
              layoutId="active-indicator"
              className={styles.activeRing}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
        </div>
      ))}
      <div className={styles.line}>
        <motion.div
          animate={{ height: `${(activeIndex / (totalSections - 1)) * 100}%` }}
          className={styles.progress}
        />
      </div>
    </div>
  );
};

export default ScrollProgress;
