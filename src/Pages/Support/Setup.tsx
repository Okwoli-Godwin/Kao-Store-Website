import React from 'react'
import styled from 'styled-components'
import img from "../../Assets/background.jpg"

const Setup = () => {
  return (
    <Container>
        <Wrapper>
            
        </Wrapper>
    </Container>
  )
}

export default Setup
const Wrapper = styled.div`
    width: 95%;
    display: flex;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 100vh;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`