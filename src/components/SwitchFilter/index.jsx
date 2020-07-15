import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"

import SwitchSlider from "../SwitchSlider"
import useDebounce from "./use-debounce"
import "../../css/searchFilter.css"

const SearchFilter = () => {
  const [searchQuery, setSearchQuery] = useState({
    search: "",
    manufacturer: "",
    type: "",
  })

  const [sorting, setSorting] = useState("")

  const handleChange = e => {
    const { name, value } = e.target
    setSearchQuery(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const debouncedSearchQuery = useDebounce(searchQuery, 500)
  useEffect(() => {
    navigate(setQueryParam(searchQuery))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchQuery])

  const setQueryParam = param => {
    let queryParam = "?"
    for (const property in param) {
      if (param[property]) {
        queryParam += `${property}=${param[property]}&`
      }
    }
    if (queryParam.slice(queryParam.length - 1) === "&") {
      queryParam = queryParam.slice(0, -1)
    }
    return queryParam
  }

  return (
    <>
      <div className="search-layout">
        <p style={{ margin: "6px 0", color: "#4f4f4f", fontSize: "0.9em" }}>
          Search filter
        </p>
        <form className="form-container">
          <div className="row">
            <input
              name="search"
              className="myStyle"
              type="text"
              placeholder="Search"
              value={searchQuery.search}
              onChange={handleChange}
            />
          </div>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div className="left-row">
              <select
                name="manufacturer"
                className="myStyle"
                value={searchQuery.manufacturer}
                onChange={handleChange}
              >
                <option value="">Select manufacturer</option>
                <option value="gateron">Gateron</option>
                <option value="cherry">Cherry</option>
              </select>
              <select
                name="type"
                className="myStyle"
                value={searchQuery.type}
                onChange={handleChange}
              >
                <option value="">Select type</option>
                <option value="clicky">Clicky</option>
                <option value="tactile">Tactile</option>
                <option value="linear">Linear</option>
              </select>
            </div>
            <div className="right-row">
              <select
                name="sort"
                className="myStyle"
                style={{ borderRadius: "10px" }}
                value={sorting}
                onChange={e => {
                  setSorting(e.target.value)
                }}
              >
                <option value="">Sort by: A-Z</option>
                <option value="alpha">A-Z</option>
                <option value="id">Id</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <SwitchSlider searchQuery={searchQuery} />
    </>
  )
}

export default SearchFilter
