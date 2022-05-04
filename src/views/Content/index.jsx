import React from 'react';
import './index.css'
import {
    LeftOutlined,
    ShareAltOutlined,
    HeartOutlined,
    StarOutlined,
    CommentOutlined,
    createFromIconfontCN
} from '@ant-design/icons';
import { Space,Input,Avatar,Button } from 'antd';
import { useRef } from 'react';
let isPlayer = false
const Index = () => {
    const IconFont = createFromIconfontCN({
        scriptUrl:'//at.alicdn.com/t/font_3372502_9z5uwoczhkk.js'
    })
    const videoPlay = useRef()
    return (
        <div style={{width:'vw',height:'100vh',position:'relative',overflow:'hidden'}}>
            <div className='top_info'>
                <LeftOutlined  onClick={()=>window.history.back()}/>
                <ShareAltOutlined onClick={()=>share()}/>
            </div>
            <video
                loop
                onClick={()=>isPlay(videoPlay)}
                ref={videoPlay}
                style={{width:'100%',height:'100vh',position:'relative',top:0}} 
                src="https://v.api.aa1.cn/api/api-dy-girl/index.php?aa1=ajdu987hrjfw">
            </video>
            <div className='info'>
                <div style={{padding:'0px 10px',boxSizing:'border-box'}}>
                    <div className='userInfo'>
                        <Space>
                            <Avatar src="https://joeschmoe.io/api/v1/random" size='large'style={{marginRight:3}}/>
                            <span>userID</span>
                            <input id='follwing' type="button" value='关注'/>
                        </Space>
                    </div>
                    <div className='videoInfo'>
                        测试文案：传世经典的一局，卧龙凤雏齐聚，双方你来我往，剧情跌宕起伏。
                    </div>
                </div>
                <div className='danmu'>
                    <Input bordered={false} prefix={<IconFont type= 'icon-danmukai' style={{fontSize:20}}/>} placeholder='| 发弹幕'/>
                    <Space size='large'>
                        <span><HeartOutlined style={{color:'white',fontSize:30}}/>1123</span>
                        <span><StarOutlined style={{color:'white',fontSize:30}}/>1123</span>
                        <span><CommentOutlined style={{color:'white',fontSize:30}}/>1123</span>
                    </Space>
                </div>
            </div>
        </div>
    );
}
const isPlay =(target)=>{
    isPlayer = !isPlayer
    isPlayer?target.current.play():target.current.pause()
}
const share=()=>{
    console.log('分享功能待完善');
}
export default Index;
