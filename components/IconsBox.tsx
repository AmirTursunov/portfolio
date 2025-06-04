import { motion } from 'framer-motion';
import { IoLogoReact } from 'react-icons/io5';
import { SiNextdotjs, SiTypescript, SiFastapi } from 'react-icons/si';
import styles from '~/styles/IconsBox.module.css';
import { icon } from '~/utils/motions';

function IconsBox() {
  return (
    <div className={styles.iconContainer}>
      {/* <motion.div whileHover={'hover'} variants={icon}>
        <SiPrisma className={styles.iconSize} color="#123A50" />
      </motion.div> */}
      <motion.div whileHover={'hover'} variants={icon}>
        <IoLogoReact className={styles.iconSize} color="#04D5FF" />
      </motion.div>
      <motion.div whileHover={'hover'} variants={icon}>
        <SiNextdotjs
          className={`${styles.iconSize} ${styles.nextIcon}`}
          color="#000"
        />
      </motion.div>
      {/* <motion.div whileHover={'hover'} variants={icon}>
        <SiPython className={styles.iconSize} color="#3573A6" />
      </motion.div> */}
      <motion.div whileHover={'hover'} variants={icon}>
        <SiFastapi className={styles.iconSize} color="#089486" />
      </motion.div>
      {/* <motion.div whileHover={'hover'} variants={iconNode}>
        <FaNode className={styles.iconSize} color="#00ED64" />
      </motion.div> */}
      <motion.div whileHover={'hover'} variants={icon}>
        <SiTypescript className={styles.tsIcon} color="#2D79C7" />
      </motion.div>
    </div>
  );
}

export default IconsBox;
