import React from 'react';
import style from './recipe.module.css';


const Recipe = ({ title, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img src={image} alt="recipe_image" />
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default Recipe;