import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return <>
    <Navbar spaceName={router.query.spaceName} />
    <Component {...pageProps} />
  </>
}
