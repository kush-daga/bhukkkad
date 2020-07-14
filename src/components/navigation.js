import React, { useState } from "react"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import { Container, Flex } from "../styles/globalStyles"
import {
  NavContainer,
  Nav,
  NavHeader,
  NavList,
  CloseNav,
  NavFooter,
  NavVideos,
} from "../styles/navigationStyles"

const navRoutes = [
  { id: 0, title: "Monday", path: "/monday", video: "featured-video.mp4" },
  { id: 1, title: "Tuesday", path: "/tuesday", video: "easy.mp4" },
  {
    id: 2,
    title: "Wednesday",
    path: "/wednesday",
    video: "make-it-zero.mp4",
  },
  { id: 3, title: "Thursday", path: "/thursday", video: "50-beaches.mp4" },
  { id: 4, title: "Friday", path: "/friday", video: "it-takes-an-island.mp4" },
]

const Navigation = ({ toggleMenu, setToggleMenu, onCursor }) => {
  const [revealVideo, setRevealVideo] = useState({
    show: false,
    video: "featured-video.mp4",
    key: "0",
  })
  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            initial={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            animate={{ x: toggleMenu ? 0 : "-100%" }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <Container>
              <NavHeader>
                <Flex spaceBetween noHeight>
                  <h2>Projects</h2>
                  <CloseNav
                    onClick={() => setToggleMenu(!toggleMenu)}
                    onMouseEnter={() => onCursor("pointer")}
                    onMouseLeave={() => onCursor()}
                  >
                    <button>
                      <span></span>
                      <span></span>
                    </button>
                  </CloseNav>
                </Flex>
              </NavHeader>
              <NavList>
                <ul>
                  {navRoutes.map(route => {
                    return (
                      <motion.li
                        key={route.id}
                        onMouseEnter={() => onCursor("pointer")}
                        onMouseLeave={() => onCursor()}
                        onHoverStart={() => {
                          setRevealVideo({
                            show: true,
                            video: route.video,
                            key: route.id,
                          })
                        }}
                        onHoverEnd={() => {
                          setRevealVideo({
                            show: false,
                            video: route.video,
                            key: route.id,
                          })
                        }}
                      >
                        <Link to={`/projects/${route.path}`}>
                          <motion.div
                            initial={{ x: -75 }}
                            whileHover={{
                              x: -20,
                              transition: {
                                duration: 0.4,
                                ease: [0.6, 0.05, -0.01, 0.9],
                              },
                            }}
                            className="link"
                          >
                            <span className="arrow">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 101 57"
                              >
                                <path
                                  d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                  fill="#FFF"
                                  fillRule="evenodd"
                                ></path>
                              </svg>
                              {route.title}
                            </span>
                          </motion.div>
                        </Link>
                      </motion.li>
                    )
                  })}
                </ul>
              </NavList>
              <NavFooter></NavFooter>
              <NavVideos>
                <motion.div
                  animate={{ width: revealVideo.show ? 0 : "100%" }}
                  className="reveal"
                ></motion.div>
                <div className="video">
                  <AnimatePresence initial={false} exitBeforeEnter>
                    <motion.video
                      key={revealVideo.key}
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0.3 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      src={require(`../assets/video/${revealVideo.video}`)}
                      loop
                      autoPlay
                    ></motion.video>
                  </AnimatePresence>
                </div>
              </NavVideos>
            </Container>
          </Nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
