import React from 'react';
import { Input } from 'antd';
import { createFromIconfontCN,SearchOutlined,MoreOutlined } from '@ant-design/icons';
import { useState } from 'react';

const Shop = () => {
    const [PopularSearch] = useState('家具')
    const Icons = createFromIconfontCN({
        scriptUrl:'//at.alicdn.com/t/font_3372502_36by0fwmqn2.js'
    })
    return (
        <div>
            <div className="shop_top" style={{display:'flex',alignItems:'center',padding:5}}>
                <Icons type='icon-order' style={{fontSize:23,marginRight:5}} />
                <Input  prefix={ <SearchOutlined />} placeholder={`大家都在搜"${PopularSearch}"`} style={{borderRadius:15,height:30}}/>
                <div style={{width:'40px',fontSize:12}}>
                    <MoreOutlined rotate={90} style={{fontSize:16}} /><br />
                    更多
                </div>
            </div>
        </div>
    );
}

export default Shop;
