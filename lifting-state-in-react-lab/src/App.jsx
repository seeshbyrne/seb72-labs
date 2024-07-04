// src/App.jsx
import IngredientList from './components/IngredientList';
import BurgerStack from './components/BurgerStack';
import {useState} from 'react';
import './App.css';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {

  const [stack, setStack] = useState([]); 
  // THIS IS TO MANAGE THE LIST OF INGREDIENTS IN THE STACK

  const addToBurger = (ingredient) => {
    // NEEDS TO ADD THE SELECTED INGREDIENT TO THE STACK
    setStack([...stack, ingredient]);
  };

  const removeFromBurger = (index) => {
    //NEEDS TO REMOVE THE SELECTED INGREDIENT FROM THE STACK
    setStack(stack.filter((_, i) => i !== index));
  };

  return (

    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList ingredients={availableIngredients} addToBurger={addToBurger}/> 
        <BurgerStack stack={stack} removeFromBurger={removeFromBurger}/>
      </section>
    </main>
  );
};

export default App;
