import Head from "next/head";
import Image from "next/image";

const Apolgies = () => {
  return (
    <>
      <Head>
        <title>Akashislay - Apology Board</title>
      </Head>
      <div className="card bg-neutral glass shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">
            From Tanuki Town to Vipo Viridian
          </h2>
          <p>Hey Vipo,</p>
          <p>
            I hope this message finds you well. I wanted to reach out and
            sincerely apologize for not inviting you to join me for leveling
            roulette recently. I completely dropped the ball, and I can only
            imagine how disappointing that must have been for you.
          </p>
          <p>
            To make it up to you, I’d love to set up a time for us to tackle
            some dungeons together. How about we plan a dedicated gaming session
            this weekend? I’ll bring my best gear, and we can tackle whatever
            you want—be it leveling or just having fun with some old content.
          </p>
          <p>
            Additionally, I’ll make sure to keep you in the loop for future runs
            so we can team up more often. Let me know what works for you, and
            I’m looking forward to catching up in-game!
          </p>
          <p>Thanks for your understanding!</p>
          <div className="card-actions justify-end">
            Best,
            <br />
            Tanuki Town
          </div>
        </div>
      </div>
    </>
  );
};

export default Apolgies;
