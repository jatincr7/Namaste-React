import { CDN_LOGO } from '../utils/Image.js'


const ItemList = ({ item }) => {
    console.log("item>>>>>>>>>>>",item)
    return (<div>
        <ul>
            {item.itemCards.map((items) => (
                <div key={items?.card?.info?.id} className="p-2 m-2 border-grey-200 border-b-2 text-left ">
                    <div className='w-9/12'>
                    <div className="py-2">
                        <span>{ items?.card?.info?.name}</span>
                        <span>- ₹{items.card?.info?.price ? items.card?.info?.price/100:items.card?.info?.defaultPrice/100}</span>
                    </div>
                    <p className="text-xs">{items?.card?.info?.description}</p>
</div>
                    <div className='w-3/12 p-4'>
                        <img src={CDN_LOGO + items?.card?.info?.imageId} className="w-full" />
                        <div className='absolute'>
                        <button  className=' p-2 mx-16  rounded-lg bg-white  shadow-lg'>Add +</button>
                        </div>
                       
                    </div>
                </div>
                
                
            ))}
        </ul>
  
    </div>)
}
export default ItemList;