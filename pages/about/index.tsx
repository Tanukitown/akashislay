import Head from "next/head";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Head>
        <title>Akashislay - About Us</title>
      </Head>
      <div className="card lg:card-side glass shadow-xl">
        <figure>
          <Image
            src="/images/poopsai.png"
            alt="poopsai"
            height={200}
            width={280}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">From Carl-bot Himself!</h2>
          <p>
            As of 2020, we have now renounced our Genbu Slayer ways. We now
            fight for the turtles, in hope that they will bring us fortune and
            luck. Please, do not kill turtles. They have feelings, and
            you&apos;re a bully if you think otherwise!
          </p>
          <div className="card-actions justify-end text-secondary">
            #Turtles #LiveLoveLaugh #Genburgers #WholeFoods?MoreLikeWholeCheck
            #MyDogIsVegan #MyTurtleIsVegan #AreYouStillReadingThis? #Meneil
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
