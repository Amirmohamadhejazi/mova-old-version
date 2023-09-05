import React from 'react';
import { RxArrowLeft } from 'react-icons/rx';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaGithub } from 'react-icons/fa';

import { Divider, Box, Paper, Text, Button } from '@mantine/core';
import Link from 'next/link';
import { optionLoginPic } from '@components/common/pictures';
const OptionAuth = ({ setPosition }) => {
    return (
        <div
            className="w-full text-black  h-screen p-8  flex-col bg-no-repeat bg-opacity-0
             bg-cover sm:bg-contain bg-center flex justify-end  relative"
        >
            <RxArrowLeft onClick={() => setPosition('beforeAuth')} className="text-3xl absolute left-8 top-8" />

            <img src={optionLoginPic.src} alt="" />
            <span className="text-3xl font-bold ">ادامه دهید</span>

            <div className="flex flex-col gap-2 mt-5">
                <Paper className="bg-transparent flex justify-between items-center" withBorder p="md">
                    <span className="text-lg font-semibold">ادامه با گوگل</span>
                    <FcGoogle className="text-3xl" />
                </Paper>
                <Paper className="bg-transparent flex justify-between items-center" withBorder p="md">
                    <span className="text-lg font-semibold">ادامه با فیس بوک</span>
                    <FaFacebook className="text-3xl text-[#0080ff]" />
                </Paper>

                <Paper className="bg-transparent flex justify-between items-center" withBorder p="md">
                    <span className="text-lg font-semibold">ادامه با گیت هاب</span>
                    <FaGithub className="text-3xl" />
                </Paper>
            </div>

            <Divider
                my="xs"
                labelPosition="center"
                label={
                    <span mx={7} className="text-lg font-bold mx-3">
                        یا
                    </span>
                }
            />

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

            <div className="flex items-center gap-1 font-extrabold mt-4">
                <span className="text-sm">حسابی ندارید؟</span>
                <span className="text-[#E21221] text-lg" onClick={() => setPosition('signUp')}>
                    ساخت حساب
                </span>
            </div>
        </div>
    );
};

export default OptionAuth;
