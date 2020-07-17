import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

function Header() {
  const Title = styled(Link)`
    font-size: 2.5rem;
    text-decoration: none;
    color: black;
    font-weight: 1000;
    > span {
      color: #5F28FA;
    }
  `;

  return (
    <header>
      <Title to="/">MX Switch <span>DB</span></Title>
    </header>
  )
}

export default Header
