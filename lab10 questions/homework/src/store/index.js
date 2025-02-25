import {configureStore} from '@reduxjs/toolkit'

import messageReducer from './reducers/messageSlice'
import productsReducer from './reducers/productsSlice'


const store = configureStore({
    reducer: {
        products: productsReducer,
        message: messageReducer
    }
})

export default store;
