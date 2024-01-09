import React from 'react'
import styled from 'styled-components'
import img from "../../Assets/support.jpg"

const Supporthero = () => {
  return (
    <Container>
        
    </Container>
  )
}

export default Supporthero

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`