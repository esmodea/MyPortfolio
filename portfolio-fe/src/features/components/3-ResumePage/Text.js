import React from 'react';
import { LineOutlined } from '@ant-design/icons';

const Text = ({text, className}) => {
    return(
            <p className={className}><LineOutlined />{text}</p>
    )
}

export default Text;