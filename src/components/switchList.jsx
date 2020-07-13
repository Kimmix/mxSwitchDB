import React, { useState, useEffect } from "react"
import { useQueryParams, StringParam } from "use-query-params"

import { blueBug, orangeBug } from "../resource/icons"
import switchDB from "../resource/switchDB.json"
import DebugMode from "./debugMode"
import "../css/switchList.css"

const SwitchList = () => {
  const [isDebug, setDebugMode] = useState(false)
  const [switchData, setSwitchData] = useState(switchDB)
  const [queryTime, setQueryTime] = useState(null)
  const [query] = useQueryParams({
    search: StringParam,
    manufacturer: StringParam,
    type: StringParam,
  })

  const filterData = (data, param) => {
    const { search, ...filterKey } = param
    return data.filter(function (item) {
      for (const key in filterKey) {
        if (filterKey[key] !== undefined && item[key] !== filterKey[key]) {
          return false
        }
      }
      if (search) {
        return item.name.includes(search)
      } else {
        return true
      }
    })
  }

  useEffect(() => {
    let start = performance.now()
    setSwitchData(filterData(switchDB, query))
    setQueryTime(performance.now() - start)
  }, [query])

  let mode
  if (isDebug) {
    mode = <DebugMode dataList={switchData} queryTime={queryTime} />
  } else {
    mode = <p>List</p>
  }

  return (
    <>
      <button className="float-icon" onClick={() => setDebugMode(!isDebug)}>
        <img src={isDebug ? blueBug : orangeBug} alt="Debug icon" />
      </button>
      <div className="switchList-layout">{mode}</div>
    </>
  )
}

export default SwitchList
