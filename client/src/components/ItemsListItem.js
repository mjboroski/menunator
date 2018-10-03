import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';

class ItemsListItem extends Component {
  constructor(props) {
    super(props)
     this.state = { likeCount: props.item.likes};
  }
   handleOnClick = () => {
    this.setState((prevState) => {
      return {likeCount: prevState.likeCount + 1}
    })
    this.props.item.likes=this.state.likeCount+1
    return fetch(`http://localhost:3001/api/items/`+this.props.item.id,{
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(this.props.item)
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
