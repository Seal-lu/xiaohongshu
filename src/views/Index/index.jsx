import React from 'react';
import {
    PlusCircleOutlined
} from '@ant-design/icons'
import Home from '../Home';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'

const Index = () => {
    const history = useNavigate()
    useEffect(() => {
        history('推荐')
    },[]);
    return (
        <div>
            <Home />
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
