import Image from "next/image";
import { useState } from "react";

const defaultImage = "/gottem.png"; // Default image
const hoveredImage = "leoGrin.png"; // Hovered image

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
