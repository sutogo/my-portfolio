import styles from './Contact.module.css';
import FadeIn from '../components/FadeIn';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiWantedly } from 'react-icons/si';

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <FadeIn>
        <p className={styles.sectionLabel}>Contact</p>
        <h2 className={styles.sectionTitle}>お問い合わせ</h2>
      </FadeIn>

      <div className={styles.contactGrid}>
        <FadeIn delay={0.1} direction="left">
          <div className={styles.contactInfo}>
            <h3>Get in Touch</h3>
            <p>
              ご質問、ご相談、お気軽にご連絡ください。<br />
              以下のフォームよりメッセージを送信していただけます。
            </p>
            <div className={styles.socialLinks}>
              <a href="https://github.com/sutogo" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaGithub /> GitHub
              </a>
              <a href="https://www.wantedly.com/id/KHO" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <SiWantedly /> Wantedly
              </a>
              <a href="https://linkedin.com/in/kosuke-tokashiki-963a873b0" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} direction="right">
          <form action="https://formspree.io/f/mnnvrzpp" method="POST" className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required placeholder="お名前" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="メールアドレス" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required placeholder="メッセージ" />
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </FadeIn>
      </div>
    </div>
  );
}

export default Contact;
