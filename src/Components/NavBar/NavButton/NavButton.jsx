import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom';

const StyledNavButton = styled(Link)`
font-size: 1.2rem;
padding: .8em;
margin: 0 .5rem;
color: #4C1515;


&:hover {
    background-color: #6868db;
    color: white;
    border-radius: 6px;
}
`;


export default function NavButton({ children, to }) {
    return (
        <StyledNavButton to={to}>{children}</StyledNavButton>
    )
}
