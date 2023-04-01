import { useState } from "react"
import CustomInput from "../../components/custom/CustomInput"
import Logo from "../../components/Logo"
import PasswordIndicator from "../../components/PasswordIndicator"
import "../../styles/signin.scss"
import { confirmPassword } from "../../utils/utilFunction"
import CustomButton from "../../components/custom/CustomButton"

const Signin = () => {
const [signinObj,setSigninObj] = useState({
email:"",
password:""
})
const [disableButton,setDisableButton] = useState(false)
const [errorTable,setErrorTable] = useState<Array<string>>([])
const [passwordIndicator,setPasswordIndicator] = useState("empty")

const handleInput = (name:string,value:string) => {
  setErrorTable([])
    setSigninObj((prevState) => {
        return {
            ...prevState,
            [name]:value
        }
    })
    if(name==="password"){
        confirmPassword(value)
    }
    if(errorTable.length=== 0){
      setDisableButton(false)
    }else{
      setDisableButton(true)
    }
}

const signIn = () => {
  console.log(12)
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
            <h1>Welcome!</h1>
          <p>Enter details to login.</p>
            </div>
          
          <div className="custom_input" > 
        <label htmlFor="email">Email</label>
        <CustomInput
        placeholder='Enter your email'
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
        <label>Password</label>
        <CustomInput
        placeholder='****'
        type="password"
        isError={errorTable.includes("password") || errorTable.includes("passLength") && true}
        error ={errorTable.includes("password") ? "Please enter a password" : errorTable.includes("passLength") ? "length is less than 8": ""}
        name="password"
        setErrorTable={setErrorTable}
        value={signinObj.password}
        changeInput={(value,name)=>handleInput(name,value)}
        errors={["required","password"]}
        />
       <PasswordIndicator strength={passwordIndicator} colorbackground={colorbackground} />
        </div>
        <div className="forget_password">
          <p>Forget password</p>
        </div>
        <div className="sigin_button">
          <CustomButton onClick={signIn}>
            Sign in
          </CustomButton>
        </div>
          </div>
      </div>
    </div>
  )
}

export default Signin