import React from 'react'
import Person from "./components/Person"
import Product from "./components/Product"
import Card from "./components/Card"

const App = () => {
  return (
    <>
  <User 
  Img="https://images.unsplash.com/photo-1743596259979-7c0d026abdcd?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  Name='Abhinav' 
  Age={21} 
  isMarried={false} 
  Hobbies={["Travelling", "Photography", "Sleeping"]}
  />

  <People
  Img="https://images.unsplash.com/photo-1713713532791-3a656f7608f3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  Name="Alex"
  Age={25}
  isMarried={true}
  Hobbies={["Cooking", "Gaming", "Running"]}
  />

  <div>
    <Person Name = 'Abhi' Age={21}/>
    <Product Name= 'Pixel' Price={100}/>
  </div>

  <div>
    <Card>
      <h1>My card 1</h1>
      <p>This is some content for card 1</p>
    </Card>

    <Card>
      <h1>My card 2</h1>
      <p>This is some content for card 2</p>
    </Card>

    <Card>
      <h1>My card 3</h1>
      <p>This is some content for card 3</p>
    </Card>
  </div>
  </>
  )
}

const User=(Props) =>
{
  console.log(Props)
  
  return <section>
    <img src={Props.Img} alt={Props.Name} width={150}/>
    <h1>Name - {Props.Name}</h1>
    <h2>Age - {Props.Age}</h2>
    <h3>Is married - {Props.isMarried}</h3>
    <h3>Hobbies - {Props.Hobbies}</h3>

    <hr />
  </section>
}

const People=({Img, Name, Age, isMarried, Hobbies})=>
{
  return <section>
    <img src={Img} alt={Name} width={150}/>
    <h1>Name - {Name}</h1>
    <h2>Age - {Age}</h2>
    <h3>Is married - {isMarried}</h3>
    <h3>Hobbies - {Hobbies}</h3>

    <hr />
  </section>
}

export default App