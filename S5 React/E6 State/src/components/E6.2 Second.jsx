import React from 'react'

const Second = ({Counts, onClickHandler}) => {
const HandleClick=()=>onClickHandler()

  return (
    <div>
        <p>{Counts}</p>
        <button onClick={HandleClick}>Increment</button>
    </div>
  )
}

export default Second