import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContext"

///Styled components
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"

//Components
import Header from "./header"
import CustomCursor from "./customCursor"

const GlobalStyle = createGlobalStyle`
	${normalize}
	*{
		text-decoration: none;
		cursor: none;
	}

	html {
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		font-size: 16px;
	}

	body {
		font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-seri;
		background: ${props => props.theme.background};
		overscroll-behavior: none;
		overflow-x: hidden;
	}
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const darkTheme = {
    background: "black",
    text: "#fff",
    red: "#ea291e",
    green: "#00FF48",
  }
  const lightTheme = {
    background: "white",
    text: "black",
    red: "#ea291e",
    green: "#8BC44A",
  }
  const { currentTheme, cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }
  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <CustomCursor />
      <Header onCursor={onCursor} />
      <main>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
