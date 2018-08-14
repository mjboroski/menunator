import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageItems(state = {
  items: [],  ingredients: [],}, action) {
  switch (action.type) {

    case 'ADD_ITEM':
      const item = { text: action.text, id: cuidFn() };
      return {
        ...state,
        items: [ ...state.items, item]
      }
    case 'DELETE_ITEM':
      const items = state.items.filter(item => item.id !== action.id);
      return { ...state, items}

    case 'ADD_INGREDIENT':
      const ingredient = { text: action.ingredient.text, itemId: action.ingredient.itemId, id: cuidFn() };
      return { ...state,
        ingredients: [...state.ingredients, ingredient]
      }

    case 'DELETE_INGREDIENT':
      const ingredients = state.ingredients.filter(ingredient => ingredient.id !== action.id);
      return {...state, ingredients }

    default:
      return state;
  }};
