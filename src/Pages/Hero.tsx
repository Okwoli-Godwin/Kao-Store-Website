import React from 'react'
import styled from 'styled-components'
import { Typewriter } from 'react-simple-typewriter';
import img from "../Assets/hero.png"

const Hero = () => {
  return (
    <Container>
        <Wrapper>
            <Line></Line>
            
            <Holder>
                <Left>
                    <p>Buy and Pay With
                        <span style={{color: "#0030AD", fontSize: "45px", marginTop: "25px"}}>
                            <Typewriter
                                words={['Crypto', 'Naira', 'USDT', 'Any Currency']}
                                loop
                                cursor
                                typeSpeed={500}
                                delaySpeed={150}
                             />
                        </span>
                    </p>
                    <Text>Convert USDT to Naira and vice versa at the current market rate</Text>
                    <Button>About Kao</Button>
                </Left>
                <Right>
                    <img src={img} alt="" />
                </Right>
            </Holder>
        </Wrapper>
    </Container>
  )
}

export default Hero
const Button = styled.button`
    width: 145px;
    height: 45px;
    background-color: #0030AD;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    font-weight: 500;
    margin-top: 35px;
    @media screen and (max-width: 768px) {
        margin-top: 20px;
    }
`
const Right = styled.div`
    width: 60%;
    display: flex;
    position: relative;
    height: 500px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    overflow: hidden;
    @media screen and (max-width: 768px) {
        width: 100%;
        margin-top: 30px;
    }
    @media screen and (max-width: 500px) {
        width: 100%;
        height: 270px;
    }
    @media screen and (max-width: 320px) {
        width: 100%;
        height: 240px;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const Text = styled.div`
    font-size: 20px;
    font-weight: 300;
    line-height: 1.13;
    font-family: 'Ubuntu', sans-serif;
    margin-top: -40px;
    font-weight: 500;
    @media screen and (max-width: 768px) {
        margin-top: -10px;
        font-size: 22px;
    }
    @media screen and (max-width: 500px) {
        margin-top: -10px;
        font-size: 18px;
    }
`
const Left = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
    p{
        font-size: 75px;
        width: 320px;
        font-family: 'Ubuntu', sans-serif;
        margin-top: 12px;
        flex-direction: column;
        display: flex;
        color: #282828;
        @media screen and (max-width: 768px) {
        width: 550px;
        font-size: 40px;
        font-weight: 100;
    }
        @media screen and (max-width: 425px) {
        width: 100%;
        font-size: 40px;
        font-weight: 100;
    }
    }
`
const Holder = styled.div`
    width: 100%;
    display: flex;
    margin-top: 40px;
    @media screen and (max-width: 768px){
        flex-wrap: wrap;
    }
`
const Line = styled.div`
    width: 40px;
    height: 4px;
    border-radius: 10px;
    background-color: #0030AD;
`
const Wrapper = styled.div`
    width: 88%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    @media screen and (max-width: 768px) {
        width: 95%;
    }
    @media screen and (max-width: 425px) {
        width: 95%;
    }
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 768px) {
        padding-top: 30px;
        width: 100%;
    }
    @media screen and (max-width: 500px) {
        padding-top: 30px;
        width: 100%;
    }
`