import React from "react"
import Layout from "../components/layout"
import HomeBanner from "../components/homePage/homeBanner"

const onCursor = cursorType => {
  cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
  dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
}

const IndexPage = props => {
  return (
    <Layout>
      <HomeBanner onCursor={onCursor} />
    </Layout>
  )
}

export default IndexPage
