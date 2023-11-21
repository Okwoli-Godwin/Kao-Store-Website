import React from 'react'
import Hero from './Hero'
import styled from 'styled-components'
import Digital from './Digital'
import Empower from './Empower'
import Commitment from './Commitment'

const Homepage = () => {
  return (
    <Holder>
      <Hero />
      <Digital />
      <Empower />
      {/* <Commitment /> */}
    </Holder>
  )
}

export default Homepage
const Holder = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 10px;
  @media screen and (max-width: 768px) {
    padding-top: 40px;
  }
  @media screen and (max-width: 768px) {
    padding-top: 10px;
  }
`