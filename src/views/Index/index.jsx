import React from 'react';
import {
    PlusCircleOutlined
} from '@ant-design/icons'
import { Outlet, useNavigate } from 'react-router-dom';
import './index.css'

const Index = () => {
    const indexArr = []
    const history = useNavigate()
    return (
        <div>
            <Outlet/>
            <nav className='navBar'>
                <div onClick={()=> history('/')}>首页</div>
                <div onClick={()=>history('shop')}>商城</div>
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
