import React from 'react'
import MenuCard from './MenuCard/MenuCard'
import styled from 'styled-components'

import CakePop from "../../assets/images/CakePop.png"
import CoffeeCake from "../../assets/images/CoffeeCake.png"
import IceCream from "../../assets/images/IceCream.png"
import flamingobox from "../../assets/images/flamingobox.png"
import facebookIcon from "../../assets/images/icons/Facebook.svg"
import instagramIcon from "../../assets/images/icons/Instagram.svg"
import twitterIcon from "../../assets/images/icons/Twitter.svg"




import FooterLines from "../../assets/images/FooterLines.svg"


const StyledMenuPage = styled.div`
    padding: 0 2em;
`;

const StyledMenuGrid = styled.div`
max-width: 1200px;
margin: auto;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 50px;
`;


const StyledHeader = styled.header`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    margin: 10vh 0;

`;


const StyledHeaderText = styled.div`
    width: 500px;
    &>h1 {
        font-size: 4rem;
        @media (max-width: 900px) {
        font-size: 2rem;
        }
    }
    &>p {
        font-size: 1.2rem;
        @media (max-width: 900px) {
        font-size: .7rem;
        }
    }
`;


const StyledHeaderPic = styled.img`
    width: 500px;
    border: 1rem solid #f4f4f4;
`;


const StyledFooter = styled.footer`
padding-bottom: 5em;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;




`;



const StyledLinesImg = styled.img`
transform: scaleX(2.5);
height: 35vh;
padding: 5em 0;
`;


const StyledFooterContent = styled.div`
width: 100%;
padding: 0 15vw;
display: flex;
flex-direction: row;
justify-content: space-evenly;

@media (max-width: 900px) {
    
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
align-items: center;
gap: 20px;
&>div {
    text-align: center;
    &>h2{
        text-decoration: underline;
    }
}
@media (max-width: 900px) {
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

@media (max-width: 900px) {
    flex-direction: row;
}

`;



export default function Menu() {
    return (
        <StyledMenuPage>
            <StyledHeader>
                <StyledHeaderText>
                    <h1>Browse Our <br /> Selection.</h1>
                    <p>Our baked goods are made using the best local
                        ingredients we can find. Order today for 2
                        to 5 day pick-up! If you want to make a pick-up
                        outside that time window, hit that contact
                        button in the top right of the page!</p>
                </StyledHeaderText>
                <StyledHeaderPic src={flamingobox} />
            </StyledHeader>
            <StyledMenuGrid>

                <MenuCard
                    title="Cake Pops"
                    picture={CakePop}
                    desc="A really really really really really tasty cake pop!"
                    price="$5.00"
                    color="#ED9298"
                />

                <MenuCard
                    title="Coffee Cake"
                    picture={CoffeeCake}
                    desc="A really really really really really tasty coffee cake!"
                    price="$5.00"
                    color="#709B4E"
                />

                <MenuCard
                    title="Ice Cream"
                    picture={IceCream}
                    desc="A really really really really really tasty ice cream!"
                    price="$5.00"
                    color="#4EB4D4"
                />
                <MenuCard
                    title="Ice Cream"
                    picture={IceCream}
                    desc="A really really really really really tasty ice cream!"
                    price="$5.00"
                    color="#4EB4D4"
                />
                <MenuCard
                    title="Cake Pops"
                    picture={CakePop}
                    desc="A really really really really really tasty cake pop!"
                    price="$5.00"
                    color="#ED9298"
                />
                <MenuCard
                    title="Coffee Cake"
                    picture={CoffeeCake}
                    desc="A really really really really really tasty coffee cake!"
                    price="$5.00"
                    color="#709B4E"
                />
            </StyledMenuGrid>
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


        </StyledMenuPage>
    )
}
