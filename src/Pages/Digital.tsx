import React from 'react'
import styled from 'styled-components'
import img from "../Assets/digitalimg.png"

const Digital = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <img src={img} alt="" />
            </Left>
        </Wrapper>
    </Container>
  )
}

export default Digital
const Left = styled.div`
    display: flex;
    width: 54%;
    img{
        height: 490px;
    }
`
const Wrapper = styled.div`
    width: 88%;
    display: flex;
    flex-wrap: wrap;
`
const Container = styled.div`
    display: flex;
    width: 100%;
    background-color: #FEECE1;
    margin-top: 60px;
    justify-content: center;
    padding-top: 25px;
`