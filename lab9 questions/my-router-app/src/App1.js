import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Login from './components/Login'
import Article from './components/Article'
import List from './components/List'
const App1 = () => {
    // 路由表
    let router = createBrowserRouter([
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/article',
            element: <Article />
        },
        {
            path: '/list/:id',
            element: <List />
        }
    ])
    return (
        <RouterProvider router={router}/>
    )
}

export default App1