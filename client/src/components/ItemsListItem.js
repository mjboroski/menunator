import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { List, Icon } from 'semantic-ui-react';

class ItemsListItem extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    const { item } = this.props
    return (
      <div>
        <List.Item key={item.id}>
          <Link to={`/items/${item.id}`}>
            {item.name}
          </Link>
        </List.Item>
      </div>
    )
  }
}


export default ItemsListItem;
