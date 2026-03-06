import styles from './Contact.module.css';
import FadeIn from '../components/FadeIn';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiWantedly } from 'react-icons/si';
import { useLang } from '../i18n/LangContext';

function Contact() {
  const { t, lang } = useLang();

  return (
    <div className={styles.contactContainer}>
      <FadeIn>
        <p className={styles.sectionLabel}>{t('contact.label')}</p>
        <h2 className={styles.sectionTitle}>{t('contact.title')}</h2>
      </FadeIn>

      <div className={styles.contactGrid}>
        <FadeIn delay={0.1} direction="left">
          <div className={styles.contactInfo}>
            <h3>{t('contact.subtitle')}</h3>
            <p>
              {lang === 'ja'
                ? <>ご質問、ご相談、お気軽にご連絡ください。<br />以下のフォームよりメッセージを送信していただけます。</>
                : <>Have a question or want to work together?<br />Send me a message using the form below.</>
              }
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
              <label htmlFor="name">{t('contact.name')}</label>
              <input type="text" id="name" name="name" required placeholder={t('contact.name')} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">{t('contact.email')}</label>
              <input type="email" id="email" name="email" required placeholder={t('contact.email')} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">{t('contact.message')}</label>
              <textarea id="message" name="message" required placeholder={t('contact.message')} />
            </div>
            <button type="submit" className={styles.submitButton}>
              {t('contact.send')}
            </button>
          </form>
        </FadeIn>
      </div>
    </div>
  );
}

export default Contact;
