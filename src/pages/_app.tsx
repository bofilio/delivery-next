import '../styles/globals.css'

import React from 'react';
import Layout from '../components/layout/Layout'
import { AuthenticationProvider } from '../contexts/AuthenticationContext';

import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {

  const router = useRouter()
  return (
    <AuthenticationProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthenticationProvider>
  )
}

export default MyApp
