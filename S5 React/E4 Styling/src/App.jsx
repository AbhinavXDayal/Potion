import React from 'react'
import "./index.css"
import { CiShoppingCart } from "react-icons/ci";
import Stylecard from './components/Stylecard';
import Profilecard from './components/Profilecard';
import Iconcomponent from './components/Iconcomponent';

const App = () => {
    const Styles={color:"Lavender", backgroundColor: "Grey", padding:"10px", borderRadius:"10px"}

  return (
  <section>
    <h1 style={Styles}>Inline style</h1>
    <h2>External style</h2>
    <h3 style={Styles}>Shopping cart <CiShoppingCart /></h3>
    <Stylecard />
    <Profilecard />
    <Iconcomponent />
</section>
  )
}

export default App