import React from 'react';
import { useState,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    SearchOutlined,
    createFromIconfontCN
} from '@ant-design/icons'
import './index.css'

const Topbar = () => {
    const domRef = useRef()
    const nav = useNavigate()
    const [address,setaddress] = useState('郑州')
    const IconFont = createFromIconfontCN({
        scriptUrl:'//at.alicdn.com/t/font_3372502_uong1kk9pb8.js'
    })
    return (
        <div className='top'>
            <div className='topbar'>
                <div className='icon'>
                    <IconFont type='icon-atom' />
                </div>
                <div className='center'>
                    <span ref={domRef}>关注</span>
                    <span>发现</span>
                    <span>{address}</span>
                </div>
                <div className='icon'>
                    <SearchOutlined  onClick={()=>nav('/search')}/>
                </div>
            </div>
        </div>
    );
}

export default Topbar;
