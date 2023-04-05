import "../../styles/components.scss"

const CustomModal = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="custom_loading_page">
        {children}
        <div className="custom_styles" />
    </div>
  )
}

export default CustomModal