import React, { useRef, useState, useEffect } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"

import SwitchSlider from "../SwitchSlider"
import useDebounce from "./use-debounce"
import { expendArrow } from "../../resource/icons";

const SearchFilter = () => {
  const textInput = useRef(null);
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

  const Row = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `;

  const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
  `;

  const SubTitle = styled.p`
    margin: 6px 0;
    color: #4f4f4f;
  `;

  const StyledInput = styled.input`
    background: #EFEFEF;
    border: none;
    font-size: 14px;
    font-weight: 700;
    color: #444;
    padding: 0.3em 0.6em;
    margin: 0em 0.6em 0.7em 0em;
    &:hover, &:focus {
      outline: none;
      background-color: #e6e6e6;
    }
  `;

  const StyledSelect = styled.select`
    border: none;
    font-size: 14px;
    font-weight: 700;
    color: #444;
    padding: 0.3em 0.6em;
    margin: 0em 0.6em 0.7em 0em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background: #EFEFEF;
    background-image: url(${expendArrow});
    background-repeat: no-repeat, repeat;
    background-position: right 0.4em top 50%, 0 0;
    background-size: 1.05em auto, 100%;
    padding-right: 68px !important;
    filter: grayscale(100%);
    &:hover, &:focus {
      filter: none;
      outline: none;
      background-color: #e6e6e6;
    }
    &::-ms-expand {
      display: none;
    }
    & option {
      font-weight: normal;
    }
    & option:hover, & option:focus {
      outline: none;
    }
  `

  return (
    <>
      <div className="search-layout">
        <SubTitle>Search filter</SubTitle>
        <FormContainer>
          <Row>
            <StyledInput
              name="search"
              type="text"
              placeholder="Search"
              ref={textInput}
              value={searchQuery.search}
              onChange={handleChange}
              onMouseEnter={() => {
                textInput.current.focus()
              }}
            />
          </Row>
          <Row>
            <Row>
              <StyledSelect
                name="manufacturer"
                value={searchQuery.manufacturer}
                onChange={handleChange}
              >
                <option value="">Select manufacturer</option>
                <option value="gateron">Gateron</option>
                <option value="cherry">Cherry</option>
              </StyledSelect>
              <StyledSelect
                name="type"
                value={searchQuery.type}
                onChange={handleChange}
              >
                <option value="">Select type</option>
                <option value="clicky">Clicky</option>
                <option value="tactile">Tactile</option>
                <option value="linear">Linear</option>
              </StyledSelect>
            </Row>
            <Row>
              <StyledSelect
                name="sort"
                style={{ borderRadius: "10px" }}
                value={sorting}
                onChange={e => {
                  setSorting(e.target.value)
                }}
              >
                <option value="">Sort by: A-Z</option>
                <option value="alpha">A-Z</option>
                <option value="id">Id</option>
              </StyledSelect>
            </Row>
          </Row>
        </FormContainer>
      </div>
      <SwitchSlider searchQuery={searchQuery} />
    </>
  )
}

export default SearchFilter
