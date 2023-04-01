
import "../styles/components.scss"

const PASSWORD ={
    weak: 1,
    medium:2,
    strong:3
}

const PasswordIndicator = ({strength,colorbackground}:{strength:string;colorbackground:string}) => {
    if(strength!=="empty"){
        return (
     <div className="passowrd_container" style={{color:colorbackground}}>
        <div className="password_box" style={{background:colorbackground,color:colorbackground,width:`${PASSWORD[Object.keys(PASSWORD).find(item=>item === strength) as keyof typeof PASSWORD]*33}%`}} />
        {strength}
    </div>
  )
    }else{
        return null
    }
  
}

export default PasswordIndicator