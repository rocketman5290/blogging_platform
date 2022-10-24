import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { GetServerSideProps } from 'next/app';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
   
  )
}

export default MyApp
