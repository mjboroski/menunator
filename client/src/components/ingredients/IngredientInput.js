import React, { Component } from 'react';

class IngredientInput extends Component {

  state = {text: ''}

  handleOnChange = event => {this.setState({text: event.target.value,});}

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addIngredient({text: this.state.text, itemId: this.props.itemId });
    this.setState({text: '',});}

  render() {
    return (
     <div>
        <form onSubmit={this.handleOnSubmit} >
          <label>Add Ingredient</label>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    );}};

export default IngredientInput;
