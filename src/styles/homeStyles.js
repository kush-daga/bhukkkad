import styled from "styled-components"
import { motion } from "framer-motion"

//banner
export const Banner = styled(motion.div)`
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

export const BannerTitle = styled(motion.h1)`
  position: absolute;
  bottom: -80px;
  left: -15px;
  color: ${props => props.theme.text};
  pointer-events: none;
`

export const Headline = styled(motion.span)`
  display: block;
  font-size: 18rem;
  font-weight: 900;
  line-height: 0.79;
`
