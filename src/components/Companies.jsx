import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from 'swiper';
import { getText } from '../locales';
import { useEffect } from 'react';
import axios from 'axios';
import { API_PATH } from '../tools/constants';

const Companies = () => {
    const [client, setClient] = useState([])

    const getClient = () => {
        axios.get(API_PATH + 'api/client')
            .then((res) => {
                setClient(res.data)
            })
    }
    useEffect(() => {
        getClient()
    }, [])
    return (
        <>

            <div className="companies">
                <div className="companies_text">{getText("believe")}</div>

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
                    {client && client.map((item, index) => {
                        return (
                            <>
                                <SwiperSlide key={index.toString()}>
                                    <div className="swiper-slide">
                                        <img src={item.image} alt="" />
                                    </div>
                                </SwiperSlide>
                            </>
                        )
                    })}
                </Swiper>

            </div>

        </>
    )
}

export default Companies