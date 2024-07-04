import { useState } from "react";

const BurgerStack = ({ stack, removeFromBurger }) => {

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
