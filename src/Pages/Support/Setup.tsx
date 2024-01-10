import React from 'react'
import styled from 'styled-components'
import img from "../../Assets/background.jpg"

const Setup = () => {
  return (
    <Container>
        <Wrapper>
            <p>Setup Overview &
                Optimisation
            </p>
            <Par>Use the Setup Overview feature in the Bang & Olufsen app to optimise your setup and troubleshoot your products at home. Find it in the app and get tips and tools tailored to you.</Par>
        </Wrapper>
    </Container>
  )
}

export default Setup
const Par = styled.div`
    font-size: 15px;
    font-weight: 400;
    width: 500px;
    text-align: center;
    letter-spacing: 1px;
    margin-top: 20px;
`
const Wrapper = styled.div`
    width: 95%;
    display: flex;
    height: 100%;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 120px;
    padding-bottom: 120px;
    p{
        font-size: 45px;
        width: 400px;
        letter-spacing: 1px;
        padding: 0;
        color: #000;
        font-weight: 300;
        line-height: 45px;
        text-align: center;
        margin: 0;
    }
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 100%;
`