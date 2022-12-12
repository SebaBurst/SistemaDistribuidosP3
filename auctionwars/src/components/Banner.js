import React from 'react'
import Logo from '../img/logo.png';
function Banner() {
    
    return (
        <div className='banner'>
            <img src={Logo} style={{
                width: '310px',
                marginLeft: '0em',
            }} alt="User avatar"
            />


        </div>
    )
}

export default Banner