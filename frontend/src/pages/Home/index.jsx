import React from 'react'
import { About } from '../../components'
import { documentTitle } from '../../utils'

const Home = () => {
 // page title 
  documentTitle("Resturant Web");

  return (
    <About />
  )
}

export default Home