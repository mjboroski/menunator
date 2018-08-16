import React from 'react';
import { Field, FieldArray } from 'redux-form';
import { Link } from 'react-router-dom';
import FormField from './FormField';
import FormIngredientsFieldArray from './FormIngredientsFieldArray';

export const ItemForm = ({ initialValues, handleSubmit, onSubmit, pristine, reset, submitting, error}) => {

  return (
    <form name="item" onSubmit={handleSubmit(onSubmit)}>
      <Field
        label="Name of Dish"
        name="name"
        component={FormField}
      />
      <Field
        label="Category"
        name="category"
        component={FormField}
      />
      <FieldArray
        name="ingredients_attributes"
        label="Ingredients"
        component={FormIngredientsFieldArray}
       />
      <div>
        <button type="submit" disabled={pristine || submitting} className="ui primary button">Save</button>
        <button type="button" disabled={pristine || submitting} onClick={reset} className="ui button">Clear</button>
        <Link to="/" className="ui button">Back</Link>
      </div>
    </form>
  )
}

export default ItemForm;
