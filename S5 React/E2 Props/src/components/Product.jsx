import React from 'react'

const Product = ({Name, Price}) => {
  return (
    <div>
      <h2>{Name}</h2>
      <p>{Price}</p>

      <hr />
    </div>
  )
}

export default Product