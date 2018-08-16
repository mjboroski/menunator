import { GET_ITEMS, GET_ITEM, CREATE_ITEM, UPDATE_ITEM, DELETE_ITEM } from '../actions/actions';


export default (state = [], action) => {
  switch (action.type) {
    case GET_ITEMS:
      return action.items;

    case GET_ITEM:
      return action.item;

    case CREATE_ITEM:
      return state.concat(action.item);

    case UPDATE_ITEM:
      return state.map(
        item =>
          item.id === action.item.id
            ? Object.assign({}, ...item, action.item)
            : item);

    case DELETE_ITEM:
      return state.filter(item => item.id !== action.id);

    default:
      return state;
  }
}
