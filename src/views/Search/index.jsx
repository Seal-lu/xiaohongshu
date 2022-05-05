import React from 'react';
import { LeftOutlined,SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useState } from 'react';

const Index = () => {
    const [Popular,setPopular] = useState([
        '男生穿搭推荐',
        '间谍过家家阿尼亚',
        '海南海景房',
        '柯南灰原哀',
        '游戏王壁纸',
        '怎么转笔',
        '夏季显瘦显高穿搭',
        'ui界面设计APP'
    ])
    return (
        <div>
            <div className="search_top" style={{
                display:'flex',
                justifyContent:'space-between',
                fontSize:18,alignItems:'center',
                padding:'5px 10px',
                boxSizing:'border-box',
                borderBottom:'1px solid #cac6c6'
            }}>
                <LeftOutlined onClick={()=>window.history.back()}/>
                <Input size='small' prefix={ <SearchOutlined />} placeholder={Popular[0]} style={{width:'60%',borderRadius:15,}}/>
                <span style={{fontSize:14,color:'#cac6c6'}}>搜索</span>
            </div>
            <div style={{textAlign:'start',padding:'0px 15px'}}>
                <p style={{fontWeight:'bold ',fontSize:18,margin:0,height:40,display:'flex',alignItems:'center'}}>搜索发现</p>
                <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
                    {Popular.map(item=>{
                        return <p style={{width:'40%'}} key={item}>{item}</p>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Index;
