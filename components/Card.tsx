import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import styles from '~/styles/Card.module.css';
import type { Project } from '~/utils/constants';

function Card({ data, isSwiperSlide }: { data: Project; isSwiperSlide?: boolean }) {
  return (
    <div
      className={`glass-panel ${styles.card} ${isSwiperSlide ? styles.swiperCard : ''}`}
    >
      <div className={styles.cardContent}>
        {/* Background Image */}
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
    </div>
  );
}

export default Card;
