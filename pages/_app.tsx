import "@styles/globals.css";
import Head from "next/head";

// eslint-disable-next-line react/prop-types
const Application = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Akashislay</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default Application;
