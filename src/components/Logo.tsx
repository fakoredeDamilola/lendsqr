import React from 'react'
import "../styles/components.scss"


const Logo = ({text}:{text:boolean}) => {
  return (
    <div className='logo'>
        <img src="/logo.svg" /> 
        {text && <h1>
            lendsqr
        </h1>}
    </div>
  )
}

export default Logo