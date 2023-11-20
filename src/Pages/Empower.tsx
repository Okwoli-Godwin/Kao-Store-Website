import React from 'react'
import styled from 'styled-components'
import img from "../Assets/empowerimg.png"

const Empower = () => {
  return (
    <Container>
        <Wrapper>
            <img src={img} alt="" />
              <Line></Line>
              <h2>Empower, connect, build</h2>
              <p>At the heart of our success is a group of entrepreneurs who are passionate about Africa and its digital transformation.</p>
              <Button>People</Button>
        </Wrapper>
    </Container>
  )
}

export default Empower
const Button = styled.button`
    width: 100px;
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
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
const Line = styled.div`
    width: 40px;
    height: 4px;
    border-radius: 10px;
    background-color: #F55203;
    margin-top: 45px;
`
const Wrapper = styled.div`
    width: 88%;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        font-family: Ubuntu;
        font-stretch: normal;
        font-style: normal;
        font-weight: 400;
        letter-spacing: normal;
        white-space: pre-line;
        font-size: 16px;
        line-height: 1.5;
        width: 700px;
        margin: 0;
        text-align: center;
    }
    h2{
         color: #282828;
        font-family: Ubuntu;
        font-size: 28px;
        font-stretch: normal;
        font-style: normal;
        font-weight: 500;
        letter-spacing: normal;
        line-height: normal;
    }
    img{
        height: 370px;
    }
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 60px;
`