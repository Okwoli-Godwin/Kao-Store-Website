import React from 'react'
import Hero from './Hero'
import styled from 'styled-components'
import Digital from './Digital'
import Empower from './Empower'
import Latestnews from './Latestnews'
import Hero2 from './Hero2'
import CardImage from './CardImage'

const Homepage = () => {
  return (
    <Holder>
      <Hero2 />
      <Hero />
      <CardImage />
      <Digital />
      <Empower />
      <Latestnews />
    </Holder>
  )
}

export default Homepage
const Holder = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 10px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    padding-top: 40px;
  }
  @media screen and (max-width: 768px) {
    padding-top: 10px;
  }
`