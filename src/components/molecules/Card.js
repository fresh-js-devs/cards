import React from 'react';
import styled from '@emotion/styled';
import SubHeading from '../atoms/SubHeading';
import Description from '../atoms/Description';
import Close from '../atoms/Close';

const Wrapper = styled.div({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  minHeight: '200px',
  marginBottom: '40px',
  padding: '20px',
  width: '100%',
  border: '1px solid #EDEDED',
  transition: 'box-shadow 300ms',
  boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',

  '&:hover': {
    boxShadow: ' 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  },
});

const Card = ({ name, description, onCloseClick }) => {
  return (
    <Wrapper>
      <SubHeading>{name}</SubHeading>
      <Close onClick={onCloseClick}>Close</Close>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default Card;
