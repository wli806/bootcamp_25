/**
 * state (状态):是应用程序的全局状态，通常是一个普通的js对象。
 * 它是一个单一数据源，整个应用中只有一个state，存储在store中。
 * 它是只读的，不能被直接修改，需要通过派发action来进行更新。
 * 每次更新state时，都需要返回一个新的state对象，而不是直接修改原有的state。
 */

// 初始状态
const initialState = {
    count: 0
}

// reducer函数
/**
 * reducer是一个函数，用于根据当前的state和action计算出新的state，
 * 它接收两个参数，当前的state和action，并返回一个新的state。
 * 可以将多个小的reducer组合成一个大的reducer，便于管理复杂的状态。
 */
function counterReducer(state=initialState, action){
    switch(action.type){
        case 'INCREMENT':
            return {count: state.count + 1};
        case 'DECREMENT':
            return {count: state.count - 1};
        default:
            return state;
    }
}

// action
/**
 * action是一个普通的js对象，用于描述发生了什么事情，
 * 它是更新state的唯一方式。
 * 必须包含一个type属性，表示动作的类型，也可以包含其他的属性，
 * 应用于传递数据
 */
const incrementAction = {
    type: 'INCREMENT'
}
const decrementAction = {
    type: 'DECREMENT'
}

// 创建store
const store = Redux.createStore(counterReducer);
// console.log("initial count=====", store.getState());


// 获取dom元素
const counterValue = document.getElementById('counter-value');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

// 更新 ui 函数
function updateUI(){
    let state = store.getState();
    counterValue.textContent = state.count;
}

updateUI();

// 订阅 store 的变化
store.subscribe(updateUI);

// 添加绑定事件
incrementButton.addEventListener('click', () => {
    store.dispatch(incrementAction);
});
decrementButton.addEventListener('click', () => {
    store.dispatch(decrementAction);
})

