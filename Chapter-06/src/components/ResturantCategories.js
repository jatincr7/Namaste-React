import { useState } from "react";
import ItemList from "./itemList"

const ResturantCategory = ({ data, showItems, setShowIndex }) => {
    const handleClick = () => {
     
        setShowIndex()
      
        
        
       
}
    
    return <div className="w-6/12 bg-gray-50 p-4m shadow-lg  my-4 mx-auto ">
        <div className=" flex justify-between cursor-pointer"
            onClick={handleClick}
        >
        <span className="font-bold text-lg">{data?.title}  {data?.itemCards?.length}</span>
            <span>{"⬇️"}</span>
            </div>
          {  showItems && <ItemList item={data} />}
        </div>
    
}
 
export default ResturantCategory