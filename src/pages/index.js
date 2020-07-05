import React, { Component } from "react"
import Navbar from "../components/navbar"
import SwitchCarousel from "../components/switchCarousel"

export default class Home extends Component {
  render() {
    return (<div>
      <Navbar />
      <main>
        {/* <p>Hello world</p> */}
        <SwitchCarousel />
      </main>
    </div>
    )
  }
}
