import React, { Component } from "react"
import Card from "../components/card"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import switches from "../resource/switchDB.json"

const switchData = switches;

export default class SwitchCarousel extends Component {
  render() {
    const settings = {
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="container">
        <Slider {...settings}>
          {switchData.map(s => (
            <div className="six columns">
              <Card data={s} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}