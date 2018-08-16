
import React from 'react';

const FormField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="ui form">
    <div className={`field ${touched && error ? 'error' : ''}`}>
      <div>
        { touched && error && <span>{error}</span> }
      </div>
      <input {...input}
      type={type}
      placeholder={label}
      />
    </div>
  </div>
)

export default FormField;
