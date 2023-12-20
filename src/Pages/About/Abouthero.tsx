import React from 'react'
import styled from 'styled-components'
import img from "../../Assets/frepik.png"
import { Slide } from "react-awesome-reveal";

const Abouthero = () => {
  return (
    <Container>
        <Wrapper>
            <Line></Line>
            <h2>Welcome to Kao Store</h2>
            
            <Holder>
                    <Left>
                <Slide direction='left'>
                    <h1>Our mission</h1>
                    <p>We believe that technology has the potential to transform everyday life in Africa, for the better. We built Jumia to help consumers access millions of goods and services conveniently and at the best prices while opening up a new way for sellers to reach consumers and grow their businesses.</p>
                </Slide>
                </Left>
                <Right>
                    <img src={img} alt="" />
                </Right>
            </Holder>
        </Wrapper>
    </Container>
  )
}

export default Abouthero
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
    @media screen and (max-width: 425px) {
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
const Left = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
    @media screen and (max-width: 500px) {
        width: 100%;
        align-items: center;
    }
    p{
        font-family: Ubuntu;
        font-stretch: normal;
        font-style: normal;
        font-weight: 400;
        letter-spacing: normal;
        white-space: pre-line;
        color: #282828;
        font-size: 16px;
        line-height: 1.5;
        margin: 0;
        width: 350px;
        @media screen and (max-width: 768px) {
            width: 100%;
        }
        @media screen and (max-width: 500px) {
            width: 100%;
            text-align: center;
        }
    }
    h1{
        color: #0030AD;
        font-family: Ubuntu;
        font-size: 42px;
        font-stretch: normal;
        font-style: normal;
        font-weight: 400;
        letter-spacing: normal;
        line-height: 1.17;
    }
`
const Holder = styled.div`
    width: 100%;
    display: flex;
    margin-top: 20px;
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
    h2{
        color: #282828;
        @media screen and (max-width: 500px) {
            font-size: 21px;
            text-align: center;
        }
    }
    width: 88%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 150px;
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
`