import React, {useState} from 'react'
import styled from 'styled-components'
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";

const Subheader = () => {

    const [show, setShow] = useState<Boolean>(false)

    const Toggle = () => {
        setShow(!show)
    }

    const Cancle = () => {
        setShow(false);
    }

  return (
    <Container>
        <Wrapper>
                <h3>REGISTER YOUR PRODUCT</h3>
                <h3>RETURN ONLINE ORDER</h3>
                <h3>WARRANTY SERVICE</h3>
                <Icon onClick={Toggle}><IoIosSearch /></Icon>
            
        </Wrapper>
          {show ? (
              <Inputhold>
              <Search><IoIosSearch /></Search>
              <input type="text" placeholder='Search'/>
              <Close onClick={Cancle}><MdClose /></Close>
            </Inputhold>
            ) : null}
    </Container>
  )
}

export default Subheader
const Close = styled.div`
    color: #fff;
    font-size: 22px;
    cursor: pointer;
    margin-left: 15px;
`
const Search = styled.div`
    color: #fff;
    font-size: 23px;
`
const Inputhold = styled.div`
    position: absolute;
    height: 50px;
    width: 100%;
    background-color: #000;
    z-index: 10;
    align-items: center;
    display: flex;
    justify-content: center;
    transition: all 350ms ease-in-out;
    input{
        width: 500px;
        height: 30px;
        border: none;
        outline: none;
        padding-left: 15px;
        margin-left: 10px;
        background: none;
        color: #fff;
    }
`
const Icon = styled.div`
    color: #fff;
    cursor: pointer;
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 75%;
    justify-content: space-between;
    h3{
        color: #fff;
        font-size: 13px;
        font-weight: 400;
    }
`
const Container = styled.div`
    width: 100%;
    display: flex;
    height: 50px;
    justify-content: center;
    background-color: #000;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    position: sticky;
    top: 0;
`