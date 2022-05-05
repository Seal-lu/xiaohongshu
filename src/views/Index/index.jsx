import React from 'react';
import {
    PlusCircleOutlined
} from '@ant-design/icons'

import { useEffect } from 'react';
import { Outlet, useNavigate,useParams } from 'react-router-dom';
import './index.css'

const Index = () => {
    
    const history = useNavigate()
    useEffect(() => {
        history('home/推荐')
    },[]);
    return (
        <div>
            <Outlet/>
            <nav className='navBar'>
                <div onClick={()=> history('/')}>首页</div>
                <div onClick={()=> history('/shop')}>商城</div>
                <div>
                    <PlusCircleOutlined/>
                </div>
                <div>消息</div>
                <div>我的</div>
            </nav>
        </div>
        
    );
}

export default Index;
