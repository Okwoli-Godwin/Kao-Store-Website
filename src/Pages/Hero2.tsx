import React from 'react'
import styled from 'styled-components'

const Hero2 = () => {
    const myVideo = require("../Assets/bob.mp4");
  return (
    <Container>
        <Video src={myVideo} autoPlay={true} muted playsInline loop={true} />
    </Container>
  )
}

export default Hero2
const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
`
const Wrapper = styled.div`
    width: 90%;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    height: 100vh;
    @media screen and (max-width: 768px) {
        padding-top: 30px;
        width: 100%;
    }
    @media screen and (max-width: 500px) {
        padding-top: 30px;
        width: 100%;
    }
`