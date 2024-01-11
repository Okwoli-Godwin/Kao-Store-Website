import React from 'react'
import Supportheader from './Supportheader'
import Subheader from './Subheader'
import Supporthero from './Supporthero'
import Accessories from './Accessories'
import Setup from './Setup'
import Faqs from './Faqs'
import { Footer } from '../../Components'

const Supportpage = () => {
  return (
    <div>
        <Supportheader />
        <Subheader />
        <Supporthero />
        <Accessories />
        <Setup />
        <Faqs />
        <Footer />
    </div>
  )
}

export default Supportpage