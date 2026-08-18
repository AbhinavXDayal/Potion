import { useState, useEffect } from 'react';
import Data from './components/Data';

const App = () => {
  const [Val, SetVal] = useState(0);
  const [Count, SetCount]=useState(0)
  
  useEffect(() => {
    if (Count > 0) {
      console.log('%cCall useEffect count - ' + Count, 'color: lavender;')
    }
  
    console.log('%cCall useEffect val - ' + Val, 'color: grey;')
  
    document.title = `Increment val ${Val}`;
  }, [Val, Count]);
  
  return (
    <div>
      <h2>Value - {Val}</h2>
      <button onClick={() => SetVal(Val + 10)}>Click me</button>

      <h2>Count - {Count}</h2>
      <button onClick={() => SetCount(Count + 10)}>Click me</button>
 
 <hr />

      <Data />
    </div>
  );
};

export default App;