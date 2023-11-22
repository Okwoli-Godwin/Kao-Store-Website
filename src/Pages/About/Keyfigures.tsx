import React from 'react'
import styled from 'styled-components'

const Keyfigures = () => {
  return (
    <Container>
        <Holder>
            
        </Holder>
    </Container>
  )
}

export default Keyfigures
const Holder = styled.div`
    width: 100%;
    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
    padding-top: 20px;
    padding-bottom: 20px;
    justify-content: center;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    background-image: url('https://group-live.jumia.is/images/about/banner/key-figures.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`