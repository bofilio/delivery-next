import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    router.route.indexOf("auth") === -1 ?
      <Layout>
        <Component {...pageProps} />
      </Layout>
      :
      <Component {...pageProps} />
  )
}

export default MyApp
