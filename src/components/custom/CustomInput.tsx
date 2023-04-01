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
}

const CustomInput = ({name,value, error,errors,setErrorTable,disable,changeInput,placeholder,type,isError}:ICustomInput) => {
  return (
    <div className='custom_input'>
    <input
  type={type}
  value={value}
  
  name={name}
  onChange={(event)=>changeInput(event.target.value, event.target.name)}
  placeholder={placeholder}
  disabled = {disable ?true : false}
  onBlur={(e)=>{
    if(errors?.includes("required") && e.target.value === ""){
      console.log({name})
      if(setErrorTable){
        setErrorTable(prev=>prev.includes(name) ? prev : [...prev,name])
      }
    }
    if(errors?.includes("length") && e.target.value.length < 5){
      console.log(e.target.value.length)
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
  {isError && <div style={{color:"red",fontSize:"12px"}}>
{error ?? "This input is wrong"}
  </div> }
  </div>
  )
}

export default CustomInput