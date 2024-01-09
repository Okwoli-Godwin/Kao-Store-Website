import React from 'react'
import styled from 'styled-components'
import img from "../../Assets/support.jpg"

const Supporthero = () => {
  return (
    <Container>
        <Hold>
            <Wrapper>
            <h1>Welcome to</h1>
            <h1>Kao Store Support</h1>
            <Inputhold>
            </Inputhold>
        </Wrapper>
        </Hold>
    </Container>
  )
}

export default Supporthero
const Inputhold = styled.div`
    display: flex;
    align-items: center;
    width: 500px;
    background-color: #fff;
    height: 45px;
    margin-top: 25px;
`
const Hold = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    padding-top: 100px;
    padding-bottom: 100px;
`
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1{
        font-size: 50px;
        width: 450px;
        color: #ffffff;
        font-weight: 300;
        text-align: center;
        letter-spacing: 1px;
        line-height: 1.1;
        margin: 0;
    }
`

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: center;
`