import { BrowserRouter, Routes, Route } from "react-router-dom"
import Blog from "./components/Blog"
import  Detail from "./components/Detail"
import LoginPage from "./components/LoginPage"
import NotFound from "./components/NotFound"
import getToken  from "./utils/getToken"

const App4 = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={getToken() ? <Blog /> : <LoginPage/>} />
                <Route path="/login" element={getToken() ? <Blog /> : <LoginPage/>} />
                <Route path="/blog" element={getToken() ? <Blog /> : <LoginPage/>}>
                    <Route path="detail/:id" element={<Detail />} />
                </Route>
                <Route path="/blog/create/:id" element={<Detail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
)
}


export default App4

