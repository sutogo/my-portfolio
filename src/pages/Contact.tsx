import styles from './Contact.module.css';

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <h1>Contact</h1>
      {/* ↓ このformタグを修正します */}
      <form action="https://formspree.io/f/mnnvrzpp" method="POST">
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
  );
}

export default Contact;