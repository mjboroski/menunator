import * as types from '../actions/actions';
import initialState from './initialState';

export default (state = initialState.items, action) => {
  switch (action.type) {
    case types.LOAD_ITEMS_SUCCESS:
      return action.items;
     case types.CREATE_ITEM_SUCCESS:
      return state.concat(action.item)
     case types.UPDATE_ITEM_SUCCESS:
      return state.map(item  => item.id === action.item.id ? action.item : item)
     case types.DELETE_ITEM_SUCCESS:
      const items = state.filter(item => item.id !== action.id)
      return items
     default:
      return state;
  }
}
