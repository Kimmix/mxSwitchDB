import React, { Component } from "react"
import Card from "../components/card"
import switches from "../resource/switchDB.json"

const switchData = switches;

export default class SwitchCarousel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {switchData.map(s => (
          <Card data={s} />
        ))}
      </div>
    );
  }
}