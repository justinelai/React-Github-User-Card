import React from 'react';
import styled from 'styled-components';

const UserCard = styled.div`
background: papayawhip;
margin: 10px;
padding: 25px; 
width: 300px;
text-align: center;
border-radius: 0.75rem;
box-shadow:  0 8px 15px 4px rgba(102,95,85,0.26); 
`

const Thumbnail = styled.img`
height: 100px;
border-radius: 100%`

const Card = (props) => {
    console.log(props)
    return(
        <UserCard>
        <Thumbnail src={props.avatar_url} alt="Github profile image" />
        <h1>{props.login}</h1>
        <a href={props.html_url}>Profile</a>
         </UserCard>
        )
}

export default Card;