import "@styles/globals.css";
import BackgroundVideo from "@components/backgroundVideo";
import Navbar from "@components/navbar";
import classNames from "classnames";
import Head from "next/head";
import { useLayoutEffect, useState } from "react";

const WORDLE_STORAGE_KEY = "user_has_pledged_to_NEVER_spoil_the_daily_wordle";

// eslint-disable-next-line react/prop-types
const Application = ({ Component, pageProps }) => {
  const [wordlePledge, setWordlePledge] = useState<string>("false");

  useLayoutEffect(() => {
    setWordlePledge(sessionStorage.getItem(WORDLE_STORAGE_KEY) || "false");
  });

  return (
    <>
      <Head>
        <title>Akashislay</title>
      </Head>
      {wordlePledge === "false" ? (
        <>
          <BackgroundVideo fullscreen />
          <dialog
            id="wordle-modal"
            className={classNames(
              "modal modal-middle sm:modal-middle",
              wordlePledge === "false" && "modal-open",
            )}
          >
            <div className="modal-box bg-error glass text-primary-content">
              <h3 className="font-bold text-lg">Welcome to Akashislay</h3>
              <p className="py-4">
                We here at Genbu take the daily Wordle challenge VERY
                seriously—it&apos;s a ritual we cherish. By using this site,
                you&apos;re making a pledge to NEVER spoil the daily Wordle for
                others.
              </p>
              <p>
                We will occassionaly ask you to re-pledge, just to make sure you
                are as serious about the daily Wordle as we are. Let&apos;s keep
                the excitement alive and respect everyone&apos;s journey to
                uncover the word of the day!
              </p>
              <div className="modal-action justify-stretch w-full">
                <form method="dialog" className="w-full">
                  <button
                    className="btn btn-wide w-full"
                    onClick={() => {
                      sessionStorage.setItem(WORDLE_STORAGE_KEY, "true");
                      setWordlePledge("true");
                    }}
                  >
                    I pledge to NEVER spoil the daily Wordle
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </>
      ) : (
        <>
          <Navbar />
          <main className="md:container md:mx-auto p-4">
            <Component {...pageProps} />
          </main>
        </>
      )}
    </>
  );
};

export default Application;
