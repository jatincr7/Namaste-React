

import ResturantCard from './ResturantCard';
import Shimmer from './Shimmer.js'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Body =  () => {
  const [listofResturants, setListofResturants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResturant, setfilteredResturant] = useState([]);
  console.log("body rendered ")
  useEffect(() => {
    getResurants()
    
  },[])

 
  
  const getResurants = async () => {
    try {
      let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      let resturantjson =await mapData(json);
      setListofResturants(resturantjson)
      setfilteredResturant(resturantjson)
    }
    catch (e) {
      console.log('error while fetching get',e)
    }
      
  }
 
  async function mapData(jsonData) {
    for (let i = 0; i < jsonData?.data?.cards.length; i++) {

      // initialize checkData for Swiggy Restaurant data
      let checkData = jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      // if checkData is not undefined then return it
      if (checkData !== undefined) {
        return checkData;
      }
    }
  }
  const onlineStatus = useOnlineStatus();
  if (onlineStatus===false) {
      return (<div>
          <h1>
              Looks like your offline please check your internet !
          </h1>
      </div>)
  }
// conditional rendering 
  if (listofResturants.length === 0 ) {
    return(<Shimmer/>)
  }
  return (
    <div className='body'>
      <div className="filter">
        <div className='search'>
          <input type="search" className='search-box' value={searchText} onChange={(e) => {
            setSearchText(e.target.value)
            console.log(e.target.value)
          }} />
          <button onClick={() => {
            let searchItem = listofResturants.filter((e) => e.info.name.toLowerCase().includes(searchText.toLowerCase())) 
            console.log('item>>....',searchItem)
            setfilteredResturant(searchItem);
          }} >search</button>
        </div>
        <button className='filter-btn' onClick={() => {
          const resData = listofResturants.filter((res) =>

            res?.info?.rating > 4)        
            

        }
                 
                 
                
        }>
          Best Resturants</button>
                
      </div>
      <div />
      <div className='res-container'></div>
      {


        filteredResturant.map((resturants) =>
          <Link
            key={key = resturants?.info?.id}
            to={"/resturant/"+ resturants.info.id}
          >
            <ResturantCard resData={resturants?.info} />
          </Link>)
      }
    </div>
  )

}

export default Body
