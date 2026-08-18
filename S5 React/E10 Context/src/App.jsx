import React from 'react'
import First from "./components/E10.1 First"
import Fifth from "./components/E10.5 Fifth"
import Sixth from "./components/E10.6 Sixth"
import { createContext } from 'react'
import { UserProvider } from './components/E10.4 Fourth'

export const Data1=createContext()
export const Data2=createContext()

const App = () => {
  const ContextApi='ContextApi'
const DataDrill='DataDrill'
const Age=21

  return (
    <div>
                <Data1.Provider value={ContextApi}>
                  <Data2.Provider value={Age}>
      <First/>
                  </Data2.Provider>
                 </Data1.Provider>

                 <hr />
                
                <UserProvider>
      <Fifth />

      <hr />
      
      <Sixth />
                </UserProvider>
    </div>
  )
}

export default App