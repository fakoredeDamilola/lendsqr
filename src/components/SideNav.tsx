import { Link } from "react-router-dom"
import "../styles/components.scss"
import { linkLists } from "../utils/linkList"

const SideNav = () => {
  return (
    <div className="sidenav">
      <h2>Scrollable Sidebar</h2>
     {linkLists.map((list:any,index)=>{
      console.log({list})
      return (
        <ul className="sidebar_list_parent">
          {list.parent}
         {list.children.map((child:any,index:number)=>{
          return (
            <li>
              <Link to ={`/${child.link}`}>{child.name}</Link></li>
          )
         })

         } 
        </ul>
      )
     })

     }
    </div>
  )
}

export default SideNav