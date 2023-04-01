import Header from "./Header";
import SideNav from "./SideNav";

export default function AppWrapper({children}:{children : React.ReactNode}) {

  
  return (
    <div>
      <Header />
      <SideNav />
      {children}
      
      </div>
  )
}
