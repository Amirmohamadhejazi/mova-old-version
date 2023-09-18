'use client';

// import { beforeAuthPic } from '@public/pictures';
import { beforeAuthPic } from '../../../public/pictures';

import React from 'react';

const layout = ({ children }: { children: JSX.Element }) => {
    return (
        <div className="grid h-screen grid-cols-1 lg:grid-cols-3">
            <div className="p-3 bg-slate-100">{children}</div>
            <div
                className="w-full h-full p-8 col-span-2 hidden lg:flex  flex-col bg-no-repeat bg-slate-100 bg-cover   bg-center  items-center justify-end text-white"
                style={{
                    backgroundImage: `url("${beforeAuthPic.src}")`,
                    backgroundSize: '80%'
                }}
            />
        </div>
    );
};

export default layout;
