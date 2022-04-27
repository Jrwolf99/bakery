import React from 'react'
import styled from "styled-components";
import { StyledHeaderText } from '../StyledComponents/typography';


const StyledContactPage = styled.div`
    padding: 0 10em;
    &>${StyledHeaderText} {
        width: 650px;
    }
`;




export default function Contact() {
    return (
        <StyledContactPage>
            <StyledHeaderText>
                <h1>Got Something On Your Mind?</h1>
                <p>Drop us a message below and we’ll get back to you as soon as possible! Santa reference?</p>
            </StyledHeaderText>
        </StyledContactPage>
    )
}
