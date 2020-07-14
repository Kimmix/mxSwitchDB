import React from "react"
import { Link } from "gatsby"

function Header() {
  return (
    <header>
      <Link
        to="/"
        style={{
          fontSize: "2.5rem",
          textDecoration: "none",
          color: "black",
          fontWeight: "1000",
        }}
      >
        MX Switch <span style={{ color: "#5F28FA" }}>DB</span>
      </Link>
    </header>
  )
}

export default Header
