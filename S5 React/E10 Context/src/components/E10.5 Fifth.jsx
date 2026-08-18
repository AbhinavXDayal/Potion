import React from 'react'
import { useContext } from "react";
import { UserContext } from "./E10.4 Fourth";

const Fifth = () => {
const {User}=useContext(UserContext)

  return (
    <div>
        <h1>User profile</h1>
        <p>Name : {User.Name}</p>
    </div>
  )
}

export default Fifth