import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { AiOutlineSend } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Title from '~/components/Title';
import styles from '~/styles/Contact.module.css';
import { emoji } from '~/utils/motions';

function Contact() {
  const router = useRouter();

  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     const data = { name, email, message };
  //     const result = await sendEmail(data);
  //     if (!result.data) throw new Error('Failed to send email!');
  //     toast.success('Email sent successfully!', toastOptions);
  //     setName('');
  //     setEmail('');
  //     setMessage('');
  //   } catch (error) {
  //     // eslint-disable-next-line no-console
  //     console.log(error);
  //     toast.error('Failed to send email. Please try again!', toastOptions);
  //   }
  // };

  return (
    <div className={styles.container}>
      <Title>Contact</Title>

      <ToastContainer />
      <div className={styles.contactWrapper}>
        <div className={styles.content}>
          <h2 className={styles.hello}>
            <span className={styles.hiText}>
              Say Hi!{' '}
              <motion.span
                className={styles.emoji}
                initial={'hidden'}
                whileInView={'visible'}
                variants={emoji}
              >
                👋
              </motion.span>
            </span>
          </h2>
          <p className={styles.text}>
            Reach out and let&apos;s bring your ideas to life! <br />I am
            available for freelance work.
          </p>
          <div className={styles.myEmail}>
            <div className={styles.iconWrapper}>
              <MdEmail className={styles.emailIcon} />
            </div>
            <button
              onClick={() => router.push(`mailto:amirtursunov2@gmail.com`)}
              className={styles.email}
            >
              amirtursunov2@gmail.com
            </button>
            <div
              style={{ width: '2px', height: '20px', border: '1px solid red' }}
            ></div>
            <a
              href="https://t.me/amir_079"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.telegramBtn}
            >
              <AiOutlineSend className={styles.telegramIcon} />
              <span className={styles.email}>amir_079</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
