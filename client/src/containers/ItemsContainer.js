import React, { Component } from 'react';
import ItemInput from '../components/items/ItemInput'
import Items from '../components/items/Items'
import { connect } from 'react-redux'

class itemsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <ItemInput addItem={this.props.addItem}/>
        <Items
          items={this.props.items}
          deleteItem={this.props.deleteItem}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({ items: state.items })
const mapDispatchToProps = dispatch => ({
  addItem: text => dispatch({type: 'ADD_ITEM', text}),
  deleteItem: id => dispatch({type: 'DELETE_ITEM', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(itemsContainer)
