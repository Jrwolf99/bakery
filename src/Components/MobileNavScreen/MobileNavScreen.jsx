import React from 'react'
import styled from "styled-components";
import Footer from '../Footer/Footer';
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


export default function MobileNavScreen({ toggleMobileClick }) {
    return (
        <StyledNavScreen>
            <StyledNavList>
                <StyledNavButton onClick={toggleMobileClick} to="/">Home</StyledNavButton>
                <StyledNavButton onClick={toggleMobileClick} to="shop">Shop</StyledNavButton>
                <StyledNavButton onClick={toggleMobileClick} to="about">About</StyledNavButton>
                <StyledNavButton onClick={toggleMobileClick} to="menu">Menu</StyledNavButton>
                <StyledNavButton onClick={toggleMobileClick} to="contact">Contact</StyledNavButton>
            </StyledNavList>

        </StyledNavScreen>
    )
}
