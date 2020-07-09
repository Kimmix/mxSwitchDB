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

  function search(list) {
    return Object.keys(this).every(key => list[key] === this[key])
  }

  useEffect(() => {
    // var result = switchDB.filter(search, query)
    // function search(user) {
    //   return Object.keys(this).every(key => user[key] === this[key])
    // }
    // console.log(result)

    // setSwitchData(switchDB.filter(s => s.name.includes(searchQuery)))

    setSwitchData(
      switchDB.filter(function (item) {
        for (var key in query) {
          if (item.name.includes(query.search)) {
            
            return true
          }
        }
        return false
      })
    )
  }, [query])

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
