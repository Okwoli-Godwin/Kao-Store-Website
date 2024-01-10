import React from 'react'
import styled from 'styled-components'
import img from "../../Assets/speak.png"

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
                </Box>
            </Imageholder>
        </Wrapper>
    </Container>
  )
}

export default Accessories
const Box = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 5px;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
    background-color: #fafafa;
    @media screen and (max-width: 500px) {
        width: 100%;
        height: 280px;
        padding-bottom: 20px;
    }
    h3{
        width: 100%;
        display: flex;
        justify-content: center;
        color: #fff;
        z-index: 10;
        position: absolute;
        bottom: 5px;
        font-size: 23px;
    }
    img{
        height: 100px;
        object-fit: cover;
        cursor: pointer;
        &:hover {
            display: block;
            transform: scale(1.1);
            transition: all 350ms ease;
  }
    }
`
const Imageholder = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 30px;
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
    width: 90%;
    flex-direction: column;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`