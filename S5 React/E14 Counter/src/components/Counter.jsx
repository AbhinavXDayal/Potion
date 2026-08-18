import {useState} from 'react'

const Counter = () => {
const [Count, SetCount]=useState(0)

const Increment=()=> SetCount(Count+10)
const Decrement=()=> SetCount(Count-10)

  return (
    <div className ="Container" >
        <div>
        <h1 className="Number">{Count}</h1>
        </div>

        <div className="BtnsContainer">
            <button onClick ={Increment}className="Increment">+</button>
            <button onClick ={Decrement} className="Increment">-</button>
        </div>
    </div>
  )
}

export default Counter