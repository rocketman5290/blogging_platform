// nextjs imports
import Head from 'next/head';
import Link from 'next/link';

// style imports
import styles from '../styles/Home.module.css';

//component imports
import Loader from '../components/Loader.js';
import toast from 'react-hot-toast';

export default function Home() {
  return (
    <>
      <div >
        <button onClick={() => toast.success("Hello toast!")} />
      </div>
      <div>
        <Loader show />
        <Link prefetch={false} href={{
          pathname: '/[username]',
          query: { username: 'rocketman529' },
        }}>
          <a>Rocketman529&apos;s profile</a>
        </Link>
      </div>
    </>
  )
}
