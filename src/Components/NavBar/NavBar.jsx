import React from 'react'
import styled from 'styled-components'

import Cooker from '../../assets/images/Cooker.svg'
import { Link } from 'react-router-dom';
import { useResponsive } from '../../hooks/useResponsive';
import useToggle from '../../hooks/useToggle';
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


export default function NavBar({ toggleMobileClick, isMobileClicked }) {
    const isMobile = useResponsive();
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
                {!isMobileClicked && <button onClick={toggleMobileClick}>
                    <StyledHamLine></StyledHamLine>
                    <StyledHamLine></StyledHamLine>
                    <StyledHamLine></StyledHamLine>
                </button>}
                {isMobileClicked && <button onClick={toggleMobileClick}>close</button>}
            </StyledButtonBar>
        </StyledNav>
    )
}
