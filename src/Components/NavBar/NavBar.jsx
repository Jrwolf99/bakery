import React from 'react'
import { Link } from 'react-router-dom';
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
color: ${props => props.color2};

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

export default function NavBar({ isMobile, toggleNavClick, color2, color }) {
    return !isMobile ? (
        <StyledNav>
            <StyledHeadline color2={color2}>Bakery Bakes</StyledHeadline>
            <StyledButtonBar>
                <StyledNavButton color2={color2} to="/">Home</StyledNavButton>
                <StyledNavButton color2={color2} to="/about">About</StyledNavButton>
                <StyledNavButton color2={color2} to="/menu">Menu</StyledNavButton>
                <StyledNavButton color2={color2} to="/contact">Contact</StyledNavButton>
                <StyledNavButton color2={color2} to="/oven">
                    <StyledIcon color2={color2} src={Cooker} alt="cooker icon" />
                </StyledNavButton>
            </StyledButtonBar>
        </StyledNav>
    ) : (
        <StyledNav>
            <StyledHeadline>Bakery Bakes</StyledHeadline>
            <StyledButtonBar>
                <button onClick={toggleNavClick}>
                    <StyledHamLine></StyledHamLine>
                    <StyledHamLine></StyledHamLine>
                    <StyledHamLine></StyledHamLine>
                </button>
            </StyledButtonBar>
        </StyledNav>
    )
}
