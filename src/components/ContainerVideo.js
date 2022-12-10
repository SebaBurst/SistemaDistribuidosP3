import React from 'react'
import './styles.css'
function ContainerVideo() {
  return (
    <div className='ContainerVideo'>
        <div className='titleVideo'>
            <p>Memes de los Simpson</p>
        </div>
        <div className='video'>
            <iframe width="1000" height="564" src="https://www.youtube.com/embed/Y7jiPpwSt3s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>


    </div>
  )
}

export default ContainerVideo