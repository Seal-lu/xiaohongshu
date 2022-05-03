import React from 'react';
import { Card,Avatar} from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Index = (props) => {
    const toDir = useNavigate()
    return (
        <Card
            onClick={()=> toDir('content/'+props.name)}
            style={{ width: '45%',marginBottom:30,padding:0,height:'auto'}}
            cover={
                // <img
                //     alt="example"
                //     src="https://v.api.aa1.cn/api/api-dy-girl/index.php?aa1=ajdu987hrjfw"
                // />
                <video  src='https://v.api.aa1.cn/api/api-dy-girl/index.php?aa1=ajdu987hrjfw'></video>
            }
        >
            <div>
                <div>
                    <span>title:测试用</span>
                </div>
                <div>
                    <Avatar src="https://joeschmoe.io/api/v1/random" />
                    <HeartOutlined />
                </div>
            </div>
        </Card>
    );
}

export default Index;
