import React from 'react';
import Counter from './components/Counter';
import Todo from './components/Todo';
import Meals from './components/Meals';
import Calculator from './components/Calculator';
import Toggle from './components/Toggle';
import Search from './components/Search';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <div className="AppContainer">
      <Counter />
      
      <hr />
      
      <Todo />
      
      <hr />
      
      <Meals />

      <hr />

      <Calculator />

      <hr />

      <Toggle />

      <hr />

      <Search />

      <hr />

<Testimonials />

      <hr />

      <hr />
    </div>
  );
}

export default App;