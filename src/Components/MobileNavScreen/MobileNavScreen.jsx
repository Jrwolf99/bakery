import React from 'react'
import styled from "styled-components";
import Footer from '../Footer/Footer';
import { StyledNavButton } from '../StyledComponents/buttons';

const StyledNavScreen = styled.div`
width: 100vw;
`;


export default function MobileNavScreen({ toggleMobileClick }) {
    return (
        <StyledNavScreen>
            <div>
                <StyledNavButton to="/">Home</StyledNavButton>
                <StyledNavButton to="shop">Shop</StyledNavButton>
                <StyledNavButton to="about">About</StyledNavButton>
                <StyledNavButton to="rewards">Rewards</StyledNavButton>
                <StyledNavButton to="contact">Contact</StyledNavButton>
            </div>

        </StyledNavScreen>
    )
}
