import "../styles/components.scss"
import {MdArrowDropDown} from "react-icons/md"
import CustomDropdown from "./custom/CustomDropdown"
import { FaSignOutAlt } from "react-icons/fa";

const ProfileTab = ({name,signout}:{name?:string;signout:()=>void}) => {
  
  return (

    <div className='profile_tab'>
        <div className="profile_tab_img">
            <img src="/image.png" /> 
        </div>
       <div className="profile_img_dropdown">
        <div className="profile_img_name">
            {name!=="" ?name : "Damilola"}
        </div>
        
        <CustomDropdown afterIcon={<MdArrowDropDown />}>
        <div className="ul_logout">
       <ul className="sidebar_list">
      <li>
      <div className="li_link" onClick={signout}>
                <div><FaSignOutAlt /></div>
                 <p>Logout</p></div>
      </li>
      <li className="li_version">
        v1.2.0
      </li>
     </ul>
     </div>
        </CustomDropdown>
       </div>
    </div>
  )
}

export default ProfileTab