import { useReducer } from "react"

const InitialState={Count : 0}

const Reducer=(State, Action)=>
{
  switch (Action.type) {
    case "Increment":

    return {...State, Count: State.Count + 10}  

      case "Decrement":

        return {...State, Count: State.Count - 10}
  
case "Reset":

return {...State, Count: 0}

    default:

      return State
  }
}

const App = () => {
const [State, Dispatch] =useReducer(Reducer, InitialState)

  return (
  <div>
    <button onClick={()=>Dispatch({type: "Increment"})}>+</button>
    <button onClick={()=>Dispatch({type: "Decrement"})}>-</button>
    <button onClick={()=>Dispatch({type: "Reset"})}>Reset</button>

    <h2>Count : {State.Count}</h2>
    </div>
  ) 
}

export default App