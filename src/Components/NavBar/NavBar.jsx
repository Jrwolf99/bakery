import React from 'react'
import styled from 'styled-components'

import Cooker from '../../assets/images/Cooker.svg'
import { Link } from 'react-router-dom';
import { useResponsive } from '../../hooks/useResponsive';

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


const StyledHamLine = styled.div`
    height: 2px;
    width: 35px;
    background-color: #4C1515;
    margin: .5em 0;
`;


export default function NavBar() {
    const isMobile = useResponsive();



    return !isMobile ? (
        <StyledNav>
            <StyledHeadline>Bakery Bakes</StyledHeadline>
            <StyledButtonBar>
                <StyledNavButton to="/">Home</StyledNavButton>
                <StyledNavButton to="/about">About</StyledNavButton>
                <StyledNavButton to="/menu">Menu</StyledNavButton>
                <StyledNavButton to="/contact">Contact</StyledNavButton>
                <StyledNavButton to="/oven">
                    <StyledIcon src={Cooker} alt="cooker icon" />
                </StyledNavButton>
            </StyledButtonBar>
        </StyledNav>
    ) : (
        <StyledNav>
            <StyledHeadline>Bakery Bakes</StyledHeadline>
            <StyledButtonBar>
                <Link to="/menu">
                    <StyledHamLine></StyledHamLine>
                    <StyledHamLine></StyledHamLine>
                    <StyledHamLine></StyledHamLine>
                </Link>
            </StyledButtonBar>
        </StyledNav>
    )
}
