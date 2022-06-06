import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";


// import required modules
import { EffectCards } from "swiper";

const Sertificate = () => {
    return (
        <>

            <div className="sertificat">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4 ser_box_1">
                            <div className="cards">
                                <h1>Почему мы?</h1>
                                <p>
                                    Наша команда уже на протяжении нескольких лет занимается
                                    услугами в сфере разработки сайтов и магазинов любой сложности.
                                </p>
                            </div>
                            <div className="cards mt-md-3">
                                <h1>Гарантия</h1>
                                <p>
                                    Наша команда выполняет проекты с нуля и «под ключ». Мы полностью
                                    даём гарантию на все наши услуги
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="">
                                <div className="swiper ">

                                    <Swiper
                                        effect={"cards"}
                                        grabCursor={true}
                                        modules={[EffectCards]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <img src="/images/ser_1_page-0001.jpg" alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="/images/ser_1_page-0002.jpg" alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="/images/ser_1_page-0003.jpg" alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img src="/images/ser_1_page-0004.jpg" alt="" />
                                        </SwiperSlide>
                                    </Swiper>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sertificate