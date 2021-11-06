import '../styles/globals.css'

import React from 'react';
import Layout from '../components/layout/Layout'
import { AuthenticationProvider } from '../contexts/AuthenticationContext';

import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {

  const router = useRouter()
  return (
    <AuthenticationProvider>
      {
        router.route.indexOf("auth") === -1 ?
          <Layout>
            <Component {...pageProps} />
          </Layout>
          :
          <Component {...pageProps} />
      }
    </AuthenticationProvider>

  )
}

export default MyApp
