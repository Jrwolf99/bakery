import React from 'react'
import styled from 'styled-components';

import CoffeeCake from "../../../assets/images/CoffeeCake.png"
import CoffeeCakeBackground from "../../../assets/images/Backgrounds/CoffeeCakeBackground.svg"
import NavBar from '../../NavBar/NavBar';
import bag from "../../../assets/images/bag.png"
import Footer from '../../Footer/Footer';
import MenuCard from '../Menu/MenuCard/MenuCard';

import CakePopImg from "../../../assets/images/CakePop.png"
import CoffeeCakeImg from "../../../assets/images/CoffeeCake.png"
import IceCreamImg from "../../../assets/images/IceCream.png"


const StyledCoffeeCakeInfo = styled.div`
margin: auto;
@media (max-width: 900px) {
    display:none ;
}
`;

const StyledHeader = styled.header`
background-color: white;
background: url(${CoffeeCakeBackground});
height: 100vh;
`;

const StyledInfoText = styled.div`
        max-width: 1000px;
        margin: auto;
        display: grid;
        grid-template: "title title"
                        "pic desc";
        grid-template-columns: 2fr 1fr;

        &>h1 {
            grid-area: title;
            font-size: clamp(1rem, 15vw, 10rem); 
            z-index: 1;
            margin: auto;
            color: ${props => props.color2};
        }
        &>div {
            grid-area: desc;
            font-size: 1rem; 
            text-align: right;
            margin-inline: auto;
            color: ${props => props.color2};

            &>button {
                    text-align: center;
                    padding: .5em 4em;
                    margin: 2em;
                    width: 90%;
                    background-color: ${props => props.color};
                    color: white;
            }
        }
        &>img {
            grid-area: pic;
            width: 55%;
            transform: translate(200px, -80px);

        }


`;

const StyledCustomerSection = styled.div`
    padding: 3em;
    &>div {
        display: flex;
        gap: 10px;
    }
`;

const StyledCustomerReview = styled.div`
    flex: 1;
    margin: 1rem;
    background-color: #F4F4F4;
    color: ${props => props.color2};
    &>p {
        padding: 2em;
    }
    &>p:nth-child(2) {
    
        color: white;
        background-color: ${props => props.color};
    }
`;




const StyledFavoriteSection = styled.div`
position: relative;
    &>img {
            position: absolute;
            width: 400px;
            transform: translate(10%, 20%);

        }

    &>div{
        padding: 6%;
        &>h1 {
        font-size: 3.5rem;
    }
    &>p {
        font-size: 1.5rem;
    }
    }

    &>div:nth-child(2){
        padding: 6%;
        padding-left: 10em;
        margin-left: 25%;
        background-color: ${props => props.color};
        text-align: right;
        color: white;
  
    }

    &>div:nth-child(3){
        background-color: #f4f4f4;
        margin-right: 25%;
        color: ${props => props.color2};
        position: relative;
    }
    &>div:nth-child(3)::before{
        content: "";
        position: absolute;
        top: -200px;
        left: 0;
        height: 200px;
        width: 100%;
        background-color: #f4f4f4;
        z-index: -1;
    }

`;




const StyledSmallMenu = styled.div`
    &>h1 {
        padding: 2em;
        text-align: center;
        font-size: 2.5rem;
    }
    &>div {
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 50px;
    }
`;




export default function CoffeeCakeInfo({ color, color2, isMobile, toggleNavClick }) {
    return (
        <>
            <StyledCoffeeCakeInfo>
                <StyledHeader>
                    <NavBar color2={color2}
                        isMobile={isMobile}
                        toggleNavClick={toggleNavClick} />

                    <StyledInfoText color2={color2} color={color}>
                        <h1>Coffee Cake</h1>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit faucibus eget et felis arcu, lobortis. Id congue rhoncus convallis mauris.</p>
                            <p>$5.00 Each</p>
                            <button>Add to Oven</button>
                            <p>*Ingredients at bottom of page*</p>
                        </div>
                        <img src={CoffeeCake} alt="coffee cake" />
                    </StyledInfoText>
                </StyledHeader>



                <StyledCustomerSection>
                    <h1>A Customer Favorite</h1>
                    <p>We could go on and on about how great our coffee cake is but talking a lot makes us tired. Instead we let our customers speak for us.</p>
                    <div>
                        <StyledCustomerReview color='#6B9649' color2="#183005">
                            <p>“I’ve never tasted a coffee cake so delicious in my life! 10 out of 10! I’m definitely coming back for more!”</p>
                            <p>Sarah, Jane <br /> Memphis, TN</p>
                        </StyledCustomerReview>
                        <StyledCustomerReview color='#ED9298' color2="#4C1515">
                            <p>“I’ve never tasted a coffee cake so delicious in my life! 10 out of 10! I’m definitely coming back for more!”</p>
                            <p>Sarah, Jane <br /> Memphis, TN</p>

                        </StyledCustomerReview>
                        <StyledCustomerReview color='#49AECD' color2="#084356">
                            <p>“I’ve never tasted a coffee cake so delicious in my life! 10 out of 10! I’m definitely coming back for more!”</p>
                            <p>Sarah, Jane <br /> Memphis, TN</p>

                        </StyledCustomerReview>
                    </div>


                </StyledCustomerSection>

                <StyledFavoriteSection color={color} color2={color2}>
                    <img src={bag} alt="a bag" />
                    <div>
                        <h1>Our Favorite, Too.</h1>
                        <p>Nothing says "Good morning!" like driving to the job you hate with a big cup of coffee in one hand and the steering wheel in the other. Only now you can quit that job because our colossal coffee cake requires both hands to consume! You can thank us later!<br /> <br />P.S. Caffeine not included.</p>
                    </div>
                    <div>
                        <h1>Ingredients:</h1>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget tempor sit ac augue commodo. Nunc fames lectus non diam.</p>
                    </div>

                </StyledFavoriteSection>


                <StyledSmallMenu>
                    <h1>That look good? Check these out too!</h1>


                    <div>
                        <MenuCard
                            title="Cake Pops"
                            picture={CakePopImg}
                            desc="A really really really really really tasty cake pop!"
                            price="$5.00"
                            color="#ED9298"
                            color2="#4C1515"
                            to="/menu/cakepopinfo"
                        />

                        <MenuCard
                            title="Coffee Cake"
                            picture={CoffeeCakeImg}
                            desc="A really really really really really tasty coffee cake!"
                            price="$5.00"
                            color="#709B4E"
                            color2="#162C05"
                            to="/menu/coffeecakeinfo"
                        />

                        <MenuCard
                            title="Ice Cream"
                            picture={IceCreamImg}
                            desc="A really really really really really tasty ice cream!"
                            price="$5.00"
                            color="#4EB4D4"
                            color2="#084356"
                            to="/menu/icecreaminfo"
                        />

                    </div>


                </StyledSmallMenu>






                <Footer />
            </StyledCoffeeCakeInfo>




        </>
    )
}
