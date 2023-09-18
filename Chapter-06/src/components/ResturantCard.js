
import { useContext } from 'react'
import {CDN_LOGO} from '../utils/Image.js'
import UserContext from '../utils/userContext.js'
const ResturantCard = (props) => {
    const {resData}=props
    const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } = resData
    const {loggedInUser}=useContext(UserContext)
  
    return (
        <div className='m-4 p-4 w-[250px] rounded-lg justify-between   hover:bg-gray-200  truncate'   style={{ backgroundColor:"#f0f0f0"}}>
            <img className='res-logo rouded-lg' alt='res-logo' src={CDN_LOGO+cloudinaryImageId} />
            <h3 className='font-bold py-5 text-xl'>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{ costForTwo}</h4>
            <h4>{avgRating}</h4>
            <h4> LoggedInUser: {loggedInUser}</h4>
            
        </div>
    )
}

export const withPromotedLabel= (ResturantCard) => {
    return (props) => {
        return (
            <div>
                <label className='absolute m-2 p-2 bg-black text-white rounded-lg'>Promoted</label>
                <ResturantCard {...props}/>
            </div>
        )
         
        }
    }



export default ResturantCard;