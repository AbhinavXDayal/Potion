import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  const [ShowInput, SetShowInput] = useState(false)
  const [BgColor, SetBgColor] = useState('White')

  const HandleClick = (e) => {
    SetBgColor("#1a1a1a")
    if (e.target.className === "Container") {
      SetShowInput(false)
      SetBgColor("#fff")
    }
  }

  return (
    <div className="SearchWrapper">
      <section
        className="Container"
        style={{ backgroundColor: BgColor }}
        onClick={HandleClick}
      >
        {ShowInput ? (
          <input type="text" placeholder="Search..." />
        ) : (
          <FaSearch onClick={() => SetShowInput(true)} />
        )}
      </section>
    </div>
  )
}

export default Search