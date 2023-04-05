import React, { useState,useEffect } from 'react'
import BackLink from '../../components/BackLink'
import "../../styles/user.scss"
import CustomProfilePicture from '../../components/custom/CustomProfilePicture'
import { numberWithCommas } from '../../utils/utilFunction'
import { IUserTab, UserTabs, updateUser } from '../../state/user'
import UserProfileTab from '../../components/user/UserProfileTab'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../state/store'
import { IUser } from '../../utils/interface'
import NotFound from '../../components/NotFound'

const User = () => {

  const {users,user} = useSelector((state:RootState)=>state.user)
  const { id } = useParams();
  const dispatch = useDispatch()

const [loading,setLoading] = useState(true)
const [currentTab,setCurrentTab] = useState("Documents")

const fetchUserData = async () =>{
  const data = await fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`)
  const response:IUser = await data.json()
  console.log({response})
  return response
  
 }


useEffect(()=>{
const getUser = async ()=>{
const user =users.length> 0 ? 
            users.find((user:IUser) => user.id === id) :
           await fetchUserData()
  dispatch(updateUser({user:user ?? null})) 
  setLoading(false)
  }
  getUser()
},[id])


console.log({user})
const blackListUser = () =>{

}
const userBasicInfo={
  fullName:`${user?.profile.firstName} ${user?.profile.lastName}`,
  orgName: user?.orgName,
  tier:3,
  accountBalance:user?.accountBalance,
  
  bankNumber:user?.accountNumber,
  bankName:"meekmmk"
}
interface IProfileItem {
  name:string;
  value?:string
}

interface IProfileTab {
  heading:string;
  profileInfoItem:IProfileItem[]
}
const userProfileInfo:IProfileTab[] = [
  {
    heading:"Personal Information",
    profileInfoItem: [
      {
        name:"full name",
        value:`${user?.profile.firstName} ${user?.profile.lastName}`
      },
      {
        name:"phone number",
        value: user?.profile?.phoneNumber
      },
      {
        name:"email address",
        value: user?.email
      },
      {
        name:"bvn",
        value: user?.profile.bvn
      },
      {
        name:"gender",
        value: user?.profile.gender
      },
      {
        name:"marital status",
        value: "Single"
      },
      {
        name:"children",
        value: "None"
      },
      {
        name:"type of residence",
        value: user?.profile?.address
      },

    ]
  },
  {
    heading:"Education and Employment",
    profileInfoItem: [
      {
        name:"level of education",
        value:user?.education?.level
      },
      {
        name:"employment status",
        value:user?.education?.employmentStatus
      },
      {
        name:"sector of employment",
        value:user?.education?.sector
      },
      {
        name:"duration of employment",
        value:user?.education?.duration
      },
      {
        name:"office mail",
        value:user?.education?.officeEmail
      },
      {
        name:"monthly income",
        value:user?.education?.monthlyIncome.map((income)=>`₦${income}`).join(" - ")
      },
      {
        name:"loan repayment",
        value:user?.education?.loanRepayment
      },
    ]
  },
  {
    heading:"Socials",
    profileInfoItem: [
      {
        name:"twitter",
        value:user?.socials?.twitter,
      },
      {
        name:"facebook",
        value:user?.socials?.facebook,
      },
      {
        name:"instagram",
        value:user?.socials?.instagram,
      },
    ]
  },
  {
    heading:"guarantor",
    profileInfoItem:[
      {
        name:"full name",
        value:`${user?.guarantor?.firstName} ${user?.guarantor?.lastName}`
      },
      {
        name:"phone number",
        value:`${user?.guarantor?.phoneNumber}`
      },
      {
        name:"email address",
        value:`${user?.guarantor.address}`
      },
      {
        name:"relationship",
        value:`${user?.guarantor.gender}`
      },
    ]
  }
]
    return (
        <div className="user_page">
        <h2>Users</h2>
        <main className="user_page_main">
        <section className="user_page_section">
         <BackLink links={[{href:"dashboard",text:"Back to Users"}]} />
        </section>
          
        {user ? 
        <div>
<section className='user_details_section'>
          <div className="user_details">
            <h2>User Details</h2>
          </div>
          <div className="user_details_button desktop_button">
            <button onClick={blackListUser} className='user_blacklist_button'>BLACKLIST USER</button>
            <button onClick={blackListUser} className='user_activate_button'>ACTIVATE USER</button>
          </div>
         </section>
         <section className="section user_general_section">
          <div className="user_general_info_section">
             <CustomProfilePicture image={user?.profile?.avatar} name="" style={{width:"100px",height:"100px"}} size="40px" color="blue" />
          <div className="user_section_one_text">
        <h3>{userBasicInfo.fullName}</h3>
        <p>{userBasicInfo.orgName}</p>
          </div>
          <div className="user_section_one_text user_tier">
        <p>User’s Tier</p>
        <p>{userBasicInfo.tier} stars</p>
          </div>
          <div className="user_section_one_text">
        <h3>N{numberWithCommas(userBasicInfo.accountBalance)}</h3>
        <p>{userBasicInfo.bankNumber}/{userBasicInfo.bankName}</p>
          </div>
          </div>
          <div className="user_details_button mobile_button">
            <button onClick={blackListUser} className='user_blacklist_button'>BLACKLIST USER</button>
            <button onClick={blackListUser} className='user_activate_button'>ACTIVATE USER</button>
          </div>
          <div className="user_section_one_tabs">
             {UserTabs.map((tab:string,index:number)=>{
            return (
              <div key={index} className={`user_section_one_tab ${currentTab === tab ?"selected":""}`} onClick={()=>setCurrentTab(tab)}>
                {tab}
              </div>
            )
          })

          }
          </div>
         
         </section>
         <section className=" section">
         {currentTab === IUserTab.GENERAL_DETAILS ?
          <div>
            {userProfileInfo.map((profileInfo:IProfileTab,index:number)=>{
              console.log({userProfileInfo})
              return (
                <UserProfileTab
                key={index} 
                profileItem={profileInfo}
                />
              )
            })

          }
          </div>:
          <div className='not-found-tab'>
           <h1>Coming soon</h1>
          </div>
          }
          
         </section>

        </div>
         : <div className="user_not_found">
         <NotFound title="No User Found" text="uh-oh....we understand what you feel" />
         <Link to="/dashboard">Go back home</Link>
       </div>}
        </main>
        
    
        </div>
      )
}

export default User