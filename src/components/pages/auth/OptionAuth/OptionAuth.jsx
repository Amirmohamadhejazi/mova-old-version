import React from 'react';
import { RxArrowLeft } from 'react-icons/rx';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaGithub } from 'react-icons/fa';

import { Divider, Box, Paper, Text, Button } from '@mantine/core';
import Link from 'next/link';
import { beforeAuthPic, optionLoginPic } from '@components/common/pictures';
import Image from 'next/image';
const OptionAuth = ({ setPosition }) => {
    return (
        <div className="grid grid-cols-3">
            <div
                className="w-full text-black col-span-3 lg:col-span-1 h-screen p-8  flex-col bg-no-repeat bg-opacity-0
             bg-cover sm:bg-contain bg-center flex justify-end  relative"
            >
                <button className="absolute left-8 top-8" onClick={() => setPosition('beforeAuth')}>
                    <RxArrowLeft className="text-3xl " />
                </button>

                <div className=" w-full flex items-center justify-center">
                    <img src={optionLoginPic.src} className="w-[300px] h-[300px] bg-cover" alt="" />
                </div>

                <span className="text-3xl font-bold ">ادامه دهید</span>

                <div className="flex flex-col gap-2 mt-3">
                    <Paper
                        className="bg-transparent cursor-pointer hover:shadow-sm hover:border-gray-300 flex justify-between items-center"
                        withBorder
                        p="md"
                    >
                        <span className="text-lg font-semibold">ادامه با گوگل</span>
                        <FcGoogle className="text-3xl" />
                    </Paper>
                    <Paper
                        className="bg-transparent cursor-pointer hover:shadow-sm hover:border-gray-300 flex justify-between items-center"
                        withBorder
                        p="md"
                    >
                        <span className="text-lg font-semibold">ادامه با فیس بوک</span>
                        <FaFacebook className="text-3xl text-[#0080ff]" />
                    </Paper>

                    <Paper
                        className="bg-transparent cursor-pointer hover:shadow-sm hover:border-gray-300 flex justify-between items-center"
                        withBorder
                        p="md"
                    >
                        <span className="text-lg font-semibold">ادامه با گیت هاب</span>
                        <FaGithub className="text-3xl" />
                    </Paper>
                </div>

                <div className="my-4">
                    <Divider
                        my="xs"
                        labelPosition="center"
                        label={
                            <span mx={7} className="text-lg font-bold mx-3">
                                یا
                            </span>
                        }
                    />
                </div>

                <div>
                    <Button
                        color="red"
                        className="w-full  py-1 font-bold hover:bg-[#E21221]  bg-[#E21221] flex items-center justify-center"
                        radius="xl"
                        size="lg"
                        onClick={() => setPosition('login')}
                    >
                        ورود به حساب کاربری
                    </Button>
                </div>

                <div className="flex items-center justify-center gap-1 font-medium mt-5">
                    <span className="text-sm">حسابی ندارید؟</span>
                    <span
                        className="text-[#E21221] text-lg font-bold cursor-pointer"
                        onClick={() => setPosition('signUp')}
                    >
                        ساخت حساب
                    </span>
                </div>
            </div>

            <div
                className="w-full col-span-2 hidden lg:flex h-screen p-8 flex-col bg-no-repeat bg-opacity-0 bg-cover   bg-center   items-center justify-end text-white"
                style={{ backgroundImage: `url("${beforeAuthPic.src}")`, backgroundSize: '80%' }}
            ></div>
        </div>
    );
};

export default OptionAuth;
