import { Link } from "react-router-dom"
import "../styles/components.scss"
import { IChild, ILinks, linkLists } from "../utils/linkList"

const SideNav = () => {
  return (
    <div className="sidenav">
     {linkLists.map((list:ILinks,index:number)=>{
      return (
        <ul className="sidebar_list" key={index}>
          <li className="sidebar_list_parent">{list.parent}</li>
         {list.children.map((child:IChild,index:number)=>{
          return (
            <li key={index} className="sidebar_list_child">
              <Link className="li_link" to ={`/${child.link}`}>
                <div>{child.icon}</div>
                 <p>{child.name}</p></Link></li>
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