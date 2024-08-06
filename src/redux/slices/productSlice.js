import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk('productslice/fetchProduct', async () => {
    const response = await axios.get('https://dummyjson.com/products')
    localStorage.setItem('products', JSON.stringify(response.data.products))
    return response.data.products
})

const productSlice = createSlice({
    name: 'productslice',
    initialState: {
        product: [],
        productContainer:[],
        loading: false,
        error: "",
        currentPage:1,
        productPerPage:10
    },
    reducers: {
        productSearch:(state,action)=>{
            state.product=state.productContainer.filter((item)=>item.title.toLowerCase().includes(action.payload))
        },
        nextPage:(state,action)=>{
            state.currentPage++
        },
        prevPage:(state,action)=>{
            state.currentPage--
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.loading = false
            state.product=action.payload
            state.productContainer = action.payload
        })
        builder.addCase(fetchProduct.rejected, (state, action) => {
            state.product = []
            state.productContainer=[]
            state.error = "Api call failed"
            state.loading = false
        })
    }
})

export const {productSearch,nextPage,prevPage}=productSlice.actions
export default productSlice.reducer