import React from 'react'
import "../../styles/components.scss"

interface IButton {
    children:React.ReactNode;
    onClick:()=>void;
    disabled?:boolean;
}
const CustomButton = ({children,onClick,disabled,}:IButton) => {
  return (
    <button onClick={onClick} disabled={disabled}>
        {children}
    </button>
  )
}

export default CustomButton