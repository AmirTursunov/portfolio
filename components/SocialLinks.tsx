import Link from 'next/link';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { SiUpwork } from 'react-icons/si';
import styles from '~/styles/Sidebar.module.css';

function SocialLinks() {
  return (
    <ul className={styles.socialContainer}>
      <li title="Github" className={styles.social}>
        <Link
          className={styles.socialLink}
          target="_blank"
          href={'https://github.com/AmirTursunov'}
        >
          <FiGithub size={18} />
        </Link>
      </li>
      <li title="Instagram" className={styles.social}>
        <Link
          className={styles.socialLink}
          target="_blank"
          href={'https://www.instagram.com/amir____.079'}
        >
          <FaInstagram size={18} />
        </Link>
      </li>
      {/* <li title="Facebook" className={styles.social}>
        <Link
          className={styles.socialLink}
          target="_blank"
          href={'https://www.facebook.com/mirfayz.karimov.3'}
        >
          <FaFacebookF size={18} />
        </Link>
      </li> */}
      <li title="LinkedIn" className={styles.social}>
        <Link
          className={styles.socialLink}
          target="_blank"
          href={'https://www.linkedin.com/in/amir-tursunov-138672309'}
        >
          <FaLinkedinIn size={18} />
        </Link>
      </li>
      <li title="Upwork" className={styles.social}>
        <Link
          className={styles.socialLink}
          target="_blank"
          href={
            'https://www.upwork.com/freelancers/~01f20250d50d86736c?mp_source=share'
          }
        >
          <SiUpwork size={18} />
        </Link>
      </li>
    </ul>
  );
}

export default SocialLinks;
