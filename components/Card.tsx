import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from 'framer-motion';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import styles from '~/styles/Card.module.css';
import type { Project } from '~/utils/constants';

function Card({ data, isSwiperSlide }: { data: Project; isSwiperSlide?: boolean }) {
  const x = useMotionValue<number>(0);
  const y = useMotionValue<number>(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring as MotionValue<number>, [-0.5, 0.5], ['15deg', '-15deg']);
  const rotateY = useTransform(mouseXSpring as MotionValue<number>, [-0.5, 0.5], ['-15deg', '15deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isSwiperSlide) return;
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

  const glareBg = useTransform(
    [mouseXSpring, mouseYSpring],
    (latest) => {
      const xVal = latest[0] as number;
      const yVal = latest[1] as number;
      return `radial-gradient(circle at ${(xVal + 0.5) * 100}% ${(yVal + 0.5) * 100}%, rgba(255,255,255,0.15) 0%, transparent 70%)`;
    }
  );

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={!isSwiperSlide ? {
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      } : {}}
      whileHover={isSwiperSlide ? { scale: 1.05 } : {}}
      className={`glass-panel ${styles.card} ${isSwiperSlide ? styles.swiperCard : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.cardContent}>
        {/* Background Blurred Image */}
        <div className={styles.bgImageWrapper}>
          <Image
            src={data.img}
            alt={data.name}
            fill
            className={styles.blurredBg}
          />
          <div className={styles.gradientOverlay}></div>
        </div>

        {/* Project Info */}
        <div className={styles.infoWrapper}>
          <div className={styles.mainInfo}>
            <h4 className={styles.name}>{data.name}</h4>
            <div className={styles.stackTags}>
              {data.stack.slice(0, 3).map((s, i) => (
                <span key={i} className={styles.tag}>{s}</span>
              ))}
            </div>
          </div>
          
          <div className={styles.viewDetails}>
            <span>View Details</span>
            <FiExternalLink className={styles.icon} />
          </div>
        </div>
      </div>
      
      {/* Glare/Shine Effect - only for 3D tilt */}
      {!isSwiperSlide && (
        <motion.div
          style={{ background: glareBg }}
          className={styles.glare}
        />
      )}
    </motion.div>
  );
}

export default Card;
