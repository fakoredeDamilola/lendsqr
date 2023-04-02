import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import SideNav from "./SideNav";

export default function AppWrapper({children}:{children : React.ReactNode}) {

  const Location = useLocation()
  console.log({Location})
  const no_layout = ["/signin"]
  return (
    <div>
     {no_layout.includes(Location.pathname) ? null :
     <>
     <Header />
      <SideNav />
     </>
     }
      {children}
      
      </div>
  )
}
