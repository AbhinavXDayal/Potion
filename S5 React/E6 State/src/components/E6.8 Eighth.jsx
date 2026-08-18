import React, { useState } from 'react'

const Eighth = () => {
const [Items, SetItems]=useState([])
const [Name, SetName]=useState('')
const [Quantity, SetQuantity]=useState('')

const HandleSubmit = (E) => {
  E.preventDefault();

  if (!Name || !Quantity) return;

  const NewItem = {
    Name,
    Quantity: parseInt(Quantity)
  };

  SetItems((PrevItems) => [...PrevItems, NewItem]);

  SetName('');
  SetQuantity('');
};

  return (
    <div>
<h1>Shopping list</h1>

<form onSubmit={HandleSubmit}>
    <input type="text" placeholder='Item name' value={Name} onChange={(E)=>SetName(E.target.value)}/>

    <input type="number" placeholder='Quantity' value={Quantity} onChange={(E)=>SetQuantity(E.target.value)}/>

    <button type="submit">Add item</button>
</form>

<ul>
    {Items.map((Item, Index)=>
   (<li key={Index}>Name - {Item.Name} & Quantity - {Item.Quantity}</li>) )}
</ul>
    </div>
  )
}

export default Eighth