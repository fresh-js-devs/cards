import React, { useState, useEffect } from 'react';

import styled from '@emotion/styled';

import Card from './components/molecules/Card';
import Input from './components/atoms/Input';
import TextArea from './components/atoms/TextArea';
import Button from './components/atoms/Button';

import Cards from './components/organisms/Cards';
import Form from './components/organisms/Form';

import Users from './mocks/cards.json';

const LayoutWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '80%',
  margin: '0 auto',
});

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const inputsAreEmpty = name === '' || description === '';

  useEffect(() => {
    setUsers(Users);
  }, []);

  const handleCloseClicked = id => {
    const filteredUsers = users.filter(u => u.id !== id);
    setUsers(filteredUsers);
  };

  const handleAddUserClicked = () => {
    const newUser = {
      id: users.length + 1,
      name,
      description,
    };
    setUsers([...users, newUser]);
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
      <h1>User Cards</h1>
      <Form>
        <Input
          value={name}
          placeholder="name"
          onChange={e => setName(e.target.value)}
          type="text"
        />
        <TextArea
          placeholder="description"
          onChange={e => setDescription(e.target.value)}
          style={{ width: '300px', minHeight: '100px', marginBottom: '20px' }}
          value={description}
        />
        <Button disabled={inputsAreEmpty} onClick={handleAddUserClicked}>
          Add user
        </Button>
      </Form>
      <Cards>{renderUserCards()}</Cards>
    </LayoutWrapper>
  );
};

export default App;
