import React from 'react'
import styled from 'styled-components'

const Faqs = () => {
  return (
    <Container>
        <Wrapper>
            <h2>FAQS</h2>
        </Wrapper>
    </Container>
  )
}

export default Faqs
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`