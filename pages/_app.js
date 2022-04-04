import "../styles/globals.css";
import Layout from "../components/layouts";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
