import React, { Component } from 'react';

class Ingredient extends Component {


  handleOnClick = () => {
    this.props.deleteIngredient(this.props.review.id)
  }

  render() {
    return (
      <div>
        <li>
          {this.props.review.text}
        </li>
        <button onClick={this.handleOnClick}> x </button>
      </div>
    );
  }

};

export default Ingredient;
