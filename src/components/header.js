import React, { useState } from "react"
import { Link } from "gatsby"

function Header() {
  const [search, setSearch] = useState("")

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
      <input
        type="text"
        style={{ margin: "1em 0" }}
        placeholder="Search"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </header>
  )
}

export default Header
