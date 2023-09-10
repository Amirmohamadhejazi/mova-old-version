import { beforeAuthPic } from '@public/pictures';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div className="grid grid-cols-3">
            {children}
            <div
                className="w-full  h-screen p-8 col-span-2 hidden lg:flex  flex-col bg-no-repeat bg-opacity-0 bg-cover   bg-center  items-center justify-end text-white"
                style={{ backgroundImage: `url("${beforeAuthPic.src}")`, backgroundSize: '80%' }}
            />
        </div>
    );
};

export default layout;
