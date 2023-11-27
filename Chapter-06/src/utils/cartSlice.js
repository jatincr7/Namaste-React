import {createSlice} from'@reduxjs/toolkit'
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items:[]
    },
    reducers: {
        addItem: (state, action) => {
            //mutating the state over here 
            state.items.push(action.payload)
        }
         
        ,
        removeItem: (state, action) => {
            state.items.pop(action.payload)
        },
        clearCart: (state) => {
            return {items:[]}
        },
    },

})
export const {addItem,removeItem,clearCart }=cartSlice.actions
export default cartSlice.reducer
