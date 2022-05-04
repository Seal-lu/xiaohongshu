import React from 'react';
import { Card,Avatar} from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import './index.css'

const Index = (props) => {
    const toDir = useNavigate()
    const videoUrl = useRef()
    return (
        <Card
            onClick={()=> toDir('/content/'+props.name)}
            style={{ width: '45%',marginBottom:30,padding:0,height:'auto'}}
            cover={
                // <img
                //     alt="example"
                //     src="https://v.api.aa1.cn/api/api-dy-girl/index.php?aa1=ajdu987hrjfw"
                // />
                <video ref={videoUrl}  src='https://v.api.aa1.cn/api/api-dy-girl/index.php?aa1=ajdu987hrjfw'></video>
            }
        >
            <div>
                <div className='contentTitle'>
                    <span>title:测试用</span>
                </div>
                <div style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <div> 
                        <Avatar src="https://joeschmoe.io/api/v1/random" size='small'style={{marginRight:3}}/>
                        <span>userID</span>
                    </div>
                    <div>
                        <HeartOutlined style={{fontSize:16}}/>
                    </div>
                   
                    
                </div>
            </div>
        </Card>
    );
}

export default Index;
