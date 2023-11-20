import React from 'react'
import styled from "styled-components"
import img from "../Assets/commitmentimg.png"

const Commitment = () => {
  return (
    <Container>
        <Wrapper>
            <h1>Our <span>Commitment</span></h1>
            <Boxhold>
                <Box>Community support</Box>
                <Box>Our Impact</Box>
                <Box>Donate with JumiaPay</Box>
                <Box>Sustainability</Box>
            </Boxhold>
        </Wrapper>
    </Container>
  )
}

export default Commitment
const Box = styled.div`
    width: 250px;
    height: 50px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Ubuntu;
    font-weight: 500;
    color: #282828;
    margin-right: 20px;
    font-size: 17px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    cursor: pointer;
`
const Boxhold = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
`
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.2);
    padding-top: 165px;
    padding-bottom: 165px;
    position: relative;
    h1{
        font-family: Ubuntu;
        color: #fff;
        font-size: 60px;
        span{
            color: #f55203;
        }
    }
`
const Container = styled.div`
    width: 100%;
    display: flex;
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`