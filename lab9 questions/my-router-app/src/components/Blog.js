import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Blog = () => {
    const handleExit = () => {
        console.log('exit')
    }
    const list = [
        { id: 1, title: 'title1' },
        { id: 2, title: 'title2' },
        { id: 3, title: 'title3' },
    ]
    return (
        <div>
            <h1> Blog List page</h1>
            <span onClick={handleExit}> Exit</span>
            <ul>
                {list.map((item, index) => (
                    <li key={item.id}>
                        <span> {item.title} </span>
                        <Link to={`/blog/detail/${item.id}`}> Detail_1 </Link>
                        <Link to={`/blog/create/${item.id}`}> Create_2 </Link>>
                    </li>
                )
                )
                }
            </ul>
            <Outlet />
        </div>
    )
}


export default Blog;