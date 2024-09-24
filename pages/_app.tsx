import "@styles/globals.css";
import Navbar from "@components/navbar";
import Head from "next/head";

// eslint-disable-next-line react/prop-types
const Application = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Akashislay</title>
      </Head>
      <Navbar />
      <main className="md:container md:mx-auto p-4">
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default Application;
