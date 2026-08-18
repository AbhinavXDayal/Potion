import React from 'react'

const Product = () => {
  const ProductInfo={
    Name : "Laptop",
    Price : "1000",
    Availability : "In stock"
  }

  return (
    <div>
      <h1>Name : {ProductInfo.Name}</h1>
      <h1>Price : ${ProductInfo.Price}</h1>
      <h1>Availability : {ProductInfo.Availability}</h1>

      <hr />
    </div>
  )
}

export default Product