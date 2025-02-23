import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'

import Dashboard from './components/Dashboard'
import Board from './components/Board'
import About from './components/About'
import NotFound from './components/NotFound'
const App2 = () => {

    let router = createBrowserRouter([
        {
            path: '/',
            element: <Navigate to="/dashboard" replace />   // 重定向
        },
        {
            path: '/dashboard',
            element: <Dashboard />,
            children: [
                {
                    path: 'board',
                    element: <Board />
                },
                {
                    path: 'about',
                    element: <About />
                }
            ]
        },
        {
            path: '*',
            element: <NotFound />
        }
    ])

    return (
        <RouterProvider router = {router}/>
    )
}

export default App2