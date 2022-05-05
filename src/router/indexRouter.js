import React from 'react';
import Login from '../views/Login';
import Index from '../views/Index';
import Shop from '../views/Shop';
import Content from '../views/Content';
import ShowBanner from '../components/ShowBanner'
import Search from '../views/Search';
import Home from '../views/Home';
import {Route,Routes} from 'react-router-dom'

const Indexrouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Index/>}>
                <Route path='home' element={<Home/>} >
                    <Route path=':id' element={<ShowBanner />}/>
                </Route>
                <Route path='shop' element={<Shop/>}/>
            </Route>
            <Route path='login' element={<Login/>}></Route>
            <Route path='content/:id' element={<Content />}/>
            <Route path='search' element={<Search />}/>
        </Routes>
    );
}

export default Indexrouter;
