import React from 'react';

import './Button.css';

function Button({ onClick, disabled, children }) {
  return (
    <button disabled={disabled} className='button' onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
