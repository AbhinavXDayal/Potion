import React from 'react'

const Button =()=>
{
  const HandleClick=()=>console.log(Math.round(Math.random()*10));
  
  return <button onClick={HandleClick}>Click</button>
}

const Copy=()=>
{
const CopyHandler=()=>
{
  console.log("Stop stealing my content");
}

  return(
    <p onCopy={CopyHandler}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
  )
}

const Move=()=>{
function MoveHandler(){
  alert('Mouse moved event fired')
console.log
     ('Mouse moved event fired')
  
}

  return (<p onMouseMove={MoveHandler}>
Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </p>
  )
}

const App = () => {
  return (
    <section>
      <Button />
      <Copy />
      <Move/>
    </section>
  )
}

export default App