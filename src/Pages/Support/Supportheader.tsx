import React from 'react'
import styled from "styled-components"

const Supportheader = () => {
  return (
    <Container>
        <Wrapper>
            <h3>Go to Kao-Store.com</h3>
            <h2>Kao Store support</h2>
        </Wrapper>
    </Container>
  )
}

export default Supportheader

const Wrapper = styled.div`
    display: flex;
    width: 90%;
    align-items: center;
    h2{
        font-size: 18px;
        color: #fff;
    }
    h3{
        color: #ffffffb2;
        font-size: 16px;
    }
`

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 60px;
    background-color: #000000;
    justify-content: center;
`