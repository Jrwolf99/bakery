
import { Link } from 'react-router-dom';
import styled from 'styled-components'


export const StyledIcon = styled.img`
width: 30px;
height: 30px;
filter: brightness(0);
`;

export const StyledNavButton = styled(Link)`
font-size: 1rem;
padding: .4em .5em;
margin: 0 .5rem;
color: ${props => props.color2};

&:hover {
    background-color: ${props => props.color2};
    color: white;
    border-radius: 5px;
    transition: all .2s ;
    ${StyledIcon} {
        filter: brightness(0) invert(1);
    }
}
`;


