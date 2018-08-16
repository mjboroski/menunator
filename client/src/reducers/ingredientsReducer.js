import * as types from '../actions/actions';
import initialState from './initialState';
 export default (state = initialState.ingredients, action) => {
  switch(action.type) {
    case types.LOAD_INGREDIENTS_SUCCESS:
      return Object.assign([], state, action.ingredients);
    default:
      return state;
  }
}
