import React from 'react';

import SubHeading from '../atoms/SubHeading';
import Description from '../atoms/Description';
import Close from '../atoms/Close';

import './Card.css';

const Card = ({ name, description, onCloseClick }) => {
  return (
    <div className='wrapper'>
      <SubHeading>{name}</SubHeading>
      <Close onClick={onCloseClick}>Close</Close>
      <Description>{description}</Description>
    </div>
  );
};

export default Card;
