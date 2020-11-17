import React from 'react'
import styled from "@emotion/styled"

const CardContainer = styled.div`
    justify-content: center;    
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    margin: 50px auto;  
    max-width: 400px; 
    background-color: hotpink;
`
const CardHeading = styled.h1`
    text-align: flex-end; 
`
const BioTextArea = styled.p`
    text-align: flex-end; 
`

const UserCard = ({ name, description, onDeleteUSerClick }) => ( 
<CardContainer onClick={onDeleteUSerClick}>
    <CardHeading>{name}</CardHeading>
    <BioTextArea>{description}</BioTextArea>
</CardContainer>
);

export default UserCard;