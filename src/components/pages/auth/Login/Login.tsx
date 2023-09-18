import React from 'react';
import { RxArrowLeft } from 'react-icons/rx';
import { MdEmail } from 'react-icons/md';
import { RiGitRepositoryPrivateFill } from 'react-icons/ri';

import { Button, Checkbox } from '@mantine/core';
import { beforeAuthPic, logo } from '@public/pictures';

import Image from 'next/image';
import Input from '@components/common/Input/Input';

const Login = ({ setPosition }) => {
    return (
        <div className="w-full h-full rounded-md  col-span-3 lg:col-span-1  p-8  text-black  flex-col flex justify-between relative">
            <div className="w-full">
                <button className="absolute left-8 top-8" onClick={() => setPosition('optionAuth')}>
                    <RxArrowLeft className="text-3xl " />
                </button>

                <div className="flex items-center justify-center mt-16">
                    <Image width={100} height={100} className="w-[100px] h-[100px]" src={logo.src} alt="" />
                </div>

                <p className="text-3xl font-bold text-center mt-8">ورود به حساب کاربری</p>

                <div className="w-full flex gap-y-6 flex-col relative mt-8">
                    <Input placeholder="ایمیل">
                        <MdEmail size={24} />
                    </Input>

                    <Input placeholder="رمز ورود" type="password">
                        <RiGitRepositoryPrivateFill size={24} />
                    </Input>
                </div>

                <div className="w-full flex items-center justify-center mt-8">
                    <Checkbox
                        label={<span className="mr-2  cursor-pointer select-none">مرا به خاطر بسپار</span>}
                        labelPosition="right"
                        color="red"
                        size="md"
                    />
                </div>

                <div className="mt-8">
                    <Button
                        color="red"
                        className="w-full  py-1 font-bold hover:bg-[#E21221]  bg-[#E21221] flex items-center justify-center"
                        radius="xl"
                        size="lg"
                        onClick={() => setPosition('chooseInterest')}
                    >
                        ورود
                    </Button>
                </div>

                <div className="w-full text-center  mt-8">
                    <span
                        className="text-[#E21221] cursor-pointer font-semibold"
                        onClick={() => setPosition('forgetPassword')}
                    >
                        رمز ورود را فراموش کرده اید؟
                    </span>
                </div>
            </div>

            <div className="text-center mt-5">
                <span className="text-sm font-light">حسابی ندارید؟</span>
                <span
                    className="text-[#E21221] mr-1 text-lg font-semibold cursor-pointer"
                    onClick={() => setPosition('signUp')}
                >
                    ساخت حساب
                </span>
            </div>
        </div>
    );
};

export default Login;