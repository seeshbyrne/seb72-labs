import {useState} from 'react';
import { availableIngredients } from '../App';

const IngredientList = ({ ingredients, addToBurger }) => {
    // NEED TO: pass the 'availableIngredients' and 'handleAddToBurger' function as props
    return (
        <>
        <ul>
            {ingredients.map((ingredient, index) => {
                return <li key={index} style={{ backgroundColor: ingredient.color }}>
                    <h4>{ingredient.name}</h4>
                    <button onClick={() => addToBurger(ingredient)}>Add Ingredient</button>
                </li>
            })}
        </ul>
    </>
    );
  };
  
  export default IngredientList;

   // map through props.ingredients