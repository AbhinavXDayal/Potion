import React from 'react'

const List = () => {
    const Nums = [1,2,3]

  return (
    <main>
        {Nums.map(Num => (
            <ul key={Num}>
                <li>
                    {Num}
                </li>
            </ul>
        ))}
        
        <hr />
    </main>
  )
}

export default List