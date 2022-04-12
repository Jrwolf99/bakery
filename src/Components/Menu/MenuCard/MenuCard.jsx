import React from 'react'
import styled from 'styled-components'

const StyledMenuCard = styled.div`
    width: 200px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #F4F4F4;
`;
const StyledBackColor = styled.div`
      width: 85%;
    height: 40%;
    position: relative;
    background-color: ${props => props.color};
`;
const StyledImage = styled.img`
    position: absolute;
    height: 150%;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const StyledTitle = styled.h4`
        text-align: center;

`;
const StyledDesc = styled.p`
        text-align: center;

`;
const StyledPrice = styled.p`
        text-align: center;

`;

export default function MenuCard({ title, picture, desc, price, color }) {
    return (
        <StyledMenuCard>
            <StyledBackColor color={color}>
                <StyledImage src={picture} alt={desc} />
            </StyledBackColor>
            <StyledTitle>{title}</StyledTitle>
            <StyledDesc>{desc}</StyledDesc>
            <StyledPrice>{price}</StyledPrice>
        </StyledMenuCard>
    )
}
