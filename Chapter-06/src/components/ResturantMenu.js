
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/Image";



const ResturantMenu = () => {
    const [restInfo, setrestInfo] = useState(null);
    const { restId } = useParams()
    useEffect(() => {
         fetchMenu()
    },[])
    
    const fetchMenu = async () => {
        const menuData = await fetch(MENU_API+restId)
        const json = await menuData.json();
        setrestInfo(json.data)
        console.log(restInfo?.cards[0]?.card?.card?.info)
        
    }
    
    if (restInfo === null) return (<Shimmer />);
    const { name, cuisines, costForTwoMessage } = restInfo?.cards[0]?.card?.card?.info
    
    const {itemCards}=restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card
      



     return (<div className="menu">
             <h1>{name}</h1>
         <h2>{cuisines}</h2>
         <h2>{costForTwoMessage}</h2>
         <ul>
             {itemCards.map(item => {
                 <li key={item.card.info.id}>
                     {item.card.info.name}  -{"Rs."}
                     {item.card.info.price/100  || item.card.info.defaultPrice /100}
                 
                 </li>
             })}
        </ul>
        
    </div>)
}
export default ResturantMenu