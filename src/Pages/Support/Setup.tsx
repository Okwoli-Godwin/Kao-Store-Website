import React from 'react'
import styled from 'styled-components'
import img from "../../Assets/background.jpg"

const Setup = () => {
  return (
    <Container>
        <Wrapper>
            <p>Setup Overview &
                Optimisation
            </p>
        </Wrapper>
    </Container>
  )
}

export default Setup
const Wrapper = styled.div`
    width: 95%;
    display: flex;
    height: 100%;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        font-size: 45px;
        width: 400px;
        letter-spacing: 1px;
        margin: 0 0 32px;
        padding: 0;
        color: #000;
        font-weight: 400;
        line-height: 40px;
        text-align: center;
    }
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 100%;
`