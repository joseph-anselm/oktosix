import "../styles/globals.css";
import Layout from "../components/layouts";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Head>
          <title>Oktosix Motion Pictures</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/img/favicon.png" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
