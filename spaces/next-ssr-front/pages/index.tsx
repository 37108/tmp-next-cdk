import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Loader } from '../components/loader';
import { client } from '../libs';
import styles from '../styles/home.module.scss';

export default function Home() {
  const [logs, setLogs] = useState([] as any);
  const [loading, setLoading] = useState(false);

  const get = async () => {
    setLoading(true);
    const res = await client.getEntries({
      content_type: 'log',
    });
    if (res.total === 0) {
      throw new Error('article not found');
    }
    setLogs(res.items);
    setLoading(false);
  };
  useEffect(() => {
    get();
  }, []);
  if (loading) {
    return (
      <div className={styles.loading}>
        <Loader />
      </div>
    );
  }
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>37108's logs</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="37108's logs" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://logs.37108.org/logs/`} />
        <meta property="og:image" content="https://github.com/37108.png" />
      </Head>
      <div className={styles.description}>
        <p className={styles.description__title}>
          this is the place <br />
          for i made
        </p>
      </div>

      <div className={styles.logo}>
        <h1 className={styles.logo__title}>
          <span className={styles.logo__title_left}>37108's</span>
          <span className={styles.logo__title_right}>logs</span>
        </h1>
      </div>

      <div className={styles.contents}>
        <div className={styles.logs}>
          <h2 className={styles.logs__title}>logs</h2>
          <table>
            <tbody>
              {logs.map(log => {
                return (
                  <tr key={log.fields.slug}>
                    <td>
                      <a href={`/logs/${log.fields.slug}`}>
                        {log.fields.title}
                      </a>
                    </td>
                    <td className={styles.log__date}>{log.fields.published}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
