import {createSlice} from '@reduxjs/toolkit'

const counterStore = createSlice({
    name: 'counter',
    // 初始状态数据
    initialState: {
        count: 0
    },
    // 修改数据同步方法
    reducers: {
        increment(state){
            state.count++;
        },
        decrement(state){
            state.count--;
        },
        addNum(state, action){
            state.count += action.payload
        }
    }
})

// 解构出创建action对象的函数
const {increment, decrement, addNum} = counterStore.actions;
// 获取reducer函数
const counterReducer = counterStore.reducer;
// 导出 action对象的函数和reducer函数
export {increment, decrement, addNum}
export default counterReducer
