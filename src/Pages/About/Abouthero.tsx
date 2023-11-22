import React from 'react'
import styled from 'styled-components'
import { IoPlay } from "react-icons/io5";
import { Typewriter } from 'react-simple-typewriter';
import img from "../../Assets/aboutjumia1.jpg"

const Abouthero = () => {
  return (
    <Container>
        <Wrapper>
            <Line></Line>
            <h2>Welcome to Jumia</h2>
            
            <Holder>
                <Left>
                    <h1>Our mission</h1>
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
        background-color: red;
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
    background-color: #F55203;
`
const Wrapper = styled.div`
    h2{
        color: #282828;
        @media screen and (max-width: 425px) {
            font-size: 21px;
            text-align: center;
        }
    }
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
`