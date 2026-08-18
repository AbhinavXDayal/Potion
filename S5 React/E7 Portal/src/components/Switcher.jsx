import React, { useState } from 'react'

const Switcher = () => {
const [Sw, SetSw]=useState(false);

  return (
    <div>
        {Sw ? (<span>Dark</span>) : (<span>Light</span>)}

        <br />

        <input type="text" key={Sw ? "Dark" : "Light"}/>

        <button onClick={() => SetSw(!Sw)}>Switch</button>
    </div>
  )
}

export default Switcher