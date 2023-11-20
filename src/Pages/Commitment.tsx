import React, {useState} from 'react'
import styled from "styled-components"
import img from "../Assets/commitmentimg.png"
import Community from './Dropholder/Community'

const Commitment = () => {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)

    const Toggle = () => {
        setShow(!show)
    }
    const Toggle2 = () => {
        setShow2(!show2)
    }
    const Toggle3 = () => {
        setShow3(!show3)
    }
    const Toggle4 = () => {
        setShow4(!show4)
    }
  return (
    <Container>
        <Wrapper>
            <h1>Our <span>Commitment</span></h1>
            <Boxhold>
                <Box onClick={Toggle} bg={show ? "" : "bb"}>Community support</Box>
                <Box2 onClick={Toggle2} bg={show2 ? "bb" : "#fff"}>Our Impact</Box2>
                <Box3 onClick={Toggle3} bg={show3 ? "bb" : "#fff"}>Donate with JumiaPay</Box3>
                <Box4 onClick={Toggle4} bg={show4 ? "bb" : "#fff"}>Sustainability</Box4>
            </Boxhold>
            
        </Wrapper>
            {show ? (
                <Holders>
                    <Community />
                </Holders>
            ) : null}
    </Container>
  )
}

export default Commitment
const Holders = styled.div`
    width: 100%;
    height: 200px;
    background-color: #FFF0E8;
    bottom: 0;
    /* margin-bottom: -100px; */
    /* margin-top: 200px; */
`
const Holder = styled.div`
    width: 100%;
    height: 200px;
    position: absolute;
    bottom: 0;
    margin-top: 170px;
`
const Box4 = styled.div<{bg: string}>`
    width: 250px;
    height: 50px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Ubuntu;
    font-weight: 500;
    color: #282828;
    margin-right: 20px;
    font-size: 17px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    cursor: pointer;
    background-color: ${({ bg }) => (bg ? "#fff" : "#EBF1F9")};
`
const Box3 = styled.div<{bg: string}>`
    width: 250px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Ubuntu;
    font-weight: 500;
    color: #282828;
    margin-right: 20px;
    font-size: 17px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    cursor: pointer;
    background-color: ${({ bg }) => (bg ? "#fff" : "#D0EAF1")};
`
const Box2 = styled.div<{bg: string}>`
    width: 250px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Ubuntu;
    font-weight: 500;
    color: #282828;
    margin-right: 20px;
    font-size: 17px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    cursor: pointer;
    background-color: ${({ bg }) => (bg ? "#fff" : "#F0E4F4")};
`
const Box = styled.div<{bg: string}>`
    width: 250px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Ubuntu;
    font-weight: 500;
    color: #282828;
    margin-right: 20px;
    font-size: 17px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    cursor: pointer;
    background-color: ${({ bg }) => (bg ? "#fff" : "#FFF0E8")};
`
const Boxhold = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
`
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.2);
    padding-top: 165px;
    padding-bottom: 165px;
    position: relative;
    flex-direction: column;
    align-items: center;
    h1{
        font-family: Ubuntu;
        color: #fff;
        font-size: 60px;
        span{
            color: #f55203;
        }
    }
`
const Container = styled.div`
    width: 100%;
    display: flex;
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    flex-direction: column;
    /* position: relative; */
    /* height: 300px; */
`