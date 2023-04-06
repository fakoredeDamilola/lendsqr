import NotFound from '../../components/NotFound'
import "../../styles/components.scss"
import { Link } from 'react-router-dom'

const Unauthorized = () => {
  return (
    <div className='unauthorized'>
      <NotFound title="You are not logged in" text="please be nice, login first" style={{margin:"30px 0"}} />
      <Link to="/signin">login</Link>
    </div>
  
  )
}

export default Unauthorized