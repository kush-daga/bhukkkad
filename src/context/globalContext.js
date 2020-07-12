import React, { createContext, useReducer, useContext } from "react"

//Context
const GlobalStateContext = createContext()
const GlobalDispatchContext = createContext()

//Reducer
const globalReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return { ...state, currentTheme: action.theme }
    }
    case "CURSOR_TYPE": {
      return {
        ...state,
        cursorType: action.cursorType,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const GlobalProvider = ({ children }) => {
  const defaultState = {
    currentTheme:
      window.localStorage.getItem("theme") == null
        ? "dark"
        : window.localStorage.getItem("theme"),
    cursorType: false,
    cursorStyles: ["pointer", "hovered"],
  }
  const [state, dispatch] = useReducer(globalReducer, defaultState)
  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  )
}

//Custom hooks to use dispatch and state

export const useGlobalStateContext = () =>
  useContext(GlobalStateContext) || {
    currentTheme: "dark",
    cursorType: false,
    cursorStyles: ["pointer", "hovered"],
  }
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)
