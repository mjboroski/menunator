const API_URL = process.env.REACT_APP_API_URL;

export const GET_ITEMS = "GET_ITEMS"
export const GET_ITEM = "GET_ITEM"
export const CREATE_ITEM = "CREATE_ITEM"
export const UPDATE_ITEM = "UPDATE_ITEM"
export const DELETE_ITEM = "DELETE_ITEM"

const setItems = items => {
  return {
    type: 'GET_ITEMS',
    items
  }
}

const setItem = item => {
  return {
    type: 'GET_ITEM',
    item
  }
}

const addItem = item => {
  return {
    type: "CREATE_ITEM",
    item
  };
};

const editItem = item => {
  return {
    type: "UPDATE_ITEM",
    item
  };
};

const removeItem = id => {
  return {
    type: "DELETE_ITEM",
    id
  };
};
