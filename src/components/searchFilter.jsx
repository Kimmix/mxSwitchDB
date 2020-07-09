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

  const setQueryParam = () => {
    let queryParam = "?"
    for (const property in searchQuery) {
      if (searchQuery[property]) {
        queryParam += `${property}=${searchQuery[property]}&`
      }
    }
    if (queryParam.slice(queryParam.length - 1) === "&") {
      queryParam = queryParam.slice(0, -1)
    }
    return queryParam
  }

  // When props changes
  useEffect(() => {
    navigate(setQueryParam())
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
            id="manufacturer"
            value={searchQuery.manufacturer}
            onChange={handleChange}
          >
            <option value="">Manufacturer...</option>
            <option value="gateron">Gateron</option>
            <option value="cherry">Cherry</option>
          </select>
          <select
            name="type"
            id="type"
            value={searchQuery.type}
            onChange={handleChange}
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
