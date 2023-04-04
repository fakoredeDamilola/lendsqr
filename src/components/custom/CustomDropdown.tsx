import { useState,useEffect, useRef } from "react";
import "../../styles/components.scss"
import { BiFilter,BiDotsVerticalRounded } from "react-icons/bi";


interface IDropdown {
  children : React.ReactNode;
  afterIcon?: React.ReactNode;
  beforeIcon?: React.ReactNode;
  toggleDropdown:()=>void;
  title?:string;
  width?:string;
  icon?:string;
}

function CustomDropdown({children,title,width,icon,beforeIcon,afterIcon}:IDropdown) {
  


const [openDropDown,setOpenDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null);

 

  useEffect(() => {
    function handleScroll() {
      if (dropdownRef.current) {
        const dropdownRect = dropdownRef.current.getBoundingClientRect();
        const isOverflowing = dropdownRect.bottom > window.innerHeight;
  
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
      
      
      <div className={`dropdown-content ${openDropDown ? "open" : ""}`} style={{width:width ?? "270px"}}>
       {children}
      </div>
    </div>
  );
}

export default CustomDropdown