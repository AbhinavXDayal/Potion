import React from 'react'

const Greeting = ({TimeOfDay}) => {
  return TimeOfDay === "Morning" ? (<h1>Good morning</h1>) : (<h1>Good afternoon</h1>)
}

export default Greeting