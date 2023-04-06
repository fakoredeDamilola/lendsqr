import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import SideNav from "./SideNav";
import "../styles/main.scss"
import { useState } from "react";
import usePortal from "../hooks/usePortal";
import NotificationModal from "./modal/NotificationModal";

export default function AppWrapper({children}:{children : React.ReactNode}) {


  const[notificationModal,setNotificationModal] = useState(false)
  const [showSideNav,setShowSideNav] = useState(false)
  const Portal = usePortal(document.querySelector("#portal"));

  const Location = useLocation()
  const no_layout = ["/signin","/unauthorized"]
  return (
    <>
     {no_layout.includes(Location.pathname)  ? 
     <>
        <div>
          {children}
        </div>
     </> :  
     <>
        <Header 
        showSideNav={showSideNav}
        setShowSideNav={setShowSideNav}
        openNotificationModal={()=>setNotificationModal(!notificationModal)}
        
        />
        <SideNav showSideNav={showSideNav}/>
        <div className="children">
          {children}
        </div>
     </>
     }
  
  <Portal>
                {notificationModal && <NotificationModal closeNotification={()=>setNotificationModal(!notificationModal)} />

                }
        </Portal>
      
      </>
  )
}
