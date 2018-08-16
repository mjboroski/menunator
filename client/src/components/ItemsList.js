import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';

import ItemsListItem from './ItemsListItem';

class ItemsList extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    const { items } = this.props
    return (
      <div>
        <List className="center">
          {items.map(item =>
            <ItemsListItem item={item}/>
          )}
        </List>
      </div>
    )
  }
}


export default ItemsList;
