import React from "react"

const DebugMode = props => {
  return (
    <div>
      <h3>Debuging</h3>
      {props.dataList.map(data => (
        <ul key={data.id}>
          <li>{data.name}</li>
        </ul>
      ))}
    </div>
  )
}

export default DebugMode
