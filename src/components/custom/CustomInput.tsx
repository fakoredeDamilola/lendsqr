import React from 'react'
import "../../styles/components.scss"


interface ICustomInput {
    name:string;
    value:string;
    changeInput:(name:string,value:string) => any
    placeholder:any;
    type:string;
    isError?:boolean;
    error?:string
    setErrorTable?:React.Dispatch<React.SetStateAction<string[]>>
    errors?:string[];
    disable?:boolean;
    label?:string;
    borderRadius?:string;
    children?:React.ReactNode;
}

const CustomInput = ({name,value,borderRadius, error,errors,setErrorTable,disable,changeInput,placeholder,type,isError,label,children}:ICustomInput) => {
  return (
    <>
     {type ==="select" ? 
    <div className='custom_input'>
   {label && <div className="label_input">{label}</div>}

    <select name={name} id={name} onChange={(e)=>changeInput(e.target.value,name)}>
  {children}
    </select>
    </div> :
  <div className='custom_input'>
      {label && <div className="label_input">{label}</div> }
    <input
  type={type}
  value={value}
  style={{borderRadius:borderRadius ?? "4px"}}
  name={name}
  onChange={(event)=>changeInput(event.target.value, event.target.name)}
  placeholder={placeholder}
  disabled = {disable ?true : false}
  onBlur={(e)=>{
    if(errors?.includes("required") && e.target.value === ""){
      if(setErrorTable){
        setErrorTable(prev=>prev.includes(name) ? prev : [...prev,name])
      }
    }
    if(errors?.includes("length") && e.target.value.length < 5){
      if(setErrorTable){
        setErrorTable(prev=>prev.includes(name) ? prev : [...prev,"length"])
      }
    }
    if(errors?.includes("password") && e.target.value.length <8){
     
      if(setErrorTable){
        setErrorTable(prev=>prev.includes(name) ? prev : [...prev,"passLength"])
      }
    }
  }}
  />
  {children}
  {isError && <div style={{color:"red",fontSize:"12px"}}>
{error ?? "This input is wrong"}
  </div> }
  </div>

    }
    </>
   
  
  )
}

export default CustomInput