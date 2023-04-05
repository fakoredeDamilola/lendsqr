import "../styles/components.scss"

const NotFound = ({title,text,style}:{title:string,text:string;style?:any}) => {
  return (
    <div className="not_found" style={{...style}}>
       <h1>{title}</h1> 
        <div className="not_found_text">
            {text}
        </div>
    </div>
  )
}

export default NotFound