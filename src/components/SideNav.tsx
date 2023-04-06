import { Link, useNavigate } from "react-router-dom"
import "../styles/components.scss"
import { IChild, ILinks, dropdownLinks, fastLinks, linkLists } from "../utils/linkList"
import { FaSignOutAlt } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../state/store"
import { switchSideBarTab } from "../state/user"
import CustomDropdown from "./custom/CustomDropdown"
import { GiSuitcase } from "react-icons/gi"
import { IoMdArrowDropdown } from "react-icons/io"
import useLocalStorage from "../hooks/useLocalStorage"


const SideNav = ({showSideNav}:{showSideNav:boolean}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
const {currentSideTab} = useSelector((state:RootState)=>state.user)

const [auth,setAuth] = useLocalStorage("auth",true)
const [loginDetails,setLoginDetails] = useLocalStorage("loginDetails",{email:"",password:""})

const signout = () =>{
  setAuth(false)
  setLoginDetails({email:"",password:""})
  navigate("/signin")
}

const selectTab = (name:string) => {
  dispatch(switchSideBarTab({sidetab:name}))
}


  return (
    <div className={`sidenav ${showSideNav ? 'open' : ''}`} >
      <ul>
        <li className="sidebar_list_child sidebar_first">
                {dropdownLinks.map((orgs:IChild,index:number)=>{
        return (
          

             <CustomDropdown beforeIcon={<GiSuitcase size="16px"/>} left="0" afterIcon={<IoMdArrowDropdown size="16px"/>} title="Switch Organization" key={index} width="100%" >
            {orgs.org &&  orgs?.org.map((orgObj,index)=>{
              return (
                <ul key={index} className="sidebar_list_child">
                   <li>
                  <div >{orgObj.name}</div>
                  </li>
                </ul>
             
                  
              )
            })

            }
          </CustomDropdown>
         
         
        )
      })

      }
        </li>


      </ul>
      <ul className="sidebar_fast_link">
        {fastLinks.map((child:IChild,index:number)=>{
          return (
            <li 
           
            key={index} className={`sidebar_list_child ${child.name.toLowerCase() === currentSideTab.toLowerCase() ? "selectedTab" : ""}`}>
              <Link className="li_link" onClick={()=>selectTab(child.name)} to ={`/${child.link}`}>
                <div>{child.icon}</div>
                 <p>{child.name}</p></Link></li>
          )
         })

         }
      </ul>
       
     {linkLists.map((list:ILinks,index:number)=>{
      return (
        <ul className="sidebar_list" key={index}>
          <li className="sidebar_list_parent">{list.parent}</li>
         {list.children.map((child:IChild,index:number)=>{
          return (
            <li 
           
            key={index} className={`sidebar_list_child ${child.name.toLowerCase() === currentSideTab.toLowerCase() ? "selectedTab" : ""}`}>
              <Link className="li_link" onClick={()=>selectTab(child.name)} to ={`/${child.link}`}>
                <div>{child.icon}</div>
                 <p>{child.name}</p></Link></li>
          )
         })

         } 

        </ul>
      )
     })

     }
     <div className="ul_logout">
       <ul className="sidebar_list">
      <li>
      <div className="li_link" onClick={signout}>
                <div><FaSignOutAlt /></div>
                 <p>Logout</p></div>
      </li>
      <li className="li_version">
        v1.2.0
      </li>
     </ul>
     </div>
    
    </div>
  )
}

export default SideNav