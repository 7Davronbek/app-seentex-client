import React from 'react'

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="box">
                    <div className="container">
                        <div className="row navbar ">
                            <div className="col-4 overflow-hidden">
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
                            <div className="col-8 d-flex justify-content-evenly head_1">
                                <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=Seentex_group@mail.ru">
                                    <i className="fas fa-envelope"></i>
                                    <p>Seentex_group@mail.ru</p>
                                </a>
                                <a href="tel:+998940710101">
                                    <i className="fas fa-phone-alt"></i>
                                    <p>+998 94 071-01-01</p>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="slider">

                        <div className="container nn">
                            <div className="row navbar_2">
                                <div className="col-12 justify-content-between d-flex">
                                    <a href="!#" className="nav_2_a">Главная</a>
                                    <a href="!#" className="nav_2_a">О нас</a>
                                    <a href="!#" className="nav_2_a">Услуги</a>
                                    <a href="!#" className="nav_2_a">Контакты</a>
                                </div>
                            </div>
                        </div>

                        <div className="swiper mySwiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide"><img src="./images/swip_2.jpg" alt="" /></div>
                                <div className="swiper-slide"><img src="./images/swip_1.jpg" alt="" /></div>
                                <div className="swiper-slide"><img src="./images/swip_2.jpg" alt="" /></div>
                            </div>
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-pagination"></div>
                        </div>



                    </div>


                </div>


            </div>
        </>
    )
}

export default Header