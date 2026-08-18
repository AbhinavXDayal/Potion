import { useState, useEffect } from 'react';

const Meals = () => {
  const [Items, SetItems] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then(res => res.json())
      .then(data => SetItems(data.meals.slice(0, 1))) // take only first 3 items
      .catch(err => console.error(err));
  }, []);

  const ItemsList = Items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section className='Card' key={idMeal}>
        <img src={strMealThumb} alt={strMeal} />
        <section className='Content'>
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    );
  });

  return <div className='ItemsContainer'>{ItemsList}</div>;
}

export default Meals;
