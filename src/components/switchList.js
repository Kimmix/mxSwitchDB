import React, { Component } from "react"

import "../css/switchList.css"
import { blueBug, orangeBug } from "../resource/icons"

class SwitchList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDebug: false,
    }
  }
  render() {
    const { isDebug } = this.state
    return (
      <>
        <button
          className="float-icon"
          onClick={() => this.setState({ isDebug: !this.state.isDebug })}
        >
          <img src={isDebug ? blueBug : orangeBug} alt="Debug icon" />
        </button>
        <div className="switchList-layout">
          <p>list</p>
        </div>
      </>
    )
  }
}

export default SwitchList
