import React from 'react';
import Content from '../Contents';
import { useState,useEffect} from 'react';

const Index = () => {
    const [ContentList,useContentList] = useState([
        {
            id:'0001',
            title:'0001'
        },
        {
            id:'0002',
            title:'0002'
        },
        {
            id:'0003',
            title:'0003'
        },
        {
            id:'0004',
            title:'0004'
        }
    ])
    return (
        <div className='redio' style={{ display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
            { ContentList.map(item => {
                return <Content key={item.id} name={item.title}/>
            })}
        </div>
    );
}

export default Index;
