import React, { useState } from 'react'

const Sixth = () => {
const [Tasks, SetTasks]=useState([])
const [InputVal, SetInputVal]=useState('')

const HandleSubmit=E=>
{
E.preventDefault()

if(InputVal.trim())
{
    SetTasks([...Tasks,InputVal])
    SetInputVal("")
}
}

const HandleChange=E=>
{
  SetInputVal(E.target.value)
}

  return (
    <div>
        <h1>Tasks</h1>
        
        <form onSubmit={HandleSubmit}>
            <input type="text" value={InputVal} onChange={HandleChange}placeholder='Add a new task'/>

            <button type='submit'>Add task</button>
        </form>

        <ul>
  {Tasks.map((Task, Index) => (
    <li key={Index}>{Task}</li>
  ))}
</ul>
    </div>
  )
}

export default Sixth