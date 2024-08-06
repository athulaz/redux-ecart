import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: 'wish',
    initialState: {
        wishlist: []
    },
    reducers: {
        addToWishList: (state, action) => {
            if (state.wishlist.find(item => item.id == action.payload.id)) {
                alert("Item Already Added")
            }
            else {
                state.wishlist.push(action.payload)
                localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
                alert("item Added!!")
            }

        },
        removeFromWishList: (state, action) => {
            const wish = state.wishlist.filter(item => item.id != action.payload)
            localStorage.setItem('wishlist', JSON.stringify(wish))
            state.wishlist = state.wishlist.filter(item => item.id != action.payload)
            alert("Item Removed")
        }
    }
})


export const { addToWishList, removeFromWishList } = wishlistSlice.actions
export default wishlistSlice.reducer