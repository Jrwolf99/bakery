import React from 'react'
import MenuCard from './MenuCard/MenuCard'
import styled from 'styled-components'

import CakePop from "../../assets/images/CakePop.svg"



const StyledMenuPage = styled.div`
display: flex;
justify-content: center;
align-items: center;
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
        </StyledMenuPage>
    )
}
