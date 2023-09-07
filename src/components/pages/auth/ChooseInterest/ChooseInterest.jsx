import React, { useState } from 'react';
import { RxArrowLeft } from 'react-icons/rx';
import { Button } from '@mantine/core';
import { beforeAuthPic } from '@components/common/pictures';
const ChooseInterest = ({ setPosition }) => {
    const allGenre = [
        'کمدی',
        'درام',
        'موزیکال',
        'دلهره آور',
        'اکشن',
        'عاشقانه',
        'ملودرام',
        'معمایی',
        'علمی-تخیلی',
        'فانتزی',
        'ترسناک',
        'وسترن',
        'ماجراجویی'
    ];

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
        <div className="grid grid-cols-3">
            <div className="w-full col-span-3 lg:col-span-1  p-8  text-black h-screen flex-col flex justify-between relative">
                <div className="w-full ">
                    <div className="px-6 absolute top-8 left-0 right-0 w-full flex items-center justify-between">
                        <span className="font-bold text-2xl">علاقه خود را انتخاب کنید</span>
                        <button className="flex items-center justify-between" onClick={() => setPosition('login')}>
                            <RxArrowLeft className="text-3xl " />
                        </button>
                    </div>

                    <p className="text-lg mt-16">
                        علاقه خود را انتخاب کنید و بهترین توصیه های فیلم را دریافت کنید. نگران نباشید، همیشه می توانید
                        آن را تغییر دهید.
                    </p>

                    <div className="w-full flex flex-wrap gap-4 mt-6">
                        {allGenre.map((genre, index) => (
                            <button
                                key={index}
                                onClick={() => handleGenres(genre)}
                                className={`px-6 py-2 border ${
                                    genres.includes(genre)
                                        ? 'bg-[#E21221] text-white'
                                        : 'border-[#E21221] text-[#E21221]'
                                }  font-semibold rounded-full`}
                            >
                                {genre}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-5 flex gap-x-6 px-4 ">
                    <Button
                        color="red"
                        className="w-full  py-1 font-bold hover:bg-[#fcccd0] text-[#E21221]  bg-[#fcccd0] flex items-center justify-center"
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

            <div
                className="w-full  col-span-2 hidden lg:flex h-screen p-8 flex-col bg-no-repeat bg-opacity-0 bg-cover   bg-center items-center justify-end text-white"
                style={{ backgroundImage: `url("${beforeAuthPic.src}")`, backgroundSize: '80%' }}
            ></div>
        </div>
    );
};

export default ChooseInterest;
