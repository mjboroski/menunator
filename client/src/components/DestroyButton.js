import React from 'react';

const DestroyButton = ({input,label = 'Label'}) => {
  return (
    <button className="ui button" type="button" onClick={() =>
      input.onChange(true)}>{label}</button>
  )
}

export default DestroyButton;
