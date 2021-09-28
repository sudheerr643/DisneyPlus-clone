import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogo1 src="/images/cta-logo-one.svg" />
                <SignUp>GET THE DISNEY BUNDLE</SignUp>
                <Description>
                    Stream now.
                </Description>
                <CTALogo2 src="/images/cta-logo-two.png" />
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/images/login-background.jpg");
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
    }
`
const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 80%;
    display: flex;
    flex-direction: column;
    
`
const CTALogo1 = styled.img`

`
const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: 400;
    padding: 17px 0px;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background: #0483ee;
    }
`
const Description = styled.div`
    color: #c0c0c0cc;
    font-size: 10px;
    text-align: center;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 24px;
    margin-left: 0px;
`
const CTALogo2 = styled.img`
    width: 100%;
    max-width: none;
`