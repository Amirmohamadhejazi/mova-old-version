import React, { useState } from 'react';
import { RxArrowLeft } from 'react-icons/rx';
import { MdEmail, MdTextsms } from 'react-icons/md';

import { Button, Paper } from '@mantine/core';
import { beforeAuthPic, forgetPass } from '@public/pictures';

import Image from 'next/image';

const ForgerPassword = ({ setPosition }) => {
    const [typeRecovery, setTypeRecovery] = useState('phone');
    const detailBack = [
        {
            title: 'تلفن همراه',
            desc: '08624__0992 ',
            icon: <MdTextsms className="text-2xl text-[#F12C3A]" />,
            type: 'phone'
        },
        {
            title: 'ایمیل',
            desc: 'amir----@gmail.com',
            icon: <MdEmail className="text-2xl text-[#F12C3A]" />,
            type: 'mail'
        }
    ];
    return (
        <div className="grid grid-cols-3">
            <div className="w-full col-span-3 lg:col-span-1  p-8  text-black h-screen flex-col flex justify-between relative">
                <div className="w-full">
                    <div className="flex gap-2 justify-between items-center">
                        <span className="font-bold text-2xl">فراموشی رمز عبور</span>
                        <button className=" " onClick={() => setPosition('login')}>
                            <RxArrowLeft className="text-3xl " />
                        </button>
                    </div>

                    <div>
                        <div className="flex items-center justify-center mt-16">
                            <Image width={220} height={220} src={forgetPass.src} alt="" />
                        </div>
                        <p className="my-4 font-normal text-gray-500">
                            از کدام اطلاعات تماس برای بازنشانی رمز عبور شما استفاده کنیم؟
                        </p>
                        <div className="flex flex-col gap-y-5 ">
                            {detailBack.map((itemsDetail) => (
                                <Paper
                                    className={`bg-transparent cursor-pointer hover:shadow-sm justify-between   flex    border-2 ${
                                        typeRecovery === itemsDetail.type ? 'border-[#FD414F]' : 'border-[#EEEEEE] '
                                    } rounded-3xl items-center  `}
                                    onClick={() => setTypeRecovery(itemsDetail.type)}
                                    p="lg"
                                >
                                    <div className="flex flex-col text-right">
                                        <span className="text-gray-500">{itemsDetail.title}</span>
                                        <span className="font-bold text-lg">{itemsDetail.desc}</span>
                                    </div>
                                    <div className="bg-[#FDECEE] p-5 flex justify-center items-center rounded-full">
                                        {itemsDetail.icon}
                                    </div>
                                </Paper>
                            ))}
                        </div>
                    </div>
                </div>
                <div className=" ">
                    <Button
                        color="red"
                        className="w-full  py-1 font-bold hover:bg-[#E21221]  bg-[#E21221] flex items-center justify-center"
                        radius="xl"
                        size="lg"
                        onClick={() => setPosition('forgetPasswordGetCode')}
                    >
                        ادامه
                    </Button>
                </div>
            </div>

            <div
                className="w-full  col-span-2 hidden lg:flex h-screen p-8 flex-col bg-no-repeat bg-opacity-0 bg-cover   bg-center items-center justify-end text-white"
                style={{ backgroundImage: `url("${beforeAuthPic.src}")`, backgroundSize: '80%' }}
            />
        </div>
    );
};

export default ForgerPassword;
