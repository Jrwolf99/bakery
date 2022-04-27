import styled from "styled-components";


export const StyledHeaderText = styled.div`
    &>h1 {
        font-size: 4rem;
        @media (max-width: 900px) {
        font-size: 2rem;
        padding: 1em 0;
        }
    }
    &>p {
        font-size: 1.2rem;
        @media (max-width: 900px) {
        font-size: 1rem;
        }
    }
`;

