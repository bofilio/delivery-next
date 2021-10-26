import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Link from 'next/link'
import Logo from '../components/Logo'
import SideBar from '../components/menu/SideBar'
export default function Home() {
  const router = useRouter();
  useEffect(() => {
    //router.push('auth/signin','auth/signin');
  }, [])
  return (
    <div>
      <Head>
        <title>Delivery Food</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*Side bar Block*/}
      <SideBar/>
      {/*Side bar Block End*/}
      {/*Top bar*/}
      <div></div>
      {/*Top bar End*/}
    </div>
  )
}
