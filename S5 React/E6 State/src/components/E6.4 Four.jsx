import React, { useState } from 'react'

const Four = () => {
const [RandomNum, SetRandomNum]=useState(()=>Math.floor(Math.random()*100))

const GenNewRanNum=()=>
{
    const NewNum=Math.floor(Math.random()*100)
    SetRandomNum(NewNum)
}

  return (
    <div>
        <h1>Random num : {RandomNum}</h1>
        <button onClick={GenNewRanNum}>Generate new num</button>
    </div>
  )
}

export default Four