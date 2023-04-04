import "../../styles/dashboard.scss"
import { ITab } from "../../utils/interface"
import { numberWithCommas } from "../../utils/utilFunction"


const DashboardBox = ({icon,text,count,color}:ITab) => {
  return (
    <div className='dashboard_box'>
        <div className="dashboard_box_icon" style={{background:`#${color}1A`}}>
           <img src={icon} width="20px" height="20px" />
        </div>
        <div className="dashboard_box_text">
            {text}
        </div>
        <h2 className="dashboard_box_number">
            {numberWithCommas(count)}
        </h2>
    </div>
  )
}

export default DashboardBox