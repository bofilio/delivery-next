import '../styles/globals.css'
import React from 'react';
import Layout from '../components/layout/Layout'
import { AuthenticationProvider } from '../contexts/AuthenticationContext';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from 'react-query-devtools';
const queryClient = new QueryClient({
  defaultOptions: {
    queries:{
      networkMode:"offlineFirst"
    }
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <title>Delivery Food</title>
      </Head>
      <AuthenticationProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthenticationProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/> */}
    </QueryClientProvider>
  )
}

export default MyApp
