import React from 'react'

const Name = () => {
    const Users=[
        {Id: 1, Name: 'John', Age: 25},
        {Id: 2, Name: 'Jane', Age: 20},
        {Id: 3, Name: 'Bob', Age: 27}
    ]

  return (
    <div>
        {Users.map(user => (
            <div key={user.Id}>
                <h2>Name : {user.Name}</h2>
                <h2>Age : {user.Age}</h2>
            </div>   
        ))}      

        <hr />  
    </div>
  )
}

export default Name