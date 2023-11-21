import React from 'react'
import styled from 'styled-components'
import { FaArrowRight } from "react-icons/fa";

const Latestnews = () => {
  return (
    <Container>
        <Wrapper>
            <Line></Line>
            <h2>Our latest news</h2>
            <Firsthold>
                <Holder>
                    <h3>Starlink and Jumia Collaborate to Expand Internet Service in Africa</h3>
                    <p>October 2, 2023 | Press Releases</p>
                </Holder>
                <Icon><FaArrowRight /></Icon>
            </Firsthold>
            <Firsthold>
                <Holder>
                    <h3>Renaud Glenisson (DG de JUMIA CI): "Désormais Jumia vous livre tout et partout en Côte d’Ivoire" (Publi-info)</h3>
                    <p>September 15, 2023 | Company News | Ivory Coast</p>
                </Holder>
                <Icon><FaArrowRight /></Icon>
            </Firsthold>
             <Firsthold>
                <Holder>
                    <h3>Jumia’s Ghana CEO is confident he has recipe for profitability</h3>
                    <p>September 15, 2023 | Company News</p>
                </Holder>
                <Icon><FaArrowRight /></Icon>
            </Firsthold>
            <Button>Press</Button>
        </Wrapper>
    </Container>
  )
}

export default Latestnews
const Button = styled.button`
    width: 100px;
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
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
const Icon = styled.div`
    margin-top: 3px;
    color: #0030AD;
    font-size: 18px;
`
const Holder = styled.div`
    display: flex;
    flex-direction: column;
`
const Firsthold = styled.div`
    p{
        font-family: Ubuntu;
        font-stretch: normal;
        font-style: normal;
        font-weight: 400;
        letter-spacing: normal;
        white-space: pre-line;
        font-size: 16px;
        line-height: 1.5;
        margin: 0;
    }
    h3{
        color: #282828;
        font-family: Ubuntu;
        font-size: 22px;
        font-stretch: normal;
        font-style: normal;
        font-weight: 500;
        letter-spacing: normal;
        line-height: 1.25;
    }
    display: flex;
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`
const Line = styled.div`
    width: 40px;
    height: 4px;
    border-radius: 10px;
    background-color: #F55203;
`
const Wrapper = styled.div`
    width: 88%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
         color: #282828;
        font-family: Ubuntu;
        font-size: 28px;
        font-stretch: normal;
        font-style: normal;
        font-weight: 500;
        letter-spacing: normal;
        line-height: normal;
        @media screen and (max-width: 320px) {
            font-size: 23px;
        }
    }
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`