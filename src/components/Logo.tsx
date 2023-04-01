import React from 'react'
import "../styles/components.scss"


const Logo = ({text}:{text:boolean}) => {
  return (
    <div className='logo'>
        <img src="/logo.svg" /> 
        {text && <div>
            lendsqr
        </div>}
    </div>
  )
}

export default Logo