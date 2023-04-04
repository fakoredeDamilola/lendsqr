import { useQuery } from "@tanstack/react-query"
import {useState} from "react"
import DashboardBox from "../../components/dashboard/DashboardBox"
import {useDispatch,useSelector} from "react-redux"
import "../../styles/dashboard.scss"
import { ITab, IUser } from "../../utils/interface"
import { useNavigate } from "react-router-dom"
import {  changeUserPage, updateUsers } from "../../state/user"
import DashboardUserRow from "../../components/dashboard/DashboardUserRow"
import { RootState } from "../../state/store"
import Pagination from "../../components/Pagination"
import NotFound from "../../components/NotFound"
import CustomDropdown from "../../components/custom/CustomDropdown"
import { dashboard_tab } from "../../utils/utilData"
import CustomInput from "../../components/custom/CustomInput"
import { AiOutlineEye, AiOutlineUserAdd } from "react-icons/ai"
import { FiUserX } from "react-icons/fi"
import { BiFilter } from "react-icons/bi"



const table_header = ["ORGANIZATION","USERNAME","EMAIL","PHONE NUMBER","DATE JOINED","STATUS",""]

const Dashboard = () => {
const dispatch = useDispatch()
const navigate = useNavigate()

  const fetchCountries = async () =>{
    const data = await fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`)
    const response:IUser[] = await data.json()
    console.log({response})
    dispatch(updateUsers({users:response})) 
    return response
    
   }
 
   const [searchFilter,setSearchFilter] = useState({
    organization:"",
    username:"",
    email:"",
    date:"",
    "phone number":"",
    status:""
   })
 const searchFilterDropdown = {
  "organization":[
    {name:"organization",value:"org1"},
    {name:"organization",value:"org2"},
    {name:"organization",value:"org3"},
  ],
  "status":[
    {name:"status",value:"stat1"},
    {name:"status",value:"stat2"},
    {name:"status",value:"stat3"},
  ]
 }
 
 console.log({searchFilter})
//  const searchFilterDropdown = ["organization","status"]
 
 const {userListOnPage,userPerPage,currentPage,users} = useSelector((state:RootState)=>state.user)
 
   const {data,status,isLoading} = useQuery(['users'],fetchCountries )
   console.log({data,status,isLoading})

   const changePage = (page:number) =>{
    dispatch(changeUserPage({page,users}))
   }
   const resetForm = () =>{
    setSearchFilter({
      organization:"",
      username:"",
      email:"",
      date:"",
      "phone number":"",
      status:""
     })
   }
   const filterForm = () => {

   }
   const blacklistUser = () =>{

   }
   const activateUser = () =>{

   }
   const viewUser = (id:string) => {
    console.log({id})
    navigate(`/user/${id}`)
    
   }

   const dotDropdown = [
    {icon:<AiOutlineUserAdd />, text:"View Details",onclick:viewUser},
    {icon:<FiUserX />, text:"Blacklist User",onclick:blacklistUser},
    {icon:<AiOutlineEye />, text:"Activate User",onclick:activateUser}
   ]

  return (
    <div className="dashboard">
    <h2>Users</h2>
    <main className="dashboard_main">
    <section className="dashboard_tabs">
      {dashboard_tab.map((tab:ITab,index:number)=>{
        return (
          <DashboardBox 
          icon={tab.icon}
          text={tab.text}
          count={tab.count}
          color={tab.color}
          key={index}
          />
        )
      })

      }
    </section>
      <section className="dashboard_table_containers">
        {userListOnPage.length >0 ?  <table className="dashboard_table_users">
          <thead>
             <tr className="dashboard_table_head">
          {table_header.map((col,index)=>{
            return (
              <th className="dashboard_head_item" key={index}> {col!=="" ? 
              <CustomDropdown afterIcon={<BiFilter />} toggleDropdown={()=>{}} title={col}>
                {Object.keys(searchFilter).map((item,index)=>{
                  return  <div key={index} className="dropdown_input">
                     <CustomInput 
                    name={item}
                    value={searchFilter[item as keyof typeof searchFilter]}
                    error="false"
                    borderRadius="8px"
                    setErrorTable={()=>{}}
                    disable={false}
                    placeholder={item}
                    label={item}
                    type={Object.keys(searchFilterDropdown).includes(item) ? "select" : item==="phone number" ? "number": "string"}
                    changeInput={(value:string,name:string)=>setSearchFilter((prevState)=>({...prevState,[name]:value}))}
                  >
                    {Object.keys(searchFilterDropdown).includes(item) ?
                    <>
                    {searchFilterDropdown[item as keyof typeof searchFilterDropdown].map((obj,index)=>{
                      return (
                        <option value={obj.value}>{obj.value}</option>
                      )
                    })

                    }
                    </>:null }
                    </CustomInput>
                  </div>
                 
                })

                }
                <div className="dropdown_button">
                  <button className="dropdown_reset" onClick={resetForm}>Reset</button>
                  <button className="dropdown_continue"onClick={filterForm}>Filter</button>
                </div>
              </CustomDropdown>
              : null} </th>
            )
          })}
        </tr>
          </thead>
        <tbody>
        {userListOnPage.map((user:IUser)=>{
            return (
              <DashboardUserRow 
                key={user.id}
                organization={user.orgName}
                username={user.userName}
                email={user.email}
                phoneNumber={user.phoneNumber}
                date_joined={user.createdAt}
                last_active={user.lastActiveDate}
                id={user.id}
                dotDropdown={dotDropdown}

              />
            )
          })}
        </tbody>
         
        {/* </div> */}
        </table> : <div className="dashboard_not_found">
            <NotFound title="No User Found" text="uh-oh....this is a problem" />
          </div>
            
          }
      </section>
{ userListOnPage.length >0 ?      <section className="dashboard_numbering">
        <div className="dashboard_count">
          <p>Showing</p> <div className="dropdown_select">
          <CustomInput 
                    name="dropdown"
                    value={`${userPerPage}`}
                    error="false"
                    borderRadius="8px"
                    setErrorTable={()=>{}}
                    disable={false}
                    placeholder={userPerPage}
                    type="select"
                    changeInput={(value:string,name:string)=>setSearchFilter((prevState)=>({...prevState,[name]:value}))}
                  >
                   
                    <>
                    {[10,20,30,40,50,60,70,80,90,100].map((value,index)=>{
                      return (
                        <option value={value}>{value}</option>
                      )
                    })

                    }
                    </>
                    </CustomInput>
          </div>
         <p> out of {users.length}</p>
        </div>
        <div className="dashboard_pagination">
          <Pagination
            pageSize={userPerPage}
            totalCount={users.length}
            siblingCount={1}
            currentPage={currentPage}
            onPageChange={(page:number)=>changePage(page)}
          />
        </div>
      </section>: null}
    </main>
    

    </div>
  )
}

export default Dashboard