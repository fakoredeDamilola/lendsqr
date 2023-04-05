import { useEffect, useState } from "react"
import "../styles/components.scss"
import Logo from "./Logo"
import CustomInput from "./custom/CustomInput"
import ProfileTab from "./ProfileTab"
import { Link } from "react-router-dom"
import useDebounce from "../hooks/useDebounce"
import {AiOutlineSearch} from "react-icons/ai"
import {IoIosNotificationsOutline} from "react-icons/io"
import { searchArray } from "../utils/utilFunction"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../state/store"
import { changeFilterSearch } from "../state/user"
import { RxHamburgerMenu } from "react-icons/rx"

interface IHeaderProps {
  openNotificationModal:()=>void;
  showSideNav:boolean;
  setShowSideNav:React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({openNotificationModal,showSideNav,setShowSideNav}:IHeaderProps) => {
  const [search,setSearch] = useState("")
  const debouncedQuery = useDebounce(search, 400);
  const handleInput = (value:string)=>{
    setSearch(value)
  }
  const {users} = useSelector((state:RootState)=>state.user)
  const dispatch = useDispatch()

  useEffect(()=>{
    console.log({debouncedQuery})
  const user= searchArray(users,debouncedQuery)

  dispatch(changeFilterSearch({search:debouncedQuery,users:user,main_users:users}))
 
  },[debouncedQuery])
  return (
    <div className="header">
    <div className="logo_wrapper">
      <Link to="/" style={{textDecoration:"none"}}>
       <Logo text={true}  />
      </Link>
       
    </div>
    
    <div className="custom_input header_input"  >
        <CustomInput
        placeholder='Search for anything'
        type="string"
        isError={false}
        name="password"
        // setErrorTable={setErrorTable}
        value={search}
        changeInput={(value,name)=>handleInput(value)}
        errors={["required","password"]}
       
        >
        <div className="input_side_text header_input_side_text" onClick={()=>{}}>
        <AiOutlineSearch />
        </div>
          </CustomInput>
        </div>
        <div className="header_ending_nav">
          <div className="header_ending_nav_docs">
            Docs
          </div>
          <div className="header_ending_nav_notification">
           <IoIosNotificationsOutline onClick={openNotificationModal}/>
          </div>
          <ProfileTab />
        </div>
        <div className="hamburger_menu">
          <RxHamburgerMenu size="22px" cursor="pointer" onClick={()=>setShowSideNav(!showSideNav)}/>
        </div>
  </div>
  
  )
}

export default Header