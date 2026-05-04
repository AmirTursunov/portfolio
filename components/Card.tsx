import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from 'framer-motion';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import styles from '~/styles/Card.module.css';
import type { Project } from '~/utils/constants';

function Card({ data }: { data: Project }) {
  const x = useMotionValue<number>(0);
  const y = useMotionValue<number>(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring as MotionValue<number>, [-0.5, 0.5], ['15deg', '-15deg']);
  const rotateY = useTransform(mouseXSpring as MotionValue<number>, [-0.5, 0.5], ['-15deg', '15deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`glass-panel ${styles.card}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ transform: 'translateZ(75px)', transformStyle: 'preserve-3d' }} className={styles.imgWrapper}>
        <Image
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.img}
          fill
          src={data.img}
          alt={data.name}
          priority
        />
        <div className={styles.overlay}>
          <div style={{ transform: 'translateZ(50px)' }} className={styles.overlayContent}>
            <h4 className={styles.name}>{data.name}</h4>
            <p className={styles.description}>{data.description}</p>
            <div className={styles.clickInfo}>
              <span>View Details</span>
              <FiExternalLink className={styles.icon} />
            </div>
          </div>
        </div>
      </div>
      {/* Glare/Shine Effect */}
      <motion.div
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            (latest) => {
              const x = latest[0] as number;
              const y = latest[1] as number;
              return `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(255,255,255,0.15) 0%, transparent 70%)`;
            }
          ),
        }}
        className={styles.glare}
      />
    </motion.div>
  );
}

export default Card;
