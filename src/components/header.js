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
          fontWeight: "bold",
        }}
      >
        MX Switch DB
      </Link>
    </header>
  )
}

export default Header
