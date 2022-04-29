import React from 'react'
import styled from "styled-components";
import useMobile from "../../hooks/useMobile"
import { StyledHeaderText } from '../StyledComponents/typography';
import VerticalLines from "../../assets/images/VerticalLines.svg";



import facebookIcon from "../../assets/images/icons/Facebook.svg"
import instagramIcon from "../../assets/images/icons/Instagram.svg"
import twitterIcon from "../../assets/images/icons/Twitter.svg"
import Footer from '../Footer/Footer';


const StyledContactPage = styled.div`
    padding-inline: 5em;
    &>${StyledHeaderText} {
        max-width: 650px;
        margin-top: 1rem;
        margin-bottom: 5rem;
        @media (max-width: 900px) {
            margin: 1rem;
            margin-bottom: 4rem;
    }
    
    }
   
`;

const StyledFormBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
max-width: 1000px;
background-color: #FFC5C4;
margin-inline: auto ;
margin-top: 2rem;
border-radius: 30px;
border: 1px solid #4C1515;
position: relative;

@media (max-width: 900px) {
 flex-direction: column;
 padding: 1em;
}


&::after{
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: -15px;
    right: -15px;
    background-color: #ffc5c48e;
    border: 1px solid #4C1515;
    z-index: -1;
    border-radius: 30px;

}
&::before{
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: -30px;
    right: -30px;
    background-color: #ffc5c439;
    border: 1px solid #4C1515;
    z-index: -1;
    border-radius: 30px;

}

&>* {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
`;

const StyledFormInfo = styled.div`
flex: 1;
&>div{
    display: flex;
    gap: 20px;
    &>img {
        width: 30px;
        height: 30px;
    }
}
`;


const StyledVerticalLines = styled.img`
flex: .1;
height: 500px;
`;

const StyledContactForm = styled.form`
flex: 2;
width: 100%;
display: flex;
flex-direction: column;
&>label{
    display: block;
    width: 80%;
    margin: auto;
    text-align: left;
    padding-top: .8em;
    &>input, &>textarea  {
        display: block;
        resize: none;
        width: 100%;
        margin: auto;
        margin-top: .4em;
        color: #4C1515;

        background-color: transparent;
        border: none;
        border-bottom: 1px solid #4C1515;
    }
    &>textarea{
        border: 1px solid #4C1515;
        height: 100px;
    }
}
&>button{
        border: 1px solid #4C1515;
        width: 80%;
        margin: 1rem 0;
        padding: .5em;
        transition: all .2s;
        &:hover{
            background-color: #4C1515;
            color: #FFC5C4;
            
        }
    }
`;



export default function Contact() {

    const { isMobile } = useMobile();

    return (
        <>
            <StyledContactPage>
                <StyledHeaderText>
                    <h1>Got Something On Your Mind?</h1>
                    <p>Drop us a message below and we’ll get back to you as soon as possible! Santa reference?</p>
                </StyledHeaderText>
                <StyledFormBox>
                    <StyledFormInfo>
                        <p>Custom<br />Postage<br />Stamp<br /></p>
                        <br />
                        <p>Bakery Bakes</p>
                        <br />
                        <p>123 Right Street,<br />Memphis TN<br />38111</p>
                        <br />
                        <div>
                            <img src={facebookIcon} alt="facebook icon" />
                            <img src={instagramIcon} alt="instagram icon" />
                            <img src={twitterIcon} alt="twitter icon" />
                        </div>


                    </StyledFormInfo>

                    {!isMobile && <StyledVerticalLines src={VerticalLines} />
                    }<StyledContactForm>
                        <label>Name<input type="text" required /></label>
                        <label>Phone Number<input type="tel" required /></label>
                        <label>Email<input type="email" required /></label>
                        <label>Message<textarea required /></label>
                        <button>Send</button>



                    </StyledContactForm>
                </StyledFormBox>
            </StyledContactPage>
            <Footer />

        </>
    )
}
