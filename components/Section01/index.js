import React from 'react'
import Image from "next/image"
import styles from "../../styles/section01.module.css"
import image from "../../public/images/background-image.png"
import textSection from './textSection'

const index = () => {
  return (
    <div>
      <Image
      src = {image}
      alt = "Image background"
      ></Image>
      <textSection/>
    </div>
  )
}

export default index
