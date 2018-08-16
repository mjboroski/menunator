import React, { Component } from 'react';
import { connect } from 'react-redux'
import ItemInput from '../components/items/ItemInput'
import Items from '../components/items/Items'

class itemsContainer extends Component {

  componentDidMount() {
    this.props.getItems()
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
// const mapDispatchToProps = dispatch => ({
//   addItem: text => dispatch({type: 'ADD_ITEM', text}),
//   deleteItem: id => dispatch({type: 'DELETE_ITEM', id})
// })

export default connect(mapStateToProps, mapDispatchToProps)(itemsContainer)
