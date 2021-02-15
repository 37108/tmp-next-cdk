import styles from '../styles/footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.about}>
        <p className={styles.about__title}>37108's logs</p>
        <p className={styles.about__description}>is the place for i made</p>
      </div>
      <div className={styles.information}>
        <p className={styles.information__title}>socials</p>
        <ul className={styles.information__socials}>
          <a
            href="https://github.com/37108"
            target="_blank"
            rel="noopener noreferrer">
            <li>GitHub</li>
          </a>
          <a
            href="https://twitter.com/_37108"
            target="_blank"
            rel="noopener noreferrer">
            <li>Twitter</li>
          </a>
          <a
            href="https://soundcloud.com/37108"
            target="_blank"
            rel="noopener noreferrer">
            <li>Sound Cloud</li>
          </a>
          <a
            href="https://about37108.org"
            target="_blank"
            rel="noopener noreferrer">
            <li>About Me</li>
          </a>
        </ul>
      </div>
      <div></div>
      <p className={styles.copyright}>Copyright 2020 37108</p>
    </footer>
  );
};
