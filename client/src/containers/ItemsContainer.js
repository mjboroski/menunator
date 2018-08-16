import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Switch, Link } from 'react-router-dom';
import { Grid, Divider } from 'semantic-ui-react';
import { getItems } from '../actions/actions';
import ItemsList from '../components/ItemsList';
import ItemContainer from './ItemContainer';
import ItemFormContainer from './ItemFormContainer';
import EditItemForm from './EditItemForm';

class ItemsContainer extends Component {

  componentDidMount() {
    this.props.getItems()
  }

  render() {
    return (
      <div>
        <Grid celled>
          <Grid.Row  columns="2">
            <Grid.Column>
              <ItemsList items={items} />
            </Grid.Column>
            <Grid.Column>
              <Switch>
                <Route path={`${match.url}/:id/edit`} component={EditItemForm} />
                <Route path={`${match.url}/new`} component={ItemFormContainer} />
                <Route path={`${match.url}/:itemId`} component={ItemContainer}/>
                <Route path={match.url} render={() => (
                  <div>
                    <h3>Please select an item from the list.</h3>
                    <Divider horizontal>Or</Divider>
                    <Link to="/items/new" className="ui primary button center aligned">
                      Add an Item
                    </Link>
                  </div>
                )}/>
              </Switch>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = state => ({ items: state.items })


export default connect(mapStateToProps, { getItems })(ItemsContainer)
