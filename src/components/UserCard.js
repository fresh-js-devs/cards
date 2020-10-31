import React from 'react'
import styled from "@emotion/styled"

const CardContainer = styled.div`
    justify-content: center;    
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    margin: 50px auto;  
    max-width: 400px; 
`
const CardHeading = styled.h1`
    text-align: flex-end; 
`
const BioTextArea = styled.p`
    text-align: flex-end; 
`

const UserCard = ({name, bio}) => (
<CardContainer id ="Card">
    <CardHeading>{name}</CardHeading>
    <BioTextArea>{bio}</BioTextArea>
</CardContainer>
);

export default UserCard;