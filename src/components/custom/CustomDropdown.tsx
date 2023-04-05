import { useState,useEffect, useRef } from "react";
import "../../styles/components.scss"


interface IDropdown {
  children : React.ReactNode;
  afterIcon?: React.ReactNode;
  beforeIcon?: React.ReactNode;
  title?:string;
  width?:string;
  left?:string;
  right?:string
}

function CustomDropdown({children,title,width,beforeIcon,afterIcon,left,right}:IDropdown) {
  


const [openDropDown,setOpenDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null);

 

  useEffect(() => {
    function handleScroll() {
      if (dropdownRef.current) {
        const dropdownRect = dropdownRef.current.getBoundingClientRect();
        const isOverflowing = dropdownRect.bottom > window.innerHeight;
        dropdownRef.current.style.right= "10%";
        if (isOverflowing) {
          dropdownRef.current.style.bottom = "100%";
        } else {
          dropdownRef.current.style.bottom = "auto";
        }
      }
    }
  
    window.addEventListener("scroll", handleScroll);
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (dropdownRef.current && !dropdownRef.current?.contains(event.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);


  return (
    <div className="dropdown-container"   ref={dropdownRef}>
      <div className="dropdown_header" onClick={()=>setOpenDropdown(!openDropDown)}>
    {beforeIcon}  {title && <h6>{title}</h6>} {afterIcon}
      </div>
      
      
      <div className={`${left?"dropdown-content":"dropdown-content-left"} ${openDropDown ? "open" : ""}`} style={{width:width ?? "270px" }}>
       {children}
      </div>
    </div>
  );
}

export default CustomDropdown