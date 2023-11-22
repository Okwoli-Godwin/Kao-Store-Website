import React from 'react'
import styled from 'styled-components'

const Whatwedo = () => {
  return (
    <Container>
        <Wrapper>
            <Line></Line>
            <h2>What we do</h2>
        </Wrapper>
    </Container>
  )
}

export default Whatwedo
const Line = styled.div`
    width: 40px;
    height: 4px;
    border-radius: 10px;
    background-color: #F55203;
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
    @media screen and (max-width: 768px) {
        padding-top: 30px;
        width: 100%;
    }
`