import React from 'react'

const Person = (Props) => {
  return (
    <div>
        <h2>{Props.Name}</h2>
        <p>{Props.Age}</p>

        <hr />
    </div>
  )
}

export default Person