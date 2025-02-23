import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Board from './components/Board'
import About from './components/About'
import NotFound from './components/NotFound'

const App3 = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
                <Route path="/dashboard/*" element={<Dashboard />}>
                    <Route path="board" element={<Board />}/>
                    <Route path="about" element={<About />}/>
                </Route>
                {/* 404路由，匹配所有未定义的路径 */}
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App3