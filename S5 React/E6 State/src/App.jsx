import React from 'react'
import { useState } from 'react'
import First from "./components/E6.1 First"
import Second from "./components/E6.2 Second"
import Third from "./components/E6.3 Third"
import Four from "./components/E6.4 Four"
import Fifth from "./components/E6.5 Fifth"
import Sixth from "./components/E6.6 Sixth"
import Seventh from "./components/E6.7 Seventh"
import Eighth from "./components/E6.8 Eighth"

const App = () => {
const Counter = useState(0)
console.log(Counter);

const [Count, SetCount]=useState(0)

const Increment=()=>SetCount(Count+10)
const Decrement=()=>SetCount(Count-10)

const [Friends, SetFriends]=useState(['Alex', 'John'])

const Add=()=>SetFriends([...Friends, 'Abhi'])
const Remove=()=>SetFriends(Friends.filter(f=>f!=='Alex'))

const Update=()=>
{
    SetFriends(Friends.map(f=>f==='Alex' ? 'Austin':f))
}

const [Movie, SetMovie]=useState(
  {
    Title: "Interstellar",
    Ratings:9.9
  }
)

const ChangeRatings=()=>SetMovie({...Movie, Ratings:10})

const [Series, SetSeries]= useState(
  [
    {Id:1, Title:'Breaking bad', Ratings:9},
    {Id:2, Title:'Money heist', Ratings:8}
  ]
)

const ChangeSeries=()=>{
  SetSeries(Series.map(S=>S.Id===2 ? {...Series, Title:'Walking dead'}:S))
}

const [Counts, SetCounts]=useState(0)

return (
    <section>
   <h1>{Count}</h1>
   <button onClick={Increment}>+</button>
   <button onClick={Decrement}>-</button>
   
   <hr />

   {Friends.map((f) => (
          <li key={Math.random()}>{f}</li>
        ))}
        <button onClick={Add}>Add friend</button>
        <button onClick={Remove}>Remove friend</button>
        <button onClick={Update}>Update friend</button>

        <hr />

        <h1>Movie - {Movie.Title}</h1>
        <p>Ratings - {Movie.Ratings}</p>
        <button onClick={ChangeRatings}>Update</button>

        <hr />

        {Series.map(S=>(
          <li key={Math.random()}>{S.Title}</li>
        ))}
        <button onClick={ChangeSeries}>Change name</button>

        <hr />

<First Counts={Counts} onClickHandler={()=>SetCounts(Counts+10)}/>
<Second Counts={Counts} onClickHandler={()=>SetCounts(Counts+10)}/>

<hr />

  <Third />

  <hr />

  <Four />

  <hr />

  <Fifth />

  <hr />

  <Sixth />

  <hr />

  <Seventh />

  <hr />

  <Eighth />
    </section>
  )
}

export default App