import React from 'react'
import styled from 'styled-components'

const Latestnews = () => {
  return (
    <Container>
        <Wrapper>
            <Line></Line>
            <h2>Our latest news</h2>
            <Firsthold>
                <Holder>
                    <h3>Starlink and Jumia Collaborate to Expand Internet Service in Africa</h3>
                </Holder>
            </Firsthold>
        </Wrapper>
    </Container>
  )
}

export default Latestnews
const Holder = styled.div`
    display: flex;
    flex-direction: column;
`
const Firsthold = styled.div`
    h3{
        color: #282828;
        font-family: Ubuntu;
        font-size: 22px;
        font-stretch: normal;
        font-style: normal;
        font-weight: 500;
        letter-spacing: normal;
        line-height: 1.25;
    }
    display: flex;
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    align-items: center;
`
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