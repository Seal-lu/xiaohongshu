import React from 'react';
import Topbar from '../../components/TopBar';
import ScrollH from '../../components/ScrollH';

import { Outlet } from 'react-router-dom';

const Home = () => {
    
    return (
        <div>
            <Topbar/> 
            <div>
                <ScrollH/>
                <Outlet />
            </div>
        </div>
    );
}

export default Home;
