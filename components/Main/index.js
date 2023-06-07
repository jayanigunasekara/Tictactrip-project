import React from "react";
import Image from "next/image";
import backgroundImage from "../../public/images/backgroundImage.png";

const index = () => {
  return (
    <div className="container">
      <div>
        <Image
          className="img-responsive "
          src={backgroundImage}
          alt="Background Image"
        ></Image>

        <h2 className="text-center text-white p-4">
          Recherchez vos voyages, trajets courts et bien plus encore...
        </h2>
      </div>
    </div>
  );
};

export default index;
