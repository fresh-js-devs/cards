import React from "react";
import styled from "@emotion/styled"

import PrimaryButton from "./PrimaryButton"

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
    background-color: hotpink;
`

const FormHeading = styled.h1`
    text-align: center;
`

const NameInput = styled.input`
    height: 50px;
    margin-bottom: 20px;
`

const BioTextArea = styled.textarea`
    height: 150px;
    margin-bottom: 20px;
`


const UserForm = ({ name, bio, onNameChange, onBioChange, onAddUserClick}) => (
<FormContainer id="form">
    <FormHeading>Cards</FormHeading>
    <NameInput type="text" placeholder="name" value={name} onChange={event => onNameChange(event.target.value)}/>
    <BioTextArea placeholder="Bio..." value={bio} onChange={event => onBioChange(event.target.value)}/>
    <PrimaryButton onClick={onAddUserClick} >Add user</PrimaryButton>
 </FormContainer>
);

export default UserForm;