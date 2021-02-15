import styles from '../styles/header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <p className={styles.header__logo}>37108's logs</p>
    </header>
  )
}