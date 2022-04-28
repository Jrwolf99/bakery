import React from 'react'
import styled from 'styled-components'

import facebookIcon from "../../assets/images/icons/Facebook.svg"
import instagramIcon from "../../assets/images/icons/Instagram.svg"
import twitterIcon from "../../assets/images/icons/Twitter.svg"




import FooterLines from "../../assets/images/FooterLines.svg"


const StyledFooter = styled.footer`
width: 100%;
margin-bottom: 10rem;
padding: none;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;

const StyledLinesImg = styled.img`
transform: scaleX(2.5);
height: 50vh;
width: 100%;
padding: 5em 0;
`;


const StyledFooterContent = styled.div`
width: 80%;
display: flex;
flex-direction: row;
justify-content: space-evenly;

@media (max-width: 1000px) {
    
    flex-direction: column;
    gap: 50px;
}

`;


const StyledAddressContent = styled.div`
    text-align: center;
`;


const StyledLinkContent = styled.div`
width: 50%;
margin: auto;
padding: 0 5vw;
display: flex;
flex-direction: row;
justify-content: space-between;
gap: 20px;
&>div {
    text-align: center;
    &>h2{
        text-decoration: underline;
    }
    &>p{
        font-size: 1rem;
        margin: 1rem;
    }
}
@media (max-width: 1000px) {
    width: 100%;
    justify-content: space-evenly;
}

`;

const StyledIcons = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
&>* {
    width: 40px;
    height: 40px;
}

@media (max-width: 1000px) {
    flex-direction: row;
}

`;

export default function Footer() {
    return (
        <StyledFooter>
            <StyledLinesImg src={FooterLines} />
            <StyledFooterContent>
                <StyledAddressContent>
                    <h1>Bakery Bakes</h1>
                    <p>Slogan goes here<br /><br /></p>
                    <p>123 Right Street, Memphis TN 38111</p>
                    <p>email@email.com</p>
                    <p>901-999-9999</p>
                </StyledAddressContent>
                <StyledLinkContent>
                    <div>
                        <h2>Shop</h2>
                        <p>Menu</p>
                    </div>
                    <div>
                        <h2>About</h2>
                        <p>Events</p>
                    </div>
                    <div>
                        <h2>Contact</h2>
                        <p>Contact Form</p>
                    </div>
                </StyledLinkContent>
                <StyledIcons>
                    <img src={facebookIcon} alt="facebookIcon" />
                    <img src={instagramIcon} alt="instagramIcon" />
                    <img src={twitterIcon} alt="twitterIcon" />
                </StyledIcons>
            </StyledFooterContent>
        </StyledFooter>

    )
}
