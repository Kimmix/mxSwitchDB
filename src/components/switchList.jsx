import React, { useState, useEffect } from "react"
import { useQueryParams, StringParam } from "use-query-params"

import { blueBug, orangeBug } from "../resource/icons"
import switchDB from "../resource/switchDB.json"
import DebugMode from "./debugMode"
import "../css/switchList.css"

const SwitchList = () => {
  const [isDebug, setDebugMode] = useState(false)
  const [switchData, setSwitchData] = useState(switchDB)
  const [query, setQuery] = useQueryParams({
    search: StringParam,
    manufacturer: StringParam,
    type: StringParam,
  })
  const {
    search: searchQuery,
    manufacturer: manufacturerQuery,
    type: typeQuery,
  } = query

  useEffect(() => {
    if (searchQuery) {
      setSwitchData(switchDB.filter(s => s.name.includes(searchQuery)))
    } else {
      setSwitchData(switchDB)
    }
  }, [searchQuery])

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
      <div className="switchList-layout">
        {mode}
        {/* <button onClick={onClick}>Pew</button> */}
      </div>
    </>
  )
}

export default SwitchList
