import React from 'react'
import styled from 'styled-components'

import Cooker from '../../assets/images/Cooker.svg'
import { Link } from 'react-router-dom';

const StyledNav = styled.div`
padding: 2.2em 3em;
display: flex;
align-items: center;

`;
const StyledHeadline = styled.h1`
margin-right: auto;
`;

const StyledWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
    @media (max-width: 900px) {
        display: none;
            }

`;



const StyledIcon = styled.img`
width: 30px;
height: 30px;

`;

export const StyledNavButton = styled(Link)`
font-size: 1rem;
padding: .4em .5em;
margin: 0 .5rem;
color: #4C1515;
&:hover {
    background-color: #ED9298;
    color: white;
    border-radius: 5px;
    transition: all .2s ;
    ${StyledIcon} {
        filter: brightness(0) invert(1);
    }
}
`;


export default function NavBar() {
    return (
        <StyledNav>
            <StyledHeadline>Bakery Bakes</StyledHeadline>
            <StyledWrapper>
                <StyledNavButton to="/">Home</StyledNavButton>
                <StyledNavButton to="/about">About</StyledNavButton>
                <StyledNavButton to="/menu">Menu</StyledNavButton>
                <StyledNavButton to="/contact">Contact</StyledNavButton>
                <StyledNavButton to="/oven">
                    <StyledIcon src={Cooker} alt="cooker icon" />
                </StyledNavButton>
            </StyledWrapper>
        </StyledNav>
    )
}
