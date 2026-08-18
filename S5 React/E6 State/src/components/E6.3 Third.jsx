import React, { useState } from 'react'

const Third = () => {
const [Counters, SetCounters]=useState(()=>
{
    const InitialCounters=10
    return InitialCounters
})

const Increment=()=>{
    SetCounters(PrevCount => PrevCount+10)
}

  return (
    <div>
        <h1>Counters :{Counters}</h1>
        <button onClick={Increment}>Increment</button>
    </div>
  )
}

export default Third