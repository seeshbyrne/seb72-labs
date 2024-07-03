import { useState } from "react";

const BurgerStack = ({ stack, removeFromBurger }) => {
    ///ABOVE I HAD PROPS IN THE BRACKETS INSTEAD
    // NEED TO pass the 'stack' and 'handleRemoveFromBurger' function as props
    // In BurgerStack, map over stack to render each ingredient with a 'remove' button.
    // In BurgerStack, add conditional rendering to display a message like "No Ingredients" if the stack is empty.
    return (
        <>
        <h2>Burger Stack</h2>
        {stack.length === 0 ? (
            <p>'No ingredients!'</p>
        ) : (
            <div>
                <ul>
                    {stack.map((ingredient, index) => {
                        return <li key={index} style={{ backgroundColor: ingredient.color }}>
                        <h4>{ingredient.name}</h4>
                        <button onClick={() => removeFromBurger(index)}>Remove Ingredient</button>
                        </li>
                    })}
                </ul>;
            </div>
            )}
        </>
      )
    };
  
  export default BurgerStack;



   // map through props.ingredients