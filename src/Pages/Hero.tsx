import React from 'react'
import styled from 'styled-components'
import { IoPlay } from "react-icons/io5";
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <Container>
        <Wrapper>
            <Line></Line>
            <h2>The Leading E-commerce Platform in Africa</h2>
            
            <Holder>
                <Left>
                    <p>Empower Connect
                        <span style={{color: "#f55203"}}>
                            <Typewriter
                                words={['Upgrade', 'Build', 'Shape', 'Grow']}
                                loop={5}
                                cursor
                                typeSpeed={500}
                                delaySpeed={150}
                             />
                        </span>
                    </p>
                    <Text>100% Africa, 100% Internet</Text>
                    <Button>About Jumia</Button>
                </Left>
                <Right>
                    <img src="https://images.pexels.com/photos/783262/pexels-photo-783262.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    
                    <Playhold>
                        <Circle>
                            <Icon><IoPlay /></Icon>
                        </Circle>
                    </Playhold>
                </Right>
            </Holder>
        </Wrapper>
    </Container>
  )
}

export default Hero
const Button = styled.button`
    width: 145px;
    height: 45px;
    background-color: #f55203;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    font-weight: 500;
    margin-top: 35px;
`
const Icon = styled.div`
    color: #f55203;
    font-size: 40px;
    margin-top: 10px;
`
const Circle = styled.div`
    width: 100px;
    height: 100px;
    background-color: #fff;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const Playhold = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Right = styled.div`
    width: 60%;
    display: flex;
    position: relative;
    height: 500px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const Text = styled.div`
    font-size: 25px;
    font-weight: 300;
    line-height: 1.13;
    font-family: 'Ubuntu', sans-serif;
    margin-top: -40px;
    font-weight: 500;
`
const Left = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    p{
        font-size: 75px;
        width: 320px;
        font-family: 'Ubuntu', sans-serif;
        margin-top: 12px;
        flex-direction: column;
        display: flex;
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
    h2{
        color: #282828;
    }
    width: 88%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`