import React from 'react'
import styled from 'styled-components'
import { FaTrophy } from "react-icons/fa6";
import { MdStars } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";


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
                <Icon3><FiSettings /></Icon3>
                <h3>Tried & Trusted</h3>
                <p>Years of testing and feedback from our customers have made Journal the most used and tested Opencart theme in the world.</p>
            </Firsthold>
            <Firsthold>
                <Icon4><FaHeart /></Icon4>
                <h3>Most Loved</h3>
                <p>with an average 67% satisfaction rate, over 20.000 people have come to love Journal more than any other Opencart theme.</p>
            </Firsthold>
        </Wrapper>
    </Container>
  )
}

export default Latestnews
const Icon4 = styled.div`
    color: red;
    font-size: 35px;
`
const Icon3 = styled.div`
    color: green;
    font-size: 35px;
`
const Icon2 = styled.div`
    color: #FFFF00;
    font-size: 40px;
`
const Icon = styled.div`
    color: #0030AD;
    font-size: 38px;
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
    width: 250px;
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