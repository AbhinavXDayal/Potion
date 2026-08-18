import React from 'react'

const Item = () => {
    const Items = [
        {Id: 1, Name: "Phone", Price: "$500"},
        {Id: 2, Name: "Laptop", Price: "$1000"},
        {Id: 3, Name: "Earphones", Price: "$100"},]

  return (
    <div>
        {Items.map ((I) =>
        (
            <div key={I.Id}>
                <h2>{I.Name}</h2>
                <h2>{I.Price}</h2>
            </div>
        ))}
    </div>
  )
}

export default Item