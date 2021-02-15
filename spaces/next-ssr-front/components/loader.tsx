import styles from '../styles/loader.module.scss';

export const Loader: React.FC = () => {
  return (
    <div>
      <p className={styles.loading}>loading</p>
      <div className={styles.loader}>
        <div className={styles.line} />
      </div>
    </div>
  );
};
