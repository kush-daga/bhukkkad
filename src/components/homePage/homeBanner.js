import React, { useEffect, useRef } from "react"
import {
  Banner,
  Video,
  BannerTitle,
  Canvas,
  Headline,
} from "../../styles/homeStyles.js"
//Ctx
import { useGlobalStateContext } from "../../context/globalContext"
//CustomHOOk
import useWindowSize from "../../hooks/useWindowSize"

const HomeBanner = ({ onCursor }) => {
  const { currentTheme } = useGlobalStateContext()

  const parent = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  const child = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }
  return (
    <Banner>
      <Video onMouseEnter={() => onCursor("hovered")} onMouseLeave={onCursor}>
        <video
          height="100%"
          width="100%"
          loop
          autoPlay={true}
          src={require("../../assets/video/video.mp4")}
        ></video>
      </Video>
      <BannerTitle variants={parent} initial="initial" animate="animate">
        <Headline variants={child}>FUN</Headline>
        <Headline variants={child}>DELIGHT</Headline>
      </BannerTitle>
    </Banner>
  )
}

export default HomeBanner
