
import "../styles/components.scss"


const PasswordIndicator = ({strength,colorbackground}:{strength?:string;colorbackground:string}) => {
   
    if(strength!=="empty"){
        return (
     <div className="passowrd_container">
        <div className="passowrd_box" />
        {strength}
    </div>
  )
    }else{
        return null
    }
  
}

export default PasswordIndicator