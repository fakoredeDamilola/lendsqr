import {useState,useEffect} from "react"
import "../../styles/dashboard.scss"
import { ITab } from "../../utils/interface"
import { numberWithCommas } from "../../utils/utilFunction"


const DashboardBox = ({icon,text,count,color}:ITab) => {
  const [value,setValue] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => {
        const nextCount = prevValue + 1;
        if (nextCount >= count) {
          clearInterval(interval);
        }
        return nextCount;
      });
    }, 3);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className='dashboard_box'>
        <div className="dashboard_box_icon" style={{background:`#${color}1A`}}>
           <img src={icon} width="20px" height="20px" />
        </div>
        <div className="dashboard_box_text">
            {text}
        </div>
        <h2 className="dashboard_box_number">
          {/* {value} */}
            {numberWithCommas(value)}
        </h2>
    </div>
  )
}

export default DashboardBox