import React from 'react';

import './Input.css';

function Input({ value, onChange, placeholder }) {
  return (
    <input
      type='text'
      className='input'
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
}

export default Input;
