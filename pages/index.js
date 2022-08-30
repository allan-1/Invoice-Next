import Head from 'next/head';
import Image from 'next/image';
import Sidenav from '../components/sidenav/Sidenav';
import Topbar from '../components/topbar/Topbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className={styles.bars}>
          <Sidenav />
          <Topbar />
        </div>
      </div>
    </div>
  );
}
