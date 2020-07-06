import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <Link
      to="/"
      style={{
        fontSize: "2.5rem",
        textDecoration: "none",
        color: "black",
        fontWeight: "bold",
      }}
    >
      MX Switch DB
    </Link>
    <input type="text" name="search" style={{ margin: "1em 0" }} />
  </header>
)

export default Header
