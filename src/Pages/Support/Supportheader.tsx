import React, {useState} from 'react'
import styled from "styled-components"
import { Twirl as Hamburger } from 'hamburger-react'

const Supportheader = () => {
    const [show, setShow] = useState(false)

  const Toggle = () => {
    setShow(!show)
  }
  return (
    <Container>
        <Wrapper>
              <h3>Go to Kao-Store.com</h3>
              <Menu onClick={Toggle}><Hamburger size={20}/></Menu>
              <h2>Kao Store <p>support</p></h2>
              <Button>gffghhhhfh</Button>
        </Wrapper>
    </Container>
  )
}

export default Supportheader
const Menu = styled.div`
  font-size: 23px;
  cursor: pointer;
  color: #fff;
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`

const Button = styled.div`
    visibility: hidden;
`

const Wrapper = styled.div`
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-between;
    h2{
        font-size: 21px;
        color: #fff;
        width: 130px;
        text-align: center;
        margin: 0;
        p{
            font-size: 15px;
            margin: 0;
        }
    }
    h3{
        color: #ffffffb2;
        font-size: 16px;
        @media screen and (max-width: 768px) {
            display: none;
        }
    }
`

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 60px;
    background-color: #000000;
    justify-content: center;
    @media screen and (max-width: 768px) {
        position: fixed;
        z-index: 30;
    }
`