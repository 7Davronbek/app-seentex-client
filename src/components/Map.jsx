import React from 'react'

const Map = () => {
    return (
        <>

            <div className="map">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5 col-md-12 map_link">
                            <h2>Наш адрес:</h2>
                            <div className="map_link_2_box">
                                <a
                                    href="https://www.google.com/maps/place/41%C2%B017'13.0%22N+69%C2%B009'05.4%22E/@41.286945,69.151491,16z/data=!4m5!3m4!1s0x0:0xe333e071222b1f31!8m2!3d41.286945!4d69.151491"
                                    className="map_news"
                                >
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="text">
                                        <h1>
                                            Оптом - Урикзор Строй город <br />
                                            3 блок 10/61.
                                        </h1>
                                        <p>Пн-Сб 09:00 - 18:00</p>
                                    </div>
                                </a>

                                <a href="tel:+998940710101" className="map_news">
                                    <i className="fas fa-phone-alt"></i>
                                    <div className="text">
                                        <h1>+998 94 071-01-01</h1>
                                        <p>Тохир</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="map_karta">
                                <iframe
                                    className="w-100 h-100"
                                    title="Location"
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5996.014654079966!2d69.151491!3d41.286945!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe333e071222b1f31!2zNDHCsDE3JzEzLjAiTiA2OcKwMDknMDUuNCJF!5e0!3m2!1sru!2s!4v1653649434628!5m2!1sru!2s"
                                    loading="lazy"
                                >
                                </iframe>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-between">
                        <div className="col-lg-5 col-md-12 map_link">
                            <h2>Наш адрес:</h2>
                            <div className="map_link_2_box">
                                <a
                                    href="https://www.google.com/maps/place/41%C2%B027'09.7%22N+69%C2%B032'27.8%22E/@41.452698,69.541058,16z/data=!4m5!3m4!1s0x0:0xb494b791b0a9e278!8m2!3d41.452698!4d69.541058"
                                    className="map_news"
                                >
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="text">
                                        <h1>
                                            Розниса-Караванный <br />
                                            рынок в Чирчике.
                                        </h1>
                                        <p>Вт-Вс 09:00 - 18:00</p>
                                    </div>
                                </a>

                                <a href="tel:+998973431221" className="map_news">
                                    <i className="fas fa-phone-alt"></i>
                                    <div className="text">
                                        <h1>+998 97 343-12-21</h1>
                                        <p>Наврузбек</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12">
                            <div className="map_karta">
                                <iframe
                                    className="w-100 h-100"
                                    title="Location"
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5980.757678828001!2d69.541058!3d41.452698!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb494b791b0a9e278!2zNDHCsDI3JzA5LjciTiA2OcKwMzInMjcuOCJF!5e0!3m2!1sru!2s!4v1653649267059!5m2!1sru!2s"
                                    loading="lazy"
                                >
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Map