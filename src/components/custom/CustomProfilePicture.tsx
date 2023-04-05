import { AiOutlineUser } from "react-icons/ai";
import "../../styles/components.scss"

const CustomProfilePicture = ({name,image,color,style,size}:{name:string;image:string;color:string;style:any;size:string}) => {
  return (
    <div className="custom_wrapper">

       <div className="custom_picture" style={{...style}}>
        {image ?<img src={image} /> : <AiOutlineUser size={size}/>}
    </div>
    </div>
   
  )
}

export default CustomProfilePicture