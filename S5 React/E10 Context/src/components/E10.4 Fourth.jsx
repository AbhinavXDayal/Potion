import React from 'react'
import { children } from 'react'
import { createContext, useState } from 'react'

const UserContext=createContext()

const UserProvider=({children})=>{
 const [User,SetUser]= useState({Name : "Abhi"})

const UpdateUser=(NewName)=>
{
  SetUser({Name : NewName})
}

 return <UserContext.Provider value={{User, UpdateUser}}>
  {children}
 </UserContext.Provider>
}

export {UserContext, UserProvider}