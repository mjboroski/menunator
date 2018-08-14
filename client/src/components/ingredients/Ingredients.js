import React, { Component } from 'react';
import Ingredient from './Ingredient';

class Ingredients extends Component {

  render() {

    const { ingredients, itemId, deleteIngredient } = this.props;
    const associatedIngredients = ingredients.filter(ingredient => ingredient.itemId === itemId);

    const ingredientList = associatedIngredients.map((ingredient, index) => {
      return <Ingredient key={index} ingredient={ingredient} deleteIngredient={deleteIngredient} />
    })

    return (
      <div>
        <ul>
          {ingredientList}
        </ul>
      </div>
    );
  }

};

export default Ingredients;
