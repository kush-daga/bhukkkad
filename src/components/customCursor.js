import React, { useState, useEffect } from "react"
import { Cursor } from "../styles/globalStyles"
//Context
import { useGlobalStateContext } from "../context/globalContext"

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 400,
    y: 400,
  })
  const { cursorType } = useGlobalStateContext()
  const onMouseMove = event => {
    const { pageX: x, pageY: y } = event
    setMousePosition({ x, y })
  }

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove)
    return () => {
      document.removeEventListener("mousemove", onMouseMove)
    }
  }, [])
  return (
    <div>
      <Cursor
        className={`${!!cursorType ? "hovered" : ""} ${cursorType}`}
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      />
    </div>
  )
}

export default CustomCursor
