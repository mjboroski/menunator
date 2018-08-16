import React from 'react';

const IngredientSelect =  props  => {
  const renderSelectOptions = (key, index) => {
    return (
      <option
        key={`${index}-${key}`}
        value={key}
      >
        {props.options[key]}
      </option>
    );
  }

  if (props && props.options) {
    return (
      <div>
        <div>{props.label}</div>
        <select {...props.input} >
          <option value="">Select</option>
          {Object.keys(props.options).map(renderSelectOptions)}
        </select>
      </div>
    )
  }
  return <div></div>
}

export default IngredientSelect;
