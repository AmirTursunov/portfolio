import { motion } from 'framer-motion';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import IconsBox from '~/components/IconsBox';
import styles from '~/styles/Home.module.css';
import { container } from '~/utils/motions';
import { useEffect } from 'react';

type HomeProps = {
  handleNavigationClick: (index: number) => void;
};

function Home({ handleNavigationClick }: HomeProps) {
  useEffect(() => {
    const dot = document.querySelector<HTMLDivElement>(`.${styles.cursorDot}`);
    const ring = document.querySelector<HTMLDivElement>(
      `.${styles.cursorRing}`,
    );

    if (!dot || !ring) return;

    let ringX = 0,
      ringY = 0;
    let dotX = 0,
      dotY = 0;
    let isVisible = false;

    const moveCursor = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;

      if (!isVisible) {
        dot.style.opacity = '1';
        ring.style.opacity = '1';
        isVisible = true;
      }
    };

    const hideCursor = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
      isVisible = false;
    };

    const animate = () => {
      dot.style.left = `${dotX}px`;
      dot.style.top = `${dotY}px`;

      ringX += (dotX - ringX) * 0.25;
      ringY += (dotY - ringY) * 0.25;

      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', hideCursor);
    document.addEventListener('mouseenter', moveCursor);

    animate();

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', hideCursor);
      document.removeEventListener('mouseenter', moveCursor);
    };
  }, []);

  return (
    <div className={styles.container}>
      {/* Cursor elements */}
      <div className={styles.cursorDot}></div>
      <div className={styles.cursorRing}></div>

      {/* Background image as LCP */}
      <div
        className={styles.slideImage}
        data-swiper-parallax="95%"
        data-swiper-parallax-opacity={0.3}
      >
        <Image
          className={styles.bgImage}
          alt="Background image of Tursunov Amir"
          src="/bg.jpg"
          fill
          priority // Forces LCP to be detected
          sizes="100vw"
        />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className={styles.content}
      >
        {/* Name */}
        <motion.div className={styles.name}>Tursunov Amir</motion.div>

        {/* Occupation with static fallback for LCP */}
        <motion.h1 className={styles.occupation}>
          I&apos;m a{' '}
          <span className={styles.typeEffect}>
            <noscript>Web Developer.</noscript> {/* Fallback for bots */}
            <Typewriter
              words={['Web Developer.', 'Frontend Developer.', 'Freelancer.']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={20}
            />
          </span>
        </motion.h1>

        <IconsBox />

        <div data-swiper-parallax="-100" className={styles.btnContainer}>
          <motion.button
            onClick={() => handleNavigationClick(4)}
            className={styles.contactMe}
          >
            CONTACT ME
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
