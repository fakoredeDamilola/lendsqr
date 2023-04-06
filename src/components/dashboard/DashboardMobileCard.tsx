import { BiDotsVerticalRounded } from "react-icons/bi"
import "../../styles/dashboard.scss"
import { IUserRow } from "../../utils/interface"
import { diffInYears, formatDate } from "../../utils/utilFunction"
import CustomDropdown from "../custom/CustomDropdown"

const DashboardMobileCard = ({organization,username,email,phoneNumber,date_joined,last_active,dotDropdown,id}:IUserRow) => {
  return (
    <div className="dashboard_mobile_card">
      <div className="dashboard_mobile_dots">
      <CustomDropdown afterIcon={<BiDotsVerticalRounded />} width="180px">
     {dotDropdown.map((item,index)=>{
        return (
          <div key={index} className="dashboard_dots" onClick={()=>item.onclick(id)}>
            {item.icon}
            <p>{item.text}</p>
          </div>
        )
     })

     }
      </CustomDropdown>
      </div>
      <div className="dashborad_mobile_item">
        <h4>organization</h4>
        <p>{organization}</p>
      </div>
      <div className="dashborad_mobile_item">
        <h4>username</h4>
        <p>{username}</p>
      </div>
      <div className="dashborad_mobile_item">
        <h4>email</h4>
        <p>{email}</p>
      </div>
      <div className="dashborad_mobile_item">
        <h4>date joined</h4>
        <p>{formatDate(date_joined)}</p>
      </div>
      <div className="dashborad_mobile_item">
        <h4>status</h4>
      <div className="dashboard_status" style={{background:`${diffInYears(last_active).color}1A`,color:diffInYears(last_active).color}}>   {diffInYears(last_active).text}</div> 
      </div>
    </div>
  )
}

export default DashboardMobileCard