import React from "react";
import Image from "next/image";
import styles from "../../styles/section01.module.css";
import image from "../../public/images/background-image.png";
import textSection from "./textSection";

const index = () => {
  return (
    <div className="myContainer">
      <Image
        src={image}
        alt="Image background"
        style={{
          marginLeft: "10%",
          marginRight: "10%",
          // width: "600px",
          // height: "auto",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      ></Image>
      <textSection />
    </div>
  );
};

export default index;
