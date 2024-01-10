import React from 'react'
import styled from 'styled-components'

const Accessories = () => {
  return (
    <Container>
        <Wrapper>
            <Top>
                <a href="Home">Home</a>
            </Top>
        </Wrapper>
    </Container>
  )
}

export default Accessories
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