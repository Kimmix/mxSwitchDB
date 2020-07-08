import React, { useState } from "react"
import SwitchList from "./switchList"

import "../css/searchFilter.css"

const SearchFilter = () => {
  const [search, setSearch] = useState("")
  const [manufacturer, setManufacturer] = useState("")
  const [type, setType] = useState("")

  return (
    <>
      <div className="search-layout">
        <p>Search filter</p>
        <form>
          <input
            name="search"
            type="text"
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <select
            name="manufacturer"
            id="manufacturer"
            value={manufacturer}
            onChange={e => setManufacturer(e.target.value)}
          >
            <option value="">Manufacturer...</option>
            <option value="gateron">Gateron</option>
            <option value="cherry">Cherry</option>
          </select>
          <select
            name="type"
            id="type"
            value={type}
            onChange={e => setType(e.target.value)}
          >
            <option value="">Type...</option>
            <option value="clicky">Clicky</option>
            <option value="tactile">Tactile</option>
            <option value="linear">Linear</option>
          </select>
        </form>
      </div>
      <SwitchList searchQuery={search} />
    </>
  )
}

export default SearchFilter