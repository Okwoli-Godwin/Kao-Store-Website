import React, {useState} from 'react'
import styled from 'styled-components'
import { IoIosSearch } from "react-icons/io";

const Subheader = () => {

    const [show, setShow] = useState<Boolean>()

  return (
    <Container>
        <Wrapper>
                <h3>REGISTER YOUR PRODUCT</h3>
                <h3>RETURN ONLINE ORDER</h3>
                <h3>WARRANTY SERVICE</h3>
                <Icon><IoIosSearch /></Icon>
            
        </Wrapper>
            <Inputhold>
              <Search><IoIosSearch /></Search>
              <input type="text" />
            </Inputhold>
    </Container>
  )
}

export default Subheader
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
    input{
        width: 500px;
        height: 30px;
        border: none;
        outline: none;
        padding-left: 15px;
        margin-left: 15px;
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