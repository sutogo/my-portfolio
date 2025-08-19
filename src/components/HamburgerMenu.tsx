import styles from './HamburgerMenu.module.css';

type Props = {
  isOpen: boolean;
  onClick: () => void;
};

function HamburgerMenu({ isOpen, onClick }: Props) {
  return (
    <button className={styles.hamburger} onClick={onClick} aria-label="Menu">
      <div className={`${styles.bar} ${isOpen ? styles.bar1Open : ''}`} />
      <div className={`${styles.bar} ${isOpen ? styles.bar2Open : ''}`} />
      <div className={`${styles.bar} ${isOpen ? styles.bar3Open : ''}`} />
    </button>
  );
}

export default HamburgerMenu;
