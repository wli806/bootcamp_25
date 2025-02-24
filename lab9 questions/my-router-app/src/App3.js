import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Canvas from './components/Canvas'
import About from './components/About'
import NotFound from './components/NotFound'

const App3 = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
                <Route path="/dashboard/*" element={<Dashboard />}>
                    <Route path="Canvas" element={<Canvas />}/>
                    <Route path="about" element={<About />}/>
                </Route>
                {/* 404路由，匹配所有未定义的路径 */}
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App3