import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div>This is dashboard page.</div>
            {/* <Link to=""> Canvas </Link>
            <br></br>
            <Link to=""> About </Link> */}
            <Link to="/dashboard/canvas"> Canvas </Link>
            <Link to="/dashboard/about"> About </Link>
            {/* 渲染子路由 */}
            <Outlet />
        </div>
    );
}

export default Dashboard;
