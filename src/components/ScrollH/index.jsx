import React from 'react';
import { useState } from 'react';
import {Dropdown} from 'antd'
import {DownOutlined} from '@ant-design/icons'
import './index.css'

const Index = () => {
    const [ScrollH,setScrollH] = useState(['推荐','视频','直播','动漫','职场','穿搭','游戏','影视','萌宠','美食'])
    return (
        <div className='scrollH'>
            <div>
                {ScrollH.map(item =>{
                    return <p key={item}>{item}</p>
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
