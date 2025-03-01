import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import store from './store'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
/**
 * 安装 react-redux 和 @reduxjs/toolkit 包
 * react-redux是Redux官方提供的React绑定库，用于将Redux和React组件连接起来。
 * 主要功能包括：
 * 1. 提供Provider组件，它是一个React的组件，用于将Redux的store传递给整个应用，
 * 通过Provider，所有的子组件都可以访问Redux中的store。
 * 2. 提供 useSelector 和 useDispatch 钩子
 * useSelector用于从Redux store中提取状态；
 * useDispatch用于派发action
 * 
 * @reduxjs/toolkit 是Redux官方推荐的一个工具包，用于简化Redux的使用。
 * 传统的Redux需要手动配置store, reducer和action，代码比较麻烦。
 * @reduxjs/toolkit 提供了configureStore方法，它可以快速创建store。
 * 提供了createSlice方法，可以自动生成reducer和action。
 * 
 * 它们的分工如下：
 * @reduxjs/toolkit负责Redux的核心逻辑（例如，store, reducer和action等）.
 * react-redux 负责将redux的状态和逻辑与React组件绑定。
 * 
 * 
 * 
 */
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
