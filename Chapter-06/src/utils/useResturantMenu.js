import { useEffect, useState } from "react";
import { MENU_API } from "./Image";
const useResturantMenu = (resId) => {
    const [resInfo,setrestInfo]=useState(null)

    useEffect(() => {
        fetchMenu()
    }, [])
    


    const fetchMenu = async () => {
        const menuData = await fetch(MENU_API+resId)
        const json = await menuData.json();
        setrestInfo(json.data)
      
        
    }



    return resInfo


};
export default useResturantMenu;