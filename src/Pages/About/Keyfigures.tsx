import React from 'react'
import styled from 'styled-components'

const Keyfigures = () => {
  return (
    <Container>
        <Holder>
            <Wrapper>
                <Line></Line>
                <h2>Key figures</h2>
                
                <Wrap>
                    <First>
                        <h1>1.1+ Billion</h1>
                        <h3>Visits on the website in 2022</h3>
                    </First>
                    <First>
                        <h1>100k+</h1>
                        <h3>Active Sellers</h3>
                    </First>
                    <First>
                        <h1>Every 2 seconds</h1>
                        <h3>One transaction is done</h3>
                    </First>
                    <First>
                        <h1>38.9 Million</h1>
                        <h3>Orders in 2022</h3>
                    </First>
                    <First>
                        <h1>50+ Million</h1>
                        <h3>Products</h3>
                    </First>
                    <First>
                        <h1>8.4 Million</h1>
                        <h3>Active Consumers across Africa</h3>
                    </First>
                </Wrap>
            </Wrapper>
        </Holder>
    </Container>
  )
}

export default Keyfigures
const First = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 320px;
    padding-bottom: 40px;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
    h3{
        color: #fff;
        font-family: Ubuntu;
        font-size: 22px;
        font-stretch: normal;
        font-style: normal;
        font-weight: 500;
        letter-spacing: normal;
        line-height: 1.25;
        margin: 0;
        @media screen and (max-width: 375px) {
            font-size: 18px;
        }
    }
    h1{
        color: #f55203;
        font-weight: 500;
        font-size: 38px;
        font-family: Ubuntu;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        line-height: 1.33;
        @media screen and (max-width: 375px) {
            font-size: 30px;
        }
    }
`
const Wrap = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Line = styled.div`
    width: 40px;
    height: 4px;
    border-radius: 10px;
    background-color: #F55203;
`
const Wrapper = styled.div`
    h2{
        color: #fff;
        @media screen and (max-width: 425px) {
            font-size: 21px;
            text-align: center;
        }
    }
    width: 88%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 768px) {
        width: 95%;
    }
    @media screen and (max-width: 425px) {
        width: 95%;
    }
`
const Holder = styled.div`
    width: 100%;
    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
    padding-top: 50px;
    padding-bottom: 20px;
    justify-content: center;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    background-image: url('https://group-live.jumia.is/images/about/banner/key-figures.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;
`