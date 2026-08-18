import {useState} from 'react'

const Todo = () => {
const [Todos, SetTodos]=useState([])
const [Input, SetInput]=useState('')

const HandleSubmit=()=>
{
SetTodos((Todos)=>{
  return Todos.concat({
    Text:Input,
    Id:Math.floor(Math.random()*10)
  })
})

SetInput("")
}

const RemoveTodo=(Id)=>SetTodos((Todos)=>Todos.filter((T)=>T.Id!=Id))

  return (
    <div className='Container'>
<input type="text" placeholder="New todo" value={Input} onChange={(e)=>SetInput(e.target.value)}/>

<button onClick={HandleSubmit}>Submit</button>

<ul className='TodosList'>
  {Todos.map(({Text,Id})=>(
    <li className='Todo' key={Id}>
<span>{Text}</span>

<button className='Close' onClick={()=>RemoveTodo(Id)}>x</button>
    </li>
  ))}
</ul>
    </div>
  )
}

export default Todo