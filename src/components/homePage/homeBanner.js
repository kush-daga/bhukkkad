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

const HomeBanner = () => {
  let canvas = useRef(null)
  let size = useWindowSize()
  const { currentTheme } = useGlobalStateContext()
  useEffect(() => {
    let renderingElement = canvas.current
    let drawingElement = renderingElement.cloneNode()
    let drawingCtx = drawingElement.getContext("2d")
    let renderingCtx = renderingElement.getContext("2d")
    let lastX
    let lastY
    let moving = false
    renderingCtx.globalCompositeOperation = "source-over"
    renderingCtx.fillStyle = currentTheme === "dark" ? "#000000" : "#ffffff"
    renderingCtx.fillRect(0, 0, size.width, size.height)

    renderingElement.addEventListener("mouseover", e => {
      moving = true
      lastX = e.pageX - renderingElement.offsetLeft
      lastY = e.pageY - renderingElement.offsetTop
    })

    renderingElement.addEventListener("mouseup", e => {
      moving = false
      lastX = e.pageX - renderingElement.offsetLeft
      lastY = e.pageY - renderingElement.offsetTop
    })

    renderingElement.addEventListener("mousemove", e => {
      if (moving) {
        drawingCtx.globalCompositeOperation = "source-over"
        renderingCtx.globalCompositeOperation = "destination-out"
        let currentX = e.pageX - renderingElement.offsetLeft
        let currentY = e.pageY - renderingElement.offsetTop
        drawingCtx.lineJoin = "round"
        drawingCtx.moveTo(lastX, lastY)
        drawingCtx.lineTo(currentX, currentY)
        drawingCtx.closePath()
        drawingCtx.lineWidth = 80
        drawingCtx.stroke()
        lastX = currentX
        lastY = currentY
        renderingCtx.drawImage(drawingElement, 0, 0)
      }
    })
  }, [currentTheme, size])

  return (
    <Banner>
      <Video>
        <video
          height="100%"
          width="100%"
          loop
          autoPlay={true}
          src={require("../../assets/video/video.mp4")}
        ></video>
      </Video>
      <Canvas
        ref={canvas}
        width={size ? size.width : "100%"}
        height={size ? size.height : "100%"}
      />
      <BannerTitle>
        <Headline>FUN</Headline>
        <Headline>DELIGHT</Headline>
      </BannerTitle>
    </Banner>
  )
}

export default HomeBanner
