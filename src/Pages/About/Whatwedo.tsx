import React from 'react'
import styled from 'styled-components'
import { FaArrowRight } from "react-icons/fa";

const Whatwedo = () => {
  return (
    <Container>
        <Wrapper>
            <Line></Line>
            <h2>What we do</h2>
            
            <Holder>
                <Cardhold>
                    <img src="https://group-live.jumia.is/images/about/4by3/about-01.png" alt="" />
                    <h3>Serving Consumers</h3>
                    <p>Jumia delivers innovative, convenient and affordable online services to consumers in Africa that help them fulfil their everyday needs.</p>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <P>Discover our services for consumers</P>
                        <Icon><FaArrowRight /></Icon>
                    </div>
                </Cardhold>
                <Cardhold>
                    <img src="https://group-live.jumia.is/images/about/4by3/about-02.png" alt="" />
                    <h3>Empowering Businesses</h3>
                    <p>Jumia takes African economies online, helping small and large businesses grow and reach new consumers, empowering a new generation to build their lives and make their communities better.</p>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <P>Discover our services for businesses</P>
                        <Icon><FaArrowRight /></Icon>
                    </div>
                </Cardhold>
            </Holder>
        </Wrapper>
    </Container>
  )
}

export default Whatwedo
const Icon = styled.div`
    color: #0030AD;
    font-size: 12px;
    margin-top: 30px;
    margin-left: 20px;
`
const P = styled.div`
    color: #0030AD;
    font-family: "Ubuntu";
    font-size: .875rem;
    font-stretch: normal;
    font-style: normal;
    font-weight: 400;
    height: auto;
    letter-spacing: normal;
    line-height: 1.29;
    -webkit-text-decoration: underline;
    text-decoration: underline;
    margin-top: 30px;
    @media screen and (max-width: 500px) {
        width: 100%;
        align-items: center;
        display: flex;
        justify-content: center;
    }
`
const Cardhold = styled.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    @media screen and (max-width: 768px) {
        width: 100%;
        margin-bottom: 30px;
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
        @media screen and (max-width: 500px) {
        width: 100%;
        align-items: center;
        display: flex;
        justify-content: center;
        text-align: center;
    }
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
        @media screen and (max-width: 500px) {
        width: 100%;
        align-items: center;
        display: flex;
        justify-content: center;
    }
    }
    img{
        width: 100%;
        border-radius: 12px;
    }
`
const Holder = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 17px;
    justify-content: space-between;
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
    padding-bottom: 40px;
    overflow: hidden;
    @media screen and (max-width: 768px) {
        padding-top: 30px;
        width: 100%;
    }
`