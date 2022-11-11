import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <h1 style={{ color: '#fff' }}>Dashboard</h1>
            <Outlet />
        </div>
    );
};

export default Root;
