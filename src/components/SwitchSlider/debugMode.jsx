import React from "react"

const DebugMode = props => {
  return (
    <div>
      <h3>Debuging</h3>
      <p>Query time : {props.queryTime} ms </p>
      {props.dataList.map(data => (
        <li key={data.id}>
          {data.name}
        </li>
      ))}
    </div>
  )
}

export default DebugMode
