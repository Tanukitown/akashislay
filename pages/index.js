import Head from "next/head";
import { useState } from "react";

const Home = () => {
  const [hovered, setHovered] = useState(false);

  const defaultImage =
    "https://cdn.discordapp.com/attachments/959857101860122646/1264724381980954705/SPOILER_gotchya.png?ex=66f2a11e&is=66f14f9e&hm=400ad68992911063226af555ea321d95012c63a69e391278d72db520423d89cb&"; // Default image
  const hoveredImage =
    "https://cdn.discordapp.com/attachments/1129107516178059316/1253100268233556079/image.png?ex=66f28751&is=66f135d1&hm=72bdf00688571073a088399e0706c967deed01e8b4d1f92287b8ec9b0e2c1e09&"; // Hovered image
  return (
    <div className="container">
      <Head>
        <title>Akashislay</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <marquee>
          <h5>There is no such thing as a coincidence</h5>
        </marquee>
        <img
          src={hovered ? hoveredImage : defaultImage}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ width: "400px", height: "400px", cursor: "pointer" }}
        />
      </main>
    </div>
  );
}

export default Home;
