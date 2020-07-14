import styled from "styled-components"
import { motion } from "framer-motion"

//banner
export const Banner = styled.div`
  background: ${props => props.theme.background};
  height: 100vh;
  width: 100%;
  position: relative;
  margin-bottom: 296px;
`
export const Video = styled.div`
  height: 100%;
  width: 100%;
  video {
    object-fit: cover;
  }
`
export const Canvas = styled.canvas`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  display: block;
`

export const BannerTitle = styled.h1`
  position: absolute;
  bottom: -80px;
  left: -15px;
  color: ${props => props.theme.text};
  pointer-events: none;
`

export const Headline = styled.span`
  display: block;
  font-size: 13rem;
  font-weight: 900;
  line-height: 0.85;
`
