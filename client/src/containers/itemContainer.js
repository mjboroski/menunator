import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions";
import ItemCard from '../components/ItemCard';

export const ItemContainer = ({ item, actions }) => {

  return (
    <div>
      <ItemCard
        item={item}
        deleteItem={actions.deleteItem}
        updateItem={actions.updateItem}
      />
    </div>
  );
}

const mapStateToProps = ( state, ownProps ) => {
  const item = state.items.find(item =>
      item.id === ownProps.match.params.itemId)

  if (item) {
    return { item }
  } else {
    return { item: {} }
  }
}

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
