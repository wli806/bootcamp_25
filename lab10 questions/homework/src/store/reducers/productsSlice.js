import {createSlice} from '@reduxjs/toolkit'

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        data: []
    },
    reducers: {
        setProducts: (state, action) => {
            state.data = action.payload
        }
    }
})

export const {setProducts} = productsSlice.actions;
export default productsSlice.reducer;