import React from 'react';

import './Card.css';

const Card = ({
  id,
  name,
  description,
  onCloseClicked,
  editedId,
  editedName,
  editedDescription,
  setEditedName,
  setEditedDescription,
  onEditClicked,
  onEditSaveClicked,
}) => {
  const isEditActive = id === editedId;

  const renderEditView = () => {
    return (
      <div className='card-editing'>
        <input
          type='text'
          value={editedName}
          onChange={event => setEditedName(event.target.value)}
          placeholder='Name'
        />
        <textarea
          value={editedDescription}
          onChange={event => setEditedDescription(event.target.value)}
          placeholder='Description'
          rows={10}
        ></textarea>
        <button onClick={onEditSaveClicked}>Save</button>
        <button>Cancel</button>
      </div>
    );
  };

  const renderNormalView = () => {
    return (
      <>
        <div className='card-heading'>
          <h2>{name}</h2>
          <span onClick={onCloseClicked} className='close'>
            Close
          </span>
        </div>
        <p>{description}</p>
        <button onClick={onEditClicked}>Edit</button>
      </>
    );
  };

  return (
    <div className='card'>
      {isEditActive ? renderEditView() : renderNormalView()}
    </div>
  );
};

export default Card;
