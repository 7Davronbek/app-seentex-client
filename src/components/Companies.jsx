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
                    slidesPerView={6}
                    loop={true}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
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