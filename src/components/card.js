import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Card(props) {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: {eq: "Cherry_MX_Black_Switch.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }`)

  return <div className="card-ui">
    <div className="img-container">
      <img src={props.data.imgSrc || `https://via.placeholder.com/150?text=${props.data.name}`} alt={props.data.name} class="responsive-img"></img>
    </div>
    {/* <Img
      fluid={data.file.childImageSharp.fluid}
      alt="MX Switch"
    /> */}
    <p className="header">{props.data.name || 'nan'}</p>
    <p className="subHeader">Actuation</p>
    <p className="desc">{props.data.actuation + 'g' || 'nan'}</p>
    <p className="subHeader">Bottom</p>
    <p className="desc">{props.data.bottom + 'g' || 'nan'}</p>
    <p className="subHeader">Travel</p>
    <p className="desc">{props.data.travel + 'mm' || 'nan'}</p>
  </div>
}