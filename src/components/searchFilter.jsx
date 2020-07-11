import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"

import SwitchList from "./switchList"

import "../css/searchFilter.css"

const SearchFilter = () => {
  const [searchQuery, setSearchQuery] = useState({
    search: "",
    manufacturer: "",
    type: "",
  })

  const useDebounce = (value, timeout) => {
    const [state, setState] = useState(value)
    useEffect(() => {
      const handler = setTimeout(() => setState(value), timeout)
      return () => clearTimeout(handler)
    }, [value, timeout])
    return state
  }

  const setQueryParam = (param) => {
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

  // When props changes
  useEffect(() => {
    navigate(setQueryParam(searchQuery))
  }, [useDebounce(searchQuery, 500)])

  const handleChange = e => {
    const { name, value } = e.target
    setSearchQuery(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <>
      <div className="search-layout">
        <p>Search filter</p>
        <form>
          <input
            name="search"
            type="text"
            placeholder="Search"
            value={searchQuery.search}
            onChange={handleChange}
          />
          <select
            name="manufacturer"
            value={searchQuery.manufacturer}
            onBlur={handleChange}
          >
            <option value="">Manufacturer...</option>
            <option value="gateron">Gateron</option>
            <option value="cherry">Cherry</option>
          </select>
          <select
            name="type"
            value={searchQuery.type}
            onBlur={handleChange}
          >
            <option value="">Type...</option>
            <option value="clicky">Clicky</option>
            <option value="tactile">Tactile</option>
            <option value="linear">Linear</option>
          </select>
        </form>
      </div>
      <SwitchList searchQuery={searchQuery} />
    </>
  )
}

export default SearchFilter
