import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import history from '../history';

import ItemForm from '../components/ItemForm';
import { updateItem } from '../actions/itemActions';

let EditItemForm = ({ item, values, handleSubmit, pristine, reset, submitting }) => {

  let initialValues = {}

  const submitEditForm = (values, dispatch, props) => {
    const item = values;
    const id = props.match.params.id;
    dispatch(updateItem(item, id));
    history.push('/items');
  }

  return (
    <div>
      <ItemForm
        onSubmit={submitEditForm}
        handleSubmit={handleSubmit}
        pristine={pristine}
        reset={reset}
        submitting={submitting}
        initialValues={initialValues}
      />
    </div>
  )
}

function validate(values){

  const errors = {}

  if (!values.name) {
    errors.name = "New Item Name:";
  }

  if (!values.category) {
    errors.category = "Item Category:";
  }

  return errors;

}

const mapStateToProps = ( state, ownProps ) => {
  const item = state.items.find(item =>
    item.id == ownProps.match.params.id)
  return {
    initialValues: {
      name: item.name,
      category: item.category,
      ingredients_attributes: item.ingredients
    }
  };
}

EditItemForm = reduxForm({
  form: 'UpdateItem',
  validate,
  enableReinitialize: true,
  touchOnChange: true
})(EditItemForm)

EditItemForm = connect(mapStateToProps, { updateItem }
)(EditItemForm)

export default EditItemForm
