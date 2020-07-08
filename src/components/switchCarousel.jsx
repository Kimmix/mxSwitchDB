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
      speed: 500,
      // lazyLoad: true,
      slidesToShow: 8,
      swipeToSlide: true,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1450,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
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


    return (<div>
      <div className="row">
        <div className="six columns">
          <input className="u-full-width" type="text" placeholder="Search" value={this.state.search} onChange={(e) => { this.handleChange(e) }} />
        </div>
        <div className="six columns">
        <button type="button" className={`${this.state.isDebug ? "button-primary" : ""}`}
          onClick={() => this.setState({ isDebug: !this.state.isDebug })}>Debug mode</button>
        </div>
      </div>
      <div className="row">
        <div className="twelve columns">
          {mode}
        </div>
      </div>
    </div>
    );
  }
}