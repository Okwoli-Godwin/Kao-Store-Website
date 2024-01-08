import React, {useState} from 'react'
import styled from "styled-components"
import img from "../../Assets/KAO_Logo_PNG.png"
import { NavLink } from 'react-router-dom'; 

const Header2 = () => {
    const [scroll, setScroll] = useState<Boolean>(false)

    const changeHeaderColor = () => {
        if (window.scrollY >= 70) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    };

    window.addEventListener("scroll", changeHeaderColor)
  return (
      <>
          {scroll ? (
              <Container bg="rgba(128, 128, 128, 0.8)" bb="1px solid ightgray">
          <Wrapper>
            <NavLink to="/">
                <img src={img} alt="" />
            </NavLink>
            
            <Navholder cc="#fff">
                <Nav>About Us</Nav>
                <Nav>Contact Us</Nav>
                <Nav>Solution</Nav>
                <Nav>Support</Nav>
            </Navholder>
            
            <Button>Apply</Button>
          </Wrapper>
    </Container>
          ) : (
                  <Container bg="" bb="">
          <Wrapper>
            <NavLink to="/">
                <img src={img} alt="" />
            </NavLink>
            
            <Navholder cc="#fff">
                <Nav>About Us</Nav>
                <Nav>Contact Us</Nav>
                <Nav>Solution</Nav>
                <Nav>Support</Nav>
            </Navholder>
            
            <Button>Apply</Button>
          </Wrapper>
    </Container>
          )}
      </>
  )
}

export default Header2
const Button = styled.div`
    visibility: hidden;
`
const Nav = styled.div`
    font-size: 14px;
    font-weight: 500;
    margin-right: 60px;
    cursor: pointer;
`
const Navholder = styled.div<{cc: string}>`
    display: flex;
    align-items: center;
    color: ${(props) => props.cc};
`
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        height: 60px;
    }
`

const Container = styled.div<{ bg: string;  bb: string}>`
    width: 100%;
    display: flex;
    background-color: ${(props) => props.bg};
    height: 70px;
    justify-content: center;
    border-bottom: ${(props) => props.bb};
    position: fixed;
    transition: all .4s ease;
    z-index: 10;
`