
import { useState } from "react"
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/Image";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategories";




const ResturantMenu = () => {
    const { restId } = useParams()
    const restInfo = useResturantMenu(restId)
    const [showIndex, setShowIndex] = useState(null)
   
  
    
    if (restInfo === null) return (<Shimmer />);
    const { name, cuisines, costForTwoMessage } = restInfo?.cards[0]?.card?.card?.info
    const categories = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(ct => 
        ct.card?.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
     return (<div className="text-center">
             <h1 className="font-bold my-6 text-2xl">{name}</h1>
         <p className="font-bol text-lg">{cuisines}</p>
         <h2>{costForTwoMessage}</h2>
     
         {categories.map((category, index) => (<ResturantCategory
            
                 key={category?.card.card.name}
             data={category.card.card}
             showItems={index === showIndex ? true : false}
             setShowIndex={() => setShowIndex(index)}

              
             
             />))}
         
        
    </div>)
}
export default ResturantMenu