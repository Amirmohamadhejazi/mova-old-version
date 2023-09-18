import { Loader, Modal } from '@mantine/core';
import { loading } from '@public/pictures';
import Image from 'next/image';
import React from 'react';

const Loading = ({ open, onClose }: { open: boolean; onClose: ()=>{} }) => {
    return (
        <Modal
            styles={{
                content: {
                    borderRadius: '20px'
                }
            }}
            opened={open}
            onClose={onClose}
            withCloseButton={false}
            centered
            size={'xs'}
        >
            <div className="w-full flex flex-col justify-center items-center">
                <div className="flex items-center justify-center ">
                    <Image width={150} height={150} src={loading.src} alt="" />
                </div>
                <span className="  text-gray-700 font-normal   text-center my-6">
                    حساب شما آماده استفاده است. در عرض چند ثانیه به صفحه اصلی هدایت می شوید
                </span>
                <Loader color="red" size="lg" variant="bars" />;
            </div>
        </Modal>
    );
};

export default Loading;
