import React, { Component } from 'react';
import IngredientInput from '../components/ingredients/IngredientInput'
import Ingredients from '../components/ingredients/Ingredients'
import { connect } from 'react-redux'

class IngredientsContainer extends Component {
  render() {
    return (
      <div>
        <IngredientInput
          addIngredient={this.props.addIngredient}
          itemId={this.props.item.id}
        />
        <Ingredients
          ingredients={this.props.ingredients}
          itemId={this.props.item.id}
          deleteIngredient={this.props.deleteIngredient}
        />
      </div>
    );
  }
}
const mapStateToProps = ({reviews}) => {
  return {ingredients}
}
const mapDispatchToProps = dispatch => ({
  addIngredient: review => dispatch({type: 'ADD_INGREDIENT', ingredient}),
  deleteIngredient: id => dispatch({type: 'DELETE_INGREDIENT', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsContainer)
