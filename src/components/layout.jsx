import React from "react"

import Header from "./header"
import "../css/layout.css"

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with Gatsby
        {/* <a href="https://www.gatsbyjs.org">Gatsby</a> */}
      </footer>
    </div>
  )
}

export default Layout
