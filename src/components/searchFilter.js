import React, { Component } from "react"
import SwitchList from "../components/switchList"

import "../css/searchFilter.css"

class SearchFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: null,
    }
  }
  render() {
    const { search } = this.state
    return (
      <>
        <div className="search-layout">
          <p>Search filter</p>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={e => this.setState({ search: e.target.value })}
          />
        </div>
        <SwitchList searchQuery={search} />
      </>
    )
  }
}

export default SearchFilter
