import { useEffect, useState } from "react"
import "../styles/components.scss"
import Logo from "./Logo"
import CustomInput from "./custom/CustomInput"
import ProfileTab from "./ProfileTab"
import { Link } from "react-router-dom"
import useDebounce from "../hooks/useDebounce"
import {AiOutlineSearch} from "react-icons/ai"
import {IoIosNotificationsOutline} from "react-icons/io"

const Header = () => {
  const [search,setSearch] = useState("")
  const debouncedQuery = useDebounce(search, 300);
  const handleInput = (name:string,value:string)=>{
    setSearch(value)
  }

  useEffect(()=>{
    console.log({debouncedQuery})
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
        changeInput={(value,name)=>handleInput(name,value)}
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
           <IoIosNotificationsOutline />
          </div>
          <ProfileTab />
        </div>
  </div>
  
  )
}

export default Header