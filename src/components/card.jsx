import React from "react"

export default function Card(props) {
  return (
    <div className="card-ui">
      <div className="img-container">
        <img
          src={
            props.data.imgSrc ||
            `https://via.placeholder.com/150?text=${props.data.name}`
          }
          alt={props.data.name}
          className="responsive-img"
        ></img>
      </div>
      <div className="header-space">
        <p className="header">{props.data.name || "nan"}</p>
      </div>
      <p className="desc">{props.data.actuation + "g" || "nan"}</p>
      <p className="subHeader">Actuation</p>
      <p className="desc">{props.data.bottom + "g" || "nan"}</p>
      <p className="subHeader">Bottom</p>
      <p className="desc">{props.data.travel + "mm" || "nan"}</p>
      <p className="subHeader">Travel</p>
    </div>
  )
}
