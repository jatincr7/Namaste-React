import { useSelector,useDispatch } from "react-redux"
import ItemList from "./itemList"
import { clearCart } from "../utils/cartSlice"
const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector((store => store.cart.items))


    const handleClearCart = () => { 
        dispatch(clearCart())

    }
   
    return (<div className="text-centre m-4 p-4">
         <ItemList item={ cartItems} />
        <h1 className="text-2xl font-bold"> Cart</h1>
        <div>
       
            <button  className="p-2 m-2 bg-black text-white rounded-lg" onClick={()=>handleClearCart()}>clear cart</button>
            {cartItems.length===0 && <h1>please add item to your cart</h1>}
        </div>
       
    </div>)
}
 export default Cart