
import { Link } from 'react-router-dom';
import styled from 'styled-components'


export const StyledIcon = styled.img`
width: 30px;
height: 30px;
`;

export const StyledNavButton = styled(Link)`
font-size: 1rem;
padding: .4em .5em;
margin: 0 .5rem;
color: #4C1515;
&:hover {
    background-color: #ED9298;
    color: white;
    border-radius: 5px;
    transition: all .2s ;
    ${StyledIcon} {
        filter: brightness(0) invert(1);
    }
}
`;
