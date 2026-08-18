import React from 'react'
import First from "./components/E9.1 First"
import Second from "./components/E9.2 Second"
import Third from "./components/E9.3 Third"
import { createContext } from 'react'

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

      <First DataDrill={DataDrill}/>
      <Second />
      <Third />
    </div>
  )
}

export default App