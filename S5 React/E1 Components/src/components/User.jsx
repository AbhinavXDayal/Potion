import React from 'react'

const User = () => {
    const UserInfo=
    [
        {
            Username : "Abhinav Dayal",
            Email : "AbhinavDayal@gmail.com",
            Location : "Usa"
        },
        {
            Username : "John",
            Email : "John@gmail.com",
            Location : "Europe"
        },
        {
            Username : "Alex",
            Email : "Alex@gmail.com",
            Location : "Australia"
        }
    ]

  return (
    <main>
        {
            UserInfo.map(({Username, Email, Location}) =>
            (
                <ul key={Math.random()}>
                    <li>{Username}</li>
                    <li>{Email}</li>
                    <li>{Location}</li>
                </ul>
            )
            )
        }

        <hr />
    </main>
  )
}

export default User