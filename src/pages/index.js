import React, { Component } from "react"
import SwitchCarousel from "./switchCarousel"

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1>MX Switch DB</h1>
        <SwitchCarousel />
      </div>
    )
  }
}
