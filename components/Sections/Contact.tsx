import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState, useRef, FormEvent } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Title from '~/components/Title';
import styles from '~/styles/Contact.module.css';
import { emoji } from '~/utils/motions';
import emailjs from '@emailjs/browser';
const Contact: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);
    emailjs
      .sendForm(
        'service_34zbvtk',
        'template_09qrq7g',
        formRef.current,
        'F6t_C2ec1d-nS-OB2',
      )
      .then(() => {
        toast.success('Email sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
        toast.error('Failed to send email. Please try again!');
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
          </div>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.inp}
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            name="reply_to"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.inp}
            type="text"
            placeholder="Your Email Or Telegram"
            required
          />
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.textarea}
            cols={30}
            rows={10}
            placeholder="Your Message"
            required
          />
          <button className={styles.sendBtn} type="submit" disabled={loading}>
            {loading ? (
              <span className={styles.sendText}>Sending...</span>
            ) : (
              <>
                <span className={styles.sendText}>Send</span>
                <AiOutlineSend className={styles.sendIcon} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
