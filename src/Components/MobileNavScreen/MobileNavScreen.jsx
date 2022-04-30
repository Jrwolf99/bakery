import React, { useEffect } from 'react'
import styled from "styled-components";
import NavBar from '../NavBar/NavBar';
import { StyledNavButton } from '../StyledComponents/buttons';

const StyledNavScreen = styled.div`
width: 100vw;
`;


const StyledNavList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export default function MobileNavScreen({ color2, isMobile, toggleNavClick }) {

    return (

        <>
            <NavBar color2={color2}
                isMobile={isMobile}
                toggleNavClick={toggleNavClick} />

            <StyledNavScreen>
                <StyledNavList>
                    <StyledNavButton onClick={toggleNavClick} to="/">Home</StyledNavButton>
                    <StyledNavButton onClick={toggleNavClick} to="/shop">Shop</StyledNavButton>
                    <StyledNavButton onClick={toggleNavClick} to="/about">About</StyledNavButton>
                    <StyledNavButton onClick={toggleNavClick} to="/menu">Menu</StyledNavButton>
                    <StyledNavButton onClick={toggleNavClick} to="/contact">Contact</StyledNavButton>
                </StyledNavList>
            </StyledNavScreen>
        </>
    )
}
