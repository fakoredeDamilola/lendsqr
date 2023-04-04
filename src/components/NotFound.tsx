import "../styles/components.scss"

const NotFound = ({title,text}:{title:string,text:string}) => {
  return (
    <div className="not_found">
       <h1>{title}</h1> 
        <div className="not_found_text">
            {text}
        </div>
    </div>
  )
}

export default NotFound