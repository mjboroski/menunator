import React, { Component } from 'react';
import { connect } from 'react-redux'
import ItemInput from '../components/items/ItemInput'
import Items from '../components/items/Items'
import ItemContainer from './ItemContainer';
import { getItems } from '../actions/actions';

class ItemsContainer extends Component {

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


export default connect(mapStateToProps, { getItems })(ItemsContainer)
