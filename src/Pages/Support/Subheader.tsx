import React from 'react'
import styled from 'styled-components'
import { IoIosSearch } from "react-icons/io";

const Subheader = () => {
  return (
    <Container>
        <Wrapper>
            <h3>REGISTER YOUR PRODUCT</h3>
            <h3>RETURN ONLINE ORDER</h3>
            <h3>WARRANTY SERVICE</h3>
            <Icon><IoIosSearch /></Icon>
        </Wrapper>
    </Container>
  )
}

export default Subheader
const Icon = styled.div`
    color: #fff;
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