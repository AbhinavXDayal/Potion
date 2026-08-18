import React, { useState } from 'react'
import Popup from './Popup';

const Copyinput = () => {
const [InputVal,SetInputVal]=useState('')
const [Copied, SetCopied]=useState(false)

const HandleCopy=()=>
{
  navigator.clipboard.writeText(InputVal).then(()=>
  {
    SetCopied(true)
    setTimeout(()=>SetCopied(false),2000)
  })
}

  return (
    <div>
        <input type="text" value={InputVal} onChange={e => SetInputVal(e.target.value)}></input>

        <button onClick={HandleCopy}>Copy</button>
         
        <Popup Copied={Copied}/>

        <hr />
    </div>
  )
}

export default Copyinput