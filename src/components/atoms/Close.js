import React from 'react';

import './Close.css';

function Close({ onClick, children }) {
  return (
    <p onClick={onClick} className='close'>
      {children}
    </p>
  );
}

export default Close;
