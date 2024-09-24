import Image from "next/image";
import { useState } from "react";

const defaultImage =
  "https://cdn.discordapp.com/attachments/959857101860122646/1264724381980954705/SPOILER_gotchya.png?ex=66f2a11e&is=66f14f9e&hm=400ad68992911063226af555ea321d95012c63a69e391278d72db520423d89cb&"; // Default image
const hoveredImage =
  "https://cdn.discordapp.com/attachments/1129107516178059316/1253100268233556079/image.png?ex=66f28751&is=66f135d1&hm=72bdf00688571073a088399e0706c967deed01e8b4d1f92287b8ec9b0e2c1e09&"; // Hovered image

const Gottem = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-row min-h-screen justify-center items-center">
      {/* <marquee>
          <h5>There is no such thing as a coincidence</h5>
        </marquee> */}
      <Image
        src={hovered ? hoveredImage : defaultImage}
        alt="GOTTEM"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        width={400}
        height={400}
        className="hover:cursor-pointer"
      />
    </div>
  );
};

export default Gottem;
