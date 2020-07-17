import React from "react"
import styled from "styled-components"

export default function Card(props) {
  const Card = styled.div`
    width: 250px;
    height: 550px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 20px 0px;
    border-radius: 14px;
    padding: 1em;
  `
  const CardImg = styled.div`
    text-align: center;
    & img {
      max-height: 150px;
      height: 100%;
      width: auto;
    }
  `
  const CardHeader = styled.p`
    font-size: 1.5em;
    font-weight: bold;
    text-transform: capitalize;
  `
  const CardSubheader = styled.p`
    font-size: 1em;
  `
  const CardDesc = styled.p`
    font-size: 1.7em;
  `
  const CardType = styled.p`
    font-size: 3em;
    color: #e6e6e6;
    writing-mode: vertical-lr;
    text-transform: capitalize;
    position: relative;
    left: 150px;
    bottom: 160px;
  `

  return (
    <Card>
      <CardImg>
        <img
          src={props.data.imgSrc || `https://via.placeholder.com/150?text=${props.data.name}`}
          alt={props.data.name}
        ></img>
      </CardImg>
      <CardHeader>{props.data.name || "nan"}</CardHeader>
      <CardDesc>{props.data.actuation + "g" || "nan"}</CardDesc>
      <CardSubheader>Actuation</CardSubheader>
      <CardDesc>{props.data.bottom + "g" || "nan"}</CardDesc>
      <CardSubheader>Bottom</CardSubheader>
      <CardDesc>{props.data.travel + "mm" || "nan"}</CardDesc>
      <CardSubheader>Travel</CardSubheader>
      <CardType>{props.data.type} </CardType>
    </Card>
  )
}
