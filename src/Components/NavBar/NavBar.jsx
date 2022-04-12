import React from 'react'
import styled from 'styled-components'
import NavButton from './NavButton/NavButton';

import Cooker from '../../assets/images/Cooker.svg'

const StyledNav = styled.div`
padding: 1em;
background-color: #0000ff36;
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
`;
const StyledIcon = styled.img`
width: 30px;
height: 30px;
`;



export default function NavBar() {
    return (
        <StyledNav>
            <StyledHeadline>Bakery Bakes</StyledHeadline>
            <StyledWrapper>
                <NavButton to="/">Home</NavButton>
                <NavButton to="/about">About</NavButton>
                <NavButton to="/rewards">Rewards</NavButton>
                <NavButton to="/contact">Contact</NavButton>
                <NavButton to="/oven">
                    <StyledIcon src={Cooker} alt="cooker icon" />
                </NavButton>
            </StyledWrapper>
        </StyledNav>
    )
}
