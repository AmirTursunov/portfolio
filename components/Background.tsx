'use client';

import { motion } from 'framer-motion';
import styles from '~/styles/Background.module.css';

const Background = () => {
  return (
    <div className={styles.container}>
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className={`${styles.blob} ${styles.blob1}`}
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className={`${styles.blob} ${styles.blob2}`}
      />
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -120, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        className={`${styles.blob} ${styles.blob3}`}
      />
      <div className={styles.noise} />
    </div>
  );
};

export default Background;
