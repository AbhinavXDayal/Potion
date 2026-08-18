import React from 'react'

const Greet = () => 
{
    const Hey = "Hello";
    const CurrDate = new Date();

  return (
    <div>
      <h2>{Hey}</h2>
      <p>Date : {CurrDate.getDate()}</p>

      <hr />
    </div>
  );
};

export default Greet;