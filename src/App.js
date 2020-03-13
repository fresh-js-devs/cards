import React, { useState } from 'react';

import Layout from './components/Layout/Layout';
import Form from './components/Form/Form';
import Button from './components/atoms/Button';
import Input from './components/atoms/Input';
import Textarea from './components/atoms/Textarea';

import Users from './mocks/cards.json';

import { headingStyle } from './styles/Styles';
import Card from './components/Card/Card';

import './App.css';

function App() {
  const [users, setUsers] = useState(Users);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [editedName, setEditedName] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const [editedId, setEditedId] = useState(0);

  const inputsAreEmpty = name === '' || description === '';

  const handleAddUserClicked = () => {
    const newUser = {
      id: users.length + 10,
      name,
      description,
    };

    setUsers([newUser, ...users]);
    setName('');
    setDescription('');
  };

  const handleShowUserEditClicked = id => {
    setEditedId(id);
    const editedUser = users.find(user => user.id === id);
    setEditedName(editedUser.name);
    setEditedDescription(editedUser.description);
  };

  const handleEditUserCardClicked = () => {
    const editedUsers = users.map(user => {
      if (user.id === editedId) {
        return {
          ...user,
          name: editedName,
          description: editedDescription,
        };
      }

      return user;
    });

    setUsers(editedUsers);
    setEditedId(0);
  };

  const handleCloseClicked = id => {
    const filteredUsers = users.filter(user => user.id !== id);
    setUsers(filteredUsers);
  };

  const renderUserCards = () =>
    users &&
    users.map(({ id, name, description }) => (
      <Card
        key={id}
        id={id}
        editedId={editedId}
        editedName={editedName}
        editedDescription={editedDescription}
        setEditedName={setEditedName}
        setEditedDescription={setEditedDescription}
        name={name}
        description={description}
        onEditClicked={() => handleShowUserEditClicked(id)}
        onEditSaveClicked={handleEditUserCardClicked}
        onCloseClicked={() => handleCloseClicked(id)}
      />
    ));

  return (
    <Layout>
      <h1 style={headingStyle}>User Cards</h1>
      <Form>
        <Input
          value={name}
          onChange={event => setName(event.target.value)}
          name='name'
          placeholder='Name'
        />
        <Textarea
          value={description}
          onChange={event => setDescription(event.target.value)}
          name='description'
          placeholder='Description'
        ></Textarea>
        <Button onClick={handleAddUserClicked} disabled={inputsAreEmpty}>
          Add user
        </Button>
      </Form>
      {renderUserCards()}
    </Layout>
  );
}

export default App;
