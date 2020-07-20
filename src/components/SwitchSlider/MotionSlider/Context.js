import React, { createContext, useReducer } from "react"

export const Context = createContext(null)

export const ContextProvider = ({ children }) => {
  const initialState = {
    items: [],
    activeItem: 0,
  }

  function reducer(state, action) {
    switch (action.type) {
      case "ADD_ITEM":
        return {
          ...state,
          items: [...state.items, action.item],
        }
      case "SET_ACTIVE_ITEM":
        return {
          ...state,
          activeItem: action.activeItem,
        }
      case "RESET":
        return initialState
      default:
        return initialState
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}
