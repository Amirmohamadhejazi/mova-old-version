import React, {  useState } from 'react';
import { RxArrowLeft } from 'react-icons/rx';
import { RiGitRepositoryPrivateFill } from 'react-icons/ri';

import { Button, Checkbox} from '@mantine/core';
import { beforeAuthPic, resetPassword } from '@public/pictures';

import Image from 'next/image';
import Input from '@components/common/Input/Input';
import Loading from '@components/common/Loading/Loading';

const ResetPassword = ({ setPosition }) => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className="grid grid-cols-3">
            <div className="w-full col-span-3 lg:col-span-1  p-8  text-black h-screen flex-col flex justify-between relative">
                <div className="w-full">
                    <div className="flex gap-2 justify-between items-center">
                        <span className="font-bold  text-2xl">ساخت رمز جدید</span>
                        <button className=" " onClick={() => setPosition('forgetPasswordGetCode')}>
                            <RxArrowLeft className="text-3xl " />
                        </button>
                    </div>

                    <div className="flex items-center justify-center mt-16">
                        <Image width={300} height={300} src={resetPassword.src} alt="" />
                    </div>

                    <div className="w-full flex gap-y-6 flex-col relative my-8">
                        <span className="text-gray-500 font-medium">رمز جدید خود را وارد کنید!</span>
                        <Input placeholder="رمز ورود" type="password">
                            <RiGitRepositoryPrivateFill size={24} />
                        </Input>
                        <Input placeholder="تکرار رمز ورود" type="password">
                            <RiGitRepositoryPrivateFill size={24} />
                        </Input>
                        <div className="w-full flex items-center justify-center ">
                            <Checkbox
                                label={
                                    <span className="mr-1  cursor-pointer select-none font-medium ">
                                        مرا به خاطر بسپار
                                    </span>
                                }
                                labelPosition="right"
                                color="red"
                                size="md"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <Button
                        color="red"
                        className="w-full  py-1 font-bold hover:bg-[#E21221]  bg-[#E21221] flex items-center justify-center"
                        radius="xl"
                        size="lg"
                        onClick={() => setOpenModal(true)}
                    >
                        ادامه
                    </Button>
                </div>
                <Loading onClose={setOpenModal} open={openModal} />
            </div>

            <div
                className="w-full  col-span-2 hidden lg:flex h-screen p-8 flex-col bg-no-repeat bg-opacity-0 bg-cover   bg-center items-center justify-end text-white"
                style={{ backgroundImage: `url("${beforeAuthPic.src}")`, backgroundSize: '80%' }}
            />
        </div>
    );
};

export default ResetPassword;
