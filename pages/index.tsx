import BackgroundVideo from "@components/backgroundVideo";
import VideoChat from "@components/videoChat";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Akashislay - Home</title>
      </Head>
      <BackgroundVideo />
      <VideoChat />
    </>
  );
};

export default Home;
