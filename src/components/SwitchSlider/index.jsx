import React, { useState, useEffect } from "react"
import { useQueryParams, StringParam } from "use-query-params"

import MotionSlider from "./MotionSlider";
import Card from "./card";
import { blueBug } from "../../resource/icons"
import switchDB from "../../resource/switchDB.json"
import DebugMode from "./debugMode"
import "../../css/switchList.css"

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
        return item.name.includes(search.toLowerCase())
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
    mode = (
      <div style={{margin: '0 -90px'}} >
        <MotionSlider>
          {switchData.map((data) => (
          <div key={data.id}>
            <Card data={data} />
          </div>
        ))}
        </MotionSlider>
      </div>
    )
  }

  return (
    <>
      <div className="switchList-layout">{mode}</div>
      <button className="float-button" onClick={() => setDebugMode(!isDebug)}>
        <img
          src={blueBug}
          className={isDebug ? "float-icon active" : "float-icon"}
          alt="Debug icon"
          style={{ height: "20px" }}
        />
      </button>
    </>
  )
}

export default SwitchList
