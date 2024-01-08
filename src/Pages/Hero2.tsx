import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from "react-spring"

const gradientColors = ['#0030AD', '#FFDDB7', '#0030AD']

const Hero2 = () => {

   const [gradientProps, setGradient] = useSpring<{
    colors: string[];
    offset1: number;
    offset2: number;
    offset3: number;
  }>(() => ({
    colors: gradientColors,
    offset1: 0,
    offset2: 0.5,
    offset3: 1,
    config: { duration: 3000 },
    onRest: () =>
      setGradient({
        colors: gradientColors,
        offset1: 1,
        offset2: 0.9,
        offset3: 1,
        config: { duration: 3150 },
      }),
  }));
    
  

    const myVideo = require("../Assets/bob.mp4");
  return (
    <Container>
        <Video src={myVideo} autoPlay={true} muted playsInline loop={true} />
        
        <Wrapper>
              <h2>Welcome To The {' '}
                  <GradientText
            style={{
              backgroundImage: gradientProps.colors.interpolate(
                (color1, color2, color3) =>
                  `linear-gradient(45deg, ${color1} 0%, ${color2} 50%, ${color3} 100%)`
              ),
            }}
          >
            Kao Store
          </GradientText>
              </h2>
        </Wrapper>
    </Container>
  )
}

export default Hero2
const GradientText = styled(animated.span)`
  font-size: 85px;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
     @media screen and (max-width: 500px) {
        font-size: 45px;
    }
     @media screen and (max-width: 375px) {
        font-size: 25px;
    }
`;

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
    padding-top: 190px;
    padding-bottom: 190px;
    /* background-color: red; */
`