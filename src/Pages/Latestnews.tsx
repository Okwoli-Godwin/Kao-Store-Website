import React from 'react'
import styled from 'styled-components'

const Latestnews = () => {
  return (
    <Container>
        <Wrapper>
            <Line></Line>
            <h2>Empower, connect, build</h2>
        </Wrapper>
    </Container>
  )
}

export default Latestnews
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
    h2{
         color: #282828;
        font-family: Ubuntu;
        font-size: 28px;
        font-stretch: normal;
        font-style: normal;
        font-weight: 500;
        letter-spacing: normal;
        line-height: normal;
        @media screen and (max-width: 320px) {
            font-size: 23px;
        }
    }
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`