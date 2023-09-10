import { RxArrowLeft } from 'react-icons/rx';

import { Button, Group, PinInput } from '@mantine/core';
import { beforeAuthPic } from '@public/pictures';

const GetCode = ({ setPosition }) => {
    return (
        <div className="w-full col-span-3 lg:col-span-1  p-8  text-black h-screen flex-col flex justify-between relative">
            <div className="w-full">
                <div className="flex gap-2 justify-between items-center">
                    <span className="font-bold  text-2xl">فراموشی رمز عبور</span>
                    <button className=" " onClick={() => setPosition('forgetPassword')}>
                        <RxArrowLeft className="text-3xl " />
                    </button>
                </div>

                <div className="text-center my-12 flex flex-col gap-4">
                    <p className="font-medium text-gray-500">کد ارسال شد به این شماره 09923108625</p>
                    <Group position="center" dir="rtl" className="my-4 w-full ">
                        <PinInput
                            size="xl"
                            radius="lg"
                            spacing="xl"
                            type={'number'}
                            className=" "
                            styles={{
                                input: {
                                    border: '2px solid #EEEE'
                                }
                            }}
                            placeholder=""
                            dir="ltr"
                            onChange={(items) => console.log(items)}
                        />
                    </Group>
                    <p className="font-medium text-gray-500">ارسال مجدد کد در 55 ثانیه</p>
                </div>
            </div>
            <div>
                <Button
                    color="red"
                    className="w-full  py-1 font-bold hover:bg-[#E21221]  bg-[#E21221] flex items-center justify-center"
                    radius="xl"
                    size="lg"
                    onClick={() => setPosition('resetPassword')}
                >
                    تایید
                </Button>
            </div>
        </div>
    );
};

export default GetCode;
