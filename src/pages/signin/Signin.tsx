import { useState,useEffect } from "react"
import CustomInput from "../../components/custom/CustomInput"
import Logo from "../../components/Logo"
import PasswordIndicator from "../../components/PasswordIndicator"
import "../../styles/signin.scss"
import { checkForError, confirmPassword } from "../../utils/utilFunction"
import CustomButton from "../../components/custom/CustomButton"
import useLocalStorage from "../../hooks/useLocalStorage"
import { useNavigate } from "react-router-dom"

const Signin = () => {
const [signinObj,setSigninObj] = useState({
email:"",
password:""
})
const [disableButton,setDisableButton] = useState(true)
const [errorTable,setErrorTable] = useState<Array<string>>([])
const [passwordIndicator,setPasswordIndicator] = useState("empty")
const [authToken,setAuthToken] = useLocalStorage("auth",false)
const [loginDetails,setLoginDetails] = useLocalStorage("loginDetails",{email:"",password:""})
const [passwordType,setPasswordType] = useState(true)

const navigate = useNavigate()

useEffect(()=>{
  if(errorTable.length=== 0 && passwordIndicator==="strong"|| passwordIndicator==="medium"){
    setDisableButton(false)
  }else{
    setDisableButton(true)
  }
},[passwordIndicator,errorTable])

const handleInput = (name:string,value:string) => {
  setErrorTable([])
    setSigninObj((prevState) => {
        return {
            ...prevState,
            [name]:value
        }
    })
    if(name==="password"){
       const password = confirmPassword(value)
        setPasswordIndicator(password)
    }
    
}

const signIn = () => {
  const arr= checkForError(signinObj,[])
  setErrorTable([...arr])
  if(arr.length===0){
    setAuthToken(true)
    setLoginDetails(signinObj)
   navigate("/dashboard")
  }
}

const colorbackground = passwordIndicator ==="weak" ? "red": passwordIndicator==="medium" ? "orange" : "green"

  return (
    <div className='container'>
      <div className="wrapper">
        <div className="signin_img">
          <div className="logo_cover">
            <Logo text={true} />
          </div>
          <div className="signin_picture">
              <img src="/pablo.svg" />
          </div>
            
          </div>
          <div className="signin_text">
            <div className="signin_txt">
              <div className="mobile_logo">
              <Logo text={true} />
              </div>
            <h1>Welcome!</h1>
          <p>Enter details to login.</p>
            </div>
          
          <div className="custom_input" > 
        <CustomInput
        placeholder='Email'
        type="email"
        name="email"
        isError={errorTable.includes("email")}
        error ={errorTable.includes("email") ? "Put enter a email" : ""}
        setErrorTable={setErrorTable}
        value={signinObj.email}
        changeInput={(value,name)=>handleInput(name,value)}
        errors={["required"]}
        />
        </div>
        <div className="custom_input"  >
        <CustomInput
        placeholder='password'
        type={passwordType ?"password":"string"}
        isError={errorTable.includes("password") || errorTable.includes("passLength") && true}
        error ={errorTable.includes("password") ? "Please enter a password" : ""}
        name="password"
        setErrorTable={setErrorTable}
        value={signinObj.password}
        changeInput={(value,name)=>handleInput(name,value)}
        errors={["required","password"]}
        >
          <div className="input_side_text" onClick={()=>setPasswordType(!passwordType)}>
              
          {passwordType ? "SHOW" :"HIDE"}
            </div>
          </CustomInput>
       <PasswordIndicator strength={passwordIndicator} colorbackground={colorbackground} />
        </div>
        <div className="forget_password">
          <p>FORGOT PASSW0RD?</p>
        </div>
        <div className="sigin_button">
          <CustomButton onClick={signIn} disabled={disableButton}>
            LOG IN
          </CustomButton>
        </div>
          </div>
      </div>
    </div>
  )
}

export default Signin