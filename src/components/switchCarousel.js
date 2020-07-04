import React, { Component } from "react"
import Card from "./card"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import switches from "../resource/switchDB.json"
const switchData = switches;

export default class SwitchCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { isDebug: false };
  }

  render() {
    const { isDebug } = this.state;
    const settings = {
      speed: 500,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      lazyLoad: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    let mode;
    if (isDebug) {
      mode = <Slider {...settings}>
        {switchData.map((data) => (
          <div key={data.id}>
            <Card data={data} />
          </div>
        ))}
      </Slider>
    } else {
      mode = <div>
        <h1>Debugging</h1>
        {switchData.map((data) => (
          <ul key={data.id}>
            <li>{data.name}</li>
          </ul>
        ))}
      </div>
    }
    return (
      <div className="container">
        <p>{this.state.isDebug}</p>
        <button type="button" onClick={() => this.setState({ isDebug: !this.state.isDebug })}>Debug mode</button>
        {mode}
      </div>
    );
  }
}