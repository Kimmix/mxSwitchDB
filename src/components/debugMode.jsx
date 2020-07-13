import React from "react"

const DebugMode = props => {
  return (
    <div>
      <h3>Debuging</h3>
      <p>Query time : {props.queryTime} ms </p>
      {props.dataList.map(data => (
        <ul key={data.id}>
          <li>{data.name}</li>
        </ul>
      ))}
    </div>
  )
}

export default DebugMode
