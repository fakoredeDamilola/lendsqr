import { BsArrowsAngleExpand } from "react-icons/bs"
import "../../styles/components.scss"
import CustomModal from '../custom/CustomModal'
import { AiOutlineClose } from "react-icons/ai"

const NotificationModal = ({closeNotification}:{closeNotification:()=>void}) => {
  return (
    <CustomModal>
      <div className='notification_modal'>
        <div className="notification_modal_cover">
            <div className="notification_modal_header">
        <div className="notification_modal_container">
          
          <div>
             <h3>Notification</h3>
          </div>
        <div className="notification_modal_icon">
          <div onClick={()=>closeNotification()}>
            <AiOutlineClose />
          </div>
        </div>
        </div>
       <div className="notification_body">
        <h2>Nothing to see here</h2>
       </div>
            </div>
        </div>
      </div>
   
    
   </CustomModal>
 
  )
}

export default NotificationModal