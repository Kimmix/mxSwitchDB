import React, { Component } from "react"

import "../css/switchList.css"
import { blueBug, orangeBug } from "../resource/icons"
import switchDB from "../resource/switchDB.json"

class SwitchList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDebug: false,
      switchData: switchDB,
    }
  }
  render() {
    const { isDebug, switchData } = this.state
    let mode
    if (isDebug) {
      mode = (
        <div>
          <h3>Debuging</h3>
          <p>
            <b>SearchQuery:</b> {this.props.searchQuery}
          </p>
          {switchData.map(data => (
            <ul key={data.id}>
              <li>{data.name}</li>
            </ul>
          ))}
        </div>
      )
    } else {
      mode = <p>List</p>
    }
    return (
      <>
        <button
          className="float-icon"
          onClick={() => this.setState({ isDebug: !this.state.isDebug })}
        >
          <img src={isDebug ? blueBug : orangeBug} alt="Debug icon" />
        </button>
        <div className="switchList-layout">{mode}</div>
      </>
    )
  }
}

export default SwitchList
