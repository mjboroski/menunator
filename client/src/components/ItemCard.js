import React from 'react'
import { Card, List, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import history from '../history';

const ItemCard = ({item, deleteItem, updateItem}) => {

  const onDeleteClick = id => {
    deleteItem(id);
    history.push('/items');
  }

  return (
    <div>
      <Card centered >
        <Card.Header textAlign="center">{item.name}</Card.Header>
        <Card.Meta textAlign="center">
          <span className='category'>{item.category}</span>
        </Card.Meta>
        <Card.Description textAlign="center">
          <List>
            ingredients
            {item.ingredients.map( ingredient =>
              <List.Item key={ingredient.id}>{ingredient.name}</List.Item>
            )}
          </List>

          <div>
            <button className="ui red button"
              onClick={() => onDeleteClick(item.id)}
            >
              Delete
            </button>
            <Link className="ui primary button"
              to={`/items/${item.id}/edit`}
            >
              Edit
            </Link>
          </div>
        </Card.Description>
      </Card>
      <Divider horizontal><i className="heart icon"></i></Divider>
      <Link to="/items/new" className="ui primary button center aligned">
        Add a Menu Item
      </Link>
    </div>
  )
}

export default ItemCard;
