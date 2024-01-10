import React from 'react'
import styled from 'styled-components'
import img from "../../Assets/speak.png"
import { FaArrowRightLong } from "react-icons/fa6";

const Accessories = () => {
  return (
    <Container>
        <Wrapper>
            <Top>
                <a href="Home">Home</a>
            </Top>
            <Imageholder>
                <Box>
                    <img src={img} alt="" />
                    <h3>Speakers <Icon><FaArrowRightLong /></Icon></h3>
                </Box>
                <Box>
                    <img src={img} alt="" />
                    <h3>Speakers <Icon><FaArrowRightLong /></Icon></h3>
                </Box>
                <Box>
                    <img src={img} alt="" />
                    <h3>Speakers <Icon><FaArrowRightLong /></Icon></h3>
                </Box>
                <Box>
                    <img src={img} alt="" />
                    <h3>Speakers <Icon><FaArrowRightLong /></Icon></h3>
                </Box>
                <Box>
                    <img src={img} alt="" />
                    <h3>Speakers <Icon><FaArrowRightLong /></Icon></h3>
                </Box>
                <Box>
                    <img src={img} alt="" />
                    <h3>Speakers <Icon><FaArrowRightLong /></Icon></h3>
                </Box>
                <Box>
                    <img src={img} alt="" />
                    <h3>Speakers <Icon><FaArrowRightLong /></Icon></h3>
                </Box>
                <Box>
                    <img src={img} alt="" />
                    <h3>Speakers <Icon><FaArrowRightLong /></Icon></h3>
                </Box>
            </Imageholder>
        </Wrapper>
    </Container>
  )
}

export default Accessories
const Icon = styled.div`
    margin-top: 5px;
    margin-left: 15px;
`
const Box = styled.div`
    width: 270px;
    height: 300px;
    border-radius: 5px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: #fafafa;
    transition: all 350ms ease-in-out;
    margin-bottom: 30px;
    cursor: pointer;
    &:hover{
        background-color: #d8dcde;
    }
    h3{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        z-index: 10;
        color: #333333;
        position: absolute;
        bottom: 5px;
        font-size: 18px;
        align-items: center;
        padding-right: 50px
    }
    img{
        height: 200px;
        object-fit: cover;
        cursor: pointer;
    }
`
const Imageholder = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 30px;
    justify-content: space-between;
`
const Top = styled.div`
    display: flex;
    margin-top: 15px;
    a{
        color: #737373;
        cursor: pointer;
        text-decoration: none;
        transition: all 350ms ease-in-out;
        &:hover{
            color: #000
        }
    }
`
const Wrapper = styled.div`
    display: flex;
    width: 95%;
    flex-direction: column;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`