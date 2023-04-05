import "../styles/components.scss"
import usePagination from "../hooks/usePagination";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi"

export default function Pagination ({
    pageSize,
    currentPage,
    siblingCount,
    totalCount,
    onPageChange,
}:{
    pageSize:number,
    currentPage:number,
    siblingCount:number,
    totalCount:number,
    onPageChange:(page:number)=>void
}) {

    const paginationRange= usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    })

    if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
        return null;
      }


      const onNext = () => {
        onPageChange(currentPage + 1);
      };

      const onPrevious = () => {
        onPageChange(currentPage - 1);
      };
    return (
      <div>
        
        {totalCount > pageSize && <div        
        className="pagination_number"
        // my={10} justifyContent="flex-end"
        >
            <FiChevronLeft
            className="pagination_btn prev"
            onClick={()=>currentPage === 1 ? ()=>{}:onPrevious()}
            style={{cursor:currentPage === 1 ? "not-allowed":"pointer"}}
            />

      {paginationRange?.map((pageNumber,index) => {

         // If the pageItem is a DOT, render the DOTS unicode character
         if (pageNumber === "DOTS") {
           return <li className="pagination-item dots" key={index}>&#8230;</li>;
         }

         // Render our Page Pills
         return (
           <div
             key={index}
             className="pagination_display"
            style={{color:pageNumber === currentPage ? "#545F7D" : ""}}
             onClick={() => onPageChange(Number(pageNumber) || 1)}
            
           >
             {pageNumber}
           </div>
         );
       })}
    <FiChevronRight 
     className="pagination_btn next"
            style={{cursor:currentPage === 1 ? "not-allowed":"pointer"}}
            onClick={()=> pageSize*currentPage >=totalCount ? null:onNext()}
            />
        </div>}
      </div>
        

    )
}
