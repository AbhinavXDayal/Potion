import { useRef } from "react"

const App = () => {
const InputElement=useRef(null)
console.log(InputElement);

const FocusInput=()=>
  {
    InputElement.current.focus()
    InputElement.current.value="Abhi"
  }

  return (
    <div>
      <input type="text" ref={InputElement}/>

      <button onClick={()=>FocusInput()}>Focus & write Abhi</button>
    </div>
  )
}

export default App