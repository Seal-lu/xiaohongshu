import React from 'react';
import { useState } from 'react';
import {Dropdown} from 'antd'
import { useNavigate } from 'react-router-dom';
import {DownOutlined} from '@ant-design/icons'
import './index.css'

const Index = () => {
    const [ScrollH,setScrollH] = useState(['推荐','视频','直播','动漫','职场','穿搭','游戏','影视','萌宠','美食'])
    const scrollRoute = useNavigate()
    return (
        <div className='scrollH'>
            <div>
                {ScrollH.map(item =>{
                    return <p key={item} onClick={()=>{
                        console.log(`跳转到${item}页面`);
                        scrollRoute(item)
                    }}>{item}</p>
                })}
                <div className='downBtn'>
                    <Dropdown>
                        <DownOutlined/>
                    </Dropdown>
                </div>
            </div>
            
        </div>
    );
}

export default Index;
