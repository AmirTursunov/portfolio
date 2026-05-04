import { motion } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import IconsBox from '~/components/IconsBox';
import styles from '~/styles/Home.module.css';

const Typewriter = dynamic(
  () => import('react-simple-typewriter').then((mod) => mod.Typewriter),
  { ssr: false },
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 120, damping: 12 },
  },
};

type HomeProps = {
  handleNavigationClick: (index: number) => void;
};

function Home({ handleNavigationClick }: HomeProps) {
  return (
    <div className={styles.container}>
      <div
        className={styles.slideImage}
        data-swiper-parallax="95%"
        data-swiper-parallax-opacity={0.3}
      >
        <Image
          className={styles.bgImage}
          alt="bg-image"
          src={'/bg.jpg'}
          fill
          priority
          quality={60}
          sizes="(max-width: 768px) 100vw, 100vw"
        />
        <div className={styles.overlay}></div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className={styles.contentWrapper}
      >
        <div className={`glass-panel ${styles.glassCard}`}>
          <motion.div variants={itemVariants} className={styles.greeting}>
            Hello, I am
          </motion.div>
          <motion.div variants={itemVariants} className={styles.name}>
            Tursunov Amir
          </motion.div>
          <motion.h1 variants={itemVariants} className={styles.occupation}>
            I&apos;m a{' '}
            <span className={styles.typeEffect}>
              <Typewriter
                words={['Frontend Developer.', 'React Specialist.', 'AI Engineer.']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </motion.h1>

          <motion.div variants={itemVariants} className={styles.iconsWrapper}>
            <IconsBox />
          </motion.div>

          <motion.div variants={itemVariants} className={styles.btnContainer}>
            <button
              onClick={() => handleNavigationClick(4)}
              className={styles.contactMe}
            >
              Let&apos;s Talk
            </button>
            <button
              onClick={() => handleNavigationClick(3)}
              className={styles.portfolioBtn}
            >
              View Work
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
