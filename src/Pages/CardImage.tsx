import React from 'react'
import styled from 'styled-components'
import img from "../Assets/speaker.png"
import img2 from "../Assets/headphone.png"
import img3 from "../Assets/television.png"
import img4 from "../Assets/soundbars.png"

const CardImage = () => {
  return (
    <Container>
        <Wrapper>
            <Card>
                <h3>Speakers</h3>
                <img src={img} alt="" />
            </Card>
            <Card>
                <h3>Headphones</h3>
                <img src={img2} alt="" />
            </Card>
            <Card>
                <h3>Televisions</h3>
                <img src={img3} alt="" />
            </Card>
            <Card>
                <h3>Soundbars</h3>
                <img src={img4} alt="" />
            </Card>
        </Wrapper>
    </Container>
  )
}

export default CardImage
const Card = styled.div`
    width: 220px;
    height: 220px;
    border-radius: 5px;
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
    @media screen and (max-width: 500px) {
        width: 100%;
        height: 280px;
        padding-bottom: 20px;
    }
    h3{
        width: 100%;
        display: flex;
        justify-content: center;
        color: #fff;
        z-index: 10;
        position: absolute;
        bottom: 5px;
        font-size: 23px;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        cursor: pointer;
        &:hover {
            display: block;
            transform: scale(1.1);
            transition: all 350ms ease;
  }
    }
`
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    padding-top: 100px;
    padding-bottom: 100px;
    @media screen and (max-width: 500px) {
        padding-bottom: 25px;
    }
`