import React, { useState, useEffect } from "react"
import { useQueryParams, StringParam } from "use-query-params"

import { blueBug, orangeBug } from "../resource/icons"
import switchDB from "../resource/switchDB.json"
import DebugMode from "./debugMode"
import "../css/switchList.css"

const SwitchList = () => {
  const [isDebug, setDebugMode] = useState(false)
  const [switchData, setSwitchData] = useState(switchDB)
  const [query] = useQueryParams({
    search: StringParam,
    manufacturer: StringParam,
    type: StringParam,
  })

  const filterData = (data, param) => {
    const { search, ...filterKey } = param
    data = data.filter(function (item) {
      for (let key in filterKey) {
        if (filterKey[key] !== undefined && item[key] !== filterKey[key]) {
          return false
        }
      }
      return true
    })
    if (search) {
      data = data.filter(s => s.name.includes(search))
    }
    return data
  }

  useEffect(() => {
    setSwitchData(filterData(switchDB, query))
    // setSwitchData(switchDB.filter(s => s.name.includes(searchQuery)))
    // if (query.search) {
    //   return item.name.includes(query.search)
    // } else {
    //   return false
    // }
    // setSwitchData(
    //   switchDB.filter(function (item) {
    //     for (var key in query) {
    //       if (query[key] !== undefined && item[key] !== query[key]) {
    //         return false
    //       }
    //     }
    //     return true
    //   })
    // )
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
