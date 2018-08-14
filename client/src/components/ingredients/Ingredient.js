import React, { Component } from 'react';

class Ingredient extends Component {


  handleOnClick = () => {
    this.props.deleteIngredient(this.props.ingredient.id)
  }

  render() {
    return (
      <div>
        <li>
          {this.props.ingredient.text}
          <button onClick={this.handleOnClick}> x </button>
        </li>
      </div>
    );
  }

};

export default Ingredient;
