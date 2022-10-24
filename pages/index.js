import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

import Loader from '../components/Loader.js';


export default function Home() {
  return (
    <div >
      <Loader show />
      <Link prefetch={false} href={{
        pathname: '/[username]',
        query: { username: 'rocketman529' },
      }}>
        <a>Rocketman529&apos;s profile</a>
      </Link>
       
    </div>
  )
}
