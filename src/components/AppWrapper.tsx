import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import SideNav from "./SideNav";
import "../styles/main.scss"

export default function AppWrapper({children}:{children : React.ReactNode}) {

  const Location = useLocation()
  const no_layout = ["/signin"]
  return (
    <div>
     {no_layout.includes(Location.pathname)  ? 
     <>
     <div>
      {children}
     </div>
     </>:  <>
     <Header />
      <SideNav />   <div className="children">
      {children}
     </div>
     </>
     }
  
      
      
      </div>
  )
}
