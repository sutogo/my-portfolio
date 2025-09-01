import styles from './Contact.module.css';

function Contact() {
  return (
    <div className={styles.contactPage}>
      <h1>Contact</h1>
      <div className={styles.contactGrid}>
        <div className={styles.contactInfo}>
          <h2>Get in Touch</h2>
          <p>
            ご質問、ご相談、お気軽にご連絡ください。
            <br />
            以下のフォームより、
            <br />
            メッセージを送信していただけます。
          </p>
        </div>
        <form action="https://formspree.io/f/mnnvrzpp" method="POST" className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
