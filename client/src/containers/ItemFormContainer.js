import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import history from '../history';
import { bindActionCreators } from "redux";
import ItemForm from '../components/ItemForm';
import { createItem } from '../actions/actions';

export const ItemFormContainer = (props) => {

  const submitForm = (values, dispatch) => {
    const item = values;
    props.createItem(item);
    history.push('/items');
  }

  return (
    <div>
      <ItemForm
        onSubmit={submitForm}
        handleSubmit={props.handleSubmit}
        pristine={props.pristine}
        reset={props.reset}
        submitting={props.submitting}
      />
    </div>
  )
}

function validate(values){

  const errors = {}

  if (!values.name) {
    errors.name = "Please enter a name for the itemId.";
  }

  if (!values.category) {
    errors.category = "Please enter a category for the item.";
  }

  return errors;

}

export default reduxForm({
  validate,
  form: 'item_form'
})(
  connect(null, { createItem })(ItemFormContainer)
);
