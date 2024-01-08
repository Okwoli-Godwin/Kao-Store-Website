import React from 'react'
import styled from 'styled-components'

const Hero2 = () => {
    const myVideo = require("../Assets/bob.mp4");
  return (
    <Container>
        <Video src={myVideo} autoPlay={true} muted playsInline loop={true} />
        
        <Wrapper>
            <h2>Welcome To The <span>Kao Store</span></h2>
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
        span{
            font-size: 75px;
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
    padding-top: 180px;
    padding-bottom: 180px;
    /* background-color: red; */
`