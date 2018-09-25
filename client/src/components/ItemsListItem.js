import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';

class ItemsListItem extends Component {
  constructor(props) {
    super(props)
     this.state = {likeCount: 0};
  }
   handleOnClick = () => {
    this.setState((prevState) => {
      return {likeCount: prevState.likeCount + 1}
    })
  }

  render(){
    const { item } = this.props
    return (
      <div>
        <List.Item key={item.id}>
          <Link to={`/items/${item.id}`}>
            {item.name}
          </Link>
          <i onClick={this.handleOnClick} className="like icon"></i>
          {this.state.likeCount}
        </List.Item>
      </div>
    )
  }
}


export default ItemsListItem;
