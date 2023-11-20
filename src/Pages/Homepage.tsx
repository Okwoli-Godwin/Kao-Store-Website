import React from 'react'
import Hero from './Hero'
import styled from 'styled-components'

const Homepage = () => {
  return (
    <Holder>
      <Hero />
    </Holder>
  )
}

export default Homepage
const Holder = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 70px;
  @media screen and (max-width: 768px) {
    padding-top: 40px;
  }
`