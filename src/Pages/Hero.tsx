import React from 'react'
import styled from 'styled-components'

const Hero = () => {
  return (
    <Container>
        <Wrapper>
            <Line></Line>
            <h2>The Leading E-commerce Platform in Africa</h2>
        </Wrapper>
    </Container>
  )
}

export default Hero
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
    padding-top: 80px;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`