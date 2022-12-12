import React from 'react'
import './styles.css'

function changeView(e) {
    e.preventDefault();
    window.location = '/video';

  }
function Card({ image, name }) {
    return (
        <div className='card-pad' onClick={changeView}>
            <div className='card-bg'>
                <div className='card-image'>
                    <img src={image} />
                </div>
                <div className='title-card'>
                    <p>{name}</p>
                </div>
                
            </div>





        </div>
    )
}

export default Card