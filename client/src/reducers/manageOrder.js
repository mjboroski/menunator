import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageOrder(state = {
  items: [] }, action) {
  switch (action.type) {

    case 'ADD_ITEM':
      const item = { text: action.text, id: cuidFn() };
      return { ...state, items: [ ...state.items, item] }

    case 'DELETE_ITEM':
      const restaurants = state.items.filter(item => item.id !== action.id);
      return { ...state, items}

    default:
      return state;
  }};
