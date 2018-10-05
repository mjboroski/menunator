import React, {Component} from 'react';
import { List } from 'semantic-ui-react';
import ItemsListItem from './ItemsListItem';

class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.state = {sorted: false}
  }

  compareItems() {
    return function (a, b) {
      if (a.likes < b.likes) return -1;
      if (a.likes > b.likes) return 1;
      return 0;
    };
  }

  sortList(list) {
    if (!this.state.sorted){
      let listCopy = [...list];
      listCopy.sort(this.compareItems())
      return listCopy;
    }else{
      return list
    }
  }

  sortStatus() {
      this.setState({sorted: !this.state.sorted});
  }

  render(){
    const { items } = this.props
    let itemsUsable = this.sortList(items)
    return (
      <div>
        <List className="center">
          {itemsUsable.map((item, i) =>
              <ItemsListItem item={item} key={i}/>
            )}
        </List>
        <button className="ui red button" onClick={() => this.sortStatus()}>
          Sort
        </button>
      </div>
    )
  }
}

export default ItemsList;
