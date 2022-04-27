import React from 'react'
import styled from 'styled-components'

import Cooker from '../../assets/images/Cooker.svg'
import { StyledIcon, StyledNavButton } from '../StyledComponents/buttons';

const StyledNav = styled.div`
padding: 2.2em 3em;
display: flex;
align-items: center;

`;
const StyledHeadline = styled.h1`
margin-right: auto;

@media (max-width: 900px) {
    font-size: 1.5rem;
}

`;

const StyledButtonBar = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;



const StyledHamLine = styled.div`
    height: 2px;
    width: 35px;
    background-color: #4C1515;
    margin: .5em 0;
`;


export default function NavBar({ toggleNavClick, isNavClicked, isMobile }) {
    console.log(isMobile)
    return !isMobile ? (
        <StyledNav>
            <StyledHeadline>Bakery Bakes</StyledHeadline>
            <StyledButtonBar>
                <StyledNavButton to="/">Home</StyledNavButton>
                <StyledNavButton to="about">About</StyledNavButton>
                <StyledNavButton to="menu">Menu</StyledNavButton>
                <StyledNavButton to="contact">Contact</StyledNavButton>
                <StyledNavButton to="oven">
                    <StyledIcon src={Cooker} alt="cooker icon" />
                </StyledNavButton>
            </StyledButtonBar>
        </StyledNav>
    ) : (
        <StyledNav>
            <StyledHeadline>Bakery Bakes</StyledHeadline>
            <StyledButtonBar>
                {!isNavClicked && <button onClick={toggleNavClick}>
                    <StyledHamLine></StyledHamLine>
                    <StyledHamLine></StyledHamLine>
                    <StyledHamLine></StyledHamLine>
                </button>}
                {isNavClicked && <button onClick={toggleNavClick}>close</button>}
            </StyledButtonBar>
        </StyledNav>
    )
}
