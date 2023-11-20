import React from 'react'
import styled from 'styled-components'
import img from "../Assets/digitalimg.png"

const Digital = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <img src={img} alt="" />
            </Left>
            <Right>
                <h1>A Digital Africa</h1>
                <p>We are the leading pan-African e-commerce platform active across 11 countries in the continent. Our platform consists of a marketplace connecting thousands of sellers to millions of consumers, with integrated logistics and digital payment services.</p>
                
                <Button>More about business</Button>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Digital
const Button = styled.button`
    width: 200px;
    height: 45px;
    background-color: #f55203;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    font-weight: 500;
    margin-top: 35px;
    font-family: Ubuntu;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`
const Right = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    p{
        margin: 0;
        font-family: Ubuntu;
        font-stretch: normal;
        font-style: normal;
        font-weight: 400;
        letter-spacing: normal;
        white-space: pre-line;
        color: #282828;
        font-size: 16px;
        line-height: 1.5;
    }
    h1{
        font-family: Ubuntu;
        font-size: 43px;
        font-stretch: normal;
        font-style: normal;
        font-weight: 400;
        letter-spacing: normal;
        line-height: 1.17;
    }
`
const Left = styled.div`
    display: flex;
    width: 55%;
    img{
        height: 530px;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`
const Wrapper = styled.div`
    width: 88%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Container = styled.div`
    display: flex;
    width: 100%;
    background-color: #FEECE1;
    margin-top: 60px;
    justify-content: center;
    padding-top: 25px;
`