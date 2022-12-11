import React from 'react'
import Banner from './Banner'
import Container from './Container'
import ContainerCrud from './ContainerCrud'
import Footer from './Footer'

function home() {
  return (
    <div>
        <Banner/>
        <ContainerCrud/>

        <Footer/>
    </div>
  )
}

export default home