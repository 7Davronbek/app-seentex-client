import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from 'swiper';

const Companies = () => {
    return (
        <>

            <div className="companies">
                <div className="companies_text">Нам доверяют</div>

                <Swiper
                    loop={true}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                        },
                        767: {
                            slidesPerView: 3,
                        },
                        993: {
                            slidesPerView: 6,
                        },
                    }}
                    autoplay={{
                        delay: 500,
                        disableOnInteraction: false,
                    }}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="/images/dover_1_1.png" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="/images/dover_2_2.png" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="/images/dover_1_1.png" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="/images/dover_2_2.png" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="/images/dover_1_1.png" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="/images/dover_2_2.png" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="/images/dover_1_1.png" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="/images/dover_2_2.png" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <img src="/images/dover_1_1.png" alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>

        </>
    )
}

export default Companies