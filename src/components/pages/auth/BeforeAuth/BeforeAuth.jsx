'use client';
import { Carousel } from '@mantine/carousel';
import { posterBeforeAuth } from '@components/common/pictures';
import { rem } from '@mantine/core';
import { Button } from '@mantine/core';
const BeforeAuth = ( { setPosition }) => {
    const carouselData = [
        {
            title: 'به موا خوش آمدید',
            description: 'ویژگی های جالب برای کاربران خود ایجاد کردیم'
        },
        {
            title: 'ویژگی های ما',
            description: 'دسترسی آسان به انواع فیلم های خارجی و ایرانی - دانلود با حداکثر سرعت - پنل مدیریت آسان'
        },
        {
            title: 'تنوع فیلم',
            description: '۸۵ هزار اپیزود فیلم و سریال برای تماشا داری'
        }
    ];
    return (
        <div
            className="w-full  h-screen p-8  flex-col bg-no-repeat bg-opacity-0 bg-cover sm:bg-contain bg-center flex  items-center justify-end text-white"
            style={{ backgroundImage: `url("${posterBeforeAuth.src}")` }}
        >
            <Carousel
                maw={'100%'}
                mx="auto"
                withIndicators
                height={'120px'}
                withControls={false}
                slidesToScroll={1}
                styles={{
                    root: {
                        direction: 'ltr'
                    },

                    indicator: {
                        width: rem(12),
                        height: rem(4),
                        transition: 'width 250ms ease',
                        '&[data-active]': {
                            width: rem(40)
                        }
                    }
                }}
            >
                {carouselData.map((itemsSlide) => (
                    <Carousel.Slide>
                        <div className="w-full h-30 flex justify-center gap-y-1 flex-col text-center text-white ">
                            <span className="font-bold text-3xl">{itemsSlide.title}</span>
                            <span className="text-base font-bold">{itemsSlide.description}</span>
                        </div>
                    </Carousel.Slide>
                ))}
            </Carousel>
            <Button
                color="red"
                className="w-full mt-3 py-1 font-bold hover:bg-[#E21221]  bg-[#E21221] flex items-center justify-center"
                radius="xl"
                size="lg"
                onClick={() => setPosition('optionAuth')}
                
            >
                ادامه به برنامه
            </Button>
        </div>
    );
};

export default BeforeAuth;
