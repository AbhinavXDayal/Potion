import React from 'react'
import Weather from "./components/Weather"
import Userstatus from './components/Userstatus'
import Greeting from './components/Greeting'

const ValidPass = () => <h1>Valid password</h1>
const InvalidPass = () => <h1>Invalid password</h1>

const Pass = ({ isValid }) => {
  if (isValid) {
    return (
      <>
        <ValidPass />
        <hr />
      </>
    )
  }

  return (
    <>
      <InvalidPass />
      <hr />
    </>
  )
}

const Cart = () => {
  const Items = ["Wireless earbuds", "Power bank", "Ssd"]

  return (
    <div>
      <h1>Cart 🛒</h1>
      {Items.length > 0 && <h2>You have {Items.length} items in your cart</h2>}

      <ul>
        <h4>Products</h4>
        {Items.map(item => (
          <li key={Math.random()}>{item}</li>
        ))}
      </ul>

      <hr />
    </div>
  )
}

const App = () => {
  return (
    <section>
      <Pass isValid={false} />
      <Cart />
      <Weather />
      <Userstatus LoggedIn={true} IsAdmin={false} />
      <Greeting TimeOfDay="Morning" />
    </section>
  )
}

export default App