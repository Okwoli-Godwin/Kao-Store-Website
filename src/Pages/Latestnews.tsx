import React from 'react'
import styled from 'styled-components'
import { FaTrophy } from "react-icons/fa6";
import { MdStars } from "react-icons/md";

const Latestnews = () => {
  return (
    <Container>
        <Wrapper>
            <Firsthold>
                <Icon><FaTrophy /></Icon>
                <h3>Best Selling</h3>
                <p>Since 2013, Journal has been at the top of the Opencart weekly charts for every day, week, month and year in a row.</p>
            </Firsthold>
            <Firsthold>
                <Icon2><MdStars /></Icon2>
                <h3>Best Rated</h3>
                <p>Best Overall rating from more than 2500 reviews accumulated over more than 6 years of hard work and dedication.</p>
            </Firsthold>
            <Firsthold>
                <Icon><FaTrophy /></Icon>
                <h3>Best Selling</h3>
                <p>Since 2013, Journal has been at the top of the Opencart weekly charts for every day, week, month and year in a row.</p>
            </Firsthold>
            <Firsthold>
                <Icon><FaTrophy /></Icon>
                <h3>Best Selling</h3>
                <p>Since 2013, Journal has been at the top of the Opencart weekly charts for every day, week, month and year in a row.</p>
            </Firsthold>
        </Wrapper>
    </Container>
  )
}

export default Latestnews
const Icon2 = styled.div`
    color: #FFFF00;
    font-size: 35px;
`
const Icon = styled.div`
    color: #0030AD;
    font-size: 28px;
`
const Firsthold = styled.div`
    p{
        font-family: Ubuntu;
        color: #282828;
        margin: 0;
        text-align: center;
        line-height: 25px;
    }
    h3{
        color: #282828;
        font-family: Ubuntu;
        font-size: 22px;
    }
    width: 230px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Wrapper = styled.div`
    width: 88%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    /* background-color: #0030AD; */
    padding-top: 30px;
    padding-bottom: 30px;
`