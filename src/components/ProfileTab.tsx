import "../styles/components.scss"
import {MdArrowDropDown} from "react-icons/md"

const ProfileTab = () => {
  return (
    <div className='profile_tab'>
        <div className="profile_tab_img">
            <img src="/image.png" /> 
        </div>
       <div className="profile_img_dropdown">
        <div className="profile_img_name">
            Damilola
        </div>
        <div className="profile_img_dropdown_icon">
            <MdArrowDropDown />
        </div>
       </div>
    </div>
  )
}

export default ProfileTab