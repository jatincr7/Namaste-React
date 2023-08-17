
import {CDN_LOGO} from '../utils/Image.js'
const ResturantCard = (props) => {
    const {resData}=props
    const {name,cuisines,costForTwo,avgRating,cloudinaryImageId}=resData
    console.log(props)
    return (
        <div className='res-card' style={{ backgroundColor:"#f0f0f0"}}>
            <img className='res-logo' alt='res-logo' src={CDN_LOGO+cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{ costForTwo}</h4>
            <h4>{ avgRating}</h4>
        </div>
    )
}


export default ResturantCard;