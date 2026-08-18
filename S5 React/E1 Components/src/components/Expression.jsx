import React from 'react'

const Expression = () => 
{
    const MyName = "Abhi";
    const Multiply = (a, b) => a * b;
    
    return (
    <section>
        <p>2+2 = {2 + 2}</p>

        <h2>{MyName}</h2>
        
        <p>2*5 = {Multiply(2, 5)}</p>

        <hr />
    </section>
  );
};

export default Expression;