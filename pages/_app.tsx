import "@styles/globals.css";
import Navbar from "@components/navbar";

// eslint-disable-next-line react/prop-types
const Application = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <div className="md:container md:mx-auto p-4">
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default Application;
