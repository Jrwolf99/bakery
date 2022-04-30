import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const StyledMenuCard = styled.div`
    width: 307px;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F4F4F4;
`;
const StyledBackColor = styled.div`
    width: 90%;
    height: 41%;
    margin: 1rem;
    position: relative;
    background-color: ${props => props.color};
`;

const StyledBlur = styled.div`
    position: absolute;
    background-color: ${props => props.color};
    height: 60%;
    width: 50%;
    top: 80%;
    left: 56%;
    transform: translate(-50%, -50%);
    filter: blur(40px);


`;

const StyledImage = styled.img`
    position: absolute;
    height: 120%;
    top: 60%;
    left: 50%;
    z-index: 1;
    transform: translate(-50%, -50%);
`;
const StyledTitle = styled.h4`
        text-align: center;
        font-size: 2rem;
        z-index: 1;
        color: ${props => props.color};


`;
const StyledDesc = styled.p`
        text-align: center;
        padding: 1em 2.5em;
        color: ${props => props.color};


`;
const StyledPrice = styled.p`
        text-align: center;
        color: ${props => props.color};

`;
const StyledButton = styled.button`
        text-align: center;
        padding: .5em 4em;
        margin: 2em;
        width: 90%;
        background-color: ${props => props.color};
        color: white;
`;




export default function MenuCard({ title, picture, desc, price, color, color2, to }) {
    return (
        <StyledMenuCard>

            <StyledBackColor color={color}>
                <Link to={to}>
                    <StyledImage src={picture} alt={desc} />
                    <StyledBlur color={color} />
                </Link>
            </StyledBackColor>

            <StyledTitle color={color2}>{title}</StyledTitle>
            <StyledDesc color={color2}>{desc}</StyledDesc>
            <StyledPrice color={color2}>{price}</StyledPrice>
            <StyledButton color={color2}>Add To Oven</StyledButton>
        </StyledMenuCard>
    )
}
