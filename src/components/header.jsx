import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Title = styled(Link)`
  font-size: 2.5rem;
  text-decoration: none;
  color: black;
  font-weight: 1000;
  > span {
    color: #5f28fa;
  }
`

const Header = () => {
  return (
    <header>
      <Title to="/">
        MX Switch <span>DB</span>
      </Title>
    </header>
  )
}

export default Header
