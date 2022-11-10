import '../styles/globals.css';
// import { GetServerSideProps } from 'next/app';

import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../lib/context'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserContext.Provider value={{user: {}, username: "williamgeorge"}} >
        <Navbar />
        <Component {...pageProps} />
        <Toaster />
      </UserContext.Provider>
    </>
   
  )
}

export default MyApp