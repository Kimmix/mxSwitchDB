import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"

import SwitchList from "./switchList"
import useDebounce from "./use-debounce"
import "../css/searchFilter.css"

const SearchFilter = () => {
  const [searchQuery, setSearchQuery] = useState({
    search: "",
    manufacturer: "",
    type: "",
  })

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
            onChange={handleChange}
          >
            <option value="">Manufacturer...</option>
            <option value="gateron">Gateron</option>
            <option value="cherry">Cherry</option>
          </select>
          <select name="type" value={searchQuery.type} onChange={handleChange}>
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
