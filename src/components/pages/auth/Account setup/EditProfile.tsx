import React, { useState } from 'react';
import { RxArrowLeft } from 'react-icons/rx';
import { Button } from '@mantine/core';
import { Select } from '@mantine/core';
import { MdEmail, MdOutlineSmartphone } from 'react-icons/md';

import Input from '@components/common/Input/Input';
const EditProfile = ({ setPosition }) => {
    const [genres, setGenres] = useState([]);
    const [selectGender, setSelectGender] = useState(1);

    const handleGenres = (genre) => {
        if (genres.includes(genre)) {
            const available = genres.filter((g) => g !== genre);
            setGenres(available);
        } else {
            setGenres([...genres, genre]);
        }
    };

    let dataSelect = [
        { value: 1, label: 'آقا' },
        { value: 2, label: 'خانم' }
    ];
    return (
        <div className="w-full h-full rounded-md  col-span-3 lg:col-span-1  p-8  text-black  flex-col flex justify-between relative">
            <div className="w-full ">
                <div className="flex gap-2 justify-between items-center">
                    <span className="font-bold text-2xl">فراموشی رمز عبور</span>
                    <button className=" " onClick={() => setPosition('login')}>
                        <RxArrowLeft className="text-3xl " />
                    </button>
                </div>
                <div className="flex flex-col gap-2 mt-5">
                    <Input placeholder="نام و نام خانوادگی" />
                    <div
                        className={`w-full duration-200 group-focus-within:bg-red-50
                        border-[1.5px] text-gray-400 rounded-lg flex items-center py-4 pr-12 bg-gray-100 outline-none relative`}
                    >
                        <span>Amirmohamadhejazi@gmail.com</span>
                        <div className=" group-focus-within:text-[#E21221] absolute top-1/2 right-4 -translate-y-1/2">
                            <MdEmail className="text-2xl " />
                        </div>
                    </div>
                    <Input placeholder="شماره تلفن همراه">
                        <MdOutlineSmartphone className="text-2xl  " />
                    </Input>
                    <Select
                        styles={(theme) => ({
                            root: {
                                direction: 'ltr'
                            },
                            dropdown: {
                                backgroundColor: 'rgb(243 244 246)'
                            },
                            item: {
                                ':hover': {
                                    backgroundColor: 'rgb(229 231 235)'
                                }
                            },
                            input: {
                                backgroundColor: 'rgb(243 244 246)',

                                border: '1px solid #e5e7eb',
                                ':focus': {
                                    border: '1px solid #e5e7eb'
                                }
                            }
                        })}
                        data={dataSelect}
                        onChange={setSelectGender}
                        value={selectGender}
                        size={'sm'}
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