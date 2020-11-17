import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserCard from "./components/UserCard";
import './index.css'

import cardData from './mocks/cards.json'

function App() {
  const [users, setUsers] = useState(cardData);
  const [areUsersShown, setAreUsersShown] = useState(false)
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  const renderUsers = users.map(({id, name, description}) => (
    <UserCard key={id}
    name={name}
    description={description}
    onDeleteUSerClick={() => handleDeleteUserClick(id)}
    />
  ))
  
  const handleShowUsersClick = () => setAreUsersShown(!areUsersShown)

  const handleAddUserClick = () => {
    const newUser = {
      id: Math.random(),
      name,
      description: bio,
    }

    setUsers([newUser, ...users]);
  }

  const handleDeleteUserClick = (id) => {
    const filteredUsers = users.filter(user => user.id !== id)
    setUsers(filteredUsers)
  }

  return (
    <div>
       <UserForm 
       name={name} 
       bio={bio} 
       onNameChange={setName} 
       onBioChange={setBio} 
       onAddUserClick={handleAddUserClick}
       />
       <button onClick={handleShowUsersClick}>Show users</button>
        <div>
          {areUsersShown && renderUsers}
       </div>
    </div>
  );
}

export default App;
