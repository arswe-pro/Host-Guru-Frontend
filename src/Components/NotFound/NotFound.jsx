import React from 'react';
import { Empty } from 'antd';

const NotFound = () => {
    return (
        <div>

            <Empty />
            <h2 style={{textAlign:'center'}}> 404 Not Found ! </h2>
        </div>
    );
};

export default NotFound;