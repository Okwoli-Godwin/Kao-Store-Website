import React from 'react'
import styled from "styled-components"

const Supportheader = () => {
  return (
    <Container>
        <Wrapper>
            <h3>Go to Kao-Store.com</h3>
              <h2>Kao Store <p>support</p></h2>
              <Button>gffghhhhfhfhfhfhfhfhfh</Button>
        </Wrapper>
    </Container>
  )
}

export default Supportheader

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
    }
`

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 60px;
    background-color: #000000;
    justify-content: center;
`