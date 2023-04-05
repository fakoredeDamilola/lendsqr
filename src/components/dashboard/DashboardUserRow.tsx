import { BiDotsVerticalRounded } from "react-icons/bi";
import "../../styles/dashboard.scss"
import { diffInYears, formatDate } from "../../utils/utilFunction";
import CustomDropdown from "../custom/CustomDropdown";
import { IUserRow } from "../../utils/interface";
// import { getStatusInfo } from "../../utils/utilFunction";



const DashboardUserRow = ({organization,username,email,phoneNumber,date_joined,last_active,dotDropdown,id}:IUserRow) => {
  return (
    <tr className='dashboard_user_row'>
      <td>
        <p>{organization}</p>
      </td>
      <td>
       <p>{username}</p> 
      </td>
      <td>
       <p>{email}</p> 
      </td>
      <td>
       <p>{phoneNumber}</p> 
      </td>
      <td>
       <p>{formatDate(date_joined)}</p> 
      </td>
      <td>
       <p className="dashboard_status" style={{background:`${diffInYears(last_active).color}1A`,color:diffInYears(last_active).color}}>{diffInYears(last_active).text}</p> 
      </td>
      <td>
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
      </td>
    </tr>
  )
}

export default DashboardUserRow