import "../../styles/components.scss"
import CustomModal from "./CustomModal"

const CustomLoadingPage = ({children}:{children:React.ReactNode}) => {
  return (
    <CustomModal>
        {children}
   </CustomModal>
  )
}

export default CustomLoadingPage