import React from 'react'
import styled from "styled-components"
import img from "../Assets/commitmentimg.png"

const Commitment = () => {
  return (
    <Container>
        <Wrapper>
            <h1>Our <span>Commitment</span></h1>
        </Wrapper>
    </Container>
  )
}

export default Commitment
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    padding-top: 100px;
    padding-bottom: 100px;
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