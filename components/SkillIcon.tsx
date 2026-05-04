import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import styles from '~/styles/SkillIcon.module.css';

type SkillIconProps = {
  hoverColor: string;
  title: string;
  Icon: IconType;
};

function SkillIcon({ hoverColor, title, Icon }: SkillIconProps) {
  return (
    <motion.div
      style={{ '--hover-color': hoverColor } as React.CSSProperties}
      className={styles.iconWrapper}
      whileHover={{
        y: -10,
        rotateY: 15,
        rotateX: -5,
        scale: 1.1,
        transition: { type: 'spring', stiffness: 400, damping: 10 },
      }}
    >
      <div className={styles.iconContainer}>
        {Icon && <Icon className={styles.icon} />}
      </div>
      <p className={styles.title}>{title}</p>
      <div 
        className={styles.glow} 
        style={{ background: `radial-gradient(circle, ${hoverColor}33 0%, transparent 70%)` }} 
      />
    </motion.div>
  );
}

export default SkillIcon;
