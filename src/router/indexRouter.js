import React from 'react';
import Login from '../views/Login';
import Index from '../views/Index';
import Home from '../views/Home';
import Shop from '../views/Shop';
import Content from '../views/Content';
import {Route,Routes} from 'react-router-dom'

const Indexrouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Index/>}>
                <Route index element={<Home/>}/>
                <Route path='shop' element={<Shop/>}/>
            </Route>
            <Route path='login' element={<Login/>}></Route>
            <Route path='content/:id' element={<Content />}/>
        </Routes>
    );
}

export default Indexrouter;
