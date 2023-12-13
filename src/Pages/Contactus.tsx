import React from 'react'
import styled from "styled-components"

const Contactus = () => {
  return (
    <Container>
        <Wrapper>
            <Hold>
                <Iconhold>
                    
                </Iconhold>
            </Hold>
        </Wrapper>
    </Container>
  )
}

export default Contactus
const Iconhold = styled.div`
    width: 60px;
    height: 60px;
    background-color: #0030AD;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
`
const Hold = styled.div`
    display: flex;
    align-items: center;
`
const Wrapper = styled.div`
    width: 88%;
    display: flex;
    height: 40px;
`

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`