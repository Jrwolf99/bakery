import React from 'react'
import MenuCard from './MenuCard/MenuCard'
import styled from 'styled-components'

import CakePop from "../../assets/images/CakePop.svg"



const StyledMenuPage = styled.div`
max-width: 1000px;
margin: auto;

display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 50px;

`;

export default function Menu() {
    return (
        <StyledMenuPage>
            <MenuCard
                title="Cake Pops"
                picture={CakePop}
                desc="A really really really really really tasty cake pop!"
                price="$5.00"
                color="#ED9298"
            />

            <MenuCard
                title="Cake Pops"
                picture={CakePop}
                desc="A really really really really really tasty cake pop!"
                price="$5.00"
                color="#92edbc"
            />

            <MenuCard
                title="Cake Pops"
                picture={CakePop}
                desc="A really really really really really tasty cake pop!"
                price="$5.00"
                color="#9a92ed"
            />
            <MenuCard
                title="Cake Pops"
                picture={CakePop}
                desc="A really really really really really tasty cake pop!"
                price="$5.00"
                color="#edb092"
            />
            <MenuCard
                title="Cake Pops"
                picture={CakePop}
                desc="A really really really really really tasty cake pop!"
                price="$5.00"
                color="#ED9298"
            />
            <MenuCard
                title="Cake Pops"
                picture={CakePop}
                desc="A really really really really really tasty cake pop!"
                price="$5.00"
                color="#d892ed"
            />
        </StyledMenuPage>
    )
}
