import React from 'react'
import styled from 'styled-components'
import { TfiEmail } from "react-icons/tfi";
import { IoIosPhonePortrait } from "react-icons/io";


const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <FirstCardhold>
          <Holder>
            <Circle>
              <TfiEmail />
            </Circle>
            <Texthold>
              <h4>Support Email</h4>
              <p>support@Kaostoreonline.com</p>
            </Texthold>
          </Holder>
          <Holder>
            <Circle>
              <IoIosPhonePortrait />
            </Circle>
            <Texthold>
              <h4>Support Number</h4>
              <p>090 XXX XXXX, 01 XXX XXXX</p>
            </Texthold>
          </Holder>

          <Emailholder>
            <input type="text" placeholder='Enter Email Address' />
            <button>Subscribe</button>
          </Emailholder>
        </FirstCardhold>
      </Wrapper>
      <Foot>
        <Wrap>
          <Holder1>
            <h3>About Us</h3>
            <p>Contact Us</p>
          </Holder1>
        </Wrap>
      </Foot>
    </Container>
  )
}

export default Footer
const Holder1 = styled.div`
  p{
    color: #fff;
    margin-top: 5px;
  }
  h3{
    color: #fff;
  }
  display: flex;
  flex-direction: column;
`
const Wrap = styled.div`
  width: 88%;
  display: flex;
`
const Foot = styled.div`
  width: 100%;
  display: flex;
  background-color: #0030AD;
  padding-top: 15px;
  padding-bottom: 15px;
  justify-content: center;
`
const Emailholder = styled.div`
  button{
    width: 120px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #0030AD;
    border: none;
    outline: none;
  }
  input{
    width: 200px;
    height: 38px;
    border-radius: 3px;
    background-color: #fff;
    border: none;
    outline: none;
    padding-left: 12px;
  }
  display: flex;
  align-items: center;
  height: 40px;
`
const Texthold = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 13px;
  h4{
    margin-bottom: 5px;
    margin-top: 0;
  }
  p{
    margin: 0;
  }
`
const Circle = styled.div`
  width: 40px;
  height: 40px;
  background-color: #0030AD;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  color: #fff;
  align-items: center;
`
const Holder = styled.div`
  display: flex;
  align-items: center;
`
const FirstCardhold = styled.div`
  width: 100%;
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Wrapper = styled.div`
  width: 88%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #C2D1F4;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
`