import React from 'react'
import styled from 'styled-components'
import img from "../../Assets/jum.png"

const Community = () => {
  return (
    <Container>
        <Wrapper>
            <Line></Line>
            <h2>Community Support</h2>
            <Holder>
                <Cardhold>
                      <img src={img} alt="" />
                      <label>Les livres du programme scolaire disponibles sur Jumia Algérie</label>
                </Cardhold>
            </Holder>
        </Wrapper>
    </Container>
  )
}

export default Community
const Cardhold = styled.div`
    width: 350px;
    overflow: hidden;
    flex-direction: column;
    label{
        color: #282828;
        font-family: Ubuntu;
        font-size: 22px;
        font-stretch: normal;
        font-style: normal;
        font-weight: 500;
        letter-spacing: normal;
        line-height: 1.25;
        margin-top: 20px;
    }
    img{
        height: 250px;
        border-radius: 5px;
        width: 100%;
        object-fit: cover;
    }
`
const Holder = styled.div`
    width: 100%;
    display: flex;
    margin-top: 20px;
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
    background-color: #FFF0E8;
    justify-content: center;
    padding-top: 30px;
`