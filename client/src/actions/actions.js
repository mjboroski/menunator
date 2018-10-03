
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

export const getItems = () => {
  return dispatch => {
    return fetch(`${API_URL}/items`)
      .then(response => response.json())
      .then(items => dispatch(setItems(items)))
      .catch(error => console.log(error));
  }
}

export const getItem = id => {
  return dispatch => {
    return fetch(`${API_URL}/items/${id}`)
      .then(response => response.json())
      .then(item => dispatch(setItem(item)))
      .catch(error => console.log(error));
  }
}

export const createItem = item => {
  return dispatch => {
    return fetch(`${API_URL}/items`, {
      method: "POST",
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
    .then(response => response.json())
    .then(item => {
      dispatch(addItem(item));
    })
    .catch(error => console.log(error));
  }
}

export const updateItem = (item, id) => {
  return dispatch => {
    return fetch(`${API_URL}/items/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    })
      .then(response => response.json())
      .then(item => {
        dispatch(editItem(item));
      })
      .catch(error => console.log(error));
  };
};

export const deleteItem = id => {
  return dispatch => {
    return fetch(`${API_URL}/items/${id}`, {
      method: "DELETE"
    })
      .then(response => {
        if (response.ok) {
          dispatch(removeItem(id));
        } else {
          window.alert("Unable to delete");
        }
      })
      .catch(error => console.log(error));
  };
};
