import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Card from './components/molecules/Card';

import Users from './mocks/cards.json';

const LayoutWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '80%',
  margin: '0 auto',
});

const Cards = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '50px',
  width: '70%',
});

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(Users);
  }, []);

  const handleCloseClicked = id => {
    const filteredUsers = users.filter(u => u.id !== id);
    setUsers(filteredUsers);
  };

  const renderUserCards = () =>
    users.map(user => {
      const { name, description, id } = user;
      return (
        <Card
          name={name}
          description={description}
          key={id}
          onCloseClick={() => handleCloseClicked(id)}
        />
      );
    });
    
  return (
    <LayoutWrapper>
      <h1>Cards</h1>
      <Cards>{renderUserCards()}</Cards>
    </LayoutWrapper>
  );
};

export default App;
