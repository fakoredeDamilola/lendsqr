import { Link } from "react-router-dom";
import "../styles/components.scss"
import {BsArrowLeft} from "react-icons/bs"


interface ILink {
    text:string;
    href:string;
}
const BackLink = ({links}:{links:ILink[]}) => {
  return (
    <div className='back_container'>
      <div className="back_icon"><BsArrowLeft /></div>
      <div className="back_link_texts">
        {links.map((link:ILink,index)=>{
            return (
                <Link key="index" to={`/${link.href}`} className="link_tag">
                    {link.text}
                </Link>
            )
        })}
      </div>
        </div>
  )
}

export default BackLink