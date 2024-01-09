import React from 'react'
import styled from 'styled-components'

const Hero2 = () => {
    
    const myVideo = require("../Assets/bob.mp4");
  return (
    <Container>
        <Video src={myVideo} autoPlay={true} muted playsInline loop={true} />
        
        <Wrapper>
              <h2>Welcome To The {' '}
                  <span>Kao Store</span>
              </h2>
        </Wrapper>
    </Container>
  )
}

export default Hero2


const Video = styled.video`
    width: 100%;
    object-fit: cover;
    height: 100%;
    position: absolute;
`
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    /* background-color: red; */
    z-index: 5;
    h2{
        font-size: 50px;
        color: #fff;
        width: 500px;
        text-align: center;
        @media screen and (max-width: 500px) {
            font-size: 40px;
        }
        @media screen and (max-width: 320px) {
            font-size: 28px;
        }
        span{
            font-size: 75px;
            background: linear-gradient(94.63deg, #0030AD 10.17%, #FFDDB7 47.09%, #0030AD 83.25%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            @media screen and (max-width: 500px){
                font-size: 50px;
            }
        }
    }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -10px;
    height: 100%;
    position: relative;
    padding-top: 190px;
    padding-bottom: 190px;
    /* background-color: red; */
`