import React, { Component } from "react"
import Card from "./card"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import switches from "../resource/switchDB.json"


export default class SwitchCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDebug: false,
      search: '',
      switchData: switches
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      search: e.target.value,
      switchData: switches.filter(s => s.name.includes(e.target.value))
    });
  }

  render() {
    const { isDebug, switchData } = this.state;
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 720,
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
      mode = <div>
        <h3>Debuging</h3>
        {switchData.map((data) => (
          <ul key={data.id}>
            <li>{data.name}</li>
          </ul>
        ))}
      </div>
    } else {
      mode = <Slider {...settings}>
        {switchData.map((data) => (
          <div key={data.id}>
            <Card data={data} />
          </div>
        ))}
      </Slider>
    }


    return (
      <div>
        <div class="row">
          <div class="six columns">
            <input class="u-full-width" type="text" placeholder="Search" value={this.state.search} onChange={(e) => { this.handleChange(e) }} />
          </div>
        </div>
        <div class="row">
          <button type="button" className={`${this.state.isDebug ? "button-primary" : ""}`}
            onClick={() => this.setState({ isDebug: !this.state.isDebug })}>Debug mode</button>
          {mode}
        </div>
      </div>
    );
  }
}