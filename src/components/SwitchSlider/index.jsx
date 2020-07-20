import React, { useState, useEffect } from "react"
import { useQueryParams, StringParam } from "use-query-params"
import styled from "styled-components"

import MotionSlider from "./MotionSlider"
import Card from "./card"
import { blueBug } from "../../resource/icons"
import switchDB from "../../resource/switchDB.json"
import DebugMode from "./debugMode"

const FABButton = styled.button`
  background-color: #fff0;
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 1em;
  border: none;
  cursor: pointer;
  z-index: 999;
  &:hover, &:focus {
    outline: none;
  }
  & img {
    height: 25px;
    filter: ${props => props.isDebug ? "opacity(100%) grayscale(0%)" : "opacity(30%) grayscale(100%)"};
  }
  &:hover img {
    filter: opacity(100%) grayscale(100%);
  }
`

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
    console.log("Query update");
  }, [query])

  let mode
  if (isDebug) {
    mode = <DebugMode dataList={switchData} queryTime={queryTime} />
  } else {
    if (switchData.length > 0) {
      mode = (
        <div className="silder-container">
          <MotionSlider children={switchData} padding={30} gap={30}>
            {switchData.map(data => (
              <Card data={data} key={data.id} />
            ))}
          </MotionSlider>
        </div>
      )
    } else {
      mode = (
        <h1>No data</h1>
      )
    }
  }

  return (
    <>
      <div className="switchList-layout">{mode}</div>
      <FABButton isDebug={isDebug} onClick={() => setDebugMode(!isDebug)}>
        <img src={blueBug} alt="Debug icon" />
      </FABButton>
    </>
  )
}

export default SwitchList
