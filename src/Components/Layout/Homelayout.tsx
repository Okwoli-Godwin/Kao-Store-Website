import React from 'react'
import { Outlet } from "react-router-dom"
import { Footer, Header2 } from '../Static'

const Homelayout = () => {
  return (
    <div>
        <Header2 />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Homelayout