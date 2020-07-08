import React, { useState, useEffect } from "react"

import { blueBug, orangeBug } from "../resource/icons"
import switchDB from "../resource/switchDB.json"
import DebugMode from "./debugMode"
import "../css/switchList.css"

const SwitchList = props => {
  const [isDebug, setDebugMode] = useState(false)
  const [switchData, setswitchData] = useState(switchDB)
  const [searchQuery] = useState(props.searchQuery)
  
  const useDebounce = (value, timeout) => {
    const [state, setState] = useState(value)
    useEffect(() => {
      const handler = setTimeout(() => setState(value), timeout)
      return () => clearTimeout(handler)
    }, [value, timeout])
    return state
  }

  // When props changes
  useEffect(() => {
    console.log("useEffect")
    setswitchData(
      switchDB.filter(s => s.name.includes(props.searchQuery.toLowerCase()))
    )
  }, [useDebounce(props.searchQuery, 500)])

  let mode
  if (isDebug) {
    mode = <DebugMode dataList={switchData} />
  } else {
    mode = <p>List</p>
  }

  return (
    <>
      <button className="float-icon" onClick={() => setDebugMode(!isDebug)}>
        <img src={isDebug ? blueBug : orangeBug} alt="Debug icon" />
      </button>
      {searchQuery}
      <div className="switchList-layout">{mode}</div>
    </>
  )
}

export default SwitchList
