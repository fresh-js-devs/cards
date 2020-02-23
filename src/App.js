import React, { useState } from 'react';

import Users from './mocks/cards.json';

import Button from './components/atoms/Button/Button';
import Input from './components/atoms/Input';
import Layout from './components/atoms/Layout';
import TextArea from './components/atoms/TextArea';

import Card from './components/molecules/Card';

import Cards from './components/organisms/Cards';
import Form from './components/organisms/Form';

const App = () => {
  const [users, setUsers] = useState(Users);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const inputsAreEmpty = name === '' || description === '';

  const handleCloseClicked = id => {
    const filteredUsers = users.filter(u => u.id !== id);
    setUsers(filteredUsers);
  };

  const handleAddUserClicked = () => {
    const newUser = {
      id: users.length + 10,
      name,
      description,
    };

    setUsers([newUser, ...users]);
  };

  const renderUserCards = () =>
    users.map(user => {
      const { name, description, id } = user;
      return (
        <Card
          description={description}
          key={id}
          name={name}
          onCloseClick={() => handleCloseClicked(id)}
        />
      );
    });

  return (
    <Layout>
      <h1>User Cards</h1>
      <Form>
        <Input
          onChange={e => setName(e.target.value)}
          placeholder="name"
          value={name}
        />
        <TextArea
          onChange={e => setDescription(e.target.value)}
          placeholder="description"
          value={description}
        />
        <Button disabled={inputsAreEmpty} onClick={handleAddUserClicked}>
          Add user
        </Button>
      </Form>
      <Cards>{renderUserCards()}</Cards>
    </Layout>
  );
};

export default App;
