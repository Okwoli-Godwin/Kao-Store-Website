import React from 'react'
import styled from 'styled-components'
import { TfiEmail } from "react-icons/tfi";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaGooglePlay, FaAppStore, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaSquareThreads } from "react-icons/fa6";


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
            <h3>ABOUT US</h3>
            <p>Contact Us</p>
            <p>About Us</p>
            <p>Terms and Condition</p>
          </Holder1>
          <Holder1>
            <h3>PAYMENT</h3>
            <p>Kao Wallet</p>
            <p>Verve</p>
            <p>Visa</p>
            <p>Master Card</p>
            <p>Digital Currency</p>
          </Holder1>
          <Holder1>
            <h3>MORE INFO</h3>
            <p>FAQs</p>
            <p>Delivery</p>
            <p>Return Policy</p>
            <p>Track My Order</p>
            <p>Privacy Policy</p>
          </Holder1>
          <Holder1>
            <h3>MAKE MONEY WITH US</h3>
            <p>Become an Agent</p>
          </Holder1>
          <Holder1>
            <h3>Download on mobile</h3>
            <Storehold>
              <Ico><FaGooglePlay /></Ico>
              <div style={{display: "flex", flexDirection: "column", marginLeft: "12px"}}>
                <On>Download On</On>
                <p>Google Play Store</p>
              </div>
            </Storehold>
            <Storehold>
              <Ico><FaAppStore /></Ico>
              <div style={{display: "flex", flexDirection: "column", marginLeft: "12px"}}>
                <On>Download On</On>
                <p>Apple App Store</p>
              </div>
            </Storehold>
            <div style={{display: "flex", flexDirection: "column"}}>
              <p>Keep up to date with us</p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <F><BsFacebook /></F>
                <F><FaTwitter /></F>
                <F><FaInstagramSquare /></F>
                <F><FaSquareThreads /></F>
              </div>
            </div>
          </Holder1>
        </Wrap>
      </Foot>
    </Container>
  )
}

export default Footer
const F = styled.div`
  color: #fff;
  margin-right: 23px;
  font-size: 20px;
`
const On = styled.div`
  font-size: 12px;
  color: #fff;
`
const Ico = styled.div`
  color: #fff;
  font-size: 26px;
`
const Storehold = styled.div`
  display: flex;
  align-items: center;
`
const Holder1 = styled.div`
  p{
    color: #fff;
    font-size: 14px;
    margin-top: 5px;
  }
  h3{
    color: #fff;
    font-size: 16px;
  }
  display: flex;
  flex-direction: column;
`
const Wrap = styled.div`
  width: 88%;
  display: flex;
  justify-content: space-between;
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