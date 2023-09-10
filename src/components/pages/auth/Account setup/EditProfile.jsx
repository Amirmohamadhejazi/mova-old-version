import React, { useState } from 'react';
import { RxArrowLeft } from 'react-icons/rx';
import { Button } from '@mantine/core';
import { Select } from '@mantine/core';
import { MdEmail, MdOutlineSmartphone } from 'react-icons/md';

import Input from '@components/common/Input/Input';
const EditProfile = ({ setPosition }) => {
    const [genres, setGenres] = useState([]);

    const handleGenres = (genre) => {
        if (genres.includes(genre)) {
            const available = genres.filter((g) => g !== genre);
            setGenres(available);
        } else {
            setGenres([...genres, genre]);
        }
    };

    return (
        <div className="w-full col-span-3 lg:col-span-1  p-8  text-black h-screen flex-col flex justify-between relative">
            <div className="w-full ">
                <div className="flex gap-2 justify-between items-center">
                    <span className="font-bold text-2xl">فراموشی رمز عبور</span>
                    <button className=" " onClick={() => setPosition('login')}>
                        <RxArrowLeft className="text-3xl " />
                    </button>
                </div>
                <div className="flex flex-col gap-2 mt-5">
                    <Input placeholder="نام و نام خانوادگی" />
                    <Input placeholder="نام مستعار" />
                    <Input placeholder="ایمیل">
                        <MdEmail className="text-2xl  " />
                    </Input>
                    <Input placeholder="شماره تلفن همراه">
                        <MdOutlineSmartphone className="text-2xl  " />
                    </Input>
                    <Select
                        styles={(theme) => ({
                            separator: {
                                backgroundColor: 'red'
                            }
                        })}
                        data={[
                            { value: 1, label: 1 },
                            { value: 2, label: 2 },
                            { value: 3, label: 3 },
                            { value: 4, label: 4 }
                        ]}
                        onChange={(e) => console.log(e)}
                        value={1}
                        size={'xl'}
                    />
                </div>
            </div>

            <div className="text-center mt-5 flex gap-x-6 px-4 ">
                <Button
                    color="red"
                    className="w-full  py-1 font-bold hover:bg-[#fddfe2] bg-[#fddfe2] text-[#E21221]   flex items-center justify-center"
                    radius="xl"
                    size="lg"
                >
                    رد
                </Button>
                <Button
                    color="red"
                    className="w-full  py-1 font-bold bg-[#E21221] hover:bg-[#E21221] flex items-center justify-center"
                    radius="xl"
                    size="lg"
                >
                    ادامه
                </Button>
            </div>
        </div>
    );
};

export default EditProfile;
