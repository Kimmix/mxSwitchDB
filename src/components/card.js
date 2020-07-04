import React from "react"

export default function Card(props) {
  return <div className="card-ui">
    <img src="https://mechanicalkeyboards.com/switches/images/Cherry_MX_Blue_Switch_5a318_thumb.png" alt="MX Blue" class="responsive-img"></img>
    <p className="header">{props.data.name || 'nan'}</p>
    <p className="subHeader">Actuation</p>
    <p className="desc">{props.data.actuation + 'g' || 'nan'}</p>
    <p className="subHeader">Bottom</p>
    <p className="desc">{props.data.bottom + 'g' || 'nan'}</p>
    <p className="subHeader">Travel</p>
    <p className="desc">{props.data.travel + 'mm' || 'nan'}</p>
  </div>
}