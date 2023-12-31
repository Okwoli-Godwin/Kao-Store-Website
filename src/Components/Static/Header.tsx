import React, {useState} from 'react'
import styled from 'styled-components'
import img from "../../Assets/KAO_Logo_PNG.png"
import { MdKeyboardArrowDown } from "react-icons/md";
import Dropdown1 from './Dropdown1';
import Dropdown2 from './Dropdown2';
import Dropdown3 from './Dropdown3';
import Dropdown4 from './Dropdown4';
import { NavLink } from 'react-router-dom';
import { Twirl as Hamburger } from 'hamburger-react'

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false)
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false)
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false)
  const [show, setShow] = useState(false)

  const Toggle = () => {
    setShow(!show)
  }

  const handleNavItemHover = () => {
    setIsDropdownOpen(true)
    setIsDropdownOpen2(false)
    setIsDropdownOpen3(false)
    setIsDropdownOpen4(false)
  }
  const handleNavItemLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleNavItemHover2 = () => {
    setIsDropdownOpen2(true)
    setIsDropdownOpen(false)
    setIsDropdownOpen3(false)
    setIsDropdownOpen4(false)
  }
  const handleNavItemLeave2 = () => {
    setIsDropdownOpen2(false);
  };

  const handleNavItemHover3 = () => {
    setIsDropdownOpen3(true)
    setIsDropdownOpen(false)
    setIsDropdownOpen2(false)
    setIsDropdownOpen4(false)
  }
  const handleNavItemLeave3 = () => {
    setIsDropdownOpen3(false);
  };

  const handleNavItemHover4 = () => {
    setIsDropdownOpen4(true)
    setIsDropdownOpen3(false)
    setIsDropdownOpen(false)
    setIsDropdownOpen2(false)
  }
  const handleNavItemLeave4 = () => {
    setIsDropdownOpen4(false);
  };
  return (
    <Container>
      <Wrapper>
        <NavLink to="/">
          <img src={img} alt="" />
        </NavLink>
        
        <Navholder>
          <NavLink to="/about" style={{textDecoration: "none"}}>
            <Nav onMouseEnter={handleNavItemHover}>
            <Text>ABOUT US</Text>
            <Icon><MdKeyboardArrowDown /></Icon>
          </Nav>
          </NavLink>
          <Nav onMouseEnter={handleNavItemHover2}>
            <Text>BUSINESS</Text>
            <Icon><MdKeyboardArrowDown /></Icon>
          </Nav>
          <Nav>
            <Text onMouseEnter={handleNavItemHover3}>PEOPLE</Text>
            <Icon><MdKeyboardArrowDown /></Icon>
          </Nav>
          <Nav>
            <Text onMouseEnter={handleNavItemHover4}>PRESS</Text>
            <Icon><MdKeyboardArrowDown /></Icon>
          </Nav>
          <NavLink to="/contact-us" style={{textDecoration: "none"}}>
            <Nav>
            <Text>CONTACT US</Text>
          </Nav>
          </NavLink>
          <Nav>
            <Text>INVESTORS</Text>
          </Nav>
          <Nav>
            <Text>BLOG</Text>
          </Nav>
          <Nav>
            <Text>IMPACT</Text>
          </Nav>
        </Navholder>

        <Menu onClick={Toggle}><Hamburger size={20}/></Menu>
      </Wrapper>

      <Holder1 isOpen={isDropdownOpen} onMouseLeave={handleNavItemLeave}>
        <Dropdown1 />
      </Holder1>
      <Holder1 isOpen={isDropdownOpen2} onMouseLeave={handleNavItemLeave2}>
        <Dropdown2 />
      </Holder1>
      <Holder1 isOpen={isDropdownOpen3} onMouseLeave={handleNavItemLeave3}>
        <Dropdown3 />
      </Holder1>
      <Holder1 isOpen={isDropdownOpen4} onMouseLeave={handleNavItemLeave4}>
        <Dropdown4 />
      </Holder1>

      {show ? (
        <Sidebarhold onClick={Toggle}>
        <Sidebar>
          <label>ABOUT US</label>
          <NavLink to="/about" style={{textDecoration: "none"}}>
            <p>What We Do</p>
          </NavLink>
          <p>Locations</p>
          <p>Leadership</p>
          <label>BUSINESS</label>
          <p>Marketplace</p>
          <p>JumiaPay</p>
          <p>Logistics</p>
          <label>PEOPLE</label>
          <p>Find Your Dream Job</p>
          <p>Faces of Jumia</p>
          <label>PRESS</label>
          <p>News</p>
          <p>Media Kit</p>
          <NavLink to="/contact-us" style={{textDecoration: "none"}}>
            <p>CONTACT US</p>
          </NavLink>
          <Label2>INVESTORS</Label2>
          <Label2>BLOG</Label2>
          <Label2>IMPACT</Label2>
        </Sidebar>
      </Sidebarhold>
      ) : null}
    </Container>
  )
}

export default Header
const Label2 = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-top: 15px;
`
const Sidebar = styled.div`
  p{
    color: #75757a;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    margin-top: 15px;
  }
  label{
    font-size: 14px;
    font-weight: 500;
  }
  width: 220px;
  height: 100%;
  background-color: #fff;
  padding-left: 15px;
  padding-top: 10px;
  flex-direction: column;
  overflow-y: auto;
  /* z-index: 333; */
`
const Sidebarhold = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  background-color: rgba(0, 0, 0, 0.5);
  top: 70px;
  overflow: hidden;
  position: fixed;
  animation: slide-in 0.5s ease-out;

  @keyframes slide-in {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`
const Menu = styled.div`
  font-size: 23px;
  cursor: pointer;
  visibility: hidden;
  @media screen and (max-width: 768px) {
    visibility: visible;
  }
`
const Holder1 = styled.div<{isOpen: boolean}>`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #fff;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 68px;
`
const Icon = styled.div`
  font-size: 23px;
  margin-top: 5px;
  margin-left: 5px;
`
const Text = styled.div`
  font-size: 14px;
  font-weight: 500;
`
const Nav = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25px;
  color: #282828;
  cursor: pointer;
`
const Navholder = styled.div`
  display: flex;
  align-items: center;
  margin-left: 70px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
const Wrapper = styled.div`
  width: 88%;
  height: 100%;
  display: flex;
  align-items: center;
  img{
    height: 74px;
  }
  @media screen and (max-width: 768px) {
    justify-content: space-between;
    width: 95%;
  }
`
const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: relative; */
  z-index: 1;
  background-color: #fff;
  position: relative;
  position: fixed;
  @media screen and (max-width: 768px) {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    position: fixed;
  }
`