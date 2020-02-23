import React from 'react';

import './TextArea.css';

function TextArea({ onChange, placeholder, value }) {
  return (
    <textarea
      cols='25'
      rows='10'
      className='textarea'
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    ></textarea>
  );
}

export default TextArea;
