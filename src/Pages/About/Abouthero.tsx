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
                    <p>Empower Connect
                        <span style={{color: "#0030AD"}}>
                            <Typewriter
                                words={['Upgrade', 'Build', 'Shape', 'Grow']}
                                loop
                                cursor
                                typeSpeed={500}
                                delaySpeed={150}
                             />
                        </span>
                    </p>
                    <Text>100% Africa, 100% Internet</Text>
                    <Button>About Jumia</Button>
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
const Text = styled.div`
    font-size: 25px;
    font-weight: 300;
    line-height: 1.13;
    font-family: 'Ubuntu', sans-serif;
    margin-top: -40px;
    font-weight: 500;
    @media screen and (max-width: 768px) {
        margin-top: -10px;
        font-size: 22px;
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