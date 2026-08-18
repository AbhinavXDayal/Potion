import { useContext, useState } from "react";
import { UserContext } from "./E10.4 Fourth";

import React from 'react'

const Sixth = () => {
const {UpdateUser}=useContext(UserContext)
const [NewName, SetNewName]=useState('')

const HandleSubmit = (e) => {
  e.preventDefault()
  
  if (NewName.trim())
{
UpdateUser(NewName)
    SetNewName('')

}
}

  return <div>
    <h2>Update user name</h2>

    <form onSubmit={HandleSubmit}>
<input type="text" value={NewName} onChange={(e)=>SetNewName(e.target.value)} placeholder="Enter new name"/>

<button type="submit">Update</button>
    </form>
  </div>
}

export default Sixth