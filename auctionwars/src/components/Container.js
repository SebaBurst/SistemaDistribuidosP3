import React from 'react'
import Card from './Card'
import ContainerCard from './ContainerCard'
import './styles.css'
function Container() {
  return (
    <div>
        <div className='container-bg'>
            <ContainerCard/>
        </div>
    </div>
  )
}

export default Container