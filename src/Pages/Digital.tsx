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
                <h1>Africa's First Crypto Store</h1>
                <p>The KAO Crypto Ecommerce Web App is designed to provide users with a secure and efficient way to make online purchases using cryptocurrency. By emphasizing the benefits of cryptocurrency transactions, the platform aims to attract a wide range of users interested in the advantages of this innovative payment method.</p>
                
                <Button>About Us</Button>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Digital
const Button = styled.button`
    width: 140px;
    height: 45px;
    background-color: #0030AD;
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
    @media screen and (max-width: 768px) {
        width: 100%;
    }
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
        font-size: 37px;
        font-stretch: normal;
        font-style: normal;
        font-weight: 400;
        letter-spacing: normal;
        line-height: 1.17;
        color: #282828;
        @media screen and (max-width: 425px) {
            font-size: 35px;
        }
    }
`
const Left = styled.div`
    display: flex;
    width: 55%;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
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
    @media screen and (max-width: 768px) {
        width: 95%;
    }
    @media screen and (max-width: 500px){
    padding-bottom: 30px;
  }
`
const Container = styled.div`
    display: flex;
    width: 100%;
    background-color: #FEECE1;
    margin-top: 60px;
    justify-content: center;
    padding-top: 25px;
    @media screen and (max-width: 425px) {
        margin-top: 30px;
    }
`