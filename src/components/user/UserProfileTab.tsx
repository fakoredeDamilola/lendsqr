import "../../styles/user.scss"

interface IProfileItem {
    name:string;
    value?:string
  }
  
  interface IProfileTab {
    heading:string;
    profileInfoItem:IProfileItem[]
  }

const UserProfileTab = ({profileItem}:{profileItem:IProfileTab}) => {
  return (
    <div className='user_profile_tab'>
    <h3>{profileItem.heading}</h3>
    <div className="user_profile_tab_info">
        {profileItem.profileInfoItem.map((infoItem:IProfileItem,index:number)=>{
            return (
                <div key={index}>
                <h6>{infoItem.name.toUpperCase()}</h6>
                    <p>{infoItem.value}</p>
                </div>
            )
        })

        }
    </div>
    </div>
  )
}

export default UserProfileTab