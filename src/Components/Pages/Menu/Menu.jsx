import React from 'react'
import MenuCard from './MenuCard/MenuCard'
import styled from 'styled-components'

import CakePop from "../../../assets/images/CakePop.png"
import CoffeeCake from "../../../assets/images/CoffeeCake.png"
import IceCream from "../../../assets/images/IceCream.png"
import flamingobox from "../../../assets/images/flamingobox.png"
import Footer from '../../Footer/Footer'
import { StyledHeaderText } from '../../StyledComponents/typography'
import NavBar from '../../NavBar/NavBar'



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
    margin-bottom: 10vh;
    &>* {
        width:500px;
    }

`;


const StyledHeaderPic = styled.img`
    border: 1rem solid #f4f4f4;
`;






export default function Menu({ color2, isMobile, toggleNavClick }) {
    return (


        <>
            <NavBar color2={color2}
                isMobile={isMobile}
                toggleNavClick={toggleNavClick} />


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
                        color2="#4C1515"
                        to="cakepopinfo"
                    />

                    <MenuCard
                        title="Coffee Cake"
                        picture={CoffeeCake}
                        desc="A really really really really really tasty coffee cake!"
                        price="$5.00"
                        color="#709B4E"
                        color2="#162C05"
                        to="coffeecakeinfo"
                    />

                    <MenuCard
                        title="Ice Cream"
                        picture={IceCream}
                        desc="A really really really really really tasty ice cream!"
                        price="$5.00"
                        color="#4EB4D4"
                        color2="#084356"
                        to="icecreaminfo"
                    />
                    <MenuCard
                        title="Ice Cream"
                        picture={IceCream}
                        desc="A really really really really really tasty ice cream!"
                        price="$5.00"
                        color="#4EB4D4"
                        color2="#084356"
                        to="icecreaminfo"
                    />
                    <MenuCard
                        title="Cake Pops"
                        picture={CakePop}
                        desc="A really really really really really tasty cake pop!"
                        price="$5.00"
                        color="#ED9298"
                        color2="#4C1515"
                        to="cakepopinfo"
                    />
                    <MenuCard
                        title="Coffee Cake"
                        picture={CoffeeCake}
                        desc="A really really really really really tasty coffee cake!"
                        price="$5.00"
                        color="#709B4E"
                        color2="#162C05"
                        to="coffeecakeinfo"
                    />
                </StyledMenuGrid>

                <Footer />



            </StyledMenuPage>
        </>
    )
}
