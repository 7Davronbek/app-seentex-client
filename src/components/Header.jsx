import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
    EffectFade, Navigation, Autoplay
} from "swiper";

import { getLanguage, getText } from '../locales';
import { API_PATH, LANGUAGE } from '../tools/constants';
import axios from 'axios';

const Header = () => {
    const [header, setHeader] = useState([])
    const changeLanguage = (e) => {
        localStorage.setItem(LANGUAGE, e.target.value)
        document.location.reload(true)
    }
    useEffect(() => {
        axios.get(API_PATH + "api/header")
            .then((res) => {
                setHeader(res.data)
            })
    }, [])
    return (
        <>
            <div className="header">
                <div className="box">
                    <div className="container">
                        <div className="row navbar ">
                            <div className="col-lg-4 ">
                                <div className="spinner">
                                    <span><img src="./images/logo_org.png" alt="" /></span>
                                    <span>S</span>
                                    <span>E</span>
                                    <span>E</span>
                                    <span>N</span>
                                    <span>T</span>
                                    <span>E</span>
                                    <span>X</span>
                                </div>
                            </div>
                            <div className="col-7 d-flex justify-content-evenly head_1">
                                <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=Seentex_group@mail.ru">
                                    <i className="fas fa-envelope"></i>
                                    <p>Seentex_group@mail.ru</p>
                                </a>
                                <a href="tel:+998940710101">
                                    <i className="fas fa-phone-alt"></i>
                                    <p>+998 94 071-01-01</p>
                                </a>
                            </div>
                            <div className="col-lg-1">

                                <select onChange={changeLanguage}>
                                    <option value="ru" selected={getLanguage() === "ru"} >РУ</option>
                                    <option value="uz" selected={getLanguage() === "uz"} >UZ</option>
                                </select>

                            </div>
                        </div>
                    </div>

                    <div className="slider">

                        <div className="container nn">
                            <div className="row navbar_2">
                                <div className="col-12 justify-content-between d-flex">
                                    <a href="!#" className="nav_2_a">{getText("navbar1")}</a>
                                    <a href="!#" className="nav_2_a">{getText("navbar2")}</a>
                                    <a href="!#" className="nav_2_a">{getText("navbar3")}</a>
                                    <a href="!#" className="nav_2_a">{getText("navbar4")}</a>
                                </div>
                            </div>
                        </div>

                        <div className="swiper mySwiper">
                            <Swiper
                                spaceBetween={30}
                                effect={"fade"}
                                navigation={true}
                                loop={true}
                                pagination={{
                                    clickable: true,
                                }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[EffectFade, Navigation, Autoplay]}
                                className="mySwiper"
                            >
                                {header && header.map((item, index) => {
                                    return (
                                        <>
                                            <SwiperSlide>
                                                <img src={item.image} alt="" />
                                            </SwiperSlide>
                                        </>
                                    )
                                })}
                            </Swiper>


                            {/* <div className="swiper-wrapper">
                                <div className="swiper-slide"><img src="./images/swip_2.jpg" alt="" /></div>
                                <div className="swiper-slide"><img src="./images/swip_1.jpg" alt="" /></div>
                                <div className="swiper-slide"><img src="./images/swip_2.jpg" alt="" /></div>
                            </div>
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-pagination"></div> */}
                        </div>



                    </div>


                </div>


            </div>
        </>
    )
}

export default Header