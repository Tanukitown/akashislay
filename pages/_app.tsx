import "@styles/globals.css";
import Navbar from "@components/navbar";

// eslint-disable-next-line react/prop-types
const Application = ({ Component, pageProps }) => {
  return (
    <div className="grid grid-cols-12 bg-gray-900 w-full h-full">
      <div id="navbar" className="col-span-12 h-[3.75rem] flex items-center">
        <Navbar />
      </div>
      <div
        id="content"
        className="col-span-12 md:col-span-8 h-[calc(100vh-3.75rem)]"
      >
        <Component {...pageProps} />
      </div>
      <aside id="aside" className="col-span-12 md:col-span-4 p-4">
        <div>Akashi's post of the day:</div>
        <div>There is no such thing as coincidence</div>
      </aside>
    </div>
  );
};

export default Application;
