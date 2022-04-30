import React from 'react'
import styled from 'styled-components';

import CoffeeCake from "../../assets/images/CoffeeCake.png"
import CoffeeCakeBackground from "../../assets/images/Backgrounds/CoffeeCakeBackground.svg"
import NavBar from '../NavBar/NavBar';


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

        }
        &>img {
            grid-area: pic;
            width: 55%;
            transform: translate(200px, -80px);

        }


`;


const StyledOvenButton = styled.button`
        text-align: center;
        padding: .5em 4em;
        margin: 2em;
        width: 90%;
        background-color: ${props => props.color};
        color: white;
`;



export default function CoffeeCakeInfo({ color, color2, isMobile, toggleNavClick }) {
    return (



        <>
            <StyledCoffeeCakeInfo>

                <StyledHeader>
                    <NavBar color2={color2}
                        isMobile={isMobile}
                        toggleNavClick={toggleNavClick} />

                    <StyledInfoText color2={color2}>
                        <h1>Coffee Cake</h1>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit faucibus eget et felis arcu, lobortis. Id congue rhoncus convallis mauris.</p>
                            <p>$5.00 Each</p>
                            <StyledOvenButton color={color}>Add to Oven</StyledOvenButton>
                            <p>*Ingredients at bottom of page*</p>
                        </div>
                        <img src={CoffeeCake} alt="coffee cake" />
                    </StyledInfoText>
                </StyledHeader>




                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis incidunt necessitatibus aspernatur quos unde dolores delectus ab rem, deleniti tempore temporibus! Ratione facere voluptatem aliquid quia natus dolore tempora iure.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis incidunt necessitatibus aspernatur quos unde dolores delectus ab rem, deleniti tempore temporibus! Ratione facere voluptatem aliquid quia natus dolore tempora iure.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis incidunt necessitatibus aspernatur quos unde dolores delectus ab rem, deleniti tempore temporibus! Ratione facere voluptatem aliquid quia natus dolore tempora iure.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis incidunt necessitatibus aspernatur quos unde dolores delectus ab rem, deleniti tempore temporibus! Ratione facere voluptatem aliquid quia natus dolore tempora iure.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis incidunt necessitatibus aspernatur quos unde dolores delectus ab rem, deleniti tempore temporibus! Ratione facere voluptatem aliquid quia natus dolore tempora iure.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis incidunt necessitatibus aspernatur quos unde dolores delectus ab rem, deleniti tempore temporibus! Ratione facere voluptatem aliquid quia natus dolore tempora iure.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis incidunt necessitatibus aspernatur quos unde dolores delectus ab rem, deleniti tempore temporibus! Ratione facere voluptatem aliquid quia natus dolore tempora iure.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis incidunt necessitatibus aspernatur quos unde dolores delectus ab rem, deleniti tempore temporibus! Ratione facere voluptatem aliquid quia natus dolore tempora iure.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis incidunt necessitatibus aspernatur quos unde dolores delectus ab rem, deleniti tempore temporibus! Ratione facere voluptatem aliquid quia natus dolore tempora iure.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis incidunt necessitatibus aspernatur quos unde dolores delectus ab rem, deleniti tempore temporibus! Ratione facere voluptatem aliquid quia natus dolore tempora iure.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis incidunt necessitatibus aspernatur quos unde dolores delectus ab rem, deleniti tempore temporibus! Ratione facere voluptatem aliquid quia natus dolore tempora iure.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis incidunt necessitatibus aspernatur quos unde dolores delectus ab rem, deleniti tempore temporibus! Ratione facere voluptatem aliquid quia natus dolore tempora iure.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis incidunt necessitatibus aspernatur quos unde dolores delectus ab rem, deleniti tempore temporibus! Ratione facere voluptatem aliquid quia natus dolore tempora iure.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis incidunt necessitatibus aspernatur quos unde dolores delectus ab rem, deleniti tempore temporibus! Ratione facere voluptatem aliquid quia natus dolore tempora iure.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis incidunt necessitatibus aspernatur quos unde dolores delectus ab rem, deleniti tempore temporibus! Ratione facere voluptatem aliquid quia natus dolore tempora iure.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis incidunt necessitatibus aspernatur quos unde dolores delectus ab rem, deleniti tempore temporibus! Ratione facere voluptatem aliquid quia natus dolore tempora iure.</p>


            </StyledCoffeeCakeInfo>




        </>
    )
}
